import google.generativeai as genai
from nltk.sentiment import SentimentIntensityAnalyzer

# Set your Gemini API key
genai.configure(api_key="AIzaSyDw-NOVLJVh2DPyRno_7RggJI0xnsz_bDA")

sia = SentimentIntensityAnalyzer()

from nltk.sentiment import SentimentIntensityAnalyzer

sia = SentimentIntensityAnalyzer()

# def analyze_sentiment(text):
#     score = sia.polarity_scores(text)
#     if score['compound'] >= 0.05:
#         return "Positive"
#     elif score['compound'] <= -0.05:
#         return "Negative"
#     else:
#         return "Neutral"

def analyze_sentiment(text):
    score = sia.polarity_scores(text)
    
    if score['compound'] >= 0.05:
        sentiment = "Positive"
    elif score['compound'] <= -0.05:
        sentiment = "Negative"
    else:
        sentiment = "Neutral"

    # If review is negative, generate an improved version
    improved_review = None
    if sentiment == "Negative":
        improved_review = suggest_improvement(text)

    return sentiment, improved_review

def suggest_improvement(text):
    prompt = f"Rewrite the following review in a more positive and constructive way: '{text}'"

    model = genai.GenerativeModel("gemini-2.0-flash")  # Use Gemini Pro model
    response = model.generate_content(prompt)

    return response.text  # Gemini response
