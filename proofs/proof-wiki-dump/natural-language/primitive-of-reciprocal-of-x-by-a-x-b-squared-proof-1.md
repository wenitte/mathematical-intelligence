# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_x_by_a_x_%2B_b_squared/Proof_1

Theorem
$\ds \int \frac {\d x} {x \paren {a x + b}^2} = \frac 1 {b \paren {a x + b} } + \frac 1 {b^2} \ln \size {\frac x {a x + b} } + C$


Proof













\(\ds \int \frac {\d x} {x \paren {a x + b}^2}\)

\(=\)







\(\ds \int \paren {\frac 1 {b^2 x} - \frac a {b^2 \paren {a x + b} } - \frac a {b \paren {a x + b}^2} } \rd x\)





Partial Fraction Expansion














\(\ds \)

\(=\)







\(\ds \frac 1 {b^2} \int \frac {\d x} x - \frac a {b^2} \int \frac {\d x} {a x + b} - \frac a b \int \frac {\d x} {\paren {a x + b}^2}\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac 1 {b^2} \ln \size x - \frac a {b^2} \int \frac {\d x} {a x + b} - \frac a b \int \frac {\d x} {\paren {a x + b}^2} + C\)





Primitive of Reciprocal














\(\ds \)

\(=\)







\(\ds \frac 1 {b^2} \ln \size x - \frac a {b^2} \ln \size {a x + b} - \frac a b \int \frac {\d x} {\paren {a x + b}^2} + C\)





Primitive of $\dfrac 1 {a x + b}$














\(\ds \)

\(=\)







\(\ds \frac 1 {b^2} \ln \size x - \frac a {b^2} \ln \size {a x + b} - \frac a b \frac {-1} {a \paren {a x + b} } + C\)





Primitive of $\dfrac 1 {\paren {a x + b}^2}$














\(\ds \)

\(=\)







\(\ds \frac 1 {b \paren {a x + b} } + \frac 1 {b^2} \ln \size {\frac x {a x + b} } + C\)





Difference of Logarithms and rearranging



$\blacksquare$





