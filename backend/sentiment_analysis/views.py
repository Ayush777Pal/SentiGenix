from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Review
from .utils import analyze_sentiment
from .utils import suggest_improvement

@api_view(['POST'])
def analyze_review(request):
    text = request.data.get('text', '')
    sentiment, improved_review = analyze_sentiment(text)

    # Save to DB
    review = Review.objects.create(text=text, sentiment=sentiment)

    return Response({
        "sentiment": sentiment,
        "review": review.text,
        "suggested_improvement": improved_review  # Should now NEVER be None
    })

@api_view(['POST'])
def improve_review(request):
    anser = request.data.get('anser', '')
    selected=request.data.get('selected','')
    created_review = suggest_improvement(anser, selected)

    return Response({
        "created_review":created_review
    })
