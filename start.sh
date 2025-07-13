#!/bin/bash

# AI Resume Job Matcher - Startup Script

echo "🚀 Starting AI Resume Job Matcher..."

# Check if Python is installed
if ! command -v python3 &> /dev/null; then
    echo "❌ Python 3 is not installed. Please install Python 3.8+ and try again."
    exit 1
fi

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ and try again."
    exit 1
fi

# Function to setup backend
setup_backend() {
    echo "🔧 Setting up backend..."
    cd backend
    
    # Create virtual environment if it doesn't exist
    if [ ! -d "venv" ]; then
        echo "Creating Python virtual environment..."
        python3 -m venv venv
    fi
    
    # Activate virtual environment
    source venv/bin/activate  # For bash/zsh
    # For Windows, uncomment the next line and comment the above
    # source venv/Scripts/activate
    
    # Install dependencies
    echo "Installing Python dependencies..."
    pip install -r requirements.txt
    
    # Download spaCy model
    echo "Downloading spaCy model..."
    python -m spacy download en_core_web_sm
    
    echo "✅ Backend setup complete!"
    cd ..
}

# Function to setup frontend
setup_frontend() {
    echo "🔧 Setting up frontend..."
    cd frontend
    
    # Install dependencies
    echo "Installing Node.js dependencies..."
    npm install
    
    echo "✅ Frontend setup complete!"
    cd ..
}

# Function to start services
start_services() {
    echo "🚀 Starting services..."
    
    # Start backend in background
    echo "Starting backend server on port 8000..."
    cd backend
    source venv/bin/activate
    uvicorn app.main:app --reload --host 0.0.0.0 --port 8000 &
    BACKEND_PID=$!
    cd ..
    
    # Wait a moment for backend to start
    sleep 3
    
    # Start frontend
    echo "Starting frontend server on port 3000..."
    cd frontend
    npm run dev &
    FRONTEND_PID=$!
    cd ..
    
    echo "✅ Services started!"
    echo "📍 Frontend: http://localhost:3000"
    echo "📍 Backend API: http://localhost:8000"
    echo "📍 API Docs: http://localhost:8000/docs"
    echo ""
    echo "Press Ctrl+C to stop all services"
    
    # Wait for user interrupt
    trap 'echo "Stopping services..."; kill $BACKEND_PID $FRONTEND_PID; exit' INT
    wait
}

# Main execution
echo "Choose an option:"
echo "1. Setup only (install dependencies)"
echo "2. Start services (assumes setup is done)"
echo "3. Full setup and start"
read -p "Enter your choice (1-3): " choice

case $choice in
    1)
        setup_backend
        setup_frontend
        echo "🎉 Setup complete! Run option 2 to start services."
        ;;
    2)
        start_services
        ;;
    3)
        setup_backend
        setup_frontend
        start_services
        ;;
    *)
        echo "❌ Invalid choice. Please run the script again."
        exit 1
        ;;
esac
