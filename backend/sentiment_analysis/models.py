from django.db import models

class Review(models.Model):
    text = models.TextField()
    sentiment = models.CharField(max_length=10)
    created_at = models.DateTimeField(auto_now_add=True)
