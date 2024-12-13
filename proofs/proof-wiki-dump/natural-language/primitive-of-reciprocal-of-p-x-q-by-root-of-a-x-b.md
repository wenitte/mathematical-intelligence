# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_p_x_%2B_q_by_Root_of_a_x_%2B_b



Theorem
Let $a, b, p, q \in \R$ such that $a p \ne b q$ and such that $p \ne 0$.
Then:

$\ds \int \frac {\d x} {\paren {p x + q} \sqrt {a x + b} } = \begin {cases}
\dfrac 1 {\sqrt {p \paren {b p - a q} } } \ln \size {\dfrac {\sqrt {p \paren {a x + b} } - \sqrt {b p - a q} } {\sqrt {p \paren {a x + b} } + \sqrt {b p - a q} } } + C & : p \paren {b p - a q} > 0 \\
\dfrac 2 {\sqrt {p \paren {a q - b p} } } \arctan \sqrt {\dfrac {p \paren {a x + b} } {a q - b p} } + C & : p \paren {b p - a q} < 0 \\
\end {cases}$


Proof
Case $1$: $p \paren {b p - a q} > 0$
Let $p \paren {b p - a q} > 0$.
Then:

$\ds \int \frac {\d x} {\paren {p x + q} \sqrt {a x + b} } = \frac 1 {\sqrt {p \paren {b p - a q} } } \ln \size {\frac {\sqrt {p \paren {a x + b} } - \sqrt {b p - a q} } {\sqrt {p \paren {a x + b} } + \sqrt {b p - a q} } } + C$
$\Box$


Case $2$: $p \paren {b p - a q} < 0$
Let $p \paren {b p - a q} > 0$.
Then:

$\ds \int \frac {\d x} {\paren {p x + q} \sqrt {a x + b} } = \dfrac 2 {\sqrt {p \paren {a q - b p} } } \arctan \sqrt {\dfrac {p \paren {a x + b} } {a q - b p} } + C$
$\blacksquare$


Sources
1964: Milton Abramowitz and Irene A. Stegun: Handbook of Mathematical Functions ... (previous) ... (next): $3$: Elementary Analytic Methods: $3.3$ Rules for Differentiation and Integration: Integrals of Irrational Algebraic Functions
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sqrt {a x + b}$ and $p x + q$: $14.114$




