--For completed events, show total registrations and average feedback rating.

SELECT 
    e.title AS event_name,
    COUNT(DISTINCT r.registration_id) AS total_registrations,
    AVG(f.rating) AS average_rating

FROM Events AS e

JOIN Registrations AS r
ON e.event_id = r.event_id

JOIN Feedback AS f
ON e.event_id = f.event_id

WHERE e.status = 'completed'

GROUP BY e.event_id, e.title;
