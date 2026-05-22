--List top 5 users who have submitted the most feedback entries.

SELECT TOP 5
    u.user_id,
    u.full_name,
    COUNT(f.feedback_id) AS total_feedbacks

FROM Users AS u

JOIN Feedback AS f
ON u.user_id = f.user_id

GROUP BY u.user_id, u.full_name

ORDER BY total_feedbacks DESC;
