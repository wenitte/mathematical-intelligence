# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_square_of_p_plus_q_by_Sine_of_a_x/Weierstrass_Substitution

Lemma for Primitive of Reciprocal of $\paren {p + q \sin a x}^2$
The Weierstrass Substitution for $\ds \int \frac {\d x} {\paren {p + q \sin a x}^2}$ yields:

$\ds \frac 2 a \int \frac {\paren {u^2 + 1} \rd u} {\paren {p u^2 + 2 q u + p}^2}$
where $u = \tan \dfrac {a x} 2$.


Proof













\(\ds \int \frac {\d x} {\paren {p + q \sin a x}^2}\)

\(=\)







\(\ds \frac 1 a \int \frac {\d z} {\paren {p + q \sin z}^2}\)





Primitive of Function of Constant Multiple: $z = a x$














\(\ds \)

\(=\)







\(\ds \frac 1 a \int \frac 1 {\paren {p + q \frac {2 u} {u^2 + 1} }^2} \frac {2 \rd u} {u^2 + 1}\)





Weierstrass Substitution: $u = \tan \dfrac z 2 = \tan \dfrac {a x} 2$














\(\ds \)

\(=\)







\(\ds \frac 1 a \int \frac {2 \rd u} {\paren {u^2 + 1} \paren {\frac {p \paren {u^2 + 1} + 2 q u} {u^2 + 1} }^2}\)





common denominator














\(\ds \)

\(=\)







\(\ds \frac 2 a \int \frac {\paren {u^2 + 1} \rd u} {\paren {p u^2 + 2 q u + p}^2}\)





simplifying



$\blacksquare$





