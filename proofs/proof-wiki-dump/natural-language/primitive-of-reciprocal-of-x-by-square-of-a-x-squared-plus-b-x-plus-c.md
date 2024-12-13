# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_x_by_square_of_a_x_squared_plus_b_x_plus_c

Theorem
Let $a \in \R_{\ne 0}$.
Then:

$\ds \int \frac {\d x} {x \paren {a x^2 + b x + c}^2} = \frac 1 {2 c \paren {a x^2 + b x + c} } - \frac b {2 c} \int \frac {\d x} {\paren {a x^2 + b x + c}^2} + \frac 1 c \int \frac {\d x} {x \paren {a x^2 + b x + c} }$


Proof













\(\ds \int \frac {\d x} {x \paren {a x^2 + b x + c}^2}\)

\(=\)







\(\ds \int \frac {c \rd x} {c x \paren {a x^2 + b x + c}^2}\)





multiplying top and bottom by $c$














\(\ds \)

\(=\)







\(\ds \frac 1 c \int \frac {c \rd x} {x \paren {a x^2 + b x + c}^2}\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds \frac 1 c \int \frac {a x^2 + b x + c - a x^2 - b x} {x \paren {a x^2 + b x + c}^2} \rd x\)





adding and subtracting $a x^2 + b x$














\(\ds \)

\(=\)







\(\ds \frac 1 c \int \frac {\paren {a x^2 + b x + c} \rd x} {x \paren {a x^2 + b x + c}^2} - \frac a c \int \frac {x^2 \rd x} {x \paren {a x^2 + b x + c}^2}\)





Linear Combination of Primitives














\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \frac b c \int \frac {x \rd x} {x \paren {a x^2 + b x + c}^2}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 c \int \frac {\d x} {x \paren {a x^2 + b x + c} } - \frac a c \int \frac {x \rd x} {\paren {a x^2 + b x + c}^2}\)





simplification














\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \frac b c \int \frac {\d x} {\paren {a x^2 + b x + c}^2}\)




















\(\ds \)

\(=\)







\(\ds -\frac {2 a} {2 c} \int \frac {x \rd x} {\paren {a x^2 + b x + c}^2} - \frac b {2 c} \int \frac {\d x} {\paren {a x^2 + b x + c}^2}\)





splitting up the $\dfrac b c$ term














\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \frac b {2 c} \int \frac {\d x} {\paren {a x^2 + b x + c}^2} + \frac 1 c \int \frac {\d x} {x \paren {a x^2 + b x + c} }\)




















\(\ds \)

\(=\)







\(\ds -\frac 1 {2 c} \int \frac {\paren {2 a x + b} \rd x} {\paren {a x^2 + b x + c}^2}\)





Linear Combination of Primitives














\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \frac b {2 c} \int \frac {\d x} {\paren {a x^2 + b x + c}^2} + \frac 1 c \int \frac {\d x} {x \paren {a x^2 + b x + c} }\)




















\(\ds \)

\(=\)







\(\ds -\frac 1 {2 c} \paren {\frac {-1} {a x^2 + b x + c} }\)





Primitive of Function under its Derivative














\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \frac b {2 c} \int \frac {\d x} {\paren {a x^2 + b x + c}^2} + \frac 1 c \int \frac {\d x} {x \paren {a x^2 + b x + c} }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {2 c \paren {a x^2 + b x + c} }\)





simplifying














\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \frac b {2 c} \int \frac {\d x} {\paren {a x^2 + b x + c}^2} + \frac 1 c \int \frac {\d x} {x \paren {a x^2 + b x + c} }\)









$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $a x^2 + b x + c$: $14.277$




