# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_a_x_squared_plus_b_x_plus_c/Examples/3_x%5E2_%2B_4_x_%2B_2

Example of Use of Primitive of $\dfrac 1 {a x^2 + b x + c}$
$\ds \int \frac {\d x} {3 x^2 + 4 x + 2} = \dfrac 1 {\sqrt 2} \map \arctan {\dfrac {3 x + 2} {\sqrt 2} } + C$


Proof 1
We aim to use Primitive of $\dfrac 1 {a x^2 + b x + c}$ with:














\(\ds a\)

\(=\)







\(\ds 3\)




















\(\ds b\)

\(=\)







\(\ds 4\)




















\(\ds c\)

\(=\)







\(\ds 2\)









We note that:














\(\ds b^2 - 4 a c\)

\(=\)







\(\ds 4^2 - 4 \times 3 \times 2\)




















\(\ds \)

\(=\)







\(\ds 16 - 24\)




















\(\ds \)

\(=\)







\(\ds -8\)










Hence from Primitive of $\dfrac 1 {a x^2 + b x + c}$:

$\ds \int \frac {\d x} {a x^2 + b x + c} = \dfrac 2 {\sqrt {4 a c - b^2} } \map \arctan {\dfrac {2 a x + b} {\sqrt {4 a c - b^2} } } + C$

Substituting for $a$, $b$ and $c$ and simplifying:














\(\ds \int \frac {\d x} {3 x^2 + 4 x + 2}\)

\(=\)







\(\ds \dfrac 2 {\sqrt {4 \times 3 \times 2 - 4^2} } \map \arctan {\dfrac {2 \times 3 x + 4} {\sqrt {4 \times 3 \times 2 - 4^2} } } + C\)




















\(\ds \)

\(=\)







\(\ds \dfrac 2 {\sqrt 8} \map \arctan {\dfrac {6 x + 4} {\sqrt 8} } + C\)




















\(\ds \)

\(=\)







\(\ds \dfrac 2 {2 \sqrt 2} \map \arctan {\dfrac {2 \paren {3 x + 2} } {2 \sqrt 2} } + C\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {\sqrt 2} \map \arctan {\dfrac {3 x + 2} {\sqrt 2} } + C\)









$\blacksquare$


Proof 2













\(\ds \int \frac {\d x} {3 x^2 + 4 x + 2}\)

\(=\)







\(\ds \dfrac 1 3 \int \frac {\d x} {x^2 + \frac 4 3 x + \frac 2 3}\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 3 \int \frac {\d x} {\paren {x + \frac 2 3}^2 + \paren {\frac 2 3 - \frac 4 9} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 3 \int \frac {\d x} {\paren {x + \frac 2 3}^2 + \frac 2 9}\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 3 \int \frac {\d x} {\paren {x + \frac 2 3}^2 + \paren {\frac {\sqrt 2} 3}^2}\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 3 \paren {\dfrac 3 {\sqrt 2} \map \arctan {\dfrac {x + \frac 2 3} {\frac {\sqrt 2} 3} } } + C\)





Primitive of $\dfrac 1 {x^2 + a^2}$














\(\ds \)

\(=\)







\(\ds \dfrac 1 {\sqrt 2} \map \arctan {\dfrac {3 x + 2} {\sqrt 2} } + C\)









$\blacksquare$





