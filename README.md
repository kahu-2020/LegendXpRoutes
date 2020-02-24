# LegendXpRoutes
## wireframes
https://xd.adobe.com/view/4b29b7f2-5f9b-41d0-6a85-5e5cbc4960e4-3d18/
## A tool for Legendmud, to track, optimize and share XP routes. 
I a varst world with hundreds of thoundes mobs (moblie objects, eg creautes), were knowledge if truely power, it can be hard to keep track which mobs your charater can kill and try and optimize the route you take to kill these mobs effiently. 


## Technology used.

* React, Redux, Express, Knex, JWT Auth


## User Stories

### MVP

As a user:
  * I want to register for the App under my charater name. 
  * I want to able to choose a which mobs to add to my list from an existing list. 
  * I want to be able to drag the order of my save. 
  * I want to be able to save my list. 
  * I want to be able to share my list. 
  * I want to be able to track, How many mobs i've killed, the total xp earned, the average xp per kill.  

### Stretch
  * I'd like to be able to work out xp per hour. 
  * use MXP to interface directly from the mud. 
  * group xp split
  

  ---

## Views (Client Side)
  | name | purpose |
  | --- | --- |
  | Login | View for user to enter their login credentials |
  | Register | View for user to sign up for the App |
  | CreateRoute | View for user to arrange mobs into a xp route. |
  | Route | View to display a list of mobs to kill |
  | Earned | Display a statisics about the current route|


## Reducers (Client Side)

  | name | purpose |
  | --- | --- |
  | auth | Store information regarding user logins, auth status and auth errors |
  | mobList | an array of mobs in the users last. 
  | Mob | the current mob 
  | Earned | The totaly amount of xp earned
  

## API (Client - Server)

| Method | Endpoint | Protected | Usage | Response |
| --- | --- | --- | --- | --- |
| Post | /api/auth/login | Yes | Log In a User | The Users JWT Token |
| Post | /api/auth/register | Yes | Register a User | The Users JWT Token |
| Get | /api/mobs:era | No | Get a list of mobs from an era | An Array of mobs |
| Get | /api/mobs:zone | No | Get a list of mobs from an zone | An Array of mobs |
| Post | /api/route | Yes | Saves ting | The Meeting that has been saved in db read format |
| GET | /api/route:user |Yes | list of routes saved by user. 


## DB (Server Side)

### User
  | Column Name | Data Type |
  | --- | --- |
  | id | Integer |
  | user_name | String |
  | hash | text |

### Mobs
  | Column Name | Data Type |
  | --- | --- |
  | id | Integer |
  | mob_name | String |
  | era | string |
  | zone | string |
  | notes | strings |
  | Xp | Integer

### Routes (Join Table M2M)

  Many Users 
 | Column Name | Data Type |
 | --- | --- |
 | route_id | Integer
 | owner_id | Integer
 | mob_id | Integer 
 | name | string

 ---
