# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_x_squared_by_Root_of_a_x_squared_plus_b_x_plus_c

Theorem
Let $a \in \R_{\ne 0}$.
Then:

$\ds \int \frac {\d x} {x^2 \sqrt {a x^2 + b x + c} } = -\frac {\sqrt {a x^2 + b x + c} } {c x} - \frac b {2 c} \int \frac {\d x} {x \sqrt {a x^2 + b x + c} }$


Proof













\(\ds \)

\(\)







\(\ds \int \frac {\d x} {x^2 \sqrt {a x^2 + b x + c} }\)




















\(\ds \)

\(=\)







\(\ds \int \frac {c \d x} {c x^2 \sqrt {a x^2 + b x + c} }\)





multiplying top and bottom by $c$














\(\ds \)

\(=\)







\(\ds \int \frac {\paren {a x^2 + b x + c - a x^2 - b x} \rd x} {c x^2 \sqrt {a x^2 + b x + c} }\)





adding and subtracting $a x^2 + b x$














\(\ds \)

\(=\)







\(\ds \frac 1 c \int \frac {\paren {a x^2 + b x + c} \rd x} {x^2 \sqrt {a x^2 + b x + c} } - \frac a c \int \frac {x^2 \rd x} {x^2 \sqrt {a x^2 + b x + c} } - \frac b c \int \frac {x \rd x} {x^2 \sqrt {a x^2 + b x + c} }\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac 1 c \int \frac {\sqrt {a x^2 + b x + c} \rd x} {x^2} - \frac a c \int \frac {\d x} {\sqrt {a x^2 + b x + c} } - \frac b c \int \frac {\d x} {x \sqrt {a x^2 + b x + c} }\)





simplification














\(\ds \)

\(=\)







\(\ds \frac 1 c \paren {-\frac {\sqrt {a x^2 + b x + c} } x + a \int \frac {\d x} {\sqrt {a x^2 + b x + c} } + \frac b 2 \int \frac {\d x} {x \sqrt {a x^2 + b x + c} } }\)





Primitive of $\dfrac {\sqrt {a x^2 + b x + c} } {x^2}$














\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \frac a c \int \frac {\d x} {\sqrt {a x^2 + b x + c} } - \frac b c \int \frac {\d x} {x \sqrt {a x^2 + b x + c} }\)




















\(\ds \)

\(=\)







\(\ds -\frac {\sqrt {a x^2 + b x + c} } {c x} - \frac b {2 c} \int \frac {\d x} {x \sqrt {a x^2 + b x + c} }\)





gathering terms



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sqrt {a x^2 + bx + c}$: $14.284$




