# 

Source: https://proofwiki.org/wiki/Primitive_of_Function_of_Root_of_a_squared_minus_x_squared

Theorem
$\ds \int \map F {\sqrt {a^2 - x^2} } \rd x = a \int \map F {a \cos u} \cos u \rd u$
where $x = a \sin u$.


Proof
First note that:














\(\ds x\)

\(=\)







\(\ds a \sin u\)














\(\ds \leadsto \ \ \)





\(\ds \sqrt {a^2 - x^2}\)

\(=\)







\(\ds \sqrt {a^2 - \paren {a \sin u}^2}\)




















\(\ds \)

\(=\)







\(\ds a \sqrt {1 - \sin^2 u}\)





taking $a$ outside the square root




\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds a \cos u\)





Sum of Squares of Sine and Cosine




Then:














\(\ds x\)

\(=\)







\(\ds a \sin u\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d x} {\d u}\)

\(=\)







\(\ds a \cos u\)





Derivative of Sine Function








\(\ds \leadsto \ \ \)





\(\ds \int \map F {\sqrt {a^2 - x^2} } \rd x\)

\(=\)







\(\ds \int a \map F {\sqrt {a^2 - x^2} } \cos u \rd u\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \int a \map F {a \cos u} \cos u \rd u\)





from $(1)$














\(\ds \)

\(=\)







\(\ds a \int \map F {a \cos u} \cos u \rd u\)





Primitive of Constant Multiple of Function



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Important Transformations: $14.52$




