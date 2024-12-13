# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_a_squared_minus_x_squared/Logarithm_Form_1/size_of_x_less_than_a/Proof_2

Theorem
Let $\size x < a$.
Then:

$\ds \int \frac {\d x} {a^2 - x^2} = \dfrac 1 {2 a} \map \ln {\dfrac {a + x} {a - x} } + C$


Proof
Let $\size x < a$.
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







\(\ds \frac 1 {2 a} \int \frac {\d x} {a + x} + \frac 1 {2 a} \int \frac {\d x} {a - x}\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds \frac 1 {2 a} \ln \size {a + x} - \frac 1 {2 a} \ln \size {a - x} + C\)





Primitive of Reciprocal














\(\ds \)

\(=\)







\(\ds \frac 1 {2 a} \map \ln {a + x} - \frac 1 {2 a} \map \ln {a - x} + C\)





as both $a + x < 0$ and $a - x < 0$














\(\ds \)

\(=\)







\(\ds \dfrac 1 {2 a} \map \ln {\dfrac {a + x} {a - x} } + C\)





Difference of Logarithms



$\blacksquare$


Sources
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text {II}$. Calculus: Integration: Algebraic Integration: $\text {I}$.




