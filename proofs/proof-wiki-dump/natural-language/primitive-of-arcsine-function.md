# 

Source: https://proofwiki.org/wiki/Primitive_of_Arcsine_Function



Theorem
$\ds \int \arcsin x \rd x = x \arcsin x + \sqrt {1 - x^2} + C$


Corollary
$\ds \int \arcsin \frac x a \rd x = x \arcsin \frac x a + \sqrt {a^2 - x^2} + C$


Proof 1
Let:














\(\ds u\)

\(=\)







\(\ds \arcsin x\)










\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \sin u\)

\(=\)







\(\ds x\)





Definition of Real Arcsine




\(\text {(2)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \cos u\)

\(=\)







\(\ds \sqrt {1 - x^2}\)





Sum of Squares of Sine and Cosine




Then:














\(\ds \int \arcsin x \rd x\)

\(=\)







\(\ds \int u \cos u \rd u\)





Primitive of Function of Arcsine














\(\ds \)

\(=\)







\(\ds \cos u + u \sin u + C\)





Primitive of $x \cos a x$














\(\ds \)

\(=\)







\(\ds \cos u + u x + C\)





Substitution for $\sin u$ from $\paren 1$














\(\ds \)

\(=\)







\(\ds \sqrt {1 - x^2} + u x + C\)





Substitution for $\cos u$ from $\paren 2$














\(\ds \)

\(=\)







\(\ds x \arcsin x + \sqrt {1 - x^2} + C\)





Substitution for $u$ and rearranging



$\blacksquare$


Proof 2
With a view to expressing the primitive in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds \arcsin x\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds \frac 1 {\sqrt {1 - x^2} }\)





Derivative of $\arcsin x$




and let:














\(\ds \frac {\d v} {\d x}\)

\(=\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds x\)





Primitive of Constant




Then:














\(\ds \int \arcsin x \rd x\)

\(=\)







\(\ds x \arcsin x - \int x \paren {\frac 1 {\sqrt {1 - x^2} } } \rd x + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds x \arcsin x - \int \frac {x \rd x} {\sqrt {1 - x^2} } + C\)





simplifying














\(\ds \)

\(=\)







\(\ds x \arcsin x - \paren {-\sqrt {1 - x^2} } + C\)





Primitive of $\dfrac x {\sqrt {a^2 - x^2} }$, with $a := 1$














\(\ds \)

\(=\)







\(\ds x \arcsin x + \sqrt {1 - x^2} + C\)





simplifying



$\blacksquare$


Also see
Primitive of $\arccos x$
Primitive of $\arctan x$
Primitive of $\arccot x$


Sources
1976: K. Weltner and W.J. Weber: Mathematics for Engineers and Scientists ... (previous) ... (next): $6$. Integral Calculus: Appendix: Table of Fundamental Standard Integrals
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Appendix: Table $2$: Integrals
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Appendix: Table $2$: Integrals




