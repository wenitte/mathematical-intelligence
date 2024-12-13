# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_x_by_a_x_squared_plus_b_x_plus_c

Theorem
Let $a \in \R_{\ne 0}$.
Then:

$\ds \int \frac {\d x} {x \paren {a x^2 + b x + c} } = \frac 1 {2 c} \ln \size {\frac {x^2} {a x^2 + b x + c} } - \frac b {2 c} \int \frac {\d x} {a x^2 + b x + c}$


Proof













\(\ds \int \frac {\d x} {x \paren {a x^2 + b x + c} }\)

\(=\)







\(\ds \int \paren {\frac 1 {c x} - \frac {a x + b} {c \paren {a x^2 + b x + c} } } \rd x\)





Partial Fraction Expansion














\(\ds \)

\(=\)







\(\ds \frac 1 c \int \frac {\d x} x - \frac a c \int \frac {x \rd x} {a x^2 + b x + c} - \frac b c \int \frac {\d x} {a x^2 + b x + c}\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac 1 c \ln \size x - \frac a c \int \frac {x \rd x} {a x^2 + b x + c} - \frac b c \int \frac {\d x} {a x^2 + b x + c}\)





Primitive of Reciprocal














\(\ds \)

\(=\)







\(\ds \frac 1 c \ln \size x - \frac a c \paren {\frac 1 {2 a} \ln \size {a x^2 + b x + c} - \frac b {2 a} \int \frac {\d x} {a x^2 + b x + c} } - \frac b c \int \frac {\d x} {a x^2 + b x + c}\)





Primitive of $\dfrac x {a x^2 + b x + c}$














\(\ds \)

\(=\)







\(\ds \frac 1 c \ln \size x - \frac 1 {2 c} \ln \size {a x^2 + b x + c} + \frac b {2 c} \int \frac {\d x} {a x^2 + b x + c} - \frac b c \int \frac {\d x} {a x^2 + b x + c}\)





multiplying out














\(\ds \)

\(=\)







\(\ds \frac 1 c \ln \size x - \frac 1 {2 c} \ln \size {a x^2 + b x + c} - \frac b {2 c} \int \frac {\d x} {a x^2 + b x + c}\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac 1 {2 c} \ln \size {x^2} - \frac 1 {2 c} \ln \size {a x^2 + b x + c} - \frac b {2 c} \int \frac {\d x} {a x^2 + b x + c}\)





Logarithm of Power














\(\ds \)

\(=\)







\(\ds \frac 1 {2 c} \ln \size {\frac {x^2} {a x^2 + b x + c} } - \frac b {2 c} \int \frac {\d x} {a x^2 + b x + c}\)





Difference of Logarithms



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $a x^2 + bx + c$: $14.269$




