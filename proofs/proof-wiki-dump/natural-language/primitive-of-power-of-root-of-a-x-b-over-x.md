# 

Source: https://proofwiki.org/wiki/Primitive_of_Power_of_Root_of_a_x_%2B_b_over_x

Theorem
$\ds \int \frac {\paren {\sqrt{a x + b} }^m} x \rd x = \frac {2 \paren {\sqrt{a x + b} }^m } m + b \int \frac {\paren {\sqrt{a x + b} }^{m - 2} } x \rd x$


Proof
From Reduction Formula for Primitive of Power of $x$ by Power of $a x + b$: Decrement of Power of $a x + b$:

$\ds \int x^m \paren {a x + b}^n \rd x = \frac {x^{m + 1} \paren {a x + b}^n} {m + n + 1} + \frac {n b} {m + n + 1} \int x^m \paren {a x + b}^{n - 1} \rd x$

Putting $n := \dfrac m 2$ and $m := -1$:














\(\ds \int \frac {\paren {\sqrt{a x + b} }^m} x \rd x\)

\(=\)







\(\ds \int x^{-1} \paren {a x + b}^{m / 2} \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac {x^0 \paren {a x + b}^{m / 2} } {-1 + \frac m 2 + 1} + \frac {\paren {\frac m 2} b} {-1 + \frac m 2 + 1} \int x^{-1} \paren {a x + b}^{m / 2 - 1} \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac {2 \paren {a x + b}^{m / 2} } m + b \int x^{-1} \paren {a x + b}^{\paren {m - 2} / 2} \rd x\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac {2 \paren {\sqrt{a x + b} }^m } m + b \int \frac {\paren {\sqrt{a x + b} }^{m - 2} } x \rd x\)









$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sqrt{a x + b}$: $14.102$




