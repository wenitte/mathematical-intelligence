# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_x_cubed_by_a_x_%2B_b/Proof_2

Theorem
$\ds \int \frac {\d x} {x^3 \paren {a x + b} } = \frac {2 a x - b} {2 b^2 x^2} + \frac {a^2} {b^3} \ln \size {\frac x {a x + b} } + C$


Proof













\(\ds \int \frac {\d x} {x^3 \paren {a x + b} }\)

\(=\)







\(\ds \int \frac {b \rd x} {b x^3 \paren {a x + b} }\)





multiplying top and bottom by $b$














\(\ds \)

\(=\)







\(\ds \int \frac {\paren {a x + b - a x} \rd x} {b x^3 \paren {a x + b} }\)





adding and subtracting $a x$














\(\ds \)

\(=\)







\(\ds \frac 1 b \int \frac {\paren {a x + b} \rd x} {x^3 \paren {a x + b} } - \frac a b \int \frac {x \rd x} {x^3 \paren {a x + b} }\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac 1 b \int \frac {\d x} {x^3} - \frac a b \int \frac {\d x} {x^2 \paren {a x + b} }\)





simplification














\(\ds \)

\(=\)







\(\ds -\frac 1 {2 b x^2} - \frac a b \int \frac {\d x} {x^2 \paren {a x + b} } + C\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds -\frac 1 {2 b x^2} - \frac a b \paren {-\frac 1 {b x} + \frac a {b^2} \ln \size {\frac {a x + b} x} } + C\)





Primitive of $\dfrac 1 {x^2 \paren {a x + b} }$














\(\ds \)

\(=\)







\(\ds -\frac 1 {2 b x^2} + \frac a {b^2 x} - \frac {a^2} {b^3} \ln \size {\frac {a x + b} x} + C\)





multiplying out














\(\ds \)

\(=\)







\(\ds \frac a {b^2 x} - \frac 1 {2 b x^2} + \frac {a^2} {b^3} \ln \size {\frac x {a x + b} } + C\)





Difference of Logarithms














\(\ds \)

\(=\)







\(\ds \frac {2 a x - b} {2 b^2 x^2} + \frac {a^2} {b^3} \ln \size {\frac x {a x + b} } + C\)





rearranging



$\blacksquare$





