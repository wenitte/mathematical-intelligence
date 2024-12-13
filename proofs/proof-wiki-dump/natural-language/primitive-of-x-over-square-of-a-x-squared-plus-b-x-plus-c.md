# 

Source: https://proofwiki.org/wiki/Primitive_of_x_over_square_of_a_x_squared_plus_b_x_plus_c

Theorem
Let $a \in \R_{\ne 0}$.
Then:

$\ds \int \frac {x \rd x} {\paren {a x^2 + b x + c}^2} = \frac {-\paren {b x + 2 c} } {\paren {4 a c - b^2} \paren {a x^2 + b x + c} } - \frac b {4 a c - b^2} \int \frac {\d x} {a x^2 + b x + c}$


Proof
Let:














\(\ds z\)

\(=\)







\(\ds a x^2 + b x + c\)










\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \frac {\d z} {\d x}\)

\(=\)







\(\ds 2 a x + b\)





Derivative of Power




Then:














\(\ds \)

\(\)







\(\ds \int \frac {x \rd x} {\paren {a x^2 + b x + c}^2}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {2 a} \int \frac {2 a x \rd x} {\paren {a x^2 + b x + c}^2}\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds \frac 1 {2 a} \int \frac {\paren {2 a x + b - b} \rd x} {\paren {a x^2 + b x + c}^2}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {2 a} \int \frac {\paren {2 a x + b} \rd x} {\paren {a x^2 + b x + c}^2} - \frac b {2 a} \int \frac {\d x} {\paren {a x^2 + b x + c}^2}\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac 1 {2 a} \int \frac {\paren {2 a x + b} \rd z} {\paren {2 a x + b} z^2} - \frac b {2 a} \int \frac {\d x} {\paren {a x^2 + b x + c}^2}\)





Integration by Substitution from $(1)$














\(\ds \)

\(=\)







\(\ds \frac 1 {2 a} \int \frac {\d z} {z^2} - \frac b {2 a} \int \frac {\d x} {\paren {a x^2 + b x + c}^2}\)





simplification














\(\ds \)

\(=\)







\(\ds \frac {-1} {2 a z} - \frac b {2 a} \int \frac {\d x} {\paren {a x^2 + b x + c}^2}\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \frac {-1} {2 a z} - \frac b {2 a} \paren {\frac {2 a x + b} {\paren {4 a c - b^2} \paren {a x^2 + b x + c} } + \frac {2 a} {4 a c - b^2} \int \frac {\d x} {a x^2 + b x + c} }\)





Primitive of $\dfrac 1 {\paren {a x^2 + b x + c}^2}$














\(\ds \)

\(=\)







\(\ds \frac {-1} {2 a \paren {a x^2 + b x + c} } - \frac {b \paren {2 a x + b} } {2 a \paren {4 a c - b^2} \paren {a x^2 + b x + c} } - \frac b {4 a c - b^2} \int \frac {\d x} {a x^2 + b x + c}\)





substituting for $z$ and simplifying














\(\ds \)

\(=\)







\(\ds \frac {b^2 - 4 a c - 2 a b x - b^2} {2 a \paren {4 a c - b^2} \paren {a x^2 + b x + c} } - \frac b {4 a c - b^2} \int \frac {\d x} {a x^2 + b x + c}\)





common denominator














\(\ds \)

\(=\)







\(\ds \frac {-\paren {b x + 2 c} } {\paren {4 a c - b^2} \paren {a x^2 + b x + c} } - \frac b {4 a c - b^2} \int \frac {\d x} {a x^2 + b x + c}\)





simplification



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $a x^2 + b x + c$: $14.273$




