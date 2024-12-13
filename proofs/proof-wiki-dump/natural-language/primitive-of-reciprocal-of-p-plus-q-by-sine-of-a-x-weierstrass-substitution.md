# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_p_plus_q_by_Sine_of_a_x/Weierstrass_Substitution

Lemma for Primitive of Reciprocal of $p + q \sin a x$
The Weierstrass Substitution of $\ds \int \frac {\d x} {p + q \sin a x}$ is:

$\ds \frac 2 a \int \frac {\d u} {p u^2 + 2 q u + p}$
where $u = \tan \dfrac {a x} 2$.


Proof













\(\ds \int \frac {\d x} {p + q \sin a x}\)

\(=\)







\(\ds \frac 1 a \int \frac {\d z} {p + q \sin z}\)





Primitive of Function of Constant Multiple: $z = a x$














\(\ds \)

\(=\)







\(\ds \frac 1 a \int \frac 1 {p + q \frac {2 u} {u^2 + 1} } \frac {2 \rd u} {u^2 + 1}\)





Weierstrass Substitution: $u = \tan \dfrac z 2 = \tan \dfrac {a x} 2$














\(\ds \)

\(=\)







\(\ds \frac 1 a \int \frac {2 \rd u} {\paren {u^2 + 1} \frac {p \paren {u^2 + 1} + 2 q u} {u^2 + 1} }\)





common denominator














\(\ds \)

\(=\)







\(\ds \frac 2 a \int \frac {\d u} {p u^2 + 2 q u + p}\)





simplifying



$\blacksquare$





