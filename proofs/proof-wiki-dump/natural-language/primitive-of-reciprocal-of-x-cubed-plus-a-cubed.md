# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_x_cubed_plus_a_cubed

Theorem
$\ds \int \frac {\d x} {x^3 + a^3} = \frac 1 {6 a^2} \ln \size {\frac {\paren {x + a}^2} {x^2 - a x + a^2} } + \frac 1 {a^2 \sqrt 3} \arctan \frac {2 x - a} {a \sqrt 3}$


Proof













\(\ds \int \frac {\d x} {x^3 + a^3}\)

\(=\)







\(\ds \int \paren {\frac 1 {3 a^2 \paren {x + a} } - \frac {x - 2 a} {3 a^2 \paren {x^2 - a x + a^2} } } \rd x\)





Partial Fraction Expansion














\(\ds \)

\(=\)







\(\ds \int \paren {\frac 1 {3 a^2 \paren {x + a} } - \frac {2 x - 4 a} {6 a^2 \paren {x^2 - a x + a^2} } } \rd x\)





multiplying top and bottom by $2$














\(\ds \)

\(=\)







\(\ds \int \paren {\frac 1 {3 a^2 \paren {x + a} } - \paren {\frac {2 x - a} {6 a^2 \paren {x^2 - a x + a^2} } } - \paren {\frac {3 a} {6 a^2 \paren {x^2 - a x + a^2} } } } \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {3 a^2} \int \frac {\d x} {x + a} - \frac 1 {6 a^2} \int \frac {\paren {2 x - a} \rd x} {x^2 - a x + a^2} + \frac 1 {2 a} \int \frac {\d x} {x^2 - a x + a^2}\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac 1 {3 a^2} \ln \size {x + a} - \frac 1 {6 a^2} \int \frac {\paren {2 x - a} \rd x} {x^2 - a x + a^2} + \frac 1 {2 a} \int \frac {\d x} {x^2 - a x + a^2}\)





Primitive of $\dfrac 1 {a x + b}$














\(\ds \)

\(=\)







\(\ds \frac 1 {3 a^2} \ln \size {x + a} - \frac 1 {6 a^2} \ln \size {x^2 - a x + a^2} + \frac 1 {2 a} \int \frac {\d x} {x^2 - a x + a^2}\)





Primitive of Function under its Derivative














\(\ds \)

\(=\)







\(\ds \frac 1 {6 a^2} \ln \size {\paren {x + a}^2} - \frac 1 {6 a^2} \ln \size {x^2 - a x + a^2} + \frac 1 {2 a} \int \frac {\d x} {x^2 - a x + a^2}\)





Logarithm of Power














\(\ds \)

\(=\)







\(\ds \frac 1 {6 a^2} \ln \size {\frac {\paren {x + a}^2} {x^2 - a x + a^2} } + \frac 1 {2 a} \int \frac {\d x} {x^2 - a x + a^2}\)





Difference of Logarithms














\(\ds \)

\(=\)







\(\ds \frac 1 {6 a^2} \ln \size {\frac {\paren {x + a}^2} {x^2 - a x + a^2} } + \frac 1 {2 a} \paren {\frac 2 {a \sqrt 3} \map \arctan {\frac {2 x - a} {a \sqrt 3} } }\)





Primitive of $\dfrac 1 {x^2 - a x + a^2}$














\(\ds \)

\(=\)







\(\ds \frac 1 {6 a^2} \ln \size {\frac {\paren {x + a}^2} {x^2 - a x + a^2} } + \frac 1 {a^2 \sqrt 3} \arctan \frac {2 x - a} {a \sqrt 3}\)





simplifying



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $x^3 + a^3$: $14.299$




