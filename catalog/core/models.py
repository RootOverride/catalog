from django.db import models
from ckeditor.fields import RichTextField

class Catalog(models.Model):
    title = models.CharField(verbose_name="Título", max_length=200)
    description = models.TextField(verbose_name="Descripción")
    claves = models.TextField(verbose_name="Palabras Claves")
    link = models.URLField(verbose_name="Dirección Web", null=True, blank=True)
    image = models.ImageField(verbose_name="Imagen", upload_to="img", null=True, blank=True)
    alert = models.TextField(verbose_name="Alerta", null=True, blank=True)
    order = models.SmallIntegerField(verbose_name="Orden", default=0)
    created = models.DateTimeField(auto_now_add=True, verbose_name="Fecha de creación")
    updated = models.DateTimeField(auto_now=True, verbose_name="Fecha de edición")

    class Meta:
        verbose_name = "Catalogo"
        verbose_name_plural = "Catalogos"
        ordering = ['order', 'title']

    def __str__(self):
        return self.title