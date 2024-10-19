# 1. Clone Repo.

# 2. GOTO backend directory (real-time-leaderboard).

# 3. Use Node Version 20.

# 4. npm install and also install nest js.

# 5. Used local version of mongodd if you as per choice just need to replace the url.

# 6. Go to the frontend directory.

# 7. use node version 20 and angular version 15.

# 8. now server angular application with ng serve -o

# 9. insert below data in the database.

```
[{
"_id": {
"$oid": "671371186338aeb28262a8c0"
},
"score": 5000,
"player_id": "player2"
},
{
"_id": {
"$oid": "6713a7779bec44eeca669929"
},
"player_id": "player1",
"__v": 0,
"score": 500
},
{
"_id": {
"$oid": "6713a7889bec44eeca669937"
},
"player_id": "player3",
"__v": 0,
"score": 5004
},
{
"_id": {
"$oid": "6713abbd9bec44eeca669b66"
},
"player_id": "player4",
"__v": 0,
"score": 50
}]
```

# hit request

POST : http://localhost:3000/leaderboard/update-score

{
"player_id": "player4",
"score" : 50
}

# change will show in the frontend.
