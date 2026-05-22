--Display all upcoming events with the count of sessions scheduled for them.

select
e.title as event_name,
count(*) as session_count 
from events as e

join sessions as s 
on s.event_id = e.event_id

where e.status = 'upcoming'

group by e.title
