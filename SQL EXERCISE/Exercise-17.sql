--Identify speakers who are handling more than one session across all events.

SELECT 
    speaker_name,
    COUNT(*) AS total_sessions

FROM Sessions

GROUP BY speaker_name

HAVING COUNT(*) > 1;
