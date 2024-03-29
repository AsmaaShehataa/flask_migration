#!/usr/bin/python3
"""This is the User model"""
from models.base_model import BaseModel, Base
from sqlalchemy import Column, String, ForeignKey
#from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(BaseModel, Base, db.Model):
  """class User with different ATTS"""
  __tablename__ = 'users'
  first_name = Column(String(130), nullable=False)
  last_name = Column(String(130), nullable=False)
  email = Column(String(130), nullable=False)
  password = Column(String(130), nullable=False)
  personal_email = Column(String(130), nullable=False)
  national_id_number = Column(String(14), nullable=False)
  personal_phone = Column(String(14), nullable=False)
  phone = Column(String(14), nullable=False)
  title = Column(String(130), nullable=False)
  unit_id = Column(String(60), ForeignKey('units.id'), nullable=False)
