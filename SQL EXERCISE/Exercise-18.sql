--List all events that do not have any resources uploaded.

SELECT 
    e.event_id,
    e.title AS event_name

FROM Events AS e

LEFT JOIN Resources AS r
ON e.event_id = r.event_id

WHERE r.resource_id IS NULL;
