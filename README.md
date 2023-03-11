This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## Api Call by httpie

### Auth

#### Login

```
http POST https://next-api-mock-kevpnmo7i-thirosue.vercel.app/api/auth id=test@test.com password=admin
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 201
Content-Type: application/json; charset=utf-8
Date: Sat, 11 Mar 2023 04:09:43 GMT
ETag: "172aymyuqfm5l"
Keep-Alive: timeout=5
Vary: Accept-Encoding

{
    "status": "ok",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2Nzg1MTEzODIsInBheWxvYWQiOnsidXNlciI6InRlc3RAdGVzdC5jb20ifSwiaWF0IjoxNjc4NTA3NzgyfQ.9h7RqdJJRsB5rY0mBjZx6AXncPi_ylq9Ql7n6-MfZ9Q"
}
```

#### Sign Out

```
http POST https://next-api-mock-kevpnmo7i-thirosue.vercel.app/api/auth/signout
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 15
Content-Type: application/json; charset=utf-8
Date: Sat, 11 Mar 2023 04:10:00 GMT
ETag: "136lfa0r4opf"
Keep-Alive: timeout=5
Vary: Accept-Encoding

{
    "status": "ok"
}
```

#### Session Check

```
http POST https://next-api-mock-kevpnmo7i-thirosue.vercel.app/api/auth/check "authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2Nzg1MTEzODIsInBheWxvYWQiOnsidXNlciI6InRlc3RAdGVzdC5jb20ifSwiaWF0IjoxNjc4NTA3NzgyfQ.9h7RqdJJRsB5rY0mBjZx6AXncPi_ylq9Ql7n6-MfZ9Q"
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 154
Content-Type: application/json; charset=utf-8
Date: Sat, 11 Mar 2023 04:10:38 GMT
ETag: "w4qsxixdyw4a"
Keep-Alive: timeout=5
Vary: Accept-Encoding

{
    "status": "ok",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2Nzg1MTE0MzgsImlhdCI6MTY3ODUwNzgzOH0.6WezKJ2ZLlHnmllAWtDoJVPlrYx6TqsTIym5yyTTYwU"
}


```

### Product

#### Get

- findAll

```
http POST https://next-api-mock-kevpnmo7i-thirosue.vercel.app/api/products
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 393
Content-Type: application/json; charset=utf-8
Date: Sat, 11 Mar 2023 04:11:16 GMT
ETag: "2xd25ttc8max"
Keep-Alive: timeout=5
Vary: Accept-Encoding

{
    "count": 16,
    "data": [
        {
            "description": "no.11",
            "id": 11,
            "name": "Item11",
            "quantity": 11
        },
        {
            "description": "no.12",
            "id": 12,
            "name": "Item12",
            "quantity": 12
        },
        {
            "description": "no.13",
            "id": 13,
            "name": "Item13",
            "quantity": 13
        },
        {
            "description": "no.14",
            "id": 14,
            "name": "Item14",
            "quantity": 14
        },
        {
            "description": "no.15",
            "id": 15,
            "name": "Item15",
            "quantity": 15
        },
        {
            "description": "no.16",
            "id": 16,
            "name": "Item16",
            "quantity": 16
        }
    ]
}


```

#### Get

```
http GET "https://next-api-mock-kevpnmo7i-thirosue.vercel.app/api/product?id=1"
HTTP/1.1 200 OK
Access-Control-Allow-Origin: *
Age: 0
Cache-Control: public, max-age=0, must-revalidate
Connection: keep-alive
Content-Length: 102
Content-Type: application/json; charset=utf-8
Date: Sat, 11 Mar 2023 04:50:36 GMT
Etag: "ydov7mmfn92u"
Server: Vercel
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
X-Matched-Path: /api/product
X-Robots-Tag: noindex
X-Vercel-Cache: MISS
X-Vercel-Id: hnd1::iad1::5l8zd-1678510235584-679f86059d2e

{
    "description": "16oz package of fresh organic strawberries",
    "id": 1,
    "name": "Strawberries",
    "quantity": 1
}
```

#### New Arrival

```
http https://next-api-mock-kevpnmo7i-thirosue.vercel.app/api/products/new
HTTP/1.1 200 OK
Access-Control-Allow-Origin: *
Age: 0
Cache-Control: public, max-age=0, must-revalidate
Connection: keep-alive
Content-Length: 330
Content-Type: application/json; charset=utf-8
Date: Sat, 11 Mar 2023 04:51:06 GMT
Etag: "lmnbfs67jc96"
Server: Vercel
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
X-Matched-Path: /api/products/new
X-Robots-Tag: noindex
X-Vercel-Cache: MISS
X-Vercel-Id: hnd1::iad1::5l8zd-1678510265704-6a8cca27cb05

{
    "count": 5,
    "data": [
        {
            "description": "no.16",
            "id": 16,
            "name": "Item16",
            "quantity": 16
        },
        {
            "description": "no.15",
            "id": 15,
            "name": "Item15",
            "quantity": 15
        },
        {
            "description": "no.14",
            "id": 14,
            "name": "Item14",
            "quantity": 14
        },
        {
            "description": "no.13",
            "id": 13,
            "name": "Item13",
            "quantity": 13
        },
        {
            "description": "no.12",
            "id": 12,
            "name": "Item12",
            "quantity": 12
        }
    ]
}
```

#### Recommend

```
http https://next-api-mock-kevpnmo7i-thirosue.vercel.app/api/products/recommend
HTTP/1.1 200 OK
Access-Control-Allow-Origin: *
Age: 0
Cache-Control: public, max-age=0, must-revalidate
Connection: keep-alive
Content-Length: 376
Content-Type: application/json; charset=utf-8
Date: Sat, 11 Mar 2023 04:52:13 GMT
Etag: "dnlnfri4naag"
Server: Vercel
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
X-Matched-Path: /api/products/recommend
X-Robots-Tag: noindex
X-Vercel-Cache: MISS
X-Vercel-Id: hnd1::iad1::5l8zd-1678510332396-3cc674bdc06d

{
    "count": 5,
    "data": [
        {
            "description": "no.10",
            "id": 10,
            "name": "Item10",
            "quantity": 10
        },
        {
            "description": "no.5",
            "id": 5,
            "name": "Item5",
            "quantity": 5
        },
        {
            "description": "Loaf of fresh sliced wheat bread",
            "id": 2,
            "name": "Sliced bread",
            "quantity": 2
        },
        {
            "description": "Bag of 7 fresh McIntosh apples",
            "id": 3,
            "name": "Apples",
            "quantity": 3
        },
        {
            "description": "no.8",
            "id": 8,
            "name": "Item8",
            "quantity": 8
        }
    ]
}
```
