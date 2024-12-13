# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_Root_of_a_x_%2B_b_by_Root_of_p_x_%2B_q/a_p_greater_than_0



Theorem
Let $a, b, p, q \in \R$ such that $a p \ne b q$.
Let $a p > 0$.
Then:

$\ds \int \frac {\d x} {\sqrt {\paren {a x + b} \paren {p x + q} } } = \dfrac 2 {\sqrt {a p} } \ln \size {\sqrt {p \paren {a x + b} } + \sqrt {a \paren {p x + q} } } + C$
for all $x \in \R$ such that $\paren {a x + b} \paren {p x + q} > 0$.


Proof
Lemma $1$
Let $u = \sqrt {a x + b}$.
Then:

$\ds \sqrt {p x + q} = \sqrt {\paren {\frac p a} \paren {u^2 - \paren {\frac {b p - a q} p} } }$
$\Box$


Lemma $2$
$\ds \int \frac {\d x} {\sqrt {\paren {a x + b} \paren {p x + q} } } = \begin {cases}
\ds \frac 2 {\sqrt {a p} } \int \frac {\d u} {\sqrt {u^2 - \paren {\frac {b p - a q} p} } } & : a p > 0 \\
\ds \frac 2 {\sqrt {-a p} } \int \frac {\d u} {\sqrt {\paren {\frac {b p - a q} p} - u^2} } & : a p < 0
\end {cases}$
where:

$u := \sqrt {a x + b}$
$\Box$

We have by hypothesis that $a p > 0$.
Thus:














\(\ds \int \frac {\d x} {\sqrt {\paren {a x + b} \paren {p x + q} } }\)

\(=\)







\(\ds \int \frac {2 u \rd u} {a \sqrt {\frac p a} \sqrt {u^2 - \paren {\frac {b p - a q} p} } u}\)





Primitive of Function of $\sqrt {p x + q}$














\(\ds \)

\(=\)







\(\ds \frac 2 {\sqrt {a p} } \int \frac {\d u} {\sqrt {u^2 - \paren {\frac {b p - a q} p} } }\)





Primitive of Constant Multiple of Function




Let $\dfrac {b p - a q} p > 0$.
Then we set:

$(2): \quad c^2 :=\dfrac {b p - a q} p$

Then:














\(\ds \int \frac {\d x} {\sqrt {\paren {a x + b} \paren {p x + q} } }\)

\(=\)







\(\ds \frac 2 {\sqrt {a p} } \int \frac {\d u} {\sqrt{u^2 - c^2} }\)





from $(2)$














\(\ds \)

\(=\)







\(\ds \frac 2 {\sqrt {a p} } \ln \size {u + \sqrt {u^2 - c^2} } + C\)





Primitive of $\dfrac 1 {\sqrt {u^2 - c^2} }$: Logarithm Form














\(\ds \)

\(=\)







\(\ds \frac 2 {\sqrt {a p} } \ln \size {\sqrt {a x + b} + \sqrt {u^2 - \frac {b p - a q} p} } + C\)





substituting for $u$ and $c$



$\Box$

Let $\dfrac {b p - a q} p < 0$.
Then we set:

$(3): \quad c^2 := -\dfrac {b p - a q} p$

Then:














\(\ds \int \frac {\d x} {\sqrt {\paren {a x + b} \paren {p x + q} } }\)

\(=\)







\(\ds \frac 2 {\sqrt {a p} } \int \frac {\d u} {\sqrt {u^2 + c^2} }\)





from $(3)$














\(\ds \)

\(=\)







\(\ds \frac 2 {\sqrt {a p} } \ln \size {\sqrt {a x + b} + \sqrt {u^2 + c^2} } + C\)





Primitive of $\dfrac 1 {\sqrt {u^2 + c^2} }$: logarithm form














\(\ds \)

\(=\)







\(\ds \frac 2 {\sqrt {a p} } \ln \size {\sqrt {a x + b} + \sqrt {u^2 - \frac {b p - a q} p} } + C\)





substituting for $u$ and $c$




Thus we have in both cases that:
$\ds \int \frac {\d x} {\sqrt {\paren {a x + b} \paren {p x + q} } } = \frac 2 {\sqrt {a p} } \ln \size {\sqrt {a x + b} + \sqrt {u^2 - \frac {b p - a q} p} } + C$

Then:














\(\ds \int \frac {\d x} {\sqrt {\paren {a x + b} \paren {p x + q} } }\)

\(=\)







\(\ds \frac 2 {\sqrt {a p} } \ln \size {\sqrt {a x + b} + \sqrt {u^2 - \frac {b p - a q} p} } + C\)




















\(\ds \)

\(=\)







\(\ds \frac 2 {\sqrt {a p} } \ln \size {\sqrt {a x + b} + \sqrt {\frac a p} \sqrt {p x + q} } + C\)





Lemma $1$














\(\ds \)

\(=\)







\(\ds \frac 2 {\sqrt {a p} } \ln \size {\frac {\sqrt {p \paren {a x + b} } + \sqrt {a \paren {p x + q} } } {\sqrt p} } + C\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac 2 {\sqrt {a p} } \ln \size {\sqrt {p \paren {a x + b} } + \sqrt {a \paren {p x + q} } } - \ln {\sqrt p} + C\)





Difference of Logarithms














\(\ds \)

\(=\)







\(\ds \frac 2 {\sqrt {a p} } \ln \size {\sqrt {p \paren {a x + b} } + \sqrt {a \paren {p x + q} } } + C\)





subsuming $-\ln {\sqrt p}$ into the arbitrary constant



$\blacksquare$


Sources
1964: Milton Abramowitz and Irene A. Stegun: Handbook of Mathematical Functions ... (previous) ... (next): $3$: Elementary Analytic Methods: $3.3$ Rules for Differentiation and Integration: Integrals of Irrational Algebraic Functions: $3.3.28$




