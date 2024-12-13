# 

Source: https://proofwiki.org/wiki/Primitive_of_Arcsine_of_x_over_a/Proof_2

Theorem
$\ds \int \arcsin \frac x a \rd x = x \arcsin \frac x a + \sqrt {a^2 - x^2} + C$


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














\(\ds \int \arcsin \frac x a \rd x\)

\(=\)







\(\ds a \int u \cos u \rd u\)





Primitive of Function of Arcsine














\(\ds \)

\(=\)







\(\ds a \paren {\cos u + u \sin u} + C\)





Primitive of $x \cos a x$














\(\ds \)

\(=\)







\(\ds a \paren {\cos u + u \frac x a} + C\)





Substitution for $\sin u$ from $\paren 1$














\(\ds \)

\(=\)







\(\ds a \paren {\sqrt {1 - \frac {x^2} {a^2} } + u \frac x a} + C\)





Substitution for $\cos u$ from $\paren 2$














\(\ds \)

\(=\)







\(\ds a \paren {\sqrt {1 - \frac {x^2} {a^2} } + \frac x a \arcsin \frac x a} + C\)





Substitution for $u$














\(\ds \)

\(=\)







\(\ds x \arcsin \frac x a + \sqrt {a^2 - x^2} + C\)





simplifying



$\blacksquare$





