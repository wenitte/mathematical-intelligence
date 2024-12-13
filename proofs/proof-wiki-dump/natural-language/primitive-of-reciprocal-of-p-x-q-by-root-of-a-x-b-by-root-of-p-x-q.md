# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_p_x_%2B_q_by_Root_of_a_x_%2B_b_by_Root_of_p_x_%2B_q

Theorem
$\ds \int \frac {\d x} {\paren {p x + q} \sqrt {\paren {a x + b} \paren {p x + q} } } = \frac {2 \sqrt {a x + b} } {\paren {a q - b p} \sqrt {p x + q} } + C$


Proof
From Primitive of $\paren {p x + q}^n \sqrt {a x + b}$:

$\ds \int \frac {\d x} {\paren {p x + q}^n \sqrt {a x + b} } = \frac {\sqrt {a x + b} } {\paren {n - 1} \paren {a q - b p} \paren {p x + q}^{n - 1} } + \frac {\paren {2 n - 3} a} {2 \paren {n - 1} \paren {a q - b p} } \int \frac {\d x} {\paren {p x + q}^{n - 1} } {\sqrt {a x + b} }$

Putting $n = \dfrac 3 2$:














\(\ds \int \frac {\d x} {\paren {p x + q} \sqrt {\paren {a x + b} \paren {p x + q} } }\)

\(=\)







\(\ds \frac {\sqrt {a x + b} } {\paren {\frac 3 2 - 1} \paren {a q - b p} \paren {p x + q}^{3 / 2 - 1} } + \frac {\paren {2 \cdot \frac 3 2 - 3} a} {2 \paren {\frac 3 2 - 1} \paren {a q - b p} } \int \frac {\d x} {\paren {p x + q}^{3 / 2 - 1} \sqrt {a x + b} }\)




















\(\ds \)

\(=\)







\(\ds \frac {2 \sqrt {a x + b} } {\paren {a q - b p} \sqrt {p x + q} } + \frac {\paren {3 - 3} a} {a q - b p} \int \frac {\d x} {\sqrt {p x + q} \sqrt {a x + b} } + C\)




















\(\ds \)

\(=\)







\(\ds \frac {2 \sqrt {a x + b} } {\paren {a q - b p} \sqrt {p x + q} } + C\)









$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sqrt {a x + b}$ and $\sqrt {p x + q}$: $14.124$




