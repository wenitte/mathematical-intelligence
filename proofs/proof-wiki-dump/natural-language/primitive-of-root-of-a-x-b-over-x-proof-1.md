# 

Source: https://proofwiki.org/wiki/Primitive_of_Root_of_a_x_%2B_b_over_x/Proof_1

Theorem
$\ds \int \frac {\sqrt {a x + b} } x \rd x = 2 \sqrt {a x + b} + b \int \frac {\d x} {x \sqrt{a x + b} }$


Proof
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





