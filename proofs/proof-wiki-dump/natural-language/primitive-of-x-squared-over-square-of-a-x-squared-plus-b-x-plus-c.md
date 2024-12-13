# 

Source: https://proofwiki.org/wiki/Primitive_of_x_squared_over_square_of_a_x_squared_plus_b_x_plus_c

Theorem
Let $a \in \R_{\ne 0}$.
Then:

$\ds \int \frac {x^2 \rd x} {\paren {a x^2 + b x + c}^2} = \frac {\paren {b^2 - 2 a c} x + b c} {a \paren {4 a c - b^2} \paren {a x^2 + b x + c} } + \frac {2 c} {4 a c - b^2} \int \frac {\d x} {a x^2 + b x + c}$


Proof













\(\ds \)

\(\)







\(\ds \int \frac {x^2 \rd x} {\paren {a x^2 + b x + c}^2}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 a \int \frac {a x^2 \rd x} {\paren {a x^2 + b x + c}^2}\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds \frac 1 a \int \frac {\paren {a x^2 + b x + c - b x - c} \rd x} {\paren {a x^2 + b x + c}^2}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 a \int \frac {\paren {a x^2 + b x + c} \rd x} {\paren {a x^2 + b x + c}^2} - \frac 1 a \int \frac {\paren {b x + c} \rd x} {\paren {a x^2 + b x + c}^2}\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac 1 a \int \frac {\paren {a x^2 + b x + c} \rd x} {\paren {a x^2 + b x + c}^2} - \frac b a \int \frac {x \rd x} {\paren {a x^2 + b x + c}^2} - \frac c a \int \frac {\d x} {\paren {a x^2 + b x + c}^2}\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac 1 a \int \frac {\d x} {a x^2 + b x + c} - \frac b a \int \frac {x \rd x} {\paren {a x^2 + b x + c}^2} - \frac c a \int \frac {\d x} {\paren {a x^2 + b x + c}^2}\)





simplification














\(\ds \)

\(=\)







\(\ds - \frac b a \paren {\frac {- \paren {b x + 2 c} } {\paren {4 a c - b^2} \paren {a x^2 + b x + c} } - \frac b {4 a c - b^2} \int \frac {\d x} {a x^2 + b x + c} }\)





Primitive of $\dfrac x {\paren {a x^2 + b x + c}^2}$














\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \frac c a \int \frac {\d x} {\paren {a x^2 + b x + c}^2} + \frac 1 a \int \frac {\d x} {a x^2 + b x + c}\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {b^2 x + 2 b c} } {a \paren {4 a c - b^2} \paren {a x^2 + b x + c} } + \frac {b^2} {a \paren {4 a c - b^2} } \int \frac {\d x} {a x^2 + b x + c}\)





multiplying out














\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \frac c a \int \frac {\d x} {\paren {a x^2 + b x + c}^2} + \frac 1 a \int \frac {\d x} {a x^2 + b x + c}\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {b^2 x + 2 b c} } {a \paren {4 a c - b^2} \paren {a x^2 + b x + c} } + \frac {b^2 + 4 a c - b^2} {a \paren {4 a c - b^2} } \int \frac {\d x} {a x^2 + b x + c}\)





collecting terms in $\ds \int \frac {\d x} {a x^2 + b x + c}$














\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \frac c a \int \frac {\d x} {\paren {a x^2 + b x + c}^2}\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {b^2 x + 2 b c} } {a \paren {4 a c - b^2} \paren {a x^2 + b x + c} } + \frac {4 c} {4 a c - b^2} \int \frac {\d x} {a x^2 + b x + c}\)





simplifying














\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \frac c a \int \frac {\d x} {\paren {a x^2 + b x + c}^2}\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {b^2 x + 2 b c} } {a \paren {4 a c - b^2} \paren {a x^2 + b x + c} } + \frac {4 c} {4 a c - b^2} \int \frac {\d x} {a x^2 + b x + c}\)




















\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \frac c a \paren {\frac {2 a x + b} {\paren {4 a c - b^2} \paren {a x^2 + b x + c} } + \frac {2 a} {4 a c - b^2} \int \frac {\d x} {a x^2 + b x + c} }\)





Primitive of $\dfrac 1 {\paren {a x^2 + b x + c}^2}$














\(\ds \)

\(=\)







\(\ds \frac {\paren {b^2 x + 2 b c} } {a \paren {4 a c - b^2} \paren {a x^2 + b x + c} } + \frac {4 c} {4 a c - b^2} \int \frac {\d x} {a x^2 + b x + c}\)




















\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \frac {2 a c x + b c} {a \paren {4 a c - b^2} \paren {a x^2 + b x + c} } - \frac {2 c} {4 a c - b^2} \int \frac {\d x} {a x^2 + b x + c}\)





multiplying out














\(\ds \)

\(=\)







\(\ds \frac {\paren {b^2 - 2 a c} x + b c} {a \paren {4 a c - b^2} \paren {a x^2 + b x + c} } + \frac {2 c} {4 a c - b^2} \int \frac {\d x} {a x^2 + b x + c}\)





simplifying



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $a x^2 + b x + c$: $14.274$




