--Find the number of users who registered each day in the last 7 days.
SELECT 
    registration_date,
    COUNT(*) AS users_registered
FROM Users

WHERE registration_date >= DATEADD(DAY, -7, GETDATE())

GROUP BY registration_date

ORDER BY registration_date;
