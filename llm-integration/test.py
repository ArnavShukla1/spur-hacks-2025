from google import genai # Google Gemini GenAI
import os # Access environment variables

client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))
# Prompt: get insights Slack conversions
response = client.models.generate_content(
    model="gemini-2.5-flash", contents="Explain how AI works in a few words"
)
print(response.text)
