# 

Source: https://proofwiki.org/wiki/Primitive_of_Root_of_a_x_%2B_b_over_Power_of_p_x_%2B_q

Theorem
$\ds \int \frac {\sqrt {a x + b} } {\paren {p x + q}^n} \rd x = \frac {-\sqrt {a x + b} } {\paren {n - 1} p \paren {p x + q}^{n - 1} } + \frac a {2 \paren {n - 1} p} \int \frac {\d x} {\paren {p x + q}^{n - 1} \sqrt {a x + b} }$


Proof
From Primitive of Power of $a x + b$ over Power of $p x + q$: Formulation 3:

$\ds \int \frac {\paren {a x + b}^m} {\paren {p x + q}^n} \rd x = \frac {-1} {\paren {n - 1} p} \paren {\frac {\paren {a x + b}^m} {\paren {p x + q}^{n - 1} } + m a \int \frac {\paren {a x + b}^{m - 1} } {\paren {p x + q}^{n - 1} } \rd x}$

Setting $m := \dfrac 1 2$:














\(\ds \int \frac {\sqrt {a x + b} } {\paren {p x + q}^n} \rd x\)

\(=\)







\(\ds \frac {-1} {\paren {n - 1} p} \paren {\frac {\paren {a x + b}^{1/2} } {\paren {p x + q}^{n - 1} } + \frac 1 2 a \int \frac {\paren {a x + b}^{1/2 - 1} } {\paren {p x + q}^{n - 1} } \rd x}\)




















\(\ds \)

\(=\)







\(\ds \frac {-\sqrt {a x + b} } {\paren {n - 1} p \paren {p x + q}^{n - 1} } + \frac a {2 \paren {n - 1} p} \int \frac {\d x} {\paren {p x + q}^{n - 1} \sqrt {a x + b} }\)









$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sqrt {a x + b}$ and $p x + q$: $14.119$




