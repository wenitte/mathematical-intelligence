# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_p_x_%2B_q_by_Root_of_a_x_%2B_b/p_(b_p_-_a_q)_less_than_0



Theorem
Let $a, b, p, q \in \R$ such that $a p \ne b q$ and such that $p \ne 0$.
Let $p \paren {b p - a q} > 0$.
Then:

$\ds \int \frac {\d x} {\paren {p x + q} \sqrt {a x + b} } = \dfrac 2 {\sqrt {p \paren {a q - b p} } } \arctan \sqrt {\dfrac {p \paren {a x + b} } {a q - b p} } + C$


Proof
Lemma
$\ds \int \frac {\d x} {\paren {p x + q} \sqrt {a x + b} } = \dfrac 2 p \int \frac {\d u} {u^2 - \paren {\dfrac {b p - a q} p} }$
where:

$u = \sqrt {a x + b}$
$\Box$

We have by hypothesis that:

$p \paren {b p - a q} < 0$
which means:

$\dfrac {b p - a q} p < 0$
Hence let:

$d^2 = -\dfrac {b p - a q} p$
Thus:














\(\ds \int \frac {\d x} {\paren {p x + q} \sqrt {a x + b} }\)

\(=\)







\(\ds \frac 2 p \int \frac {\d u} {u^2 + \paren {-\dfrac {b p - a q} p} }\)





Lemma














\(\ds \)

\(=\)







\(\ds \frac 2 p \int \frac {\d u} {u^2 + d^2}\)





setting $d^2 = \dfrac {b p - a q} p$














\(\ds \)

\(=\)







\(\ds \frac 2 p \frac 1 d \arctan {\frac u d} + C\)





Primitive of $\dfrac 1 {u^2 + d^2}$














\(\ds \)

\(=\)







\(\ds \frac 2 p \sqrt {-\dfrac p {b p - a q} } \arctan {\sqrt {-\dfrac p {b p - a q} } \sqrt {a x + b} } + C\)





substituting for $d$ and $u$














\(\ds \)

\(=\)







\(\ds \dfrac {-2} {\sqrt {p \paren {a q - b p} } } \arctan {-\sqrt {\frac {p \paren {a x + b} } {a q - b p} } } + C\)





simplifying














\(\ds \)

\(=\)







\(\ds \dfrac 2 {\sqrt {p \paren {a q - b p} } } \arctan {\sqrt {\frac {p \paren {a x + b} } {a q - b p} } } + C\)





Arctangent Function is Odd



$\blacksquare$


Also presented as
This result can also be seen presented as:

$\ds \int \frac {\d x} {\paren {p x + q} \sqrt {a x + b} } = \dfrac 2 {\sqrt {a q - b p} \sqrt p} \arctan \sqrt {\dfrac {p \paren {a x + b} } {a q - b p} } + C$
but this presupposes both that $p > 0$ and $b p - a q < 0$.


Sources
1964: Milton Abramowitz and Irene A. Stegun: Handbook of Mathematical Functions ... (previous) ... (next): $3$: Elementary Analytic Methods: $3.3$ Rules for Differentiation and Integration: Integrals of Irrational Algebraic Functions: $3.3.29$




