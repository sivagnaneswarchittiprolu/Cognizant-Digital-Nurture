--Count how many sessions are scheduled between 10 AM to 12 PM for each event.

SELECT 
    e.event_id,
    e.title,
    COUNT(*) AS noof_sessions
FROM Events AS e

JOIN Sessions AS s
ON e.event_id = s.event_id

WHERE CAST(s.start_time AS TIME) 
BETWEEN '10:00:00' AND '12:00:00'

GROUP BY e.event_id, e.title;
