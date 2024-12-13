# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_x_by_a_x_%2B_b_cubed

Theorem
$\ds\int \frac {\d x} {x \paren {a x + b}^3} = \frac {a^2 x^2} {2 b^3 \paren {a x + b}^2} - \frac {2 a x} {b^3 \paren {a x + b} } + \frac 1 {b^3} \ln \size {\frac x {a x + b} } + C$


Proof













\(\ds \int \frac {\d x} {x \paren {a x + b}^3}\)

\(=\)







\(\ds \int \paren {\frac 1 {b^3 x} - \frac a {b^3 \paren {a x + b} } - \frac a {b^2 \paren {a x + b}^2} - \frac a {b \paren {a x + b}^3} } \rd x\)





Partial Fraction Expansion














\(\ds \)

\(=\)







\(\ds \frac 1 {b^3} \int \frac {\d x} x - \frac a {b^3} \int \frac {\d x} {a x + b} - \frac a {b^2} \int \frac {\d x} {\paren {a x + b}^2} - \frac a b \int \frac {\d x} {\paren {a x + b}^3}\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac 1 {b^3} \ln \size x - \frac a {b^3} \int \frac {\d x} {a x + b} - \frac a {b^2} \int \frac {\d x} {\paren {a x + b}^2} - \frac a b \int \frac {\d x} {\paren {a x + b}^3} + C\)





Primitive of Reciprocal














\(\ds \)

\(=\)







\(\ds \frac 1 {b^3} \ln \size x - \frac 1 {b^3} \ln \size {a x + b} - \frac a {b^2} \int \frac {\d x} {\paren {a x + b}^2} - \frac a b \int \frac {\d x} {\paren {a x + b}^3} + C\)





Primitive of $\dfrac 1 {a x + b}$














\(\ds \)

\(=\)







\(\ds \frac 1 {b^3} \ln \size x - \frac 1 {b^3} \ln \size {a x + b} - \frac a {b^2} \frac {-1} {a \paren {a x + b} } - \frac a b \int \frac {\d x} {\paren {a x + b}^3} + C\)





Primitive of $\dfrac 1 {\paren {a x + b}^2}$














\(\ds \)

\(=\)







\(\ds \frac 1 {b^3} \ln \size x - \frac 1 {b^3} \ln \size {a x + b} - \frac a {b^2} \frac {-1} {a \paren {a x + b} } - \frac a b \frac {-1} {2 a \paren {a x + b}^2} + C\)





Primitive of $\dfrac 1 {\paren {a x + b}^3}$














\(\ds \)

\(=\)







\(\ds \frac 1 {b^2 \paren {a x + b} } + \frac 1 {2 b \paren {a x + b}^2} + \frac 1 {b^3} \ln \size {\frac x {a x + b} } + C\)





Difference of Logarithms and rearranging














\(\ds \)

\(=\)







\(\ds \frac {b} {b^3 \paren {a x + b} } + \frac {b^2} {2 b^3 \paren {a x + b}^2} + \frac 1 {b^3} \ln \size {\frac x {a x + b} } + C\)




















\(\ds \)

\(=\)







\(\ds \paren {\frac {a x + b} {b^3 \paren {a x + b} } - \frac {a x} {b^3 \paren {a x + b} } } + \paren {\frac {a^2 x^2 + 2 a b x + b^2} {2 b^3 \paren {a x + b}^2} - \frac {a^2 x^2 + 2 a b x} {2 b^3 \paren {a x + b}^2} } + \frac 1 {b^3} \ln \size {\frac x {a x + b} } + C\)




















\(\ds \)

\(=\)







\(\ds \frac {a x + b} {b^3 \paren {a x + b} } - \frac {a x} {b^3 \paren {a x + b} } + \frac {\paren {a x + b}^2} {2 b^3 \paren {a x + b}^2} - \frac {a^2 x^2 + 2 a b x} {2 b^3 \paren {a x + b}^2} + \frac 1 {b^3} \ln \size {\frac x {a x + b} } + C\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {b^3} - \frac {a x} {b^3 \paren {a x + b} } + \frac 1 {2 b^3} - \frac {a^2 x^2 + 2 a b x} {2 b^3 \paren {a x + b}^2} + \frac 1 {b^3} \ln \size {\frac x {a x + b} } + C\)




















\(\ds \)

\(=\)







\(\ds -\frac {a x} {b^3 \paren {a x + b} } - \frac {a^2 x^2 + 2 a b x} {2 b^3 \paren {a x + b}^2} + \frac 1 {b^3} \ln \size {\frac x {a x + b} } + C + \frac 3 {2 b^3}\)




















\(\ds \)

\(=\)







\(\ds -\frac {a x} {b^3 \paren {a x + b} } - \frac {a^2 x^2} {2 b^3 \paren {a x + b}^2} - \frac {2 a b x} {2 b^3 \paren {a x + b}^2} + \frac 1 {b^3} \ln \size {\frac x {a x + b} } + C + \frac 3 {2 b^3}\)




















\(\ds \)

\(=\)







\(\ds -\frac {a x} {b^3 \paren {a x + b} } - \frac {a^2 x^2} {2 b^3 \paren {a x + b}^2} - \frac {2 a x \paren {a x + b} } {2 b^3 \paren {a x + b}^2} + \frac {2 a^2 x^2} {2 b^3 \paren {a x + b}^2} + \frac 1 {b^3} \ln \size {\frac x {a x + b} } + C + \frac 3 {2 b^3}\)




















\(\ds \)

\(=\)







\(\ds -\frac {a x} {b^3 \paren {a x + b} } - \frac {a^2 x^2} {2 b^3 \paren {a x + b}^2} - \frac {2 a x} {2 b^3 \paren {a x + b} } + \frac {2 a^2 x^2} {2 b^3 \paren {a x + b}2} + \frac 1 {b^3} \ln \size {\frac x {a x + b} } + C + \frac 3 {2 b^3}\)




















\(\ds \)

\(=\)







\(\ds -\frac {a x} {b^3 \paren {a x + b} } + \frac {a^2 x^2} {2 b^3 \paren {a x + b}^2} - \frac {a x} {b^3 \paren {a x + b} } + \frac 1 {b^3} \ln \size {\frac x {a x + b} } + C + \frac 3 {2 b^3}\)




















\(\ds \)

\(=\)







\(\ds \frac {a^2 x^2} {2 b^3 \paren {a x + b}^2} - \frac {2 a x} {b^3 \paren {a x + b} } + \frac 1 {b^3} \ln \size {\frac x {a x + b} } + C + \frac 3 {2 b^3}\)




















\(\ds \)

\(=\)







\(\ds \frac {a^2 x^2} {2 b^3 \paren {a x + b}^2} - \frac {2 a x} {b^3 \paren {a x + b} } + \frac 1 {b^3} \ln \size {\frac x {a x + b} } + C\)





$C + \dfrac 3 {2 b^3}$ is constant



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $a x + b$: $14.77$




