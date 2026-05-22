--List all users who gave feedback with a rating less than 3, along with their comments and associated event names

SELECT 
    u.full_name,
    e.title AS event_name,
    f.rating,
    f.comments
FROM Feedback AS f

JOIN Users AS u
ON f.user_id = u.user_id

JOIN Events AS e
ON f.event_id = e.event_id

WHERE f.rating < 3;
