--Identify events that had registrations but received no feedback at all.

SELECT e.title AS event_title

FROM Events AS e

JOIN Registrations AS r
ON e.event_id = r.event_id

WHERE e.event_id NOT IN (
    SELECT event_id
    FROM Feedback
);
