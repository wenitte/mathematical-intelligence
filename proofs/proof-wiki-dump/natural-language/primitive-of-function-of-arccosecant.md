# 

Source: https://proofwiki.org/wiki/Primitive_of_Function_of_Arccosecant

Theorem
$\ds \int \map F {\arccsc \frac x a} \rd x = -a \int \map F u \size {\csc u} \cot u \rd u$
where $u = \arccsc \dfrac x a$.


Proof
First note that:














\(\ds u\)

\(=\)







\(\ds \arccsc \frac x a\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds a \csc u\)





Definition of Arccosecant




Then:














\(\ds u\)

\(=\)







\(\ds \arccsc \frac x a\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds \frac {-a} {\size x {\sqrt {x^2 - a^2} } }\)





Derivative of Arccosecant Function: Corollary








\(\ds \leadsto \ \ \)





\(\ds \int \map F {\arccsc \frac x a} \rd x\)

\(=\)







\(\ds \int \map F u \frac {\size x {\sqrt {x^2 - a^2} } } {-a} \rd u\)





Primitive of Composite Function














\(\ds \)

\(=\)







\(\ds \int \map F u \frac {\size {a \csc u} {\sqrt {a^2 \csc^2 u - a^2} } } {-a} \rd u\)





Definition of $x$














\(\ds \)

\(=\)







\(\ds \int \map F u \size {\csc u} \paren {-\sqrt {a^2 \csc^2 u - a^2} } \rd u\)




















\(\ds \)

\(=\)







\(\ds \int \map F u \paren {-a} \size {\csc u} {\sqrt {\csc^2 u - 1} } \rd u\)




















\(\ds \)

\(=\)







\(\ds \int \map F u \paren {-a} \size {\csc u} \cot u \rd u\)





Difference of Squares of Cosecant and Cotangent














\(\ds \)

\(=\)







\(\ds -a \int \map F u \size {\csc u} \cot u \rd u\)





Primitive of Constant Multiple of Function



$\blacksquare$


Also see
Primitive of Function of Arcsine
Primitive of Function of Arccosine
Primitive of Function of Arctangent
Primitive of Function of Arccotangent
Primitive of Function of Arcsecant




