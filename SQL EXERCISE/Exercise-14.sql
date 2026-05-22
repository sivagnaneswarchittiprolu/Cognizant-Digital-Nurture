--List top 3 events based on the total number of user registrations.

SELECT TOP 3
    e.title AS event_name,
    COUNT(*) AS total_registrations

FROM Events AS e

JOIN Registrations AS r
ON e.event_id = r.event_id

GROUP BY e.event_id, e.title

ORDER BY total_registrations DESC;
