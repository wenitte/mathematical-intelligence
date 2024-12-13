# 

Source: https://proofwiki.org/wiki/Primitive_of_Function_of_Arcsine



Theorem
$\ds \int \map F {\arcsin \frac x a} \rd x = a \int \map F u \cos u \rd u$
where $u = \arcsin \dfrac x a$.


Proof
First note that:














\(\ds u\)

\(=\)







\(\ds \arcsin \frac x a\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds a \sin u\)





Definition of Real Arcsine




Then:














\(\ds u\)

\(=\)







\(\ds \arcsin \frac x a\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds \frac 1 {\sqrt {a^2 - x^2} }\)





Derivative of Arcsine Function: Corollary








\(\ds \leadsto \ \ \)





\(\ds \int \map F {\arcsin \frac x a} \rd x\)

\(=\)







\(\ds \int \map F u \sqrt {a^2 - x^2} \rd u\)





Primitive of Composite Function














\(\ds \)

\(=\)







\(\ds \int \map F u \sqrt {a^2 - a^2 \sin^2 u} \rd u\)





Definition of $x$














\(\ds \)

\(=\)







\(\ds \int \map F u a \sqrt {1 - \sin^2 u} \rd u\)




















\(\ds \)

\(=\)







\(\ds \int \map F u a \cos u \rd u\)





Sum of Squares of Sine and Cosine














\(\ds \)

\(=\)







\(\ds a \int \map F u \cos u \rd u\)





Primitive of Constant Multiple of Function



$\blacksquare$


Also see
Primitive of Function of Arccosine
Primitive of Function of Arctangent
Primitive of Function of Arccotangent
Primitive of Function of Arcsecant
Primitive of Function of Arccosecant


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Important Transformations: $14.57$




