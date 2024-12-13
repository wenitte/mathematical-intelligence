# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_a_x_squared_plus_b_x_plus_c/Examples/x%5E2_%2B_2_a_x_%2B_b

Example of Use of Primitive of $\dfrac 1 {x^2 + 2 a x + b}$
$\ds \int \frac {\d x} {x^2 + 2 a x + b} = \dfrac 1 {\sqrt {b - a^2} } \map \arctan {\dfrac {x + a} {\sqrt {b - a^2} } } + C$
where $b > a^2$.


Proof
We aim to use Primitive of $\dfrac 1 {a x^2 + b x + c}$ with:














\(\ds a\)

\(\gets\)







\(\ds 1\)




















\(\ds b\)

\(\gets\)







\(\ds 2 a\)




















\(\ds c\)

\(\gets\)







\(\ds b\)









We note that:














\(\ds b\)

\(>\)







\(\ds a^2\)














\(\ds \leadsto \ \ \)





\(\ds \paren {2 a}^2 - 4 \times 1 \times b\)

\(<\)







\(\ds 0\)










Hence from Primitive of $\dfrac 1 {a x^2 + b x + c}$:

$\ds \int \frac {\d x} {a x^2 + b x + c} = \dfrac 2 {\sqrt {4 a c - b^2} } \map \arctan {\dfrac {2 a x + b} {\sqrt {4 a c - b^2} } } + C$

Substituting for $a$, $b$ and $c$ by hypothesis:














\(\ds \int \frac {\d x} {x^2 + 2 a x + b}\)

\(=\)







\(\ds \dfrac 2 {\sqrt {4 \times 1 \times b - \paren {2 a}^2} } \map \arctan {\dfrac {2 \times 1 \times x + 2 a} {\sqrt {4 \times 1 \times b - \paren {2 a}^2} } } + C\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {\sqrt {b - a^2} } \map \arctan {\dfrac {x + a} {\sqrt {b - a^2} } } + C\)









$\blacksquare$


Sources
1976: K. Weltner and W.J. Weber: Mathematics for Engineers and Scientists ... (previous) ... (next): $6$. Integral Calculus: Appendix: Table of Fundamental Standard Integrals




