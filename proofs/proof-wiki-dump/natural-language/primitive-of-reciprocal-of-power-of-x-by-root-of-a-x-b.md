# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_Power_of_x_by_Root_of_a_x_%2B_b

Theorem
$\ds \int \frac {\d x} {x^m \sqrt {a x + b} } = -\frac {\sqrt {a x + b} } {\paren {m - 1} b x^{m - 1} } - \frac {\paren {2 m - 3} a} {\paren {2 m - 2} b} \int \frac {\d x} {x^{m - 1} \sqrt {a x + b} }$


Proof
From Reduction Formula for Primitive of Power of $x$ by Power of $a x + b$: Increment of Power of $x$:

$\ds \int x^m \paren {a x + b}^n \rd x = \frac {x^{m + 1} \paren {a x + b}^{n + 1} } {\paren {m + 1} b} - \frac {\paren {m + n + 2} a} {\paren {m + 1} b} \int x^{m + 1} \paren {a x + b}^n \rd x$

Putting $n := -\dfrac 1 2$ and $m := -m$:














\(\ds \int \frac {\d x} {x^m \sqrt{a x + b} }\)

\(=\)







\(\ds \int x^{-m} \paren {a x + b}^{-1/2} \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac {x^{-m+1} \paren {a x + b}^{1/2} } {\paren {-m + 1} b} - \frac {\paren {-m - \frac 1 2 + 2} a} {\paren {-m + 1} b} \int x^{-m + 1} \paren {a x + b}^{-1/2} \rd x\)




















\(\ds \)

\(=\)







\(\ds -\frac {\sqrt {a x + b} } {\paren {m - 1} b x^{m - 1} } - \frac {\paren {m - \frac 3 2} a} {\paren {m - 1} b} \int \frac {\d x} {x^{m - 1} \sqrt {a x + b} }\)





simplifying














\(\ds \)

\(=\)







\(\ds -\frac {\sqrt {a x + b} } {\paren {m - 1} b x^{m - 1} } - \frac {\paren {2 m - 3} a} {\paren {2 m - 2} b} \int \frac {\d x} {x^{m - 1} \sqrt {a x + b} }\)





multiplying top and bottom by $2$



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sqrt{a x + b}$: $14.95$




