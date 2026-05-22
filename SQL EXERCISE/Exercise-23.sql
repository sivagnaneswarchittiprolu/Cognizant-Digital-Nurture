--Show a month-wise registration count trend over the past 12 months.
SELECT 
    YEAR(registration_date) AS year,
    MONTH(registration_date) AS month,
    COUNT(*) AS registration_count

FROM Registrations

WHERE registration_date >= DATEADD(MONTH, -12, GETDATE())

GROUP BY 
    YEAR(registration_date),
    MONTH(registration_date)

ORDER BY year, month;
