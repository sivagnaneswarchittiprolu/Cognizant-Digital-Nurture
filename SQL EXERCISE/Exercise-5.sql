--List the top 5 cities with the highest number of distinct user registrations.
SELECT TOP 5
    u.city,
    COUNT(DISTINCT r.user_id) AS total_registrations
FROM Users AS u

JOIN Registrations AS r
ON u.user_id = r.user_id

GROUP BY u.city

ORDER BY total_registrations DESC;
