# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_Power_of_p_x_%2B_q_by_Root_of_a_x_%2B_b

Theorem
$\ds \int \frac {\d x} {\paren {p x + q}^n \sqrt {a x + b} } = \frac {\sqrt {a x + b} } {\paren {n - 1} \paren {a q - b p} \paren {p x + q}^{n - 1} } + \frac {\paren {2 n - 3} a} {2 \paren {n - 1} \paren {a q - b p} } \int \frac {\d x} {\paren {p x + q}^{n - 1} \sqrt {a x + b} }$


Proof
From Primitive of Reciprocal of $\dfrac 1 {\paren {a x + b}^m \paren {p x + q}^n}$:

$\ds \int \frac {\d x} {\paren {a x + b}^m \paren {p x + q}^n} = \frac {-1} {\paren {n - 1} \paren {b p - a q} } \paren {\frac 1 {\paren {a x + b}^{m - 1} \paren {p x + q}^{n - 1} } + a \paren {m + n - 2} \int \frac {\d x} {\paren {a x + b}^m \paren {p x + q}^{n - 1} } }$

Setting $m := \dfrac 1 2$:














\(\ds \int \frac {\d x} {\paren {p x + q}^n \sqrt {a x + b} }\)

\(=\)







\(\ds \frac {-1} {\paren {n - 1} \paren {b p - a q} } \paren {\frac 1 {\paren {a x + b}^{1/2 - 1} \paren {p x + q}^{n - 1} } + a \paren {\frac 1 2 + n - 2} \int \frac {\d x} {\paren {a x + b}^{1/2} \paren {p x + q}^{n - 1} } }\)




















\(\ds \)

\(=\)







\(\ds \frac {\sqrt {a x + b} } {\paren {n - 1} \paren {a q - b p} \paren {p x + q}^{n - 1} } + \frac {\paren {2 n - 3} a} {2 \paren {n - 1} \paren {a q - b p} } \int \frac {\d x} {\paren {p x + q}^{n - 1} \sqrt {a x + b} }\)









$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sqrt {a x + b}$ and $p x + q$: $14.117$




