# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_x_by_a_x_%2B_b



Theorem
$\ds \int \frac {\rd x} {x \paren {a x + b} } = \frac 1 b \ln \size {\frac x {a x + b} } + C$


Proof 1













\(\ds \int \frac {\d x} {x \paren {a x + b} }\)

\(=\)







\(\ds \int \paren {\dfrac 1 {b x} - \dfrac a {b \paren {a x + b} } } \rd x\)





Partial Fraction Expansion














\(\ds \)

\(=\)







\(\ds \frac 1 b \int \frac {\d x} x - \frac a b \int \frac {\d x} {a x + b}\)





Linear Combination of Primitives














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


Proof 2













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


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $a x + b$: $14.63$
1968: George B. Thomas, Jr.: Calculus and Analytic Geometry (4th ed.) ... (previous) ... (next): Front endpapers: A Brief Table of Integrals: $10$.




