# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_p_by_Sine_of_a_x_plus_q_by_1_plus_Cosine_of_a_x

Theorem
$\ds \int \frac {\rd x} {p \sin a x + q \paren {1 + \cos a x} } = \frac 1 {a p} \ln \size {q + p \tan \frac {a x} 2} + C$


Proof
Let $z = a x$.
Then $\d x = \dfrac {\d z} a$ and so:
$(1): \quad \ds \int \frac {\rd x} {p \sin a x + q \paren {1 + \cos a x} } = \dfrac 1 a \int \frac {\rd z} {p \sin z + q \paren {1 + \cos z} }$

Then:














\(\ds u\)

\(=\)







\(\ds \tan \frac z 2\)














\(\ds \leadsto \ \ \)





\(\ds \int \frac {\rd z} {p \sin z + q \paren {1 + \cos z} }\)

\(=\)







\(\ds \int \frac {\frac {2 \rd u} {\paren {1 + u^2} } } {p \frac {2 u} {1 + u^2} + q \paren {1 + \frac {1 - u^2} {1 + u^2} } }\)





Weierstrass Substitution














\(\ds \)

\(=\)







\(\ds \int \frac {2 \rd u} {2 p u + q \paren {1 + u^2 + 1 - u^2} }\)





multiplying top and bottom by $1 + u^2$














\(\ds \)

\(=\)







\(\ds \int \frac {\d u} {p u + q}\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac 1 p \ln \size {p u + q} + C\)





Primitive of $\dfrac 1 {a x + b}$














\(\ds \)

\(=\)







\(\ds \frac 1 p \ln \size {q + p \tan \frac z 2} + C\)





substituting for $u$














\(\ds \)

\(=\)







\(\ds \frac 1 {a p} \ln \size {q + p \tan \frac {a x} 2} + C\)





from $(1)$



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sin a x$ and $\cos a x$: $14.421$




