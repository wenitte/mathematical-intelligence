# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_Root_of_a_squared_minus_x_squared_cubed/Proof_2

Theorem
$\ds \int \frac {\d x} {\paren {\sqrt {a^2 - x^2} }^3} = \frac x {a^2 \sqrt {a^2 - x^2} } + C$


Proof
Let:














\(\ds x\)

\(=\)







\(\ds a \sin u\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac {\d x} {\d u}\)

\(=\)







\(\ds a \cos u\)





Derivative of Sine Function








\(\ds \leadsto \ \ \)





\(\ds a^2 - x^2\)

\(=\)







\(\ds a^2 \cos^2 u\)





Sum of Squares of Sine and Cosine



Hence:














\(\ds \int \frac {\d x} {\paren {\sqrt {a^2 - x^2} }^3}\)

\(=\)







\(\ds \int \frac {a \cos u \rd u} {a^3 \cos^3 u}\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \dfrac 1 {a^2} \int \sec^2 u \rd u\)





Secant is Reciprocal of Cosine














\(\ds \)

\(=\)







\(\ds \dfrac 1 {a^2} \tan u + c\)





Primitive of Secant Function














\(\ds \)

\(=\)







\(\ds \dfrac 1 {a^2} \dfrac {a \sin u} {a \cos u} + C\)





Definition of Real Tangent Function














\(\ds \)

\(=\)







\(\ds \dfrac x {a^2 \sqrt {a^2 - x^2} } + C\)





substituting for $a \sin u$ and $a \cos u$



$\blacksquare$


Sources
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text {II}$. Calculus: Integration: Useful substitutions: Example




