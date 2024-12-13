# 

Source: https://proofwiki.org/wiki/Primitive_of_Function_of_Root_of_a_squared_plus_x_squared

Theorem
$\ds \int \map F {\sqrt {a^2 + x^2} } \rd x = a \int \map F {a \sec u} \sec^2 u \rd u$
where $x = a \tan u$.


Proof
First note that:














\(\ds x\)

\(=\)







\(\ds a \tan u\)














\(\ds \leadsto \ \ \)





\(\ds \sqrt {a^2 + x^2}\)

\(=\)







\(\ds \sqrt {a^2 + \paren {a \tan u}^2}\)




















\(\ds \)

\(=\)







\(\ds a \sqrt {1 + \tan^2 u}\)





taking $a$ outside the square root














\(\ds \)

\(=\)







\(\ds a \sqrt {\sec^2 u}\)





Difference of Squares of Secant and Tangent




\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds a \sec u\)










Then:














\(\ds x\)

\(=\)







\(\ds a \tan u\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d x} {\d u}\)

\(=\)







\(\ds a \sec^2 u\)





Derivative of Tangent Function








\(\ds \leadsto \ \ \)





\(\ds \int \map F {\sqrt {a^2 + x^2} } \rd x\)

\(=\)







\(\ds \int a \map F {\sqrt {a^2 + x^2} } \sec^2 u \rd u\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \int a \map F {a \sec u} \sec^2 u \rd u\)





from $(1)$














\(\ds \)

\(=\)







\(\ds a \int \map F {a \sec u} \sec^2 u \rd u\)





Primitive of Constant Multiple of Function



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Important Transformations: $14.53$




