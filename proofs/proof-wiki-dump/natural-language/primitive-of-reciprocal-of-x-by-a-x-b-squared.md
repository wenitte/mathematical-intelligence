# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_x_by_a_x_%2B_b_squared



Theorem
$\ds \int \frac {\d x} {x \paren {a x + b}^2} = \frac 1 {b \paren {a x + b} } + \frac 1 {b^2} \ln \size {\frac x {a x + b} } + C$


Proof 1













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


Proof 2













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


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $a x + b$: $14.70$




