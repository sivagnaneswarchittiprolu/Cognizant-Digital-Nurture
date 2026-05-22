--Identify events with the highest average rating, considering only those that have received at least 10 feedback submissions.

select 
e.event_id,
AVG(f.rating) as avg_rating,
count(*) as feedback_count,
e.title as event_name

from events as e
join feedback as f 
on e.event_id = f.event_id 

group by e.event_id, e.title

having count(*) >= 10

order by avg_rating desc;
