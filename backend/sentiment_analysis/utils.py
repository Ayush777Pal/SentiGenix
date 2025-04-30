import requests
import google.generativeai as genai 
from nltk.sentiment import SentimentIntensityAnalyzer
from decouple import config
# Initialize NLTK sentiment analyzer
sia = SentimentIntensityAnalyzer()
 
# OpenRouter API configuration
API_URL = config("MY_API_URL")
API_KEY = config("MY_API_KEY")
#NPL
def analyze_sentiment(text):
    score = sia.polarity_scores(text)

    if score['compound'] >= 0.05:
        sentiment = "Positive 😇"
    elif score['compound'] <= -0.05:
        sentiment = "Negative ☹️"
    else:
        sentiment = "Neutral 🙄"

    # Generate improved review if sentiment is negative
    improved_review = None
    if "Negative" in sentiment:
        improved_review = suggest_improvement(text, "positive")

    return sentiment, improved_review


def suggest_improvement(text, target_sentiment):
    prompt = (
        f"Your task is to take the following sentence:\n\"{text}\"\n\n"
        f"and convert it to have a '{target_sentiment}' sentiment while preserving its core meaning.\n"
        f"If it already has the same sentiment, enhance that sentiment further.\n"
        f"Return only the transformed sentence."
    )

    headers = {
        "Authorization": f"Bearer {API_KEY}",
        "Content-Type": "application/json",
    }

    data = {
        "model": "deepseek/deepseek-chat-v3-0324:free",
        "messages": [{"role": "user", "content": prompt}]
    }

    try:
        response = requests.post(API_URL, headers=headers, json=data)
        response_json = response.json()
        transformed_text = response_json.get("choices", [{}])[0].get("message", {}).get("content", "No response from AI")

    except Exception as e:
        transformed_text = f"Error: {str(e)}"

    return transformed_text
