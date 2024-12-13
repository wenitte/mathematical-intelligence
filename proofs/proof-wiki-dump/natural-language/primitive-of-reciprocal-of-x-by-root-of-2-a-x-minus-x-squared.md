# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_x_by_Root_of_2_a_x_minus_x_squared

Theorem
$\ds \int \dfrac 1 {x \sqrt {2 a x - x^2} } \rd x = -\dfrac 1 a \sqrt {\dfrac {2 a - x} x} + C$


Proof
Recall Primitive of $\dfrac 1 {\paren {p x + q} \sqrt {\paren {a x + b} \paren {p x + q} } }$:

$\ds \int \frac {\d x} {\paren {p x + q} \sqrt {\paren {a x + b} \paren {p x + q} } } = \frac {2 \sqrt {a x + b} } {\paren {a q - b p} \sqrt {p x + q} } + C$

Then:














\(\ds \int \dfrac 1 {x \sqrt {2 a x - x^2} } \rd x\)

\(=\)







\(\ds \int \dfrac 1 {x \sqrt {x \paren {2 a - x} } } \rd x\)





manipulating subject into correct form














\(\ds \)

\(=\)







\(\ds \frac {2 \sqrt {2 a - x} } {\paren {\paren {-1} \times 0 - 2 a \times 1} \sqrt {1 \times x + 0} } + C\)





$p \gets 1$, $q \gets 0$, $a \gets -1$, $b \gets 2 a$














\(\ds \)

\(=\)







\(\ds \frac {2 \sqrt {2 a - x} } {\paren {-2 a} \sqrt x} + C\)





simplification














\(\ds \)

\(=\)







\(\ds -\dfrac 1 a \sqrt {\dfrac {2 a - x} x} + C\)





simplification



$\blacksquare$


Sources
1968: George B. Thomas, Jr.: Calculus and Analytic Geometry (4th ed.) ... (previous) ... (next): Front endpapers: A Brief Table of Integrals: $55$.




