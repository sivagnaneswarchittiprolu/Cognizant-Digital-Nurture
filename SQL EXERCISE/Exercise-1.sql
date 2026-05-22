select
u.full_name,
u.city,
e.title as event_name,
e.start_date
from users as u
join Registrations as r on u.user_id = r.user_id
join Events as e on e.event_id = r.user_id
where e.status = 'upcoming' and u.city = e.city
order by e.start_date
