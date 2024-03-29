#!/usr/bin/python3

"""init file for views module"""
from flask import Blueprint
app_views = Blueprint('app_views', __name__, url_prefix="/api/v1")
from api.v1.views.index import *
from api.v1.views.users import *
from api.v1.views.employments import *
from api.v1.views.vacation_requests import *
from api.v1.views.units import *
#from api.v1.views.auth import *

