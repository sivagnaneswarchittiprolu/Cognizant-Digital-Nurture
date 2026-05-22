--Calculate the average feedback rating of events conducted in each city.
SELECT 
    e.city,
    AVG(f.rating) AS average_rating

FROM Events AS e

JOIN Feedback AS f
ON e.event_id = f.event_id

GROUP BY e.city

ORDER BY average_rating DESC;
