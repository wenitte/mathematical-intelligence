# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_p_x_%2B_q_by_Root_of_a_x_%2B_b/p_(b_p_-_a_q)_greater_than_0



Theorem
Let $a, b, p, q \in \R$ such that $a p \ne b q$ and such that $p \ne 0$.
Let $p \paren {b p - a q} > 0$.
Then:

$\ds \int \frac {\d x} {\paren {p x + q} \sqrt {a x + b} } = \frac 1 {\sqrt {p \paren {b p - a q} } } \ln \size {\frac {\sqrt {p \paren {a x + b} } - \sqrt {b p - a q} } {\sqrt {p \paren {a x + b} } + \sqrt {b p - a q} } } + C$


Proof
Lemma
$\ds \int \frac {\d x} {\paren {p x + q} \sqrt {a x + b} } = \dfrac 2 p \int \frac {\d u} {u^2 - \paren {\dfrac {b p - a q} p} }$
where:

$u = \sqrt {a x + b}$
$\Box$

We have by hypothesis that:

$p \paren {b p - a q} > 0$
which means:

$\dfrac {b p - a q} p > 0$
Hence let:

$d^2 = \dfrac {b p - a q} p$
Thus:














\(\ds \int \frac {\d x} {\paren {p x + q} \sqrt {a x + b} }\)

\(=\)







\(\ds \frac 2 p \int \frac {\d u} {u^2 - \paren {\dfrac {b p - a q} p} }\)





Lemma














\(\ds \)

\(=\)







\(\ds \frac 2 p \int \frac {\d u} {u^2 - d^2}\)





setting $d^2 = \dfrac {b p - a q} p$














\(\ds \)

\(=\)







\(\ds \frac 2 p \frac 1 {2 d} \ln \size {\frac {u - d} {u + d} } + C\)





Primitive of $\dfrac 1 {u^2 - d^2}$: Logarithm Form














\(\ds \)

\(=\)







\(\ds \frac 2 p \dfrac 1 2 \sqrt {\dfrac p {b p - a q} } \ln \size {\frac {u - \sqrt {\dfrac {b p - a q} p } } {u + \sqrt {\dfrac {b p - a q} p} } } + C\)





substituting for $d$














\(\ds \)

\(=\)







\(\ds \frac 1 {\sqrt {p \paren {b p - a q} } } \ln \size {\frac {\sqrt {p u} - \sqrt {b p - a q} } {\sqrt {p u} + \sqrt {b p - a q} } } + C\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac 1 {\sqrt {p \paren {b p - a q} } } \ln \size {\frac {\sqrt {p \paren {a x + b} } - \sqrt {b p - a q} } {\sqrt {p \paren {a x + b} } + \sqrt {b p - a q} } } + C\)





substituting for $u$



$\blacksquare$


Also presented as
This result can also be seen presented as:

$\ds \int \frac {\d x} {\paren {p x + q} \sqrt {a x + b} } = \frac 1 {\sqrt {b p - a q} \sqrt p} \ln \size {\frac {\sqrt {p \paren {a x + b} } - \sqrt {b p - a q} } {\sqrt {p \paren {a x + b} } + \sqrt {b p - a q} } } + C$
but this presupposes both that $p > 0$ and $b p - a q > 0$.


Sources
1964: Milton Abramowitz and Irene A. Stegun: Handbook of Mathematical Functions ... (previous) ... (next): $3$: Elementary Analytic Methods: $3.3$ Rules for Differentiation and Integration: Integrals of Irrational Algebraic Functions: $3.3.30$




