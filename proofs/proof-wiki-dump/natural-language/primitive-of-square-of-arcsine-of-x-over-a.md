# 

Source: https://proofwiki.org/wiki/Primitive_of_Square_of_Arcsine_of_x_over_a



Theorem
$\ds \int \paren {\arcsin \frac x a}^2 \rd x = x \paren {\arcsin \frac x a}^2 - 2 x + 2 \sqrt{a^2 - x^2} \arcsin \frac x a + C$


Proof
Let:














\(\ds u\)

\(=\)







\(\ds \arcsin \frac x a\)










\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \sin u\)

\(=\)







\(\ds \frac x a\)





Definition of Real Arcsine




\(\text {(2)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \cos u\)

\(=\)







\(\ds \sqrt {1 - \frac {x^2} {a^2} }\)





Sum of Squares of Sine and Cosine




Then:














\(\ds \int \paren {\arcsin \frac x a}^2 \rd x\)

\(=\)







\(\ds a \int u^2 \cos u \rd x\)





Primitive of Function of Arcsine














\(\ds \)

\(=\)







\(\ds a \paren {2 u \cos u + \paren {u^2 - 2} \sin u} + C\)





Primitive of $x^2 \cos a x$














\(\ds \)

\(=\)







\(\ds a \paren {2 \arcsin \frac x a \sqrt {1 - \frac {x^2} {a^2} } + \paren {\paren {\arcsin \frac x a}^2 - 2} \frac x a} + C\)





substituting for $u$, $\sin u$ and $\cos u$














\(\ds \)

\(=\)







\(\ds x \paren {\arcsin \frac x a}^2 - 2 x + 2 \sqrt{a^2 - x^2} \arcsin \frac x a + C\)





simplifying



$\blacksquare$


Also see
Primitive of $\paren {\arccos \dfrac x a}^2$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving Inverse Trigonometric Functions: $14.476$




