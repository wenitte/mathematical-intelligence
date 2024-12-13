# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_Cosine_of_a_x_by_1_plus_Sine_of_a_x/Weierstrass_Substitution

Lemma for Primitive of Reciprocal of $\cos a x \paren {1 + \sin a x}$
The Weierstrass Substitution of $\ds \int \frac {\d x} {\cos a x \paren {1 + \sin a x} }$ is:

$\ds \frac 2 a \int \frac {\d u} {\paren {1 - u} \paren {1 + u}^3}$
where $u = \tan \dfrac {a x} 2$.


Proof













\(\ds \int \frac {\d x} {\cos a x \paren {1 + \sin a x} }\)

\(=\)







\(\ds \frac 1 a \int \frac {\d z} {\cos z \paren {1 + \sin z} }\)





Primitive of Function of Constant Multiple: $z = a x$














\(\ds \)

\(=\)







\(\ds \frac 1 a \int \frac {\dfrac {2 \rd u} {1 + u^2} } {\dfrac {1 - u^2} {1 + u^2} \paren {1 + \dfrac {2 u} {1 + u^2} } }\)





Weierstrass Substitution: $u = \tan \dfrac z 2 = \tan \dfrac {a x} 2$














\(\ds \)

\(=\)







\(\ds \frac 2 a \int \frac {\d u} {\paren {1 - u^2} \paren {1 + u^2 + 2 u} }\)





multiplying top and bottom by $1 + u^2$














\(\ds \)

\(=\)







\(\ds \frac 2 a \int \frac {\d u} {\paren {1 - u^2} \paren {1 + u}^2}\)





Square of Sum














\(\ds \)

\(=\)







\(\ds \frac 2 a \int \frac {\d u} {\paren {1 - u} \paren {1 + u} \paren {1 + u}^2}\)





Difference of Two Squares














\(\ds \)

\(=\)







\(\ds \frac 2 a \int \frac {\d u} {\paren {1 - u} \paren {1 + u}^3}\)





simplifying



$\blacksquare$





