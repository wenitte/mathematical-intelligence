# 

Source: https://proofwiki.org/wiki/Primitive_of_Power_of_p_x_%2B_q_over_Root_of_a_x_%2B_b

Theorem
$\ds \int \frac {\paren {p x + q}^n} {\sqrt {a x + b} } \rd x = \frac {2 \paren {p x + q}^n \sqrt {a x + b} } {\paren {2 n + 1} a} + \frac {2 n \paren {a q - b p} } {\paren {2 n + 1} a} \int \frac {\paren {p x + q}^{n - 1} } {\sqrt {a x + b} } \rd x$


Proof
From Reduction Formula for Primitive of Power of $a x + b$ by Power of $p x + q$: Decrement of Power:

$\ds \int \paren {a x + b}^m \paren {p x + q}^n \rd x = \frac {\paren {a x + b}^{m + 1} \paren {p x + q}^n} {\paren {m + n + 1} a} - \frac {n \paren {b p - a q} } {\paren {m + n + 1} a} \int \paren {a x + b}^m \paren {p x + q}^{n - 1} \rd x$

Setting $m := -\dfrac 1 2$:














\(\ds \int \frac {\paren {p x + q}^n} {\sqrt {a x + b} } \rd x\)

\(=\)







\(\ds \frac {\paren {a x + b}^{-1/2 + 1} \paren {p x + q}^n} {\paren {-\frac 1 2 + n + 1} a} - \frac {n \paren {b p - a q} } {\paren {-\frac 1 2 + n + 1} a} \int \paren {a x + b}^{-1/2} \paren {p x + q}^{n - 1} \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac {2 \paren {p x + q}^n \sqrt {a x + b} } {\paren {2 n + 1} a} + \frac {2 n \paren {a q - b p} } {\paren {2 n + 1} a} \int \frac {\paren {p x + q}^{n - 1} } {\sqrt {a x + b} } \rd x\)









$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sqrt {a x + b}$ and $p x + q$: $14.118$




