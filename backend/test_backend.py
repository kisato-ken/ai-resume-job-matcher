#!/usr/bin/env python3
"""
Simple test script to diagnose backend issues
"""
import sys
import os

def test_imports():
    """Test all required imports"""
    print("Testing imports...")
    
    try:
        import fastapi
        print("✅ FastAPI imported successfully")
    except ImportError as e:
        print(f"❌ FastAPI import failed: {e}")
        return False
    
    try:
        import uvicorn
        print("✅ Uvicorn imported successfully")
    except ImportError as e:
        print(f"❌ Uvicorn import failed: {e}")
        return False
    
    try:
        import spacy
        print("✅ spaCy imported successfully")
        
        # Test spaCy model
        try:
            nlp = spacy.load("en_core_web_sm")
            print("✅ spaCy model 'en_core_web_sm' loaded successfully")
        except OSError as e:
            print(f"⚠️ spaCy model not found: {e}")
            print("Downloading spaCy model...")
            os.system("python -m spacy download en_core_web_sm")
    except ImportError as e:
        print(f"❌ spaCy import failed: {e}")
        return False
    
    try:
        import sklearn
        print("✅ scikit-learn imported successfully")
    except ImportError as e:
        print(f"❌ scikit-learn import failed: {e}")
        return False
    
    try:
        import pdfplumber
        print("✅ pdfplumber imported successfully")
    except ImportError as e:
        print(f"❌ pdfplumber import failed: {e}")
        return False
    
    return True

def test_app_structure():
    """Test if the app structure is correct"""
    print("\nTesting app structure...")
    
    required_files = [
        "app/__init__.py",
        "app/main.py",
        "app/config.py",
        "app/api/__init__.py",
        "app/api/routes.py",
        "app/models/__init__.py",
        "app/models/schemas.py",
        "app/services/__init__.py",
        "app/services/resume_parser.py",
        "app/services/job_matcher.py"
    ]
    
    for file_path in required_files:
        if os.path.exists(file_path):
            print(f"✅ {file_path} exists")
        else:
            print(f"❌ {file_path} missing")
    
    return True

def test_app_import():
    """Test importing the main app"""
    print("\nTesting app import...")
    
    try:
        sys.path.insert(0, os.getcwd())
        from app.main import app
        print("✅ App imported successfully")
        print(f"✅ App type: {type(app)}")
        return True
    except Exception as e:
        print(f"❌ App import failed: {e}")
        import traceback
        traceback.print_exc()
        return False

if __name__ == "__main__":
    print("🔍 AI Resume Job Matcher - Backend Diagnostic")
    print("=" * 50)
    
    # Test imports
    imports_ok = test_imports()
    
    # Test app structure
    structure_ok = test_app_structure()
    
    # Test app import
    app_ok = test_app_import()
    
    print("\n" + "=" * 50)
    if imports_ok and structure_ok and app_ok:
        print("🎉 All tests passed! Backend should work correctly.")
        print("\nTry running:")
        print("uvicorn app.main:app --reload --host 0.0.0.0 --port 8000")
    else:
        print("❌ Some tests failed. Please fix the issues above.")
