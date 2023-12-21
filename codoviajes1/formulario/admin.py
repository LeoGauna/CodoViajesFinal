from django.contrib import admin
from .models import Disney
from .models import Europa

# Register your models here.
# class DisneyAdmin(admin.ModelAdmin):
#     readonly_fields = ('fecha')

# class EuropaAdmin(admin.ModelAdmin):
#     readonly_fields = ('fecha')

admin.site.register(Disney)
admin.site.register(Europa)