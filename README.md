# Task-Manager


## Description
This is a task-manager app where the user can add tasks and it makes a list of added tasks

## SetUp
Run these commands in command box,for backend setup:<br/>
git clone https://github.com/Rutika-H/Task-Manager<br/>
cd Task-Manager<br/>
cd backend<br/>
python -m venv venv<br/>
venv\Scripts\activate<br/>
pip install -r requirements.txt<br/>
python manage.py migrate<br/>
python manage.py runserver<br/>
This will start django on:http://127.0.0.1:8000/api/todos/<br/>

Now open new terminal and run these commands for frontend setup:<br/>
cd ../frontend<br/>
npm install<br/>
npm start<br/>
This will open the app at: http://localhost:3000<br/>



