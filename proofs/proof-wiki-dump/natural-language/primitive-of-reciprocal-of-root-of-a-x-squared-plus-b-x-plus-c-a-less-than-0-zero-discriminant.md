# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_Root_of_a_x_squared_plus_b_x_plus_c/a_less_than_0/Zero_Discriminant

Theorem
Let $a \in \R_{\ne 0}$.
Let $b^2 - 4 a c = 0$.

Then:

$\ds \int \frac {\d x} {\sqrt {a x^2 + b x + c} }$
is not defined.


Proof
Suppose that $b^2 - 4 a c = 0$.
Then:














\(\ds a x^2 + b x + c\)

\(=\)







\(\ds \frac {\paren {2 a x + b}^2 - \paren {b^2 - 4 a c} } {4 a}\)





Completing the Square














\(\ds \)

\(=\)







\(\ds \frac {\paren {2 a x + b}^2} {4 a}\)





as $b^2 - 4 a c = 0$



But we have that:

$\paren {2 a x + b}^2 > 0$
while under our assertion that $a < 0$:

$4 a < 0$
and so:

$a x^2 + b x + c < 0$
Thus on the real numbers $\sqrt {a x^2 + b x + c}$ is not defined.
Hence it follows that:

$\ds \int \frac {\d x} {\sqrt {a x^2 + b x + c} }$
is not defined.
$\blacksquare$





