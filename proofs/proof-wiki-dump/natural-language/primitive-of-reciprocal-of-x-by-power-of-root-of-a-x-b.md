# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_x_by_Power_of_Root_of_a_x_%2B_b

Theorem
$\ds \int \frac {\d x} {x \paren {\sqrt {a x + b} }^m} = \frac 2 {\paren {m - 2} b \paren {\sqrt {a x + b} }^{m - 2} }  + \frac 1 b \int \frac {\d x} {x \paren {\sqrt {a x + b} }^{m - 2} }$


Proof
From Reduction Formula for Primitive of Power of $x$ by Power of $a x + b$: Increment of Power of $a x + b$:

$\ds \int x^m \paren {a x + b}^n \rd x = \frac {-x^{m + 1} \paren {a x + b}^{n + 1} } {\paren {n + 1} b} + \frac {m + n + 2} {\paren {n + 1} b} \int x^m \paren {a x + b}^{n + 1} \rd x$

Putting $n := -\dfrac m 2$ and $m := -1$:














\(\ds \int \frac {\d x} {x \paren {\sqrt {a x + b} }^m}\)

\(=\)







\(\ds \int x^{-1} \paren {a x + b}^{-m/2}\)




















\(\ds \)

\(=\)







\(\ds \frac {-x^0 \paren {a x + b}^{-m/2 + 1} } {\paren {-\frac m 2 + 1} b} + \frac {-1 - \frac m 2 + 2} {\paren {-\frac m 2 + 1} b} \int x^{-1} \paren {a x + b}^{- m/2 + 1} \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac 2 {\paren {m - 2} b \paren {a x + b}^{\paren {m - 2} / 2} } - \frac 1 b \int \frac {\d x} {x \paren {a x + b}^{\paren {m - 2} / 2} }\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac 2 {\paren {m - 2} b \paren {\sqrt {a x + b} }^{m - 2} }  + \frac 1 b \int \frac {\d x} {x \paren {\sqrt {a x + b} }^{m - 2} }\)









$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sqrt{a x + b}$: $14.104$




