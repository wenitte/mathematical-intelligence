# 

Source: https://proofwiki.org/wiki/Primitive_of_Root_of_a_x_%2B_b_over_x_squared



Theorem
$\ds \int \frac {\sqrt {a x + b} } {x^2} \rd x = -\frac {\sqrt {a x + b} } x + \frac a 2 \int \frac {\d x} {x \sqrt {a x + b} }$


Proof
From Reduction Formula for Primitive of Power of $x$ by Power of $a x + b$: Decrement of Power of $a x + b$:

$\ds \int x^m \paren {a x + b}^n \rd x = \frac {x^{m + 1} \paren {a x + b}^n} {m + n + 1} + \frac {n b} {m + n + 1} \int x^m \paren {a x + b}^{n - 1} \rd x$

Putting $m = -2$ and $n = \dfrac 1 2$:














\(\ds \int \frac {\sqrt {a x + b} } {x^2} \rd x\)

\(=\)







\(\ds \int x^{-2} \paren {a x + b}^{1/2} \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac {x^{-1} \paren {a x + b}^{1/2} } {-2 + \frac 1 2 + 1} + \frac {\frac 1 2 b} {-2 + \frac 1 2 + 1} \int x^{-2} \paren {a x + b}^{-1/2} \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac {-2 \sqrt {a x + b} } x - b \int \frac {\d x} {x^2 \sqrt {a x + b} }\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac {-2 \sqrt {a x + b} } x - b \paren {-\frac {\sqrt {a x + b} } {b x} - \frac a {2 b} \int \frac {\d x} {x \sqrt {a x + b} } }\)





Primitive of Reciprocal of x squared by Root of a x + b














\(\ds \)

\(=\)







\(\ds \frac {-2 \sqrt {a x + b} } x + \frac {\sqrt {a x + b} } x + \frac a 2 \int \frac {\d x} {x \sqrt {a x + b} }\)





multiplying out














\(\ds \)

\(=\)







\(\ds -\frac {\sqrt {a x + b} } x + \frac a 2 \int \frac {\d x} {x \sqrt {a x + b} }\)





simplifying



$\blacksquare$


Also see
Primitive of Reciprocal of $x \sqrt {a x + b}$ for $\ds \int \frac {\d x} {x \sqrt {a x + b} }$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sqrt {a x + b}$: $14.93$
1968: George B. Thomas, Jr.: Calculus and Analytic Geometry (4th ed.) ... (previous) ... (next): Front endpapers: A Brief Table of Integrals: $14$.




