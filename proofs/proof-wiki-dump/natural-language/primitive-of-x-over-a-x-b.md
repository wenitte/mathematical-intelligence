# 

Source: https://proofwiki.org/wiki/Primitive_of_x_over_a_x_%2B_b



Theorem
$\ds \int \frac {x \rd x} {a x + b} = \frac x a - \frac b {a^2} \ln \size {a x + b} + C$


Proof 1
Put $u = a x + b$
Then:














\(\ds x\)

\(=\)







\(\ds \frac {u - b} a\)




















\(\ds \frac {\d x} {\d u}\)

\(=\)







\(\ds \frac 1 a\)










Then:














\(\ds \int \frac {x \rd x} {a x + b}\)

\(=\)







\(\ds \int \frac 1 a \frac {u - b} {a u} \rd u\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \frac 1 {a^2} \int \rd u - \frac b {a^2} \int \frac {\d u} u\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac u {a^2} + C - \frac b {a^2} \int \frac {\d u} u\)





Primitive of Constant














\(\ds \)

\(=\)







\(\ds \frac u {a^2} - \frac b {a^2} \ln \size u + C\)





Primitive of Reciprocal














\(\ds \)

\(=\)







\(\ds \frac {a x + b} {a^2} - \frac b {a^2} \ln \size {a x + b} + C\)





substituting for $u$














\(\ds \)

\(=\)







\(\ds \frac x a + \frac b {a^2} - \frac b {a^2} \ln \size {a x + b} + C\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac x a - \frac b {a^2} \ln \size {a x + b} + C\)





subsuming $\dfrac b {a^2}$ into the arbitrary constant $C$



$\blacksquare$


Proof 2
From Reduction Formula for Primitive of Power of $x$ by Power of $a x + b$: Decrement of Power of $x$:

$\ds \int x^m \paren {a x + b}^n \rd x = \frac {x^m \paren {a x + b}^{n + 1} } {\paren {m + n + 1} a} - \frac {m b} {\paren {m + n + 1} a} \int x^{m - 1} \paren {a x + b}^n \rd x$
Let $m = 1$ and $n = -1$.

Then:














\(\ds \int \frac {x \rd x} {a x + b}\)

\(=\)







\(\ds \int x^1 \paren {a x + b}^{-1} \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac {x^1 \paren {a x + b}^0} {\paren 1 a} - \frac {1 b} {\paren 1 a} \int x^0 \paren {a x + b}^{-1} \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac x a - \frac b a \int \frac {\d x} {a x + b}\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac x a - \frac b {a^2} \ln \size {a x + b} + C\)





Primitive of Reciprocal of $a x + b$



$\blacksquare$


Proof 3













\(\ds \int \frac {x \rd x} {a x + b}\)

\(=\)







\(\ds \int \frac 1 a \frac {a x \rd x} {a x + b}\)




















\(\ds \)

\(=\)







\(\ds \int \frac 1 a \frac {\paren {a x + b - b} \rd x} {a x + b}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 a \int \frac {\paren {a x + b} \rd x} {a x + b} - \frac b a \int \frac {\d x} {a x + b}\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac 1 a \int \d x - \frac b a \int \frac {\d x} {a x + b}\)





simplification














\(\ds \)

\(=\)







\(\ds \frac x a - \frac b a \int \frac {\d x} {a x + b}\)





Primitive of Constant














\(\ds \)

\(=\)







\(\ds \frac x a - \frac b {a^2} \ln \size {a x + b} + C\)





Primitive of $\dfrac 1 {a x + b}$



$\blacksquare$


Also see
Primitive of $x$ by $\paren {a x + b}^n$ for general $n$
Primitive of $x$ over $\paren {a x + b}^2$ for the case when $n = -2$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $a x + b$: $14.60$
1968: George B. Thomas, Jr.: Calculus and Analytic Geometry (4th ed.) ... (previous) ... (next): Front endpapers: A Brief Table of Integrals: $8$.




