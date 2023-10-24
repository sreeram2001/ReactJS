=> We can create a local fake json server using npx, to make it, create a json file with your database info under root directory of the project.

=> <img width="177" alt="Screenshot 2023-10-24 at 6 35 42 PM" src="https://github.com/sreeram2001/ReactJS/assets/40134790/a12cad03-e804-47f0-9a9c-442de9b9a0ec">

=> Add the contents in the json file

=> To use the data base type the command : npx json-server --watch "file-path" --port "port_number"

=> E.g : npx json-server --watch data/database.json --port 8000

=> JSON FIle contents Example : 

=> {
    "blogs": [
      {
        "title": "My First Blog",
        "body": "Why do we use it?\nIt is a long established fact that a reader will be distracted by the etc.",
        "author": "arjun",
        "id": 1
      } ] }

=> Endpoints provided by JSON server will be :

/blogs - get - to get all blogs

/blogs/{id} - get request - to get specific blog based on index

/blogs - post - to add a new blog

/blogs/{id} - delete - to delete a specific blog
