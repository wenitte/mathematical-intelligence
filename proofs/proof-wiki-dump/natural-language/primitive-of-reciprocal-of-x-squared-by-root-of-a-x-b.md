# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_x_squared_by_Root_of_a_x_%2B_b



Theorem
$\ds \int \frac {\d x} {x^2 \sqrt {a x + b} } = -\frac {\sqrt {a x + b} } {b x} - \frac a {2 b} \int \frac {\d x} {x \sqrt {a x + b} }$


Proof
From Reduction Formula for Primitive of Power of $x$ by Power of $a x + b$: Increment of Power of $x$:

$\ds \int x^m \paren {a x + b}^n \rd x = \frac {x^{m + 1} \paren {a x + b}^{n + 1} } {\paren {m + 1} b} - \frac {\paren {m + n + 2} a} {\paren {m + 1} b} \int x^{m + 1} \paren {a x + b}^n \rd x$
Setting $m = -2$ and $n = -\dfrac 1 2$:














\(\ds \int \frac {\d x} {x^2 \sqrt {a x + b} }\)

\(=\)







\(\ds \int x^{-2} \paren {a x + b}^{-1/2} \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac {x^{-1} \paren {a x + b}^{1/2} } {\paren {-1} b} - \frac {\paren {-1/2} a} {\paren {-1} b} \int x^{-1} \paren {a x + b}^{-1/2} \rd x\)




















\(\ds \)

\(=\)







\(\ds -\frac {\sqrt {a x + b} } {b x} - \frac a {2 b} \int \frac {\d x} {x \sqrt {a x + b} }\)









$\blacksquare$


Also see
Primitive of Reciprocal of $x$ by Root of $a x + b$ for $\ds \int \dfrac {\d x} {x \sqrt {a x + b} }$.


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sqrt {a x + b}$: $14.88$
1968: George B. Thomas, Jr.: Calculus and Analytic Geometry (4th ed.) ... (previous) ... (next): Front endpapers: A Brief Table of Integrals: $15$.




