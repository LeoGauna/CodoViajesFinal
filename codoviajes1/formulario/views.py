from django.shortcuts import render
from .models import Disney, Europa

# Create your views here.
def pack_disney(request):
    disneys = Disney.objects.all()
    return render(request, 'formulario/pack_disney.html', {'disneys':disneys})

def pack_europa(request):
    europas = Europa.objects.all()
    return render(request, 'formulario/pack_europa.html', {'europas':europas})
