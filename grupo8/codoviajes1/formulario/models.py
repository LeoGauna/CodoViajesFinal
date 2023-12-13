from django.db import models

# Create your models here.
class Disney(models.Model):
    titulo = models.CharField(max_length=200)
    descripcion = models.TextField()
    imagen = models.ImageField(upload_to= 'disneys')
    fecha = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = 'Paquetes de Disney'

    def __str__(self) -> str:
        return self.titulo

class Europa(models.Model):
    titulo = models.CharField(max_length=200)
    descripcion = models.TextField()
    imagen = models.ImageField(upload_to= 'europas')
    fecha = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        verbose_name = 'Paquetes de Europa'
    
    def __str__(self) -> str:
        return self.titulo

