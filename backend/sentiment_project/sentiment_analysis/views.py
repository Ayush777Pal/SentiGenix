from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Review
from .utils import analyze_sentiment

@api_view(['POST'])
def analyze_review(request):
    text = request.data.get('text', '')
    sentiment = analyze_sentiment(text)

    # Save review to database
    review = Review.objects.create(text=text, sentiment=sentiment)
    
    return Response({"sentiment": sentiment, "review": review.text})
