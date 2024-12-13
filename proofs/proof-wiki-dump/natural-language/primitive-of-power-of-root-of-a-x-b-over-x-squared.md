# 

Source: https://proofwiki.org/wiki/Primitive_of_Power_of_Root_of_a_x_%2B_b_over_x_squared

Theorem
$\ds \int \frac {\paren {\sqrt {a x + b} }^m} {x^2} \rd x = -\frac {\paren {\sqrt {a x + b} }^{m + 2} } {b x} + \frac {m a} {2 b} \int \frac {\paren {\sqrt {a x + b} }^m} x \rd x$


Proof
From Reduction Formula for Primitive of Power of $x$ by Power of $a x + b$: Increment of Power of $x$:

$\ds \int x^m \paren {a x + b}^n \rd x = \frac {x^{m + 1} \paren {a x + b}^{n + 1} } {\paren {m + 1} b} - \frac {\paren {m + n + 2} a} {\paren {m + 1} b} \int x^{m + 1} \paren {a x + b}^n \rd x$

Putting $n := \dfrac m 2$ and $m := -2$:














\(\ds \int \frac {\paren {\sqrt {a x + b} }^m} {x^2} \rd x\)

\(=\)







\(\ds \int x^{-2} \paren {a x + b}^{m/2} \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac {x^{-1} \paren {a x + b}^{m/2 + 1} } {\paren {\paren {-2} + 1} b} - \frac {\paren {\paren {-2} + \frac m 2 + 2} a} {\paren {\paren {-2} + 1} b} \int x^{\paren {-2} + 1} \paren {a x + b}^{m/2} \rd x\)




















\(\ds \)

\(=\)







\(\ds -\frac {\paren {a x + b}^{\paren {m + 2}/2} } {b x} + \frac {m a} {2 b} \int \frac {\paren {a x + b}^{m/2} } x \rd x\)





simplifying














\(\ds \)

\(=\)







\(\ds -\frac {\paren {\sqrt {a x + b} }^{m + 2} } {b x} + \frac {m a} {2 b} \int \frac {\paren {\sqrt {a x + b} }^m} x \rd x\)









$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sqrt {a x + b}$: $14.103$




