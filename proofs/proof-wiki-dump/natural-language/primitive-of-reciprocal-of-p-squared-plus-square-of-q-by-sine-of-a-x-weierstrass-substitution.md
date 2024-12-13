# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_p_squared_plus_square_of_q_by_Sine_of_a_x/Weierstrass_Substitution

Lemma for Primitive of Reciprocal of $\paren {p + q \sin a x}^2$
The Weierstrass Substitution of $\ds \int \frac {\d x} {p^2 + q^2 \sin^2 a x}$ is:

$\ds \frac 2 a \int \frac {\paren {u^2 + 1} \rd u} {p^2 \paren {u^2}^2 + \paren {2 p + 4 q^2} u^2 + p}$


Proof













\(\ds \int \frac {\d x} {p^2 + q^2 \sin^2 a x}\)

\(=\)







\(\ds \frac 1 a \int \frac {\d z} {p^2 + q^2 \sin^2 z}\)





Primitive of Function of Constant Multiple: $z = a x$














\(\ds \)

\(=\)







\(\ds \frac 1 a \int \frac 1 {p^2 + q^2 \paren {\frac {2 u} {u^2 + 1} }^2} \frac {2 \rd u} {u^2 + 1}\)





Weierstrass Substitution: $u = \tan \dfrac z 2 = \tan \dfrac {a x} 2$














\(\ds \)

\(=\)







\(\ds \frac 1 a \int \frac {2 \rd u} {\paren {u^2 + 1} \frac {p^2 \paren {u^2 + 1}^2 + 4 q^2 u^2} {\paren {u^2 + 1}^2} }\)





common denominator














\(\ds \)

\(=\)







\(\ds \frac 2 a \int \frac {\paren {u^2 + 1} \rd u} {p^2 \paren {u^2}^2 + \paren {2 p + 4 q^2} u^2 + p}\)





simplifying



$\blacksquare$





