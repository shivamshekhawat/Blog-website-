# importing essential python libraries ,config and models
from flask import Flask , jsonify , request
from config import create_app, db
from models import Blog

app = create_app()

# So the main.py is the entry point for our backend
# @app.before_first_request
def create_blogs():
    with app.app_context():
        db.create_all()
        if Blog.query.count() == 0:
            blog1 = Blog(title="Blog Post 1 ", description="Brief Description of blog post 1" , content="Content of blog post 1")
            blog2 = Blog(title="Blog Post 2 ", description="Brief Description of blog post 2" , content="Content of blog post 2")
            db.session.add_all([blog1 , blog2])
            db.session.commit()


        
# API route to fetch(get) "all" blog post
@app.route('/api/blogs',methods=['GET'])
def get_blogs():
    blogs = Blog.query.all()
    return jsonify([{'id':blog.id,'title':blog.title,'description':blog.description,'content':blog.content} for blog in blogs])

# API route to fetch a "single" blog post by ID
@app.route('/api/blogs/<int:id>',methods=['GET'])
def get_blog(id):
    blog = Blog.query.get_or_404(id)
    return jsonify({'id':blog.id,'title':blog.title,'description':blog.description,'content':blog.content})

# Now the API route to add a new blog post
@app.route('/api/blogs',methods=['POST'])
def add_blogs():
    data = request.json
    new_blog = Blog(title=data['title'],description=data['description'],content=data['content'])
    db.session.add(new_blog)
    db.session.commit()
    return jsonify({'message':'Blog post created successfully'}),201

# Now another API route to update an existing blog post
@app.route('/api/blogs/<int:id>',methods=['PUT'])
def update_blog(id):
    blog = Blog.query.get_or_404(id)
    data = request.json
    blog.title = data.get('title',blog.title)
    blog.description = data.get('description',blog.description)
    blog.content = data.get('content',blog.content)
    db.session.commit()
    return jsonify({'message':'Blog post updated successfully'})

# Another API route to delete a blog post

@app.route('/api/blogs/<int:id>',methods=['DELETE'])
def delete_blog(id):
    blog= Blog.query.get_or_404(id)
    db.session.delete(blog)
    db.session.commit()
    return jsonify({'message':'Blog post deleted successfully'})

if __name__ == '__main__':
    with app.app_context():
        create_blogs()
    app.run(debug=True)

    

    