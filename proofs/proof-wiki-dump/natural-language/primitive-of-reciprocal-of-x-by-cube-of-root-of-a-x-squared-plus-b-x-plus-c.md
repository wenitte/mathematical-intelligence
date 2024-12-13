# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_x_by_Cube_of_Root_of_a_x_squared_plus_b_x_plus_c

Theorem
Let $a \in \R_{\ne 0}$.
Then:

$\ds \int \frac {\d x} {x \paren {\sqrt {a x^2 + b x + c} }^3} = \frac 1 {c \sqrt {a x^2 + b x + c} } + \frac 1 c \int \frac {\d x} {x \sqrt {a x^2 + b x + c} } - \frac b {2 c} \int \frac {\d x} {\paren {\sqrt {a x^2 + b x + c} }^3}$


Proof













\(\ds \)

\(\)







\(\ds \int \frac {\d x} {x \paren {\sqrt {a x^2 + b x + c} }^3}\)




















\(\ds \)

\(=\)







\(\ds \int \frac {c \rd x} {c x \paren {\sqrt {a x^2 + b x + c} }^3}\)





multiplying top and bottom by $c$














\(\ds \)

\(=\)







\(\ds \int \frac {\paren {a x^2 + b x + c - a x^2 - b x} \rd x} {c x \paren {\sqrt {a x^2 + b x + c} }^3}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 c \int \frac {\paren {a x^2 + b x + c} \rd x} {x \paren {\sqrt {a x^2 + b x + c} }^3} - \frac a c \int \frac {x^2 \rd x} {x \paren {\sqrt {a x^2 + b x + c} }^3} - \frac b c \int \frac {x \rd x} {x \paren {\sqrt {a x^2 + b x + c} }^3}\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac 1 c \int \frac {\d x} {x \sqrt {a x^2 + b x + c} } - \frac a c \int \frac {x \rd x} {\paren {\sqrt {a x^2 + b x + c} }^3} - \frac b c \int \frac {\d x} {\paren {\sqrt {a x^2 + b x + c} }^3}\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac 1 c \int \frac {\d x} {x \sqrt {a x^2 + b x + c} }\)




















\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \frac a c \paren {\frac {2 \paren {b x + 2 c} } {\paren {b^2 - 4 a c} \sqrt {a x^2 + b x + c} } }\)





Primitive of $\dfrac x {\paren {\sqrt {a x^2 + b x + c} }^3}$














\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \frac b c \paren {\frac {2 \paren {2 a x + b} } {\paren {4 a c - b^2} \sqrt {a x^2 + b x + c} } }\)





Primitive of $\dfrac 1 {\paren {\sqrt {a x^2 + b x + c} }^3}$














\(\ds \)

\(=\)







\(\ds \frac 1 c \int \frac {\d x} {x \sqrt {a x^2 + b x + c} } + \frac 1 c \paren {\frac {\paren {4 a b x + 2 b^2} - \paren {2 a b x + 4 a c} } {\paren {b^2 - 4 a c} \sqrt {a x^2 + b x + c} } }\)





placing over a common denominator














\(\ds \)

\(=\)







\(\ds \frac 1 c \int \frac {\d x} {x \sqrt {a x^2 + b x + c} } + \frac 1 c \paren {\frac {2 a b x + 2 b^2 - 4 a c} {\paren {b^2 - 4 a c} \sqrt {a x^2 + b x + c} } }\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac 1 c \int \frac {\d x} {x \sqrt {a x^2 + b x + c} } + \frac 1 c \paren {\frac {b^2 - 4 a c} {\paren {b^2 - 4 a c} \sqrt {a x^2 + b x + c} } } + \frac 1 c \paren {\frac {2 a b x + b^2} {\paren {b^2 - 4 a c} \sqrt {a x^2 + b x + c} } }\)





splitting














\(\ds \)

\(=\)







\(\ds \frac 1 {c \sqrt {a x^2 + b x + c} } + \frac 1 c \int \frac {\d x} {x \sqrt {a x^2 + b x + c} } - \frac b {2 c} \paren {\frac {2 \paren {2 a x + b} } {\paren {4 a c - b^2} \sqrt {a x^2 + b x + c} } }\)





rearranging and simplifying














\(\ds \)

\(=\)







\(\ds \frac 1 {c \sqrt {a x^2 + b x + c} } + \frac 1 c \int \frac {\d x} {x \sqrt {a x^2 + b x + c} } - \frac b {2 c} \int \frac {\d x} {\paren {\sqrt {a x^2 + b x + c} }^3}\)





Primitive of $\dfrac 1 {\paren {\sqrt {a x^2 + b x + c} }^3}$



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sqrt {a x^2 + b x + c}$: $14.293$




