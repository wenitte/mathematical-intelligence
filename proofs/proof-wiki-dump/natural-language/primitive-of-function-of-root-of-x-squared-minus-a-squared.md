# 

Source: https://proofwiki.org/wiki/Primitive_of_Function_of_Root_of_x_squared_minus_a_squared

Theorem
$\ds \int \map F {\sqrt {x^2 - a^2} } \rd x = a \int \map F {a \tan u} \sec u \tan u \rd u$
where $x = a \sec u$.


Proof
First note that:














\(\ds x\)

\(=\)







\(\ds a \sec u\)














\(\ds \leadsto \ \ \)





\(\ds \sqrt {x^2 - a^2}\)

\(=\)







\(\ds \sqrt {\left({a \sec u}\right)^2 - a^2}\)




















\(\ds \)

\(=\)







\(\ds a \sqrt {\sec^2 u - 1}\)





taking $a$ outside the square root














\(\ds \)

\(=\)







\(\ds a \sqrt {\tan^2 u}\)





Difference of Squares of Secant and Tangent




\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds a \tan u\)










Then:














\(\ds x\)

\(=\)







\(\ds a \sec u\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d x} {\d u}\)

\(=\)







\(\ds a \sec u \tan u\)





Derivative of Secant Function








\(\ds \leadsto \ \ \)





\(\ds \int \map F {\sqrt {x^2 - a^2} } \rd x\)

\(=\)







\(\ds \int a \map F {\sqrt {x^2 - a^2} } \sec u \tan u \rd u\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \int a \map F {a \tan u} \sec u \tan u \rd u\)





from $(1)$














\(\ds \)

\(=\)







\(\ds a \int \map F {a \tan u} \sec u \tan u \rd u\)





Primitive of Constant Multiple of Function



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Important Transformations: $14.54$




