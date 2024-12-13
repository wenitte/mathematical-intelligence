# 

Source: https://proofwiki.org/wiki/Primitive_of_Arcsine_of_x_over_a



Theorem
$\ds \int \arcsin \frac x a \rd x = x \arcsin \frac x a + \sqrt {a^2 - x^2} + C$


Proof 1













\(\ds \int \arcsin x \rd x\)

\(=\)







\(\ds x \arcsin x + \sqrt {1 - x^2} + C\)





Primitive of $\arcsin x$








\(\ds \leadsto \ \ \)





\(\ds \int \arcsin \frac x a \rd x\)

\(=\)







\(\ds \frac 1 {1 / a} \paren {\frac x a \arcsin \frac x a + \sqrt {1 - \paren {\dfrac x a}^2} } + C\)





Primitive of Function of Constant Multiple














\(\ds \)

\(=\)







\(\ds x \arcsin \frac x a + \sqrt {a^2 - x^2} + C\)





after simplifying



$\blacksquare$


Proof 2
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


Proof 3
With a view to expressing the primitive in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds \arcsin \frac x a\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds \frac 1 {\sqrt {a^2 - x^2} }\)





Derivative of $\arcsin \dfrac x a$




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














\(\ds \int \arcsin \frac x a \rd x\)

\(=\)







\(\ds x \arcsin \frac x a - \int x \paren {\frac 1 {\sqrt {a^2 - x^2} } } \rd x + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds x \arcsin \frac x a - \int \frac {x \rd x} {\sqrt {a^2 - x^2} } + C\)





simplifying














\(\ds \)

\(=\)







\(\ds x \arcsin \frac x a - \paren {-\sqrt {a^2 - x^2} } + C\)





Primitive of $\dfrac x {\sqrt {a^2 - x^2} }$














\(\ds \)

\(=\)







\(\ds x \arcsin \frac x a + \sqrt {a^2 - x^2} + C\)





simplifying



$\blacksquare$


Also see
Primitive of $\arccos \dfrac x a$
Primitive of $\arctan \dfrac x a$
Primitive of $\arccot \dfrac x a$
Primitive of $\arcsec \dfrac x a$
Primitive of $\arccsc \dfrac x a$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving Inverse Trigonometric Functions: $14.471$
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): Appendix $2$: Table of derivatives and integrals of common functions: Inverse trigonometric functions




