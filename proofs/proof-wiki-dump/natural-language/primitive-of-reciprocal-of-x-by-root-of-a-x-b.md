# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_x_by_Root_of_a_x_%2B_b

Theorem
For $a > 0$ and for $x \ne 0$:

$\ds \int \frac {\d x} {x \sqrt {a x + b} } = \begin {cases}
\dfrac 1 {\sqrt b} \ln \size {\dfrac {\sqrt {a x + b} - \sqrt b} {\sqrt {a x + b} + \sqrt b} } + C & : b > 0 \\
\dfrac 2 {\sqrt {-b} } \arctan \sqrt {\dfrac {a x + b} {-b} } + C & : b < 0 \end {cases}$
where $a x + b > 0$.


Proof
Let:














\(\ds u\)

\(=\)







\(\ds \sqrt {a x + b}\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds \frac {u^2 - b} a\)










Thus:














\(\ds \map F {\sqrt {a x + b} }\)

\(=\)







\(\ds \frac 1 {x \sqrt {a x + b} }\)














\(\ds \leadsto \ \ \)





\(\ds \map F u\)

\(=\)







\(\ds \paren {\frac a {u^2 - b} } \frac 1 u\)










Then:














\(\ds \int \frac {\d x} {x \sqrt {a x + b} }\)

\(=\)







\(\ds \frac 2 a \int u \paren {\frac a {u^2 - b} } \frac 1 u \rd u\)





Primitive of Function of $\sqrt {a x + b}$














\(\ds \)

\(=\)







\(\ds 2 \int \frac {\d u} {u^2 - b}\)





Primitive of Constant Multiple of Function




Let $b > 0$.
Let $d = \sqrt b$.
Then:














\(\ds 2 \int \frac {\d u} {u^2 - b}\)

\(=\)







\(\ds 2 \int \frac {\d u} {u^2 - d^2}\)




















\(\ds \)

\(=\)







\(\ds 2 \paren {\frac 1 {2 d} } \ln \size {\frac {u - d} {u + d} } + C\)





Primitive of Reciprocal of $x^2 - a^2$: Logarithm Form














\(\ds \)

\(=\)







\(\ds \dfrac 1 {\sqrt b} \ln \size {\dfrac {\sqrt {a x + b} - \sqrt b} {\sqrt {a x + b} + \sqrt b} } + C\)





substituting for $u$ and $d$



$\Box$

Let $b < 0$.
Let $d = \sqrt {-b}$.
Then:














\(\ds 2 \int \frac {\d u} {u^2 - b}\)

\(=\)







\(\ds 2 \int \frac {\d u} {u^2 - \paren {-d^2} }\)




















\(\ds \)

\(=\)







\(\ds 2 \int \frac {\d u} {u^2 + d^2}\)




















\(\ds \)

\(=\)







\(\ds 2 \paren {\frac 1 d} \arctan {\frac u d} + C\)





Primitive of Reciprocal of $x^2 + a^2$














\(\ds \)

\(=\)







\(\ds \frac 2 {\sqrt {-b} } \arctan \sqrt {\dfrac {a x + b} {-b} } + C\)





substituting for $u$ and $d$



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sqrt {a x + b}$: $14.87$
1968: George B. Thomas, Jr.: Calculus and Analytic Geometry (4th ed.) ... (previous) ... (next): Front endpapers: A Brief Table of Integrals: $13$.




