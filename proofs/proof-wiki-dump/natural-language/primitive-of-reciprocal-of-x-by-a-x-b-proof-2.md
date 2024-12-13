# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_x_by_a_x_%2B_b/Proof_2

Theorem
$\ds \int \frac {\rd x} {x \paren {a x + b} } = \frac 1 b \ln \size {\frac x {a x + b} } + C$


Proof













\(\ds \int \frac {\d x} {x \paren {a x + b} }\)

\(=\)







\(\ds \int \frac {b \rd x} {b x \paren {a x + b} }\)





multiplying top and bottom by $b$














\(\ds \)

\(=\)







\(\ds \int \frac {\paren {a x + b - a x} \rd x} {b x \paren {a x + b} }\)





adding and subtracting $a x$














\(\ds \)

\(=\)







\(\ds \frac 1 b \int \frac {\paren {a x + b} \rd x} {x \paren {a x + b} } - \frac a b \int \frac {x \rd x} {x \paren {a x + b} }\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac 1 b \int \frac {\d x} x - \frac a b \int \frac {\d x} {a x + b}\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac 1 b \ln \size x - \frac a b \int \frac {\d x} {a x + b} + C\)





Primitive of Reciprocal














\(\ds \)

\(=\)







\(\ds \frac 1 b \ln \size x - \frac 1 b \ln \size {a x + b} + C\)





Primitive of $\dfrac 1 {a x + b}$














\(\ds \)

\(=\)







\(\ds \frac 1 b \ln \size {\frac x {a x + b} } + C\)





Difference of Logarithms



$\blacksquare$




