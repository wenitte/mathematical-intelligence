# 

Source: https://proofwiki.org/wiki/Primitive_of_Arctangent_of_x_over_a



Theorem
$\ds \int \arctan \frac x a \rd x = x \arctan \frac x a - \frac a 2 \map \ln {x^2 + a^2} + C$


Proof 1
Let:














\(\ds u\)

\(=\)







\(\ds \arctan \frac x a\)










\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \tan u\)

\(=\)







\(\ds \frac x a\)





Definition of Real Arctangent




\(\text {(2)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \sec u\)

\(=\)







\(\ds \sqrt {1 + \frac {x^2} {a^2} }\)





Difference of Squares of Secant and Tangent




Then:














\(\ds \int \arctan \frac x a \rd x\)

\(=\)







\(\ds a \int u \sec^2 u \rd u\)





Primitive of Function of Arctangent














\(\ds \)

\(=\)







\(\ds a \paren {u \tan u + \ln \size {\cos u} } + C\)





Primitive of $x \sec^2 a x$ with $a = 1$














\(\ds \)

\(=\)







\(\ds a u \tan u - a \ln \size {\sec u} + C\)





Logarithm of Reciprocal and Secant is Reciprocal of Cosine














\(\ds \)

\(=\)







\(\ds a u \frac x a - a \ln \size {\sec u} + C\)





Substitution for $\tan u$ from $\paren 1$














\(\ds \)

\(=\)







\(\ds a u \frac x a - a \ln \size {\sqrt {1 + \frac {x^2} {a^2} } } + C\)





Substitution for $\sec u$ from $\paren 2$














\(\ds \)

\(=\)







\(\ds x \arctan \frac x a - a \ln \size {\sqrt {1 + \frac {x^2} {a^2} } } + C\)





Substitution for $u$














\(\ds \)

\(=\)







\(\ds x \arctan \frac x a - \frac a 2 \ln \size {\frac {x^2 + a^2 } {a^2} } + C\)





Logarithm of Power and simplifying














\(\ds \)

\(=\)







\(\ds x \arctan \frac x a - \frac a 2 \ln \size {x^2 + a^2} - \ln \size {a^2} + C\)





Difference of Logarithms














\(\ds \)

\(=\)







\(\ds x \arctan \frac x a - \frac a 2 \ln \size {x^2 + a^2} + C\)





subsuming $\ln \size {a^2}$ into arbitrary constant














\(\ds \)

\(=\)







\(\ds x \arctan \frac x a - \frac a 2 \map \ln {x^2 + a^2} + C\)





$x^2 + a^2$ always positive



$\blacksquare$


Proof 2
With a view to expressing the primitive in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds \arctan \frac x a\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds \frac a {x^2 + a^2}\)





Derivative of $\arctan \dfrac x a$




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














\(\ds \int \arctan \frac x a \rd x\)

\(=\)







\(\ds x \arctan \frac x a - \int x \paren {\frac a {x^2 + a^2} } \rd x + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds x \arctan \frac x a - a \int \frac {x \rd x} {x^2 + a^2} + C\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds x \arctan \frac x a - a \paren {\frac 1 2 \ln \paren {x^2 + a^2} } + C\)





Primitive of $\dfrac x {x^2 + a^2}$














\(\ds \)

\(=\)







\(\ds x \arctan \frac x a - \frac a 2 \ln \paren {x^2 + a^2} + C\)





simplifying



$\blacksquare$


Proof 3













\(\ds \int \arctan x \rd x\)

\(=\)







\(\ds x \arctan x - \frac {\map \ln {x^2 + 1} } 2 + C\)





Primitive of $\arctan x$








\(\ds \leadsto \ \ \)





\(\ds \int \arctan \frac x a \rd x\)

\(=\)







\(\ds \frac 1 {1 / a} \paren {\frac x a \arctan \frac x a - \dfrac 1 2 \map \ln {\paren {\frac x a}^2 + 1} } + C\)





Primitive of Function of Constant Multiple














\(\ds \)

\(=\)







\(\ds x \arctan \frac x a - \frac a 2 \map \ln {x^2 + a^2} + C\)





after simplifying



$\blacksquare$


Also see
Primitive of $\arcsin \dfrac x a$
Primitive of $\arccos \dfrac x a$
Primitive of $\arccot \dfrac x a$
Primitive of $\arcsec \dfrac x a$
Primitive of $\arccsc \dfrac x a$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving Inverse Trigonometric Functions: $14.483$
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): Appendix $2$: Table of derivatives and integrals of common functions: Inverse trigonometric functions




