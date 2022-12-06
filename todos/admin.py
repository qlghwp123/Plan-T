from django.contrib import admin
from .models import Todos

# Register your models here.


@admin.register(Todos)
class TodosAdmin(admin.ModelAdmin):
    list_display = ["tag_list"]

    def get_queryset(self, request):
        return super().get_queryset(request).prefetch_related("tags")

    def tag_list(self, obj):
        return ", ".join(o.name for o in obj.tags.all())
