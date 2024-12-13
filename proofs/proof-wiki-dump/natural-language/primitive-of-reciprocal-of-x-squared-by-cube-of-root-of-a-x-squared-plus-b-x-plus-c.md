# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_x_squared_by_Cube_of_Root_of_a_x_squared_plus_b_x_plus_c

Theorem
Let $a \in \R_{\ne 0}$.
Then:

$\ds \int \frac {\d x} {x^2 \paren {\sqrt {a x^2 + b x + c} }^3} = -\frac {a x^2 + 2 b x + c} {c^2 x \sqrt {a x^2 + b x + c} } + \frac {b^2 - 2 a c} {2 c^2} \int \frac {\d x} {\paren {\sqrt {a x^2 + b x + c} }^3} - \frac {3 b} {2 c^2} \int \frac {\d x} {x \sqrt {a x^2 + b x + c} }$


Proof













\(\ds \)

\(\)







\(\ds \int \frac {\d x} {x^2 \paren {\sqrt {a x^2 + b x + c} }^3}\)




















\(\ds \)

\(=\)







\(\ds \int \frac {c \rd x} {c x^2 \paren {\sqrt {a x^2 + b x + c} }^3}\)





multiplying top and bottom by $c$














\(\ds \)

\(=\)







\(\ds \int \frac {\paren {a x^2 + b x + c - a x^2 - b x} \rd x} {c x^2 \paren {\sqrt {a x^2 + b x + c} }^3}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 c \int \frac {\paren {a x^2 + b x + c} \rd x} {x^2 \paren {\sqrt {a x^2 + b x + c} }^3} - \frac a c \int \frac {x^2 \rd x} {x^2 \paren {\sqrt {a x^2 + b x + c} }^3} - \frac b c \int \frac {x \rd x} {x^2 \paren {\sqrt {a x^2 + b x + c} }^3}\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac 1 c \int \frac {\d x} {x^2 \sqrt {a x^2 + b x + c} } - \frac a c \int \frac {\d x} {\paren {\sqrt {a x^2 + b x + c} }^3} - \frac b c \int \frac {\d x} {x \paren {\sqrt {a x^2 + b x + c} }^3}\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac 1 c \paren {-\frac {\sqrt {a x^2 + b x + c} } {c x} - \frac b {2 c} \int \frac {\d x} {x \sqrt {a x^2 + b x + c} } } - \frac a c \int \frac {\d x} {\paren {\sqrt {a x^2 + b x + c} }^3}\)





Primitive of $\dfrac 1 {x^2 \sqrt {a x^2 + b x + c} }$














\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \frac b c \paren {\frac 1 {c \sqrt {a x^2 + b x + c} } + \frac 1 c \int \frac {\d x} {x \sqrt {a x^2 + b x + c} } - \frac b {2 c} \int \frac {\d x} {\paren {\sqrt {a x^2 + b x + c} }^3} }\)





Primitive of $\dfrac 1 {x \paren {\sqrt {a x^2 + b x + c} }^3}$














\(\ds \)

\(=\)







\(\ds -\frac {a x^2 + b x + c} {c^2 x \sqrt {a x^2 + b x + c} } - \frac b {2 c^2} \int \frac {\d x} {x \sqrt {a x^2 + b x + c} } - \frac {2 a c} {2 c^2} \int \frac {\d x} {\paren {\sqrt {a x^2 + b x + c} }^3}\)





arranging common denominators for like terms














\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \frac {b x} {c^2 x \sqrt {a x^2 + b x + c} } - \frac b {c^2} \int \frac {\d x} {x \sqrt {a x^2 + b x + c} } + \frac {b^2} {2 c^2} \int \frac {\d x} {\paren {\sqrt {a x^2 + b x + c} }^3}\)




















\(\ds \)

\(=\)







\(\ds -\frac {a x^2 + 2 b x + c} {c^2 x \sqrt {a x^2 + b x + c} } + \frac {b^2 - 2 a c} {2 c^2} \int \frac {\d x} {\paren {\sqrt {a x^2 + b x + c} }^3} - \frac {3 b} {2 c^2} \int \frac {\d x} {x \sqrt {a x^2 + b x + c} }\)





assembling final form



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sqrt {a x^2 + b x + c}$: $14.294$




