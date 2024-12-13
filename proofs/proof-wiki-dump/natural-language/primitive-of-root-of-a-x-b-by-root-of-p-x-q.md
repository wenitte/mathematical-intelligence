# 

Source: https://proofwiki.org/wiki/Primitive_of_Root_of_a_x_%2B_b_by_Root_of_p_x_%2B_q



Theorem
$\ds \int \sqrt {\paren {a x + b} \paren {p x + q} } \rd x = \frac {2 a p x + b p + a q} {4 a p} \sqrt {\paren {a x + b} \paren {p x + q} } - \frac {\paren {b p - a q}^2} {8 a p} \int \frac {\d x} {\sqrt {\paren {a x + b} \paren {p x + q} } }$


Proof
From Primitive of $\paren {p x + q}^n \sqrt {a x + b}$:

$\ds \int \paren {p x + q}^n \sqrt {a x + b} \rd x = \frac {2 \paren {p x + q}^{n + 1} \sqrt {a x + b} } {\paren {2 n + 3} p} + \frac {b p - a q} {\paren {2 n + 3} p} \int \frac {\paren {p x + q}^n} {\sqrt {a x + b} } \rd x$

Putting $n = \dfrac 1 2$:














\(\ds \)

\(\)







\(\ds \int \sqrt {\paren {a x + b} \paren {p x + q} } \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac {2 \paren {p x + q}^{1 / 2 + 1} \sqrt {a x + b} } {\paren {2 \cdot \frac 1 2 + 3} p} + \frac {b p - a q} {\paren {2 \cdot \frac 1 2 + 3} p} \int \frac {\paren {p x + q}^{1 / 2} } {\sqrt {a x + b} } \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac {2 \paren {p x + q} \sqrt {p x + q} \sqrt {a x + b} } {4 p} + \frac {b p - a q} {4 p} \int \frac {\sqrt {p x + q} } {\sqrt {a x + b} } \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac {2 \paren {p x + q} \sqrt {p x + q} \sqrt {a x + b} } {4 p} + \frac {b p - a q} {4 p} \paren {\frac {\sqrt {\paren {a x + b} \paren {p x + q} } } a + \frac {a q - b p} {2 a} \int \frac {\d x} {\sqrt {\paren {a x + b} \paren {p x + q} } } }\)





Primitive of $\dfrac {\sqrt {p x + q} } {\sqrt {a x + b} }$














\(\ds \)

\(=\)







\(\ds \frac {\paren {2 a \paren {p x + q} + \paren {b p - a q} } \sqrt {\paren {a x + b} \paren {p x + q} } } {4 a p} - \frac {\paren {b p - a q}^2 } {8 a p} \int \frac {\d x} {\sqrt {\paren {a x + b} \paren {p x + q} } }\)





extracting common factor














\(\ds \)

\(=\)







\(\ds \frac {2 a p x + b p + a q} {4 a p} \sqrt {\paren {a x + b} \paren {p x + q} } - \frac {\paren {b p - a q}^2} {8 a p} \int \frac {\d x} {\sqrt {\paren {a x + b} \paren {p x + q} } }\)





simplifying



$\blacksquare$


Also presented as
This result can also be seen presented in this form:

$\ds \int \sqrt {\paren {a x + b} \paren {p x + q} } \rd x = \frac {\paren {b p - a q} + 2 a {p x + q} } {4 a p} \sqrt {\paren {a x + b} \paren {p x + q} } - \frac {\paren {b p - a q}^2} {8 a p} \int \frac {\d x} {\sqrt {\paren {a x + b} \paren {p x + q} } }$


Sources
1964: Milton Abramowitz and Irene A. Stegun: Handbook of Mathematical Functions ... (previous) ... (next): $3$: Elementary Analytic Methods: $3.3$ Rules for Differentiation and Integration: Integrals of Irrational Algebraic Functions: $3.3.31$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sqrt {a x + b}$ and $\sqrt {p x + q}$: $14.122$




