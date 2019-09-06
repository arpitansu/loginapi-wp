HOW TO USE


1. Clone
2. Run the mongo server
3. npm rebuild
4. npm install
5. tsc
6. npm start

BELOW ARE THE API'S AVAILABLE TO USE

1.To create new user

POST host:3000/signup
with data:-
{
	"name" : "arpit",
	"email" : "b@b.com",
	"password" : "pass"
}

2. To Login with email and password

POST host:3000/login?type=local
with body:- 
{
	"email" : "a@b.com",
	"password" : "pass"
}


3. Verify the user is logged in or not 

GET host:3000/user
with Authorization header:-

key : Authorization
value : jwt <token which was given to the user when they logged in>

e.g : jwt<space>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFAYi5jb20iLCJwYXNzd29yZCI6IiQyYSQxMCRwS09HZ1RYYWZhZGswYVpYLkFTRDd1QWhZbHcvcWt4bnFUOWE4ampFTGEuVWwyV3dlRjhIeSIsImlhdCI6MTU2Nzc4NjQwNCwiZXhwIjoxNTY3NzkwMDA0fQ.Ut1pKWLm-zFs7f05emckLEnRnotvN_iCZUWwFl5fFNM 
