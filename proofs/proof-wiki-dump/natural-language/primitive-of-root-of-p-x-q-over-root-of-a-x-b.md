# 

Source: https://proofwiki.org/wiki/Primitive_of_Root_of_p_x_%2B_q_over_Root_of_a_x_%2B_b



Theorem
$\ds \int \sqrt {\frac {p x + q} {a x + b} } \rd x = \frac {\sqrt {\paren {a x + b} \paren {p x + q} } } a + \frac {a q - b p} {2 a} \int \frac {\d x} {\sqrt {\paren {a x + b} \paren {p x + q} } }$


Proof
From Primitive of $\dfrac {\paren {p x + q}^n} {\sqrt {a x + b} }$:

$\ds \int \frac {\paren {p x + q}^n} {\sqrt {a x + b} } \rd x = \frac {2 \paren {p x + q}^n \sqrt {a x + b} } {\paren {2 n + 1} a} + \frac {2 n \paren {a q - b p} } {\paren {2 n + 1} a} \int \frac {\paren {p x + q}^{n - 1} } {\sqrt {a x + b} } \rd x$

Putting $n = \dfrac 1 2$:














\(\ds \int \sqrt {\frac {p x + q} {a x + b} } \rd x\)

\(=\)







\(\ds \frac {2 \paren {p x + q}^{1/2} \sqrt {a x + b} } {\paren {2 \cdot \frac 1 2 + 1} a} + \frac {2 \cdot \frac 1 2 \paren {a q - b p} } {\paren {2 \cdot \frac 1 2 + 1} a} \int \frac {\paren {p x + q}^{1/2 - 1} } {\sqrt {a x + b} } \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac {\sqrt {\paren {a x + b} \paren {p x + q} } } a + \frac {a q - b p} {2 a} \int \frac {\d x} {\sqrt {\paren {a x + b} \paren {p x + q} } }\)









$\blacksquare$


Also presented as
This result can also be seen presented in this form:
$\ds \int \sqrt {\frac {p x + q} {a x + b} } \rd x = \frac {\sqrt {\paren {a x + b} \paren {p x + q} } } a - \frac {b p - a q} {2 a} \int \frac {\d x} {\sqrt {\paren {a x + b} \paren {p x + q} } }$


Sources
1964: Milton Abramowitz and Irene A. Stegun: Handbook of Mathematical Functions ... (previous) ... (next): $3$: Elementary Analytic Methods: $3.3$ Rules for Differentiation and Integration: Integrals of Irrational Algebraic Functions: $3.3.32$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sqrt {a x + b}$ and $\sqrt {p x + q}$: $14.123$




