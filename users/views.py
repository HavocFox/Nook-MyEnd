from django.shortcuts import render
from django.http import JsonResponse
from firebase_admin import auth
from .middleware import firebase_token_required
import json

@firebase_token_required  #ignore rn
def some_secure_view(request):
    return JsonResponse({'message': 'You are authenticated!'})

def login(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            email = data.get('email')
            password = data.get('password')
            
            # Authenticate user with Firebase
            user = auth.get_user_by_email(email)
            
            # Verify password using your chosen method (custom or Firebase)
            # If authentication is successful
            return JsonResponse({"status": "success", "uid": user.uid})
        except auth.AuthError as e:
            return JsonResponse({"status": "error", "message": str(e)}, status=400)
        except Exception as e:
            return JsonResponse({"status": "error", "message": "Invalid login credentials."}, status=400)
        
def signup(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            email = data.get('email')
            password = data.get('password')

            # Create a new user in Firebase
            user = auth.create_user(
                email=email,
                password=password
            )

            return JsonResponse({"status": "success", "uid": user.uid})
        except auth.AuthError as e:
            return JsonResponse({"status": "error", "message": str(e)}, status=400)
        except Exception as e:
            return JsonResponse({"status": "error", "message": "Failed to create user."}, status=400)
