# 

Source: https://proofwiki.org/wiki/Primitive_of_Root_of_a_x_%2B_b_over_x



Theorem
$\ds \int \frac {\sqrt {a x + b} } x \rd x = 2 \sqrt {a x + b} + b \int \frac {\d x} {x \sqrt{a x + b} }$


Proof 1
From Reduction Formula for Primitive of Power of $x$ by Power of $a x + b$: Decrement of Power of $a x + b$:

$\ds \int x^m \paren {a x + b}^n \rd x = \frac {x^{m + 1} \paren {a x + b}^n} {m + n + 1} + \frac {n b} {m + n + 1} \int x^m \paren {a x + b}^{n - 1} \rd x$

Putting $m = -1$ and $n = \dfrac 1 2$:














\(\ds \int \frac {\sqrt {a x + b} } x \rd x\)

\(=\)







\(\ds \int x^{-1} \paren {a x + b}^{1/2} \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac {x^0 \paren {a x + b}^{1/2} } {\frac 1 2} + \frac {\frac 1 2 b} {\frac 1 2} \int x^{-1} \paren {a x + b}^{- 1/2} \rd x\)




















\(\ds \)

\(=\)







\(\ds 2 \sqrt {a x + b} + b \int \frac {\d x} {x \sqrt {a x + b} }\)





simplifying



$\blacksquare$


Proof 2
Let:














\(\ds v\)

\(=\)







\(\ds \sqrt x\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d v} {\d x}\)

\(=\)







\(\ds \frac 1 {2 \sqrt x}\)





Power Rule for Derivatives














\(\ds u\)

\(=\)







\(\ds \frac {2 \sqrt {a x + b} } {\sqrt x}\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds \frac {\frac {\sqrt x \cdot 2 a} {2 \sqrt{a x + b} } - \frac {2 \sqrt {a x + b} } {2 \sqrt x} } x\)





Quotient Rule for Derivatives etc.














\(\ds \)

\(=\)







\(\ds \frac {-b} {x^{3/2} \sqrt {a x + b} }\)





simplifying




From Integration by Parts:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \, \frac {\d u} {\d x} \rd x$
from which:














\(\ds \int \frac {\sqrt {a x + b} } x \rd x\)

\(=\)







\(\ds \int \frac {2 \sqrt {a x + b} }{\sqrt x} \frac 1 {2 \sqrt x} \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac {2 \sqrt {a x + b} } {\sqrt x} \sqrt x - \int {\sqrt x} \frac {-b} {x^{3/2} \sqrt {a x + b} } \rd x\)




















\(\ds \)

\(=\)







\(\ds 2 \sqrt {a x + b} + b \int \frac {\d x} {x \sqrt {a x + b} }\)





simplification



$\blacksquare$


Also see
Primitive of Reciprocal of $x \sqrt {a x + b}$ for $\ds \int \frac {\d x} {x \sqrt {a x + b} }$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sqrt {a x + b}$: $14.92$
1968: George B. Thomas, Jr.: Calculus and Analytic Geometry (4th ed.) ... (previous) ... (next): Front endpapers: A Brief Table of Integrals: $12$.




