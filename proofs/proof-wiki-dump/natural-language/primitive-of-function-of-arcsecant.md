# 

Source: https://proofwiki.org/wiki/Primitive_of_Function_of_Arcsecant

Theorem
$\ds \int \map F {\arcsec \frac x a} \rd x = a \int \map F u \sec u \tan u \rd u$
where $u = \arcsec \dfrac x a$.


Proof
First note that:














\(\ds u\)

\(=\)







\(\ds \arcsec \frac x a\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds a \sec u\)





Definition of Arcsecant




Then:














\(\ds u\)

\(=\)







\(\ds \arcsec \frac x a\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds \frac a {\size x {\sqrt {x^2 - a^2} } }\)





Derivative of Arcsecant Function: Corollary 1








\(\ds \leadsto \ \ \)





\(\ds \int \map F {\arcsec \frac x a} \rd x\)

\(=\)







\(\ds \int \map F u \, \frac {\size x {\sqrt {x^2 - a^2} } } a \rd u\)





Primitive of Composite Function














\(\ds \)

\(=\)







\(\ds \int \map F u \frac {\size {a \sec u} {\sqrt {a^2 \sec^2 u - a^2} } } a \rd u\)





Definition of $x$














\(\ds \)

\(=\)







\(\ds \int \map F u \size {\sec u} {\sqrt {a^2 \sec^2 u - a^2} } \rd u\)




















\(\ds \)

\(=\)







\(\ds \int \map F u a \sec u {\sqrt {\sec^2 u - 1} } \rd u\)





$\sec u > 0$ in this domain














\(\ds \)

\(=\)







\(\ds \int \map F u a \sec u \tan u \rd u\)





Difference of Squares of Secant and Tangent














\(\ds \)

\(=\)







\(\ds a \int \map F u \sec u \tan u \rd u\)





Primitive of Constant Multiple of Function



$\blacksquare$


Also see
Primitive of Function of Arcsine
Primitive of Function of Arccosine
Primitive of Function of Arctangent
Primitive of Function of Arccotangent
Primitive of Function of Arccosecant




