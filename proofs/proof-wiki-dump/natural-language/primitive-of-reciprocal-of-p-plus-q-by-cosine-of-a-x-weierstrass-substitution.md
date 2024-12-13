# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_p_plus_q_by_Cosine_of_a_x/Weierstrass_Substitution

Lemma for Primitive of Reciprocal of $p + q \cos a x$
The Weierstrass Substitution of $\ds \int \frac {\d x} {p + q \cos a x}$ is:

$\ds \frac 2 {a \paren {p - q} } \int \frac {\d u} {u^2 + \dfrac {p + q} {p - q} }$
where $u = \tan \dfrac {a x} 2$.


Proof













\(\ds \int \frac {\d x} {p + q \cos a x}\)

\(=\)







\(\ds \frac 1 a \int \frac {\d z} {p + q \cos z}\)





Primitive of Function of Constant Multiple: $z = a x$














\(\ds \)

\(=\)







\(\ds \frac 1 a \int \frac 1 {p + q \paren {\frac {1 - u^2} {1 + u^2} } } \frac {2 \rd u} {1 + u^2}\)





Weierstrass Substitution: $u = \tan \dfrac z 2 = \tan \dfrac {a x} 2$














\(\ds \)

\(=\)







\(\ds \frac 1 a \int \frac {2 \rd u} {\paren {1 + u^2} \paren {\frac {p \paren {1 + u^2} + q \paren {1 - u^2} } {1 + u^2} } }\)





common denominator














\(\ds \)

\(=\)







\(\ds \frac 2 a \int \frac {\d u} {\paren {p - q} u^2 + \paren {p + q} }\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac 2 {a \paren {p - q} } \int \frac {\d u} {u^2 + \dfrac {p + q} {p - q} }\)





simplifying further



$\blacksquare$





