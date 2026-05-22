--For each event organizer, show the number of events created and their current status (upcoming, completed, cancelled).

select u.full_name as name,
e.status, 
count(*) as events_created 

from users as u

join events e 
on e.organizer_id = u.user_id

group by u.full_name,e.status
