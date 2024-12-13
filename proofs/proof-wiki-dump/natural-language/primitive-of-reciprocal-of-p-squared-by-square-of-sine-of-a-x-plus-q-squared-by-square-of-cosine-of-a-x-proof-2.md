# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_p_squared_by_square_of_Sine_of_a_x_plus_q_squared_by_square_of_Cosine_of_a_x/Proof_2

Theorem
$\ds \int \frac {\d x} {p^2 \sin^2 a x + q^2 \cos^2 a x} = \frac 1 {a p q} \map \arctan {\frac {p \tan a x} q} + C$


Proof













\(\ds \int \frac {\d x} {p^2 \sin^2 a x + q^2 \cos^2 a x}\)

\(=\)







\(\ds \int \frac {\sec^2 a x \d x} {p^2 \tan^2 a x + q^2}\)





multiplying by $\dfrac {\sec^2 a x} {\sec^2 a x}$














\(\ds \)

\(=\)







\(\ds \frac 1 a \int \frac {\d t} {p^2 t^2 + q^2}\)





substituting $t = \tan a x$














\(\ds \)

\(=\)







\(\ds \frac 1 {a p^2} \int \frac {\d t} {t^2 + \paren {\frac q p}^2}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {a p^2} \times \frac p q \map \arctan {\frac {p t} q} + C\)





Primitive of $\dfrac 1 {x^2 + a^2}$














\(\ds \)

\(=\)







\(\ds \frac 1 {a p q} \map \arctan {\frac {p \tan a x} q} + C\)





substituting back for $t$



$\blacksquare$





