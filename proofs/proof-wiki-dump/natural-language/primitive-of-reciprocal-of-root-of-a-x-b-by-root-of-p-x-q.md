# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_Root_of_a_x_%2B_b_by_Root_of_p_x_%2B_q



Theorem
Let $a, b, p, q \in \R$ such that $a p \ne b q$.
Then:

$\ds \int \frac {\d x} {\sqrt {\paren {a x + b} \paren {p x + q} } } = \begin {cases}
\dfrac 2 {\sqrt {-a p} } \map \arctan {\sqrt {\dfrac {-p \paren {a x + b} } {a \paren {p x + q} } } } + C & : a p < 0 \\
\dfrac {-1} {\sqrt {-a p} } \map \arcsin {\dfrac {2 a p x + b p + a q} {a q - b p} } + C & : a > 0, p < 0 \\
\ds \dfrac 2 {\sqrt {a p} } \ln \size {\sqrt {p \paren {a x + b} } + \sqrt {a \paren {p x + q} } } + C & : a p > 0 \\
\end {cases}$
for all $x \in \R$ such that $\paren {a x + b} \paren {p x + q} > 0$.


Case where $a p = b q$
Primitive of Reciprocal of Root of a x + b by Root of p x + q/a p = b q

Proof
Case $1$: $a p < 0$
Let $a p < 0$.
Then:

$\ds \int \frac {\d x} {\sqrt {\paren {a x + b} \paren {p x + q} } } = \dfrac 2 {\sqrt {-a p} } \map \arctan {\sqrt {\dfrac {-p \paren {a x + b} } {a \paren {p x + q} } } } + C$
for all $x \in \R$ such that $\paren {a x + b} \paren {p x + q} > 0$.
$\Box$


Case $2$: $a > 0, p < 0$
Let $a > 0$ and $p < 0$.
Then:

$\ds \int \frac {\d x} {\sqrt {\paren {a x + b} \paren {p x + q} } } = \dfrac {-1} {\sqrt {-a p} } \map \arcsin {\dfrac {2 a p x + b p + a q} {a q - b p} } + C$
for all $x \in \R$ such that $\paren {a x + b} \paren {p x + q} > 0$.
$\Box$


Case $3$: $a p > 0$
Let $a, b, p, q \in \R$ such that $a p \ne b q$.
Let $a p > 0$.
Then:

$\ds \int \frac {\d x} {\sqrt {\paren {a x + b} \paren {p x + q} } } = \dfrac 2 {\sqrt {a p} } \ln \size {\sqrt {p \paren {a x + b} } + \sqrt {a \paren {p x + q} } } + C$
for all $x \in \R$ such that $\paren {a x + b} \paren {p x + q} > 0$.
$\blacksquare$


Sources
1964: Milton Abramowitz and Irene A. Stegun: Handbook of Mathematical Functions ... (previous) ... (next): $3$: Elementary Analytic Methods: $3.3$ Rules for Differentiation and Integration: Integrals of Irrational Algebraic Functions
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sqrt {a x + b}$ and $\sqrt{p x + q}$: $14.120$




