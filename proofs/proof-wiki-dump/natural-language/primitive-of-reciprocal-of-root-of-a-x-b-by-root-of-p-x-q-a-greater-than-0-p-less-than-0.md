# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_Root_of_a_x_%2B_b_by_Root_of_p_x_%2B_q/a_greater_than_0,_p_less_than_0



Theorem
Let $a, b, p, q \in \R$ such that $a p \ne b q$.
Let $a > 0$ and $p < 0$.
Then:

$\ds \int \frac {\d x} {\sqrt {\paren {a x + b} \paren {p x + q} } } = \dfrac {-1} {\sqrt {-a p} } \map \arcsin {\dfrac {2 a p x + b p + a q} {a q - b p} } + C$
for all $x \in \R$ such that $\paren {a x + b} \paren {p x + q} > 0$.


Proof
Completing the Square
$\ds \int \frac {\d x} {\sqrt {\paren {a x + b} \paren {p x + q} } } = \begin {cases}
\ds \frac 1 {\sqrt {a p} } \int \frac {\d u} {\sqrt {u^2 - \paren {b p - a q}^2} } & : a p > 0 \\
\ds \frac 1 {\sqrt {-a p} } \int \frac {\d u} {\sqrt {\paren {b p - a q}^2 - u^2} } & : a p < 0
\end {cases}$
where:

$u := 2 a p x + b p + a q$
$\Box$

Hence:














\(\ds \int \frac {\d x} {\sqrt {\paren {a x + b} \paren {p x + q} } }\)

\(=\)







\(\ds \frac 1 {\sqrt {-a p} } \int \frac {\d u} {\sqrt {\paren {b p - a q}^2 - u^2} }\)





Completing the Square above, as $a p < 0$














\(\ds \)

\(=\)







\(\ds \frac 1 {\sqrt {-a p} } \map \arcsin {\dfrac u {b p - a q} } + C\)





Primitive of $\dfrac 1 {\sqrt {a^2 - x^2} }$














\(\ds \)

\(=\)







\(\ds \frac 1 {\sqrt {-a p} } \map \arcsin {\dfrac {2 a p x + b p + a q} {b p - a q} } + C\)





substituting for $u$ from Completing the Square above




We could finish here, but we wish to present the result in the format given, so:












\(\ds \)

\(=\)







\(\ds \frac {-1} {\sqrt {-a p} } \map \arcsin {-\dfrac {2 a p x + b p + a q} {b p - a q} } + C\)





Arcsine is Odd Function














\(\ds \)

\(=\)







\(\ds \frac {-1} {\sqrt {-a p} } \map \arcsin {\dfrac {2 a p x + b p + a q} {a q - b p} } + C\)





simplifying



$\blacksquare$


Sources
1964: Milton Abramowitz and Irene A. Stegun: Handbook of Mathematical Functions ... (previous) ... (next): $3$: Elementary Analytic Methods: $3.3$ Rules for Differentiation and Integration: Integrals of Irrational Algebraic Functions: $3.3.27$




