# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_x_by_a_x_%2B_b_squared/Proof_2

Theorem
$\ds \int \frac {\d x} {x \paren {a x + b}^2} = \frac 1 {b \paren {a x + b} } + \frac 1 {b^2} \ln \size {\frac x {a x + b} } + C$


Proof













\(\ds \int \frac {\d x} {x \paren {a x + b}^2}\)

\(=\)







\(\ds \int \frac {b \rd x} {b x \paren {a x + b}^2}\)





multiplying top and bottom by $b$














\(\ds \)

\(=\)







\(\ds \int \frac {\paren {a x + b - a x} \rd x} {b x \paren {a x + b}^2}\)





adding and subtracting $a x$














\(\ds \)

\(=\)







\(\ds \frac 1 b \int \frac {\paren {a x + b} \rd x} {x \paren {a x + b}^2} - \frac a b \int \frac {x \rd x} {x \paren {a x + b}^2}\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac 1 b \int \frac {\d x} {x \paren {a x + b} } - \frac a b \int \frac {\d x} {\paren {a x + b}^2}\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac 1 b \paren {\frac 1 b \ln \size {\frac x {a x + b} } } - \frac a b \int \frac {\d x} {\paren {a x + b}^2} + C\)





Primitive of $\dfrac 1 {x \paren {a x + b} }$














\(\ds \)

\(=\)







\(\ds \frac 1 {b^2} \ln \size {\frac x {a x + b} } - \frac a b \paren {-\frac 1 {a \paren {a x + b} } } + C\)





Primitive of $\dfrac 1 {\paren {a x + b}^2}$














\(\ds \)

\(=\)







\(\ds \frac 1 {b \paren {a x + b} } + \frac 1 {b^2} \ln \size {\frac x {a x + b} } + C\)





simplifying



$\blacksquare$





