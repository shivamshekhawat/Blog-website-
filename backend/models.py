# importing essential python libraries
from config import db

# So the models.py will provide the structure of the blog post for our frontend

class Blog(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(100) , nullable=False)
    content = db.Column(db.Text(1000) , nullable=False)