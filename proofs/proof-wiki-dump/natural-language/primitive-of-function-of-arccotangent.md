# 

Source: https://proofwiki.org/wiki/Primitive_of_Function_of_Arccotangent

Theorem
$\ds \int \map F {\arccot \frac x a} \rd x = -a \int \map F u \csc^2 u \rd u$
where $u = \arccot \dfrac x a$.


Proof
First note that:














\(\ds u\)

\(=\)







\(\ds \arccot \frac x a\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds a \cot u\)





Definition of Arccotangent




Then:














\(\ds u\)

\(=\)







\(\ds \arccot \frac x a\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds \frac {-a} {a^2 + x^2}\)





Derivative of Arccotangent Function: Corollary








\(\ds \leadsto \ \ \)





\(\ds \int \map F {\arccot \frac x a} \rd x\)

\(=\)







\(\ds \int \map F u \frac {a^2 + x^2} {-a} \rd u\)





Primitive of Composite Function














\(\ds \)

\(=\)







\(\ds \int \map F u \frac {a^2 + a^2 \cot^2 u} {-a} \rd u\)





Definition of $x$














\(\ds \)

\(=\)







\(\ds \int \map F u a^2 \frac {1 + \cot^2 u} {-a} \rd u\)




















\(\ds \)

\(=\)







\(\ds \int \map F u \paren {-a} \csc^2 u \rd u\)





Difference of Squares of Cosecant and Cotangent














\(\ds \)

\(=\)







\(\ds -a \int \map F u \csc^2 u \rd u\)





Primitive of Constant Multiple of Function



$\blacksquare$


Also see
Primitive of Function of Arcsine
Primitive of Function of Arccosine
Primitive of Function of Arctangent
Primitive of Function of Arcsecant
Primitive of Function of Arccosecant




