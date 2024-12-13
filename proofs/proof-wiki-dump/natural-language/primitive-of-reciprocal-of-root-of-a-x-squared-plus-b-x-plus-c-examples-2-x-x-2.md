# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_Root_of_a_x_squared_plus_b_x_plus_c/Examples/2_x_-_x%5E2

Example of Use of Primitive of $\dfrac 1 {\sqrt {a x^2 + b x + c} }$
$\ds \int \dfrac {\d x} {\sqrt {2 x - x^2} } = \map \arcsin {x - 1} + C$


Proof
From Primitive of $\dfrac 1 {\sqrt {a x^2 + b x + c} }$ for negative $a$:

$\ds \int \frac {\d x} {\sqrt {a x^2 + b x + c} } = \dfrac {-1} {\sqrt {-a} } \map \arcsin {\dfrac {2 a x + b} {\sqrt {\size {b^2 - 4 a c} } } } + C$
as long as $b^2 - 4 a c \ne 0$.

Substituting for $a$, $b$ and $c$ and simplifying:














\(\ds \int \frac {\d x} {\sqrt {2 x - x^2} }\)

\(=\)







\(\ds \dfrac {-1} {\sqrt 1} \map \arcsin {\dfrac {2 \paren {-1} x + 2} {\sqrt {\size {2^2 - 4 \times \paren {-1} \times 0} } } } + C\)





as $b^2 - 4 a c = 4 \ne 0$














\(\ds \)

\(=\)







\(\ds \dfrac {-1} {\sqrt 1} \map \arcsin {\dfrac {-2 x + 2} {\sqrt 4} } + C\)





simplifying














\(\ds \)

\(=\)







\(\ds -\map \arcsin {1 - x} + C\)





simplifying














\(\ds \)

\(=\)







\(\ds \map \arcsin {x - 1} + C\)





Arcsine is Odd Function



$\blacksquare$


Sources
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text {II}$. Calculus: Exercises $\text {XIV}$: $19$.




