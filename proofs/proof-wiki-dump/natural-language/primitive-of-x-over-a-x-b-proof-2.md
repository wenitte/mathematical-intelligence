# 

Source: https://proofwiki.org/wiki/Primitive_of_x_over_a_x_%2B_b/Proof_2

Theorem
$\ds \int \frac {x \rd x} {a x + b} = \frac x a - \frac b {a^2} \ln \size {a x + b} + C$


Proof
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





