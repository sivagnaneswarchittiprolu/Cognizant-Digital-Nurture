--Find users who created an account in the last 30 days but haven’t registered for any events.
SELECT 
    u.user_id,
    u.full_name,
    u.registration_date

FROM Users AS u

WHERE u.registration_date >= DATEADD(DAY, -30, GETDATE())

AND u.user_id NOT IN (
    SELECT user_id
    FROM Registrations
);
