# 

Source: https://proofwiki.org/wiki/Primitive_of_Function_of_Arctangent

Theorem
$\ds \int \map F {\arctan \frac x a} \rd x = a \int \map F u \sec^2 u \rd u$
where $u = \arctan \dfrac x a$.


Proof
First note that:














\(\ds u\)

\(=\)







\(\ds \arctan \frac x a\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds a \tan u\)





Definition of Real Arctangent




Then:














\(\ds u\)

\(=\)







\(\ds \arctan \frac x a\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds \frac a {a^2 + x^2}\)





Derivative of Arctangent Function: Corollary








\(\ds \leadsto \ \ \)





\(\ds \int \map F {\arctan \frac x a} \rd x\)

\(=\)







\(\ds \int \map F u \frac {a^2 + x^2} a \rd u\)





Primitive of Composite Function














\(\ds \)

\(=\)







\(\ds \int \map F u \frac {a^2 + a^2 \tan^2 u} a \rd u\)





Definition of $x$














\(\ds \)

\(=\)







\(\ds \int \map F u a^2 \frac {1 + \tan^2 u} a \rd u\)




















\(\ds \)

\(=\)







\(\ds \int \map F u a \sec^2 u \rd u\)





Difference of Squares of Secant and Tangent














\(\ds \)

\(=\)







\(\ds a \int \map F u \sec^2 u \rd u\)





Primitive of Constant Multiple of Function



$\blacksquare$


Also see
Primitive of Function of Arcsine
Primitive of Function of Arccosine
Primitive of Function of Arccotangent
Primitive of Function of Arcsecant
Primitive of Function of Arccosecant




