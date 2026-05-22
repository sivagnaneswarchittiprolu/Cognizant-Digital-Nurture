--Generate a report showing the number of resources (PDFs, images, links) uploaded for each event.

select e.title as event_name,
count(*) as count_of_resources
from events as e
join resources as r on r.event_id = e.event_id
group by e.title
