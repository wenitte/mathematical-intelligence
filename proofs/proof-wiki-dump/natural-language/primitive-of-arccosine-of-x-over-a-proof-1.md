# 

Source: https://proofwiki.org/wiki/Primitive_of_Arccosine_of_x_over_a/Proof_1

Theorem
$\ds \int \arccos \frac x a \rd x = x \arccos \frac x a - \sqrt {a^2 - x^2} + C$


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





\(\ds \cos u\)

\(=\)







\(\ds \sqrt {1 - \frac {x^2} {a^2} }\)





Sum of Squares of Sine and Cosine




Then:














\(\ds \int \arccos \frac x a \rd x\)

\(=\)







\(\ds -a \int u \sin u \rd u\)





Primitive of Function of Arccosine














\(\ds \)

\(=\)







\(\ds -a \paren {\sin u - u \cos u} + C\)





Primitive of $x \sin a x$














\(\ds \)

\(=\)







\(\ds -a \paren {\sin u - u \frac x a} + C\)





Substitution for $\cos u$ from $(1)$














\(\ds \)

\(=\)







\(\ds -a \paren {\sqrt {1 - \frac {x^2} {a^2} } - u \frac x a} + C\)





Substitution for $\sin u$ from $(2)$














\(\ds \)

\(=\)







\(\ds -a \paren {\sqrt {1 - \frac {x^2} {a^2} } - \frac x a \arccos \frac x a} + C\)





Substitution for $u$














\(\ds \)

\(=\)







\(\ds x \arccos \frac x a - \sqrt {a^2 - x^2} + C\)





simplifying



$\blacksquare$





