INSERT INTO realtors( email, password)
VALUES ( $1, $2 )
RETURNING realtor_id, email;