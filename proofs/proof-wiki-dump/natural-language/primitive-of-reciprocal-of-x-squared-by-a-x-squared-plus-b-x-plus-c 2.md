# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_x_squared_by_a_x_squared_plus_b_x_plus_c

Theorem
Let $a \in \R_{\ne 0}$.
Then:

$\ds \int \frac {\d x} {x^2 \paren {a x^2 + b x + c} } = \frac b {2 c^2} \ln \size {\frac {a x^2 + b x + c} {x^2} } - \frac 1 {c x}  + \frac {b^2 - 2 a c} {2 c^2} \int \frac {\d x} {a x^2 + b x + c}$


Proof













\(\ds \)

\(\)







\(\ds \int \frac {\d x} {x^2 \paren {a x^2 + b x + c} }\)




















\(\ds \)

\(=\)







\(\ds \int \paren {\frac {-b} {c^2 x} + \frac 1 {c x^2} + \frac {a b x + b^2 - a c} {c^2 \paren {a x^2 + b x + c} } } \rd x\)





Partial Fraction Expansion














\(\ds \)

\(=\)







\(\ds \frac {-b} {c^2} \int \frac {\d x} x + \frac 1 c \int \frac {\d x} {x^2} + \frac {a b} {c^2} \int \frac {x \rd x} {a x^2 + b x + c} + \frac {b^2 - a c} {c^2} \int \frac {\d x} {a x^2 + b x + c}\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac {-b} {c^2} \ln \size x + \frac 1 c \int \frac {\d x} {x^2} + \frac {a b} {c^2} \int \frac {x \rd x} {a x^2 + b x + c} + \frac {b^2 - a c} {c^2} \int \frac {\d x} {a x^2 + b x + c}\)





Primitive of Reciprocal














\(\ds \)

\(=\)







\(\ds \frac {-b} {c^2} \ln \size x - \frac 1 {c x} + \frac {a b} {c^2} \int \frac {x \rd x} {a x^2 + b x + c} + \frac {b^2 - a c} {c^2} \int \frac {\d x} {a x^2 + b x + c}\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \frac {-b} {c^2} \ln \size x - \frac 1 {c x} + \frac {a b} {c^2} \paren {\frac 1 {2 a} \ln \size {a x^2 + b x + c} - \frac b {2 a} \int \frac {\d x} {a x^2 + b x + c} } + \frac {b^2 - a c} {c^2} \int \frac {\d x} {a x^2 + b x + c}\)





Primitive of $\dfrac x {a x^2 + b x + c}$














\(\ds \)

\(=\)







\(\ds \frac {-b} {c^2} \ln \size x - \frac 1 {c x} + \frac b {2 c^2} \ln \size {a x^2 + b x + c} - \frac {b^2} {2 c^2} \int \frac {\d x} {a x^2 + b x + c} + \frac {2 b^2 - 2 a c} {2 c^2} \int \frac {\d x} {a x^2 + b x + c}\)





multiplying out














\(\ds \)

\(=\)







\(\ds \frac {-b} {c^2} \ln \size x - \frac 1 {c x} + \frac b {2 c^2} \ln \size {a x^2 + b x + c} + \frac {b^2 - 2 a c} {2 c^2} \int \frac {\d x} {a x^2 + b x + c}\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac {-b} {2 c^2} \ln \size {x^2} - \frac 1 {c x} + \frac b {2 c^2} \ln \size {a x^2 + b x + c} + \frac {b^2 - 2 a c} {2 c^2} \int \frac {\d x} {a x^2 + b x + c}\)





Logarithm of Power














\(\ds \)

\(=\)







\(\ds \frac b {2 c^2} \ln \size {\frac {a x^2 + b x + c} {x^2} } - \frac 1 {c x}  + \frac {b^2 - 2 a c} {2 c^2} \int \frac {\d x} {a x^2 + b x + c}\)





Difference of Logarithms



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $a x^2 + b x + c$: $14.270$




