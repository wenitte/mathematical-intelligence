# 

Source: https://proofwiki.org/wiki/Definite_Integral_of_Exponential_of_minus_a_x_squared_from_0_to_Infinity

Theorem
$\ds \int_0^\infty \map \exp {-a x^2} \rd x = \dfrac 1 2 \sqrt {\dfrac \pi a}$
for $a > 0$.


Proof
Recall Integral to Infinity of $\map \exp {-x^2}$:

$\ds \int_0^\infty \map \exp {-x^2} \rd x = \dfrac {\sqrt \pi} 2$

Then:














\(\ds \int \map \exp {-a x^2} \rd x\)

\(=\)







\(\ds \int \map \exp {-\paren {\sqrt a x}^2} \rd x\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {\sqrt a} \int \map \exp {-\paren {\sqrt a x}^2} \rd \paren {\sqrt a x}\)





Primitive of Function of Constant Multiple








\(\ds \leadsto \ \ \)





\(\ds \int_0^\infty \map \exp {-a x^2} \rd x\)

\(=\)







\(\ds \dfrac 1 {\sqrt a} \int_0^\infty \map \exp {-\paren {\sqrt a x}^2} \rd \paren {\sqrt a x}\)





as the limits of integration stay the same














\(\ds \)

\(=\)







\(\ds \dfrac 1 {\sqrt a} \dfrac {\sqrt \pi} 2\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 2 \sqrt {\dfrac \pi a}\)









$\blacksquare$


Sources
1968: George B. Thomas, Jr.: Calculus and Analytic Geometry (4th ed.) ... (previous) ... (next): Back endpapers: A Brief Table of Integrals: $140$.




