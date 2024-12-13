# 

Source: https://proofwiki.org/wiki/Primitive_of_Function_of_Arccosine

Theorem
$\ds \int \map F {\arccos \frac x a} \rd x = -a \int \map F u \sin u \rd u$
where $u = \arccos \dfrac x a$.


Proof
First note that:














\(\ds u\)

\(=\)







\(\ds \arccos \frac x a\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds a \cos u\)





Definition of Real Arccosine




Then:














\(\ds u\)

\(=\)







\(\ds \arccos \frac x a\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds \frac {-1} {\sqrt {a^2 - x^2} }\)





Derivative of Arccosine Function: Corollary








\(\ds \leadsto \ \ \)





\(\ds \int \map F {\arccos \frac x a} \rd x\)

\(=\)







\(\ds \int \map F u \paren {-\sqrt {a^2 - x^2} } \rd u\)





Primitive of Composite Function














\(\ds \)

\(=\)







\(\ds \int \map F u \paren {-\sqrt {a^2 - a^2 \cos^2 u} } \rd u\)





Definition of $x$














\(\ds \)

\(=\)







\(\ds \int \map F u a \paren {-\sqrt {1 - \cos^2 u} } \rd u\)




















\(\ds \)

\(=\)







\(\ds \int \map F u a \paren {-\sin u} \rd u\)





Sum of Squares of Sine and Cosine














\(\ds \)

\(=\)







\(\ds -a \int\map F u \sin u \rd u\)





Primitive of Constant Multiple of Function



$\blacksquare$


Also see
Primitive of Function of Arcsine
Primitive of Function of Arctangent
Primitive of Function of Arccotangent
Primitive of Function of Arcsecant
Primitive of Function of Arccosecant




