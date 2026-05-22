--List the event(s) with the highest number of sessions.
SELECT TOP 1
    e.title AS event_name,
    COUNT(*) AS session_count

FROM Events AS e

JOIN Sessions AS s
ON e.event_id = s.event_id

GROUP BY e.event_id, e.title

ORDER BY session_count DESC;
