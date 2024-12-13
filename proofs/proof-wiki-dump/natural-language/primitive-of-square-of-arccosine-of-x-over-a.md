# 

Source: https://proofwiki.org/wiki/Primitive_of_Square_of_Arccosine_of_x_over_a



Theorem
$\ds \int \paren {\arccos \frac x a}^2 \rd x = x \paren {\arccos \frac x a}^2 - 2 x - 2 \sqrt {a^2 - x^2} \arccos \frac x a + C$


Proof
Let:














\(\ds u\)

\(=\)







\(\ds \arccos \frac x a\)










\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \cos u\)

\(=\)







\(\ds \frac x a\)





Definition of Real Arccosine




\(\text {(2)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \sin u\)

\(=\)







\(\ds \sqrt {1 - \frac {x^2} {a^2} }\)





Sum of Squares of Sine and Cosine




Then:














\(\ds \int \paren {\arccos \frac x a}^2 \rd x\)

\(=\)







\(\ds -a \int u^2 \sin u \rd x\)





Primitive of Function of Arccosine














\(\ds \)

\(=\)







\(\ds -a \paren {2 u \sin u + \paren {2 - u^2} \cos u} + C\)





Primitive of $x^2 \sin a x$ where $a = 1$














\(\ds \)

\(=\)







\(\ds -a \paren {2 \arccos \frac x a \sqrt {1 - \frac {x^2} {a^2} } + \paren {2 - \paren {\arccos \frac x a}^2} \frac x a} + C\)





substituting for $u$, $\sin u$ and $\cos u$














\(\ds \)

\(=\)







\(\ds x \paren {\arccos \frac x a}^2 - 2 x - 2 \sqrt {a^2 - x^2} \arccos \frac x a + C\)





simplifying



$\blacksquare$


Also see
Primitive of $\paren {\arcsin \dfrac x a}^2$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving Inverse Trigonometric Functions: $14.482$




