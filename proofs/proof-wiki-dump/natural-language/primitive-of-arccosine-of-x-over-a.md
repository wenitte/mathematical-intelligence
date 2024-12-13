# 

Source: https://proofwiki.org/wiki/Primitive_of_Arccosine_of_x_over_a



Theorem
$\ds \int \arccos \frac x a \rd x = x \arccos \frac x a - \sqrt {a^2 - x^2} + C$


Proof 1
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


Proof 2
With a view to expressing the primitive in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds \arccos \frac x a\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds \frac {-1} {\sqrt {a^2 - x^2} }\)





Derivative of $\arccos \dfrac x a$




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














\(\ds \int \arccos \frac x a \rd x\)

\(=\)







\(\ds x \arccos \frac x a - \int x \paren {\frac {-1} {\sqrt {a^2 - x^2} } } \rd x + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds x \arccos \frac x a + \int \frac {x \rd x} {\sqrt {a^2 - x^2} } + C\)





simplifying














\(\ds \)

\(=\)







\(\ds x \arccos \frac x a + \paren {-\sqrt {a^2 - x^2} } + C\)





Primitive of $\dfrac x {\sqrt {a^2 - x^2} }$














\(\ds \)

\(=\)







\(\ds x \arccos \frac x a - \sqrt {a^2 - x^2} + C\)





simplifying



$\blacksquare$


Proof 3













\(\ds \int \arccos x \rd x\)

\(=\)







\(\ds x \arccos x - \sqrt {1 - x^2} + C\)





Primitive of $\arccos x$








\(\ds \leadsto \ \ \)





\(\ds \int \arccos \frac x a \rd x\)

\(=\)







\(\ds \frac 1 {1 / a} \paren {\frac x a \arccos \frac x a - \sqrt {1 - \paren {\dfrac x a}^2} } + C\)





Primitive of Function of Constant Multiple














\(\ds \)

\(=\)







\(\ds x \arccos \frac x a - \sqrt {a^2 - x^2} + C\)





after simplifying



$\blacksquare$


Also see
Primitive of $\arcsin \dfrac x a$
Primitive of $\arctan \dfrac x a$
Primitive of $\arccot \dfrac x a$
Primitive of $\arcsec \dfrac x a$
Primitive of $\arccsc \dfrac x a$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving Inverse Trigonometric Functions: $14.477$
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): Appendix $2$: Table of derivatives and integrals of common functions: Inverse trigonometric functions




