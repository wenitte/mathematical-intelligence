# 

Source: https://proofwiki.org/wiki/Primitive_of_Power_of_p_x_%2B_q_by_Root_of_a_x_%2B_b

Theorem
$\ds \int \paren {p x + q}^n \sqrt {a x + b} \rd x = \frac {2 \paren {p x + q}^{n + 1} \sqrt {a x + b} } {\paren {2 n + 3} p} + \frac {b p - a q} {\paren {2 n + 3} p} \int \frac {\paren {p x + q}^n} {\sqrt{a x + b} } \rd x$


Proof
From Reduction Formula for Primitive of Power of $a x + b$ by Power of $p x + q$: Decrement of Power:

$\ds \int \paren {a x + b}^m \paren {p x + q}^n \rd x = \frac {\paren {a x + b}^m \paren {p x + q}^{n + 1} } {\paren {m + n + 1} p} + \frac {m \paren {b p - a q} } {\paren {m + n + 1} p} \int \paren {a x + b}^{m - 1} \paren {p x + q}^n \rd x$

Setting $m := \dfrac 1 2$:














\(\ds \int \paren {a x + b}^{1 / 2} \paren {p x + q}^n \rd x\)

\(=\)







\(\ds \frac {\paren {a x + b}^{1 / 2} \paren {p x + q}^{n + 1} } {\paren {\frac 1 2 + n + 1} p} + \frac {\dfrac 1 2 \paren {b p - a q} } {\paren {\frac 1 2 + n + 1} p} \int \paren {a x + b}^{1 / 2 - 1} \paren {p x + q}^n \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac {2 \paren {p x + q}^{n + 1} \sqrt {a x + b} } {\paren {2 n + 3} p} + \frac {b p - a q} {\paren {2 n + 3} p} \int \frac {\paren {p x + q}^n} {\sqrt {a x + b} } \rd x\)









$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sqrt {a x + b}$ and $p x + q$: $14.116$




