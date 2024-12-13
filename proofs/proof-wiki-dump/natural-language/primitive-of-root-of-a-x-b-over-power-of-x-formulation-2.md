# 

Source: https://proofwiki.org/wiki/Primitive_of_Root_of_a_x_%2B_b_over_Power_of_x/Formulation_2

Theorem
$\ds \int \frac {\sqrt{a x + b} } {x^m} \rd x = -\frac {\paren {\sqrt{a x + b} }^3} {\paren {m - 1} b x^{m - 1} } - \frac {\paren {2 m - 5} a} {\paren {2 m - 2} b} \int \frac {\sqrt {a x + b} } {x^{m - 1} } \rd x$


Proof
From Reduction Formula for Primitive of Power of $x$ by Power of $a x + b$: Increment of Power of $x$:

$\ds \int x^m \paren {a x + b}^n \rd x = \frac {x^{m + 1} \paren {a x + b}^{n + 1} } {\paren {m + 1} b} - \frac {\paren {m + n + 2} a} {\paren {m + 1} b} \int x^{m + 1} \paren {a x + b}^n \rd x$

Putting $n := \dfrac 1 2$ and $m := -m$:














\(\ds \int \frac {\sqrt {a x + b} } {x^m} \rd x\)

\(=\)







\(\ds \int x^{-m} \paren {a x + b}^{1 / 2} \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac {x^{-m + 1} \paren {a x + b}^{1 / 2 + 1} } {\paren {-m + 1} b} - \frac {\paren {-m + \frac 1 2 + 2} a} {\paren {-m + 1} b} \int x^{-m + 1} \paren {a x + b}^{1 / 2} \rd x\)




















\(\ds \)

\(=\)







\(\ds -\frac {\paren {\sqrt {a x + b} }^3} {\paren {m - 1} b x^{m - 1} } - \frac {\paren {m - \frac 5 2} a} {\paren {m - 1} b} \int \frac {\sqrt {a x + b} } {x^{m - 1} } \rd x\)





simplifying














\(\ds \)

\(=\)







\(\ds -\frac {\paren {\sqrt {a x + b} }^3} {\paren {m - 1} b x^{m - 1} } - \frac {\paren {2 m - 5} a} {\paren {2 m - 2} b} \int \frac {\sqrt {a x + b} } {x^{m - 1} } \rd x\)





multiplying top and bottom by $2$



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sqrt {a x + b}$: $14.98$




