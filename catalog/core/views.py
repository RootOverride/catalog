from django.views.generic.list import ListView
from django.shortcuts import render
from .models import Catalog

# Create your views here.
class PageListView(ListView):
    model = Catalog


