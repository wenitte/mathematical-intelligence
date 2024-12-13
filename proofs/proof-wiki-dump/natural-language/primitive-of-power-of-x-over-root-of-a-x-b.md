# 

Source: https://proofwiki.org/wiki/Primitive_of_Power_of_x_over_Root_of_a_x_%2B_b

Theorem
$\ds \int \frac {x^m} {\sqrt{a x + b} } \rd x = \frac {2 x^m \sqrt{a x + b} } {\paren {2 m + 1} a} - \frac {2 m b} {\paren {2 m + 1} a} \int \frac {x^{m - 1} } {\sqrt{a x + b} } \rd x$


Proof
From Reduction Formula for Primitive of Power of $x$ by Power of $a x + b$: Decrement of Power of $x$:

$\ds \int x^m \paren {a x + b}^n \rd x = \frac {x^m \paren {a x + b}^{n + 1} } {\paren {m + n + 1} a} - \frac {m b} {\paren {m + n + 1} a} \int x^{m - 1} \paren {a x + b}^n \rd x$

Putting $n = -\dfrac 1 2$:














\(\ds \int \frac {x^m} {\sqrt {a x + b} } \rd x\)

\(=\)







\(\ds \int x^m \paren {a x + b}^{-1/2} \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac {x^m \paren {a x + b}^{1/2} } {\paren {m - \frac 1 2 + 1} a} - \frac {m b} {\paren {m - \frac 1 2 + 1} a} \int x^{m - 1} \paren {a x + b}^{-1/2} \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac {x^m \sqrt {a x + b} } {\paren {m + \frac 1 2} a} - \frac {m b} {\paren {m + \frac 1 2} a} \int \frac {x^{m - 1} } {\sqrt {a x + b} } \rd x\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac {2 x^m \sqrt {a x + b} } {\paren {2 m + 1} a} - \frac {2 m b} {\paren {2 m + 1} a} \int \frac {x^{m - 1} } {\sqrt {a x + b} } \rd x\)





multiplying top and bottom by $2$



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sqrt {a x + b}$: $14.94$




