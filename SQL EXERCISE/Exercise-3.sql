--Retrieve users who have not registered for any events in the last 90 days.
select user_id,full_name from users
where user_id not in(
          select user_id from registratins
          where registration_date >= (day,-90,GETDATE())
)
