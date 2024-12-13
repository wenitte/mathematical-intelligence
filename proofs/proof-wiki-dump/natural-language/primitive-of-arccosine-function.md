# 

Source: https://proofwiki.org/wiki/Primitive_of_Arccosine_Function



Theorem
$\ds \int \arccos x \rd x = x \arccos x - \sqrt {1 - x^2} + C$


Corollary
$\ds \int \arccos \frac x a \rd x = x \arccos \frac x a - \sqrt {a^2 - x^2} + C$


Proof 1
Let:














\(\ds u\)

\(=\)







\(\ds \arccos x\)










\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \cos u\)

\(=\)







\(\ds x\)





Definition of Real Arccosine




\(\text {(2)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \cos u\)

\(=\)







\(\ds \sqrt {1 - x^2}\)





Sum of Squares of Sine and Cosine




Then:














\(\ds \int \arccos x \rd x\)

\(=\)







\(\ds -\int u \sin u \rd u\)





Primitive of Function of Arccosine














\(\ds \)

\(=\)







\(\ds -\paren {\sin u - u \cos u} + C\)





Primitive of $x \sin a x$, setting $a := 1$














\(\ds \)

\(=\)







\(\ds -\paren {\sin u - u x} + C\)





Substitution for $\cos u$ from $(1)$














\(\ds \)

\(=\)







\(\ds -\paren {\sqrt {1 - x^2} - u x} + C\)





Substitution for $\sin u$ from $(2)$














\(\ds \)

\(=\)







\(\ds -\paren {\sqrt {1 - x^2} - x \arccos x} + C\)





Substitution for $u$














\(\ds \)

\(=\)







\(\ds x \arccos x - \sqrt {1 - x^2} + C\)





simplifying



$\blacksquare$


Proof 2
With a view to expressing the primitive in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds \arccos x\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds \frac {-1} {\sqrt {a^2 - 1} }\)





Derivative of $\arccos \dfrac x a$, setting $a := 1$




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














\(\ds \int \arccos x \rd x\)

\(=\)







\(\ds x \arccos x - \int x \paren {\frac {-1} {\sqrt {1 - x^2} } } \rd x + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds x \arccos x + \int \frac {x \rd x} {\sqrt {1 - x^2} } + C\)





simplifying














\(\ds \)

\(=\)







\(\ds x \arccos x + \paren {-\sqrt {1 - x^2} } + C\)





Primitive of $\dfrac x {\sqrt {1 - x^2} }$














\(\ds \)

\(=\)







\(\ds x \arccos x - \sqrt {1 - x^2} + C\)





simplifying



$\blacksquare$


Also see
Primitive of $\arcsin x$
Primitive of $\arctan x$
Primitive of $\arccot x$


Sources
1976: K. Weltner and W.J. Weber: Mathematics for Engineers and Scientists ... (previous) ... (next): $6$. Integral Calculus: Appendix: Table of Fundamental Standard Integrals
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Appendix: Table $2$: Integrals
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Appendix: Table $2$: Integrals




