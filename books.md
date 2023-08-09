# Amazon-Books-Documentation:ghost:
**why the project & what is the purpose from the project?** 🧑‍💻

-the purpose of the project making it useful for the user in searching for a specific book ina short time. 

**how to run the project** 🤖

-first you have to download the requirements file the file have some libraries you need it after you create your virtualenviroment.

-second you will run the project from the visual studio prompt(cmd).

-third the user have to take the port   and add(/home) after it for get all the books or add a new book but have to add all the book info ex(book_name, book_author, book_title, book_price, book_rating, book_photo), all of this info are required in adding and updating, for updating or get getting a  specific by its id will add instead of (/home),  will add (/update_delete).

**Sample API collection** 🔭 

-This collection conntains sample requests from this [Api]( http://127.0.0.1:5000)

-It contains following requests

    .Adding collections of books
    .Get all the books in the database
    .get a specific book
    .Delete a specific book
    .Update a specific book
**here will some demo for the CRUD** 🦾

-GET all books 🤔

**API endpoint ro *GET* all books in the database** 👽

    -A successful registration will result in a *HTTP 200* status code
  ```     -{
  "BOOKS": [
    {
      "book_author": "mohamed",
      "book_name": "python",
      "book_photo": "download.png",
      "book_price": 15000,
      "book_rating": 5,
      "book_title": "python world"
    },
    {
      "book_author": "ahmed",
      "book_name": "human",
      "book_photo": "download.png",
      "book_price": 155,
      "book_rating": 4,
      "book_title": "human book"
    },
    {
      "book_author": "c++",
      "book_name": "c++",
      "book_photo": "download.png",
      "book_price": 251,
      "book_rating": 5,
      "book_title": "programming"
    },
    {
      "book_author": "mahmoud",
      "book_name": "c# world",
      "book_photo": "download.png",
      "book_price": 2555,
      "book_rating": 5,
      "book_title": "C# wth mahmoud"
    },
    {
      "book_author": "nashrty",
      "book_name": "nashrty c#",
      "book_photo": "download.png",
      "book_price": 2556,
      "book_rating": 5,
      "book_title": "C# wth nashrty"
    }
  ]
} 
```

-add new book 👀

**API endpoint ro *ADD* a new book in the database** 👾

  -A successful registration will result in a*HTTP 200*status code
```
curl --location 'http://127.0.0.1:5000/home' \
--data '{
     "book_name" : "how to make api",
     "book_author" : "python developer",
     "book_title" : "api world",
     "book_price" : "15220",
     "book_rating" : "5",
     "book_photo" : "photp.png"
}'

-{
  "messages": "book how to make api has been created succesfully."
 }
```


-GET a book by its id  💁‍♂️

**API endpoint ro *GET* a book by it`s id in the database**

    -A successful registration will result in a *HTTP 200* status code
```
curl --location --request PUT 'http://127.0.0.1:5000/update_delete/4' \
--data '{
     "book_name" : "how to make api in python",
     "book_author" : "python developer world",
     "book_title" : "api world in python",
     "book_price" : "125220",
     "book_rating" : "4",
     "book_photo" : "photp.jpg"
}'

-{
  "message": "Book how to make api in python succesfully updated"
 }
```

-DELETE book by its id 📟

**API endpoint ro *DELETE* all books in the database**

    -A successful registration will result in a *HTTP 200* status code
```
curl --location --request DELETE 'http://127.0.0.1:5000/update_delete/4' \
--data ''
- {
  "message": "book how to make api in python succesfully deleted"
 }
```
**Postman Documentation Link** 😉 
  -'https://documenter.getpostman.com/view/28958841/2s9XxzvYhL'\
