# 

Source: https://proofwiki.org/wiki/Primitive_of_x_by_Power_of_Root_of_x_squared_minus_a_squared



Theorem
$\ds \int x \paren {\sqrt {x^2 - a^2} }^n \rd x = \dfrac {\paren {\sqrt {x^2 - a^2} }^{n + 2} } {n + 2} + C$
for $n \ne -2$.


Proof
Let:














\(\ds z\)

\(=\)







\(\ds x^2\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d z} {\d x}\)

\(=\)







\(\ds 2 x\)





Derivative of Power




\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \frac {\d z} 2\)

\(=\)







\(\ds x \rd x\)










Thus:














\(\ds \int x \paren {\sqrt {x^2 - a^2} }^n \rd x\)

\(=\)







\(\ds \int \paren {\sqrt {z - a^2} }^n \dfrac {\d z} 2\)





Integration by Substitution from $(1)$














\(\ds \)

\(=\)







\(\ds \dfrac 1 2 \int \paren {\sqrt {z - a^2} }^n \rd z\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds \dfrac 1 2 \paren {\frac {2 \paren {\sqrt {z - a^2} }^{n + 2} } {n + 2} } + C\)





Primitive of $\paren {\sqrt {z - a^2} }^n$ for $n \ne -2$














\(\ds \)

\(=\)







\(\ds \dfrac {\paren {\sqrt {x^2 - a^2} }^{n + 2} } {n + 2} + C\)





substituting $x^2$ for $z$ and simplifying



$\blacksquare$


Also see
For $n = -2$, use Primitive of $\dfrac x {x^2 - a^2}$.


Sources
1968: George B. Thomas, Jr.: Calculus and Analytic Geometry (4th ed.) ... (previous) ... (next): Front endpapers: A Brief Table of Integrals: $40$.




