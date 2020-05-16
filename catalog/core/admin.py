from django.contrib import admin
from .models import Catalog

class ProjectAdmin(admin.ModelAdmin):
    readonly_fields = ('created', 'updated')

# Register your models here.
admin.site.register(Catalog)