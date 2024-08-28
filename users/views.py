from django.shortcuts import render
from django.http import JsonResponse
from firebase_admin import auth
from .middleware import firebase_token_required

@firebase_token_required  #ignore rn
def some_secure_view(request):
    return JsonResponse({'message': 'You are authenticated!'})

def login(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')
        try:
            # Verify the user's email and password with Firebase
            user = auth.get_user_by_email(email)
            # Custom code to verify password and return response
            return JsonResponse({"status": "success", "uid": user.uid})
        except auth.AuthError as e:
            return JsonResponse({"status": "error", "message": str(e)}, status=400)
        
def signup(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')
        try:
            # Create a new user
            user = auth.create_user(
                email=email,
                password=password
            )
            return JsonResponse({"status": "success", "uid": user.uid})
        except auth.AuthError as e:
            return JsonResponse({"status": "error", "message": str(e)}, status=400)

