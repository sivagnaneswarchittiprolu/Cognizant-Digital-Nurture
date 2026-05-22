--Compute the average duration (in minutes) of sessions in each event.
SELECT 
    e.event_id,
    e.title AS event_name,
    AVG(DATEDIFF(MINUTE, s.start_time, s.end_time)) AS average_duration_minutes

FROM Events AS e

JOIN Sessions AS s
ON e.event_id = s.event_id

GROUP BY e.event_id, e.title;
