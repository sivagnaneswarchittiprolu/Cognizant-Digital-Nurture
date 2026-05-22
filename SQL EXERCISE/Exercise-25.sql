--List all events that currently have no sessions scheduled under them.

SELECT 
    e.event_id,
    e.title AS event_name

FROM Events AS e

LEFT JOIN Sessions AS s
ON e.event_id = s.event_id

WHERE s.session_id IS NULL;
