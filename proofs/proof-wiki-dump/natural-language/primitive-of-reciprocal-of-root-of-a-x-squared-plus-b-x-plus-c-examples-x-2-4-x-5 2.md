# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_Root_of_a_x_squared_plus_b_x_plus_c/Examples/x%5E2_%2B_4_x_%2B_5

Example of Use of Primitive of $\dfrac 1 {\sqrt {a x^2 + b x + c} }$
$\ds \int \dfrac {\d x} {\sqrt {x^2 + 4 x + 5} } = \map \ln {x + 2 + \sqrt {x^2 + 4 x + 5} } + C$


Proof
We aim to use Primitive of $\dfrac 1 {\sqrt {a x^2 + b x + c} }$ with:














\(\ds a\)

\(=\)







\(\ds 1\)




















\(\ds b\)

\(=\)







\(\ds 4\)




















\(\ds c\)

\(=\)







\(\ds 5\)









We note that:














\(\ds b^2 - 4 a c\)

\(=\)







\(\ds 4^2 - 4 \times 1 \times 5\)




















\(\ds \)

\(=\)







\(\ds 16 - 20\)




















\(\ds \)

\(=\)







\(\ds -4\)










Hence from Primitive of $\dfrac 1 {\sqrt {a x^2 + b x + c} }$:

$\ds \int \frac {\d x} {\sqrt {a x^2 + b x + c} } = \dfrac 1 {\sqrt a} \map \arsinh {\dfrac {2 a x + b} {\sqrt {4 a c - b^2} } } + C$

Substituting for $a$, $b$ and $c$ and simplifying:














\(\ds \int \frac {\d x} {\sqrt {x^2 + 4 x + 5} }\)

\(=\)







\(\ds \dfrac 1 {\sqrt 1} \map \arsinh {\dfrac {2 \cdot 1 \cdot x + 4} {\sqrt {4 \cdot 1 \cdot 5 - 4^2} } } + C\)




















\(\ds \)

\(=\)







\(\ds \map \arsinh {x + 2} + C\)





simplifying














\(\ds \)

\(=\)







\(\ds \map \ln {x + 2 + \sqrt {\paren {x + 2}^2 + 1} } + C\)





Definition 2 of Inverse Hyperbolic Sine














\(\ds \)

\(=\)







\(\ds \map \ln {x + 2 + \sqrt {x^2 + 4 x + 5} } + C\)





simplification



$\blacksquare$


Sources
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text {II}$. Calculus: Exercises $\text {XIV}$: $16$.




