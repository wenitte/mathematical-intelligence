# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_a_squared_minus_x_squared/Logarithm_Form_1/size_of_x_greater_than_a/Proof_2

Theorem
Let $\size x > a$.
Then:

$\ds \int \frac {\d x} {a^2 - x^2} = \dfrac 1 {2 a} \map \ln {\dfrac {x + a} {x - a} } + C$


Proof
Let $\size x > a$.
Then:














\(\ds \int \frac {\d x} {a^2 - x^2}\)

\(=\)







\(\ds \int \frac {\d x} {\paren {a + x} \paren {a - x} }\)





Difference of Two Squares














\(\ds \)

\(=\)







\(\ds \int \frac {\d x} {2 a \paren {a + x} } + \int \frac {\d x} {2 a \paren {a - x} }\)





Partial Fraction Expansion














\(\ds \)

\(=\)







\(\ds \int \frac {\d x} {2 a \paren {x + a} } - \int \frac {\d x} {2 a \paren {x - a} }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {2 a} \int \frac {\d x} {x + a} - \frac 1 {2 a} \int \frac {\d x} {x - a}\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds \frac 1 {2 a} \ln \size {x + a} - \frac 1 {2 a} \ln \size {x - a} + C\)





Primitive of Reciprocal














\(\ds \)

\(=\)







\(\ds \dfrac 1 {2 a} \ln \size {\dfrac {x + a} {x - a} } + C\)





Difference of Logarithms




If $x > a$, then both $x + a > 0$ and $x - a > 0$.
So $\dfrac {x + a} {x - a} > 0$ and so:

$\ln \size {\dfrac {x + a} {x - a} } = \map \ln {\dfrac {x + a} {x - a} }$

If $x < -a$, then both $x + a < 0$ and $x - a < 0$.
So again $\dfrac {x + a} {x - a} > 0$ and so:

$\ln \size {\dfrac {x + a} {x - a} } = \map \ln {\dfrac {x + a} {x - a} }$

Hence the result.
$\blacksquare$





