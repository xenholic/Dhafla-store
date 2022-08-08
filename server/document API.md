## Endpoints

List of Available Endpoints:

- `get /products`
- `post /register`
- `post /login`
- `post /google-signIn`
- `get /products/:id`
- `get /favorites`
- `post /favorites/:id`
- `delete /favorites/:id`
- `POST /users/register`
- `POST /users/login`
- `POST /users/google-login`
- `GET /products`
- `GET /products/authors`
- `GET /categories`
- `GET /products/histories`
- `POST /products`
- `GET /products/:productId`
- `PUT /products/:productId`
- `PATCH /products/:productId`
- `DELETE /products/:productId`

### .env

`SECRET_KEY=`
`CLIENT_ID=`
`CLIENT_SECRET=`
`PORT=`

### POST /users/register

#### Request

body

```json
{
  "statusCode": 200,
  "data": {
    "id": 9,
    "username": "123456",
    "email": "sky@gmail.com",
    "password": "$2a$10$yOi6FR2lO.pXJt4OsVfgbu/C.595UAjBw/ivgxUU..lgTM5oOjgnW",
    "role": "admin",
    "phoneNumber": "0855447511",
    "address": "vila tomang baru",
    "updatedAt": "2022-06-01T13:59:12.019Z",
    "createdAt": "2022-06-01T13:59:12.019Z"
  }
}
```

### Response

_200 - OK_

_400 - Bad Request_

```json
{
  "statusCode": 400,
  "error": {
    "message": ["User email cannot be null", "User password cannot be null"]
  }
}
```

### POST /users/login

#### Response

_200 - OK_

_400 - Bad Request_

```json
{
  "statusCode": 400,
  "error": {
    "message": ["Email Cannot be null", "Email Cannot be null"]
  }
}
```

### POST /users/google-login

#### Request

- Request CLIENT_ID From google OAuth

#### Response

_200 - OK_

_400 - Bad Request_

```json
{
  "statusCode": 500,
  "error": {
    "message": "Internal Server Error"
  }
}
```

### GET /products

#### Description

- Get all the products data

#### Request

```json
{
  "access_token" : string
}
```

#### Response

_200 - OK_

- Body

  ```json
  {
    "statusCode": 200,
    "product": [
      {
        "id": 1,
        "name": "ZM Feat Masayu Clara – Befa Sky Gamis – Edisi Tengkawang",
        "description": "ZM Dress Befa Sky Gamis bisa menjadi pilihan yang tepat untuk Anda yang menginginkan model gamis sederhana dan elegan dengan motif ala Indonesia.",
        "price": 155960,
        "imgUrl": "https://ceklist.id/wp-content/uploads/2022/02/6-Model-Gamis-Sederhana-dan-Elegan-ZM-Feat-Masayu-Clara-Befa-Sky-Gamis-Edisi-Tengkawang.jpg",
        "categoryId": 1,
        "authorId": 2,
        "createdAt": "2022-06-05T01:10:52.521Z",
        "updatedAt": "2022-06-05T01:10:52.521Z",
        "User": {
          "id": 2,
          "username": "Baki",
          "email": "staff@gmail.com",
          "password": "$2a$10$xybsEmCox5D8r7LH6HVCyua.O0nAZJTwUyRIrHlNWkjdISoDImOrq",
          "role": "staff",
          "phoneNumber": "088897774422",
          "address": "Jl. KH Agus Salim 16, Sabang, Menteng Jakarta Pusat",
          "createdAt": "2022-06-05T01:10:52.420Z",
          "updatedAt": "2022-06-05T01:10:52.420Z"
        },
        "Category": {
          "id": 1,
          "name": "Gamis Syar'i",
          "createdAt": "2022-06-05T01:10:52.517Z",
          "updatedAt": "2022-06-05T01:10:52.517Z"
        }
      },
      {
        "id": 2,
        "name": "AM Madinah – Azkia Ruffle Dress",
        "description": "Apabila Anda mau outer yang juga bisa dijadikan dress, maka Azkia ruffle dress dari AM Madinah ini bisa menjadi pilihan yang tepat.",
        "price": 155960,
        "imgUrl": "https://ceklist.id/wp-content/uploads/2022/02/5-Model-Gamis-Sederhana-dan-Elegan-AM-Madinah-Azkia-Ruffle-Dress.jpg",
        "categoryId": 1,
        "authorId": 3,
        "createdAt": "2022-06-05T01:10:52.521Z",
        "updatedAt": "2022-06-05T01:10:52.521Z",
        "User": {
          "id": 3,
          "username": "Shana",
          "email": "customer@gmail.com",
          "password": "$2a$10$ctWvi8CD4.91rs8xekdL7.2DfCtrcr.QbGSyB1YRtje057eG5wAai",
          "role": "customer",
          "phoneNumber": "088891114433",
          "address": "Jl. Taman Margasatwa No. 12, Warung Buncit, Jakarta Selatan",
          "createdAt": "2022-06-05T01:10:52.507Z",
          "updatedAt": "2022-06-05T01:10:52.507Z"
        },
        "Category": {
          "id": 1,
          "name": "Gamis Syar'i",
          "createdAt": "2022-06-05T01:10:52.517Z",
          "updatedAt": "2022-06-05T01:10:52.517Z"
        }
      },
      {
        "id": 3,
        "name": "Wulfi Gamis Kiara Maroon",
        "description": "Mau model gamis sederhana dan elegan tanpa motif apapun? Anda bisa memilih gamis kiara dari Wulfi ini.",
        "price": 155960,
        "imgUrl": "https://ceklist.id/wp-content/uploads/2022/02/2-Model-Gamis-Sederhana-dan-Elegan-Wulfi-Gamis-Kiara-Maroon.jpg",
        "categoryId": 1,
        "authorId": 2,
        "createdAt": "2022-06-05T01:10:52.521Z",
        "updatedAt": "2022-06-05T01:10:52.521Z",
        "User": {
          "id": 2,
          "username": "Baki",
          "email": "staff@gmail.com",
          "password": "$2a$10$xybsEmCox5D8r7LH6HVCyua.O0nAZJTwUyRIrHlNWkjdISoDImOrq",
          "role": "staff",
          "phoneNumber": "088897774422",
          "address": "Jl. KH Agus Salim 16, Sabang, Menteng Jakarta Pusat",
          "createdAt": "2022-06-05T01:10:52.420Z",
          "updatedAt": "2022-06-05T01:10:52.420Z"
        },
        "Category": {
          "id": 1,
          "name": "Gamis Syar'i",
          "createdAt": "2022-06-05T01:10:52.517Z",
          "updatedAt": "2022-06-05T01:10:52.517Z"
        }
      },
      {
        "id": 4,
        "name": "Puricia Gamis Ishmah",
        "description": "Membutuhkan model gamis sederhana dan elegan untuk berbagai momen penting? Coba kenakan Puricia Gamis Ishmah ini.",
        "price": 155960,
        "imgUrl": "https://ceklist.id/wp-content/uploads/2022/02/3-Model-Gamis-Sederhana-dan-Elegan-Puricia-Gamis-Ishmah.jpg",
        "categoryId": 1,
        "authorId": 2,
        "createdAt": "2022-06-05T01:10:52.521Z",
        "updatedAt": "2022-06-05T01:10:52.521Z",
        "User": {
          "id": 2,
          "username": "Baki",
          "email": "staff@gmail.com",
          "password": "$2a$10$xybsEmCox5D8r7LH6HVCyua.O0nAZJTwUyRIrHlNWkjdISoDImOrq",
          "role": "staff",
          "phoneNumber": "088897774422",
          "address": "Jl. KH Agus Salim 16, Sabang, Menteng Jakarta Pusat",
          "createdAt": "2022-06-05T01:10:52.420Z",
          "updatedAt": "2022-06-05T01:10:52.420Z"
        },
        "Category": {
          "id": 1,
          "name": "Gamis Syar'i",
          "createdAt": "2022-06-05T01:10:52.517Z",
          "updatedAt": "2022-06-05T01:10:52.517Z"
        }
      },
      {
        "id": 5,
        "name": "Baneska Homedress Gamis Zaina Series",
        "description": "Rekomendasi model gamis sederhana dan elegan yang terakhir adalah Baneska Homedress Gamis Zaina Series.",
        "price": 155960,
        "imgUrl": "https://ceklist.id/wp-content/uploads/2022/02/10-Model-Gamis-Sederhana-dan-Elegan-Baneska-Homedress-Gamis-Zaina-Series.jpg",
        "categoryId": 1,
        "authorId": 2,
        "createdAt": "2022-06-05T01:10:52.521Z",
        "updatedAt": "2022-06-05T01:10:52.521Z",
        "User": {
          "id": 2,
          "username": "Baki",
          "email": "staff@gmail.com",
          "password": "$2a$10$xybsEmCox5D8r7LH6HVCyua.O0nAZJTwUyRIrHlNWkjdISoDImOrq",
          "role": "staff",
          "phoneNumber": "088897774422",
          "address": "Jl. KH Agus Salim 16, Sabang, Menteng Jakarta Pusat",
          "createdAt": "2022-06-05T01:10:52.420Z",
          "updatedAt": "2022-06-05T01:10:52.420Z"
        },
        "Category": {
          "id": 1,
          "name": "Gamis Syar'i",
          "createdAt": "2022-06-05T01:10:52.517Z",
          "updatedAt": "2022-06-05T01:10:52.517Z"
        }
      },
      {
        "id": 12,
        "name": "Coverme Ayyana Dress Gamis Premium",
        "description": "Ayyana Dress cocok untuk Anda yang mencari model gamis sederhana dan elegan, sekaligus tampak berkelas. Gamis ini terbuat dari material ceruti babydoll armani dengan kualitas terbaik yang tentunya akan sangat nyaman untuk dikenakan. ",
        "price": 300000,
        "imgUrl": "https://ceklist.id/wp-content/uploads/2022/02/9-Model-Gamis-Sederhana-dan-Elegan-AZZAR-Elakshi-Maxi-Dress-With-Shaded-Vest-in-Grey-Glitter.jpg",
        "categoryId": 1,
        "authorId": 1,
        "createdAt": "2022-06-05T04:47:27.869Z",
        "updatedAt": "2022-06-05T04:49:24.239Z",
        "User": {
          "id": 1,
          "username": "Shouma",
          "email": "admin@gmail.com",
          "password": "$2a$10$tbkVd1ulfb9ziz0GYVo5.O0bSXtyHY.JAQRDl6oF3k3SNWjR.uWNi",
          "role": "admin",
          "phoneNumber": "088899444411",
          "address": "Jl. Metro Pondok Indah Kav. IV, Kebayoran Lama, Jakarta Selatan",
          "createdAt": "2022-06-05T01:10:52.221Z",
          "updatedAt": "2022-06-05T01:10:52.221Z"
        },
        "Category": {
          "id": 1,
          "name": "Gamis Syar'i",
          "createdAt": "2022-06-05T01:10:52.517Z",
          "updatedAt": "2022-06-05T01:10:52.517Z"
        }
      },
      {
        "id": 15,
        "name": "Nutribaby Royal 2 1200gr Buat Umur 6-12 bulan",
        "description": "Nutribaby Royal 2 adalah susu formula lanjutan untuk bayi berumur 6-12 bulan.Penggunan susu formula harus berdasarkan saran dokter atau ahli kesehatan anak.",
        "price": 200000,
        "imgUrl": "https://images.tokopedia.net/img/cache/900/VqbcmM/2020/8/7/5adc8a71-a1a9-4b7c-af18-14c2d01bc500.jpg",
        "categoryId": 2,
        "authorId": 1,
        "createdAt": "2022-06-05T04:56:11.374Z",
        "updatedAt": "2022-06-05T04:56:11.374Z",
        "User": {
          "id": 1,
          "username": "Shouma",
          "email": "admin@gmail.com",
          "password": "$2a$10$tbkVd1ulfb9ziz0GYVo5.O0bSXtyHY.JAQRDl6oF3k3SNWjR.uWNi",
          "role": "admin",
          "phoneNumber": "088899444411",
          "address": "Jl. Metro Pondok Indah Kav. IV, Kebayoran Lama, Jakarta Selatan",
          "createdAt": "2022-06-05T01:10:52.221Z",
          "updatedAt": "2022-06-05T01:10:52.221Z"
        },
        "Category": {
          "id": 2,
          "name": "Susu",
          "createdAt": "2022-06-05T01:10:52.517Z",
          "updatedAt": "2022-06-05T01:10:52.517Z"
        }
      },
      {
        "id": 14,
        "name": "asdasd",
        "description": "Nutribaby Royal 2 adalah susu formula lanjutan untuk bayi berumur 6-12 bulan.Penggunan susu formula harus berdasarkan saran dokter atau ahli kesehatan anak.",
        "price": 200000,
        "imgUrl": "https://images.tokopedia.net/img/cache/900/VqbcmM/2020/8/7/5adc8a71-a1a9-4b7c-af18-14c2d01bc500.jpg",
        "categoryId": 1,
        "authorId": 1,
        "createdAt": "2022-06-05T04:53:35.266Z",
        "updatedAt": "2022-06-05T04:56:23.764Z",
        "User": {
          "id": 1,
          "username": "Shouma",
          "email": "admin@gmail.com",
          "password": "$2a$10$tbkVd1ulfb9ziz0GYVo5.O0bSXtyHY.JAQRDl6oF3k3SNWjR.uWNi",
          "role": "admin",
          "phoneNumber": "088899444411",
          "address": "Jl. Metro Pondok Indah Kav. IV, Kebayoran Lama, Jakarta Selatan",
          "createdAt": "2022-06-05T01:10:52.221Z",
          "updatedAt": "2022-06-05T01:10:52.221Z"
        },
        "Category": {
          "id": 1,
          "name": "Gamis Syar'i",
          "createdAt": "2022-06-05T01:10:52.517Z",
          "updatedAt": "2022-06-05T01:10:52.517Z"
        }
      },
      {
        "id": 8,
        "name": "Coverme Ayyana Dress Gamis Premium",
        "description": "Ayyana Dress cocok untuk Anda yang mencari model gamis sederhana dan elegan, sekaligus tampak berkelas. Gamis ini terbuat dari material ceruti babydoll armani dengan kualitas terbaik yang tentunya akan sangat nyaman untuk dikenakan. ",
        "price": 250000,
        "imgUrl": "https://ceklist.id/wp-content/uploads/2022/02/9-Model-Gamis-Sederhana-dan-Elegan-AZZAR-Elakshi-Maxi-Dress-With-Shaded-Vest-in-Grey-Glitter.jpg",
        "categoryId": 1,
        "authorId": 1,
        "createdAt": "2022-06-05T01:12:38.335Z",
        "updatedAt": "2022-06-05T04:46:47.102Z",
        "User": {
          "id": 1,
          "username": "Shouma",
          "email": "admin@gmail.com",
          "password": "$2a$10$tbkVd1ulfb9ziz0GYVo5.O0bSXtyHY.JAQRDl6oF3k3SNWjR.uWNi",
          "role": "admin",
          "phoneNumber": "088899444411",
          "address": "Jl. Metro Pondok Indah Kav. IV, Kebayoran Lama, Jakarta Selatan",
          "createdAt": "2022-06-05T01:10:52.221Z",
          "updatedAt": "2022-06-05T01:10:52.221Z"
        },
        "Category": {
          "id": 1,
          "name": "Gamis Syar'i",
          "createdAt": "2022-06-05T01:10:52.517Z",
          "updatedAt": "2022-06-05T01:10:52.517Z"
        }
      },
      {
        "id": 10,
        "name": "Coverme Ayyana Dress Gamis Premium",
        "description": "Ayyana Dress cocok untuk Anda yang mencari model gamis sederhana dan elegan, sekaligus tampak berkelas. Gamis ini terbuat dari material ceruti babydoll armani dengan kualitas terbaik yang tentunya akan sangat nyaman untuk dikenakan. ",
        "price": 250000,
        "imgUrl": "https://ceklist.id/wp-content/uploads/2022/02/9-Model-Gamis-Sederhana-dan-Elegan-AZZAR-Elakshi-Maxi-Dress-With-Shaded-Vest-in-Grey-Glitter.jpg",
        "categoryId": 1,
        "authorId": 1,
        "createdAt": "2022-06-05T04:47:27.559Z",
        "updatedAt": "2022-06-05T04:47:27.559Z",
        "User": {
          "id": 1,
          "username": "Shouma",
          "email": "admin@gmail.com",
          "password": "$2a$10$tbkVd1ulfb9ziz0GYVo5.O0bSXtyHY.JAQRDl6oF3k3SNWjR.uWNi",
          "role": "admin",
          "phoneNumber": "088899444411",
          "address": "Jl. Metro Pondok Indah Kav. IV, Kebayoran Lama, Jakarta Selatan",
          "createdAt": "2022-06-05T01:10:52.221Z",
          "updatedAt": "2022-06-05T01:10:52.221Z"
        },
        "Category": {
          "id": 1,
          "name": "Gamis Syar'i",
          "createdAt": "2022-06-05T01:10:52.517Z",
          "updatedAt": "2022-06-05T01:10:52.517Z"
        }
      },
      {
        "id": 19,
        "name": "Nutribaby Royal 2 1200gr Buat Umur 6-12 bulan",
        "description": "Nutribaby Royal 2 adalah susu formula lanjutan untuk bayi berumur 6-12 bulan.Penggunan susu formula harus berdasarkan saran dokter atau ahli kesehatan anak.",
        "price": 12345678,
        "imgUrl": "https://images.tokopedia.net/img/cache/900/VqbcmM/2020/8/7/5adc8a71-a1a9-4b7c-af18-14c2d01bc500.jpg",
        "categoryId": 2,
        "authorId": 1,
        "createdAt": "2022-06-05T05:00:34.544Z",
        "updatedAt": "2022-06-05T05:00:34.544Z",
        "User": {
          "id": 1,
          "username": "Shouma",
          "email": "admin@gmail.com",
          "password": "$2a$10$tbkVd1ulfb9ziz0GYVo5.O0bSXtyHY.JAQRDl6oF3k3SNWjR.uWNi",
          "role": "admin",
          "phoneNumber": "088899444411",
          "address": "Jl. Metro Pondok Indah Kav. IV, Kebayoran Lama, Jakarta Selatan",
          "createdAt": "2022-06-05T01:10:52.221Z",
          "updatedAt": "2022-06-05T01:10:52.221Z"
        },
        "Category": {
          "id": 2,
          "name": "Susu",
          "createdAt": "2022-06-05T01:10:52.517Z",
          "updatedAt": "2022-06-05T01:10:52.517Z"
        }
      },
      {
        "id": 20,
        "name": "Nutribaby Royal 2 1200gr Buat Umur 6-12 bulan",
        "description": "Nutribaby Royal 2 adalah susu formula lanjutan untuk bayi berumur 6-12 bulan.Penggunan susu formula harus berdasarkan saran dokter atau ahli kesehatan anak.",
        "price": 12345678,
        "imgUrl": "https://images.tokopedia.net/img/cache/900/VqbcmM/2020/8/7/5adc8a71-a1a9-4b7c-af18-14c2d01bc500.jpg",
        "categoryId": 2,
        "authorId": 1,
        "createdAt": "2022-06-05T05:00:34.546Z",
        "updatedAt": "2022-06-05T05:00:34.546Z",
        "User": {
          "id": 1,
          "username": "Shouma",
          "email": "admin@gmail.com",
          "password": "$2a$10$tbkVd1ulfb9ziz0GYVo5.O0bSXtyHY.JAQRDl6oF3k3SNWjR.uWNi",
          "role": "admin",
          "phoneNumber": "088899444411",
          "address": "Jl. Metro Pondok Indah Kav. IV, Kebayoran Lama, Jakarta Selatan",
          "createdAt": "2022-06-05T01:10:52.221Z",
          "updatedAt": "2022-06-05T01:10:52.221Z"
        },
        "Category": {
          "id": 2,
          "name": "Susu",
          "createdAt": "2022-06-05T01:10:52.517Z",
          "updatedAt": "2022-06-05T01:10:52.517Z"
        }
      },
      {
        "id": 23,
        "name": "Nutribaby Royal 2 1200gr Buat Umur 6-12 bulan",
        "description": "Enfamil adalah susu formula bayi. Enfamil A+ dibuat sebagai makanan pendamping ASI. Mengandung banyak nutrisi penting seperti DHA, ARA dan Prebiotik GOS untuk optimalkan pertumbuhan",
        "price": 2222222,
        "imgUrl": "https://images.tokopedia.net/img/cache/900/VqbcmM/2020/8/7/5adc8a71-a1a9-4b7c-af18-14c2d01bc500.jpg",
        "categoryId": 2,
        "authorId": 1,
        "createdAt": "2022-06-05T05:03:23.390Z",
        "updatedAt": "2022-06-05T05:03:23.390Z",
        "User": {
          "id": 1,
          "username": "Shouma",
          "email": "admin@gmail.com",
          "password": "$2a$10$tbkVd1ulfb9ziz0GYVo5.O0bSXtyHY.JAQRDl6oF3k3SNWjR.uWNi",
          "role": "admin",
          "phoneNumber": "088899444411",
          "address": "Jl. Metro Pondok Indah Kav. IV, Kebayoran Lama, Jakarta Selatan",
          "createdAt": "2022-06-05T01:10:52.221Z",
          "updatedAt": "2022-06-05T01:10:52.221Z"
        },
        "Category": {
          "id": 2,
          "name": "Susu",
          "createdAt": "2022-06-05T01:10:52.517Z",
          "updatedAt": "2022-06-05T01:10:52.517Z"
        }
      },
      {
        "id": 11,
        "name": "Coverme Ayyana Dress Gamis Premium",
        "description": "Ayyana Dress cocok untuk Anda yang mencari model gamis sederhana dan elegan, sekaligus tampak berkelas. Gamis ini terbuat dari material ceruti babydoll armani dengan kualitas terbaik yang tentunya akan sangat nyaman untuk dikenakan. ",
        "price": 300000,
        "imgUrl": "https://ceklist.id/wp-content/uploads/2022/02/9-Model-Gamis-Sederhana-dan-Elegan-AZZAR-Elakshi-Maxi-Dress-With-Shaded-Vest-in-Grey-Glitter.jpg",
        "categoryId": 1,
        "authorId": 1,
        "createdAt": "2022-06-05T04:47:27.580Z",
        "updatedAt": "2022-06-05T05:18:36.076Z",
        "User": {
          "id": 1,
          "username": "Shouma",
          "email": "admin@gmail.com",
          "password": "$2a$10$tbkVd1ulfb9ziz0GYVo5.O0bSXtyHY.JAQRDl6oF3k3SNWjR.uWNi",
          "role": "admin",
          "phoneNumber": "088899444411",
          "address": "Jl. Metro Pondok Indah Kav. IV, Kebayoran Lama, Jakarta Selatan",
          "createdAt": "2022-06-05T01:10:52.221Z",
          "updatedAt": "2022-06-05T01:10:52.221Z"
        },
        "Category": {
          "id": 1,
          "name": "Gamis Syar'i",
          "createdAt": "2022-06-05T01:10:52.517Z",
          "updatedAt": "2022-06-05T01:10:52.517Z"
        }
      }
    ]
  }
  ```

  ERROR

_500 - Internal Server Error_

- Body
  ```json
  {
    "statusCode": 500,
    "error": {
      "message": "Internal Server Error"
    }
  }
  ```

### GET /products/authors

#### Description

- Get all the Users/Authors data

#### Request

```json
{
  "access_token" : string
}
```

#### Response

_200-OK_

```json
{
  "statusCode": 200,
  "data": [
    {
      "id": 1,
      "username": "Shouma",
      "email": "admin@gmail.com",
      "password": "$2a$10$F7BnlpOvlsn2dki6bDBtQ.sHMn37j9P00Q6kuOS34mlsbgso.owea",
      "role": "admin",
      "phoneNumber": "088899444411",
      "address": "Jl. Metro Pondok Indah Kav. IV, Kebayoran Lama, Jakarta Selatan",
      "createdAt": "2022-05-31T09:23:59.687Z",
      "updatedAt": "2022-05-31T09:23:59.687Z"
    },
    {
      "id": 2,
      "username": "Baki",
      "email": "staff@gmail.com",
      "password": "$2a$10$Z1r3/XoHTNqpRDtZRzZ31.RQS6zo/OmskziGAMq5S2LtJrjTWc3Gq",
      "role": "staff",
      "phoneNumber": "088897774422",
      "address": "Jl. KH Agus Salim 16, Sabang, Menteng Jakarta Pusat",
      "createdAt": "2022-05-31T09:23:59.798Z",
      "updatedAt": "2022-05-31T09:23:59.798Z"
    },
    {
      "id": 3,
      "username": "Shana",
      "email": "customer@gmail.com",
      "password": "$2a$10$xQtPvHUfwnO9BsqhUswmpeGZzd2SgluauU60W.xJ01yS9D4I2GJsO",
      "role": "customer",
      "phoneNumber": "088891114433",
      "address": "Jl. Taman Margasatwa No. 12, Warung Buncit, Jakarta Selatan",
      "createdAt": "2022-05-31T09:23:59.917Z",
      "updatedAt": "2022-05-31T09:23:59.917Z"
    },
    {
      "id": 5,
      "username": "123456",
      "email": "12345@gmail.com",
      "password": "$2a$10$L9kf8odyjKQuE4dzN8t1VOa.vQ2TJtVD2qcFWx6hugTnf8bEtj4f6",
      "role": null,
      "phoneNumber": null,
      "address": null,
      "createdAt": "2022-05-31T16:20:33.768Z",
      "updatedAt": "2022-05-31T16:20:33.768Z"
    },
    {
      "id": 9,
      "username": "123456",
      "email": "sky@gmail.com",
      "password": "$2a$10$yOi6FR2lO.pXJt4OsVfgbu/C.595UAjBw/ivgxUU..lgTM5oOjgnW",
      "role": "admin",
      "phoneNumber": "0855447511",
      "address": "vila tomang baru",
      "createdAt": "2022-06-01T13:59:12.019Z",
      "updatedAt": "2022-06-01T13:59:12.019Z"
    }
  ]
}
```

ERROR

404

### GET /categories

#### Description

- Get all the Categories data

#### Request

```json
{
  "access_token" : string
}
```

#### Response

_200-Ok_

```json
{
  "statusCode": 200,
  "message": "Ok",
  "data": [
    {
      "id": 1,
      "name": "Baju Gamis",
      "createdAt": "2022-05-31T09:23:59.943Z",
      "updatedAt": "2022-05-31T09:23:59.943Z"
    },
    {
      "id": 2,
      "name": "Susu",
      "createdAt": "2022-05-31T09:23:59.943Z",
      "updatedAt": "2022-05-31T09:23:59.943Z"
    },
    {
      "id": 3,
      "name": "Perlengkapan Bayi",
      "createdAt": "2022-05-31T09:23:59.943Z",
      "updatedAt": "2022-05-31T09:23:59.943Z"
    }
  ]
}
```

ERROR

404

### GET /products/histories

#### Description

- Get all the Categories data

#### Request

```json
{
  "access_token" : string
}
```

#### Response

_200-Ok_

```json
{
  "statusCode": 200,
  "readHistory": [
    {
      "id": 8,
      "name": "ZM Feat Masayu Clara – Befa Sky Gamis – Edisi Tengkawang",
      "description": "Product with Id 1 is update from undefined to inactive",
      "updatedBy": "admin@gmail.com",
      "productId": 1,
      "createdAt": "2022-06-07T09:38:20.498Z",
      "updatedAt": "2022-06-07T09:38:20.498Z"
    },
    {
      "id": 9,
      "name": "ZM Feat Masayu Clara – Befa Sky Gamis – Edisi Tengkawang",
      "description": "Product with Id 1 is update from undefined to inactive",
      "updatedBy": "admin@gmail.com",
      "productId": 1,
      "createdAt": "2022-06-07T09:38:55.225Z",
      "updatedAt": "2022-06-07T09:38:55.225Z"
    },
    {
      "id": 10,
      "name": "ZM Feat Masayu Clara – Befa Sky Gamis – Edisi Tengkawang",
      "description": "Product with Id 1 is update from active to inactive",
      "updatedBy": "admin@gmail.com",
      "productId": 1,
      "createdAt": "2022-06-07T09:40:18.126Z",
      "updatedAt": "2022-06-07T09:40:18.126Z"
    },
    {
      "id": 11,
      "name": "Puricia Gamis Ishmah",
      "description": "Product with Id 4 is update from active to inactive",
      "updatedBy": "admin@gmail.com",
      "productId": 4,
      "createdAt": "2022-06-07T10:01:50.558Z",
      "updatedAt": "2022-06-07T10:01:50.558Z"
    },
    {
      "id": 12,
      "name": "AM Madinah – Azkia Ruffle Dress",
      "description": "Product with Id 2 updated active to inactive",
      "updatedBy": "admin@gmail.com",
      "productId": 2,
      "createdAt": "2022-06-07T10:21:55.804Z",
      "updatedAt": "2022-06-07T10:21:55.804Z"
    },
    {
      "id": 13,
      "name": "Wulfi Gamis Kiara Maroon",
      "description": "Product with Id 3 updated active to inactive",
      "updatedBy": "admin@gmail.com",
      "productId": 3,
      "createdAt": "2022-06-07T10:22:33.100Z",
      "updatedAt": "2022-06-07T10:22:33.100Z"
    },
    {
      "id": 14,
      "name": "Data di ubah",
      "description": "Product with Id: 3 has been edited",
      "updatedBy": "admin@gmail.com",
      "productId": 3,
      "createdAt": "2022-06-07T12:59:45.043Z",
      "updatedAt": "2022-06-07T12:59:45.043Z"
    },
    {
      "id": 17,
      "name": "barang apa aja",
      "description": "New Product has been Added",
      "updatedBy": "admin@gmail.com",
      "productId": 9,
      "createdAt": "2022-06-07T13:05:41.083Z",
      "updatedAt": "2022-06-07T13:05:41.083Z"
    },
    {
      "id": 18,
      "name": "Puricia Gamis Ishmah",
      "description": "Product with Id 4 updated active to inactive",
      "updatedBy": "admin@gmail.com",
      "productId": 4,
      "createdAt": "2022-06-07T14:28:31.263Z",
      "updatedAt": "2022-06-07T14:28:31.263Z"
    },
    {
      "id": 19,
      "name": "barang apa aja",
      "description": "New Product has been Added",
      "updatedBy": "admin@gmail.com",
      "productId": 10,
      "createdAt": "2022-06-07T14:29:31.664Z",
      "updatedAt": "2022-06-07T14:29:31.664Z"
    }
  ]
}
```

ERROR

404

### GET /products/:productId

#### Description

- Get all the products data By id Product

#### Request

```json
{
  "access_token" : string
}
```

#### Response

_200 - OK_

- Body

  ```json
  {
    "statusCode": 201,
    "message": "This Product Has been Show",
    "data": {
      "id": 2,
      "name": "Sweety Bronze Day Active Pants XL 34s TWINPACK",
      "description": "Sweety Bronze Dry Xpert Pants Baru!\nDengan teknologi Smart Leak Lock, yang dapat menyerap cepat & mengunci cairan dengan sempurna, kering hingga 12 jam.",
      "price": 155960,
      "imgUrl": "https://images.tokopedia.net/img/cache/900/VqbcmM/2022/4/6/12df1a95-8c70-4805-8494-bc2a47035588.jpg",
      "categoryId": null,
      "authorId": null,
      "createdAt": "2022-05-31T05:20:44.404Z",
      "updatedAt": "2022-05-31T05:20:44.404Z"
    }
  }
  ```

  ERROR 404

  ```json
  {
    "statusCode": 404,
    "message": "Data Product is not found"
  }
  ```

### POST /products

#### Description

- Create a new products data

#### Request

- Headers

  ```json
  {
    "Content-Type": "application/x-www-form-urlencoded"
  }
  ```

```json
{
  "access_token" : string
}
```

- Body
  ```json
  {
    "statusCode": 201,
    "message": "This Product has succesfully added",
    "data": {
      "id": 10,
      "name": "barang apa aja",
      "description": "Sweety Bronze Dry Xpert Pants Baru!\\nDengan teknologi Smart Leak Lock, yang dapat menyerap cepat & mengunci cairan dengan sempurna, kering hingga 12 jam.",
      "price": 300000,
      "imgUrl": "https://images.tokopedia.net/img/cache/900/VqbcmM/2022/4/6/12df1a95-8c70-4805-8494-bc2a47035588.jpg",
      "authorId": 1,
      "categoryId": 1,
      "status": "active",
      "updatedAt": "2022-06-07T14:29:31.649Z",
      "createdAt": "2022-06-07T14:29:31.649Z"
    }
  }
  ```

#### Response

_201 - Created_

- Body
  ```json
  {
    "statusCode": 201,
    "message": "This Product Successfully Update",
    "data": [
      1,
      [
        {
          "id": 13,
          "name": "Mamy Poko Bronze Day Active Pants XL 34s TWINPACK",
          "description": "Sweety Bronze Dry Xpert Pants Baru!\\nDengan teknologi Smart Leak Lock, yang dapat menyerap cepat & mengunci cairan dengan sempurna, kering hingga 12 jam",
          "price": 300000,
          "imgUrl": "https://images.tokopedia.net/img/cache/900/VqbcmM/2022/4/6/12df1a95-8c70-4805-8494-bc2a47035588.jpg",
          "categoryId": null,
          "authorId": null,
          "createdAt": "2022-05-30T13:27:45.642Z",
          "updatedAt": "2022-05-30T15:53:28.221Z"
        }
      ]
    ]
  }
  ```

_400 - Bad Request_

- Body

  ```json
  {
    "statusCode": 400,
    "error": {
      "message": [
        "Name is Required",
        "description Required",
        "Number Required",
        "input must be number",
        "URL Required",
        "needs to be a url"
      ]
    }
  }
  ```

  ### PUT /products/productId

#### Description

- Edit a products data

#### Request

- Headers

  ```json
  {
    "Content-Type": "application/x-www-form-urlencoded"
  }
  ```

```json
{
  "access_token" : string
}
```

- Body
  ```json
  {
    "name": "Mamy Poko Bronze Day Active Pants XL 34s TWINPACK",
    "description": "Sweety Bronze Dry Xpert Pants Baru!\\nDengan teknologi Smart Leak Lock, yang dapat menyerap cepat & mengunci cairan dengan sempurna, kering hingga 12 jam",
    "price": 200000,
    "imgUrl": "https://images.tokopedia.net/img/cache/900/VqbcmM/2022/4/6/12df1a95-8c70-4805-8494-bc2a47035588.jpg"
  }
  ```

#### Response

_201 - Created_

- Body
  ```json
  {
    "statusCode": 201,
    "message": "This Product Successfully Update",
    "data": [
      1,
      [
        {
          "id": 13,
          "name": "Mamy Poko Bronze Day Active Pants XL 34s TWINPACK",
          "description": "Sweety Bronze Dry Xpert Pants Baru!\\nDengan teknologi Smart Leak Lock, yang dapat menyerap cepat & mengunci cairan dengan sempurna, kering hingga 12 jam",
          "price": 300000,
          "imgUrl": "https://images.tokopedia.net/img/cache/900/VqbcmM/2022/4/6/12df1a95-8c70-4805-8494-bc2a47035588.jpg",
          "categoryId": null,
          "authorId": null,
          "createdAt": "2022-05-30T13:27:45.642Z",
          "updatedAt": "2022-05-30T15:53:28.221Z"
        }
      ]
    ]
  }
  ```

_400 - Bad Request_

- Body
  ```json
  {
    "statusCode": 400,
    "error": {
      "message": [
        "Name is Required",
        "description Required",
        "Number Required",
        "input must be number",
        "URL Required",
        "needs to be a url"
      ]
    }
  }
  ```

### PATCH /products/:productId

#### Description

- Update Status Product

#### Request

```json
{
  "access_token" : string
}
```

#### Response

_200 - OK_

- Body

```json
{
  "statusCode": 200,
  "data": "Product with Id 4 updated active to inactive"
}
```

_404 - Not Found_

- Body
  ```json
  {
    "statusCode": 403,
    "message": "You Dont Have Authorization"
  }
  ```

### DELETE /products/:productId

#### Description

- Remove a products data based on given id

#### Request

```json
{
  "access_token" : string
}
```

#### Response

_200 - OK_

- Body

```json
{
  "statusCode": 200,
  "message": "Product Mamy Poko Bronze Day Active Pants XL 34s TWINPACK success deleted"
}
```

_404 - Not Found_

- Body
  ```json
  {
    "statusCode": 404,
    "error": {
      "message": "Product Not Found"
    }
  }
  ```

### Global Error

#### Response

_500 - Internal Server Error_

- Body
  ```json
  {
    "statusCode": 500,
    "error": {
      "message": "Internal Server Error"
    }
  }
  ```
