# 

Source: https://proofwiki.org/wiki/Primitive_of_x_squared_over_Cube_of_Root_of_a_x_squared_plus_b_x_plus_c

Theorem
Let $a \in \R_{\ne 0}$.
Then:

$\ds \int \frac {x^2 \rd x} {\paren {\sqrt {a x^2 + b x + c} }^3} = \frac {\paren {2 b^2 - 4 a c} x + 2 b c} {a \paren {4 a c - b^2} \sqrt {a x^2 + b x + c} } + \frac 1 a \int \frac {\d x} {\sqrt {a x^2 + b x + c} }$


Proof













\(\ds \)

\(\)







\(\ds \int \frac {x^2 \rd x} {\paren {\sqrt {a x^2 + b x + c} }^3}\)




















\(\ds \)

\(=\)







\(\ds \int \frac {a x^2 \rd x} {a \paren {\sqrt {a x^2 + b x + c} }^3}\)





multiplying top and bottom by $a$














\(\ds \)

\(=\)







\(\ds \int \frac {\paren {a x^2 + b x + c - b x - c} \rd x} {a \paren {\sqrt {a x^2 + b x + c} }^3}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 a \int \frac {\paren {a x^2 + b x + c} \rd x} {\paren {\sqrt {a x^2 + b x + c} }^3} - \frac b a \int \frac {x \rd x} {\paren {\sqrt {a x^2 + b x + c} }^3} - \frac c a \int \frac {\d x} {\paren {\sqrt {a x^2 + b x + c} }^3}\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac 1 a \int \frac {\d x} {\sqrt {a x^2 + b x + c} } - \frac b a \int \frac {x \rd x} {\paren {\sqrt {a x^2 + b x + c} }^3} - \frac c a \int \frac {\d x} {\paren {\sqrt {a x^2 + b x + c} }^3}\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac 1 a \int \frac {\d x} {\sqrt {a x^2 + b x + c} }\)




















\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \frac b a \paren {\frac {2 \paren {b x + 2 c} } {\paren {b^2 - 4 a c} \sqrt {a x^2 + b x + c} } }\)





Primitive of $\dfrac x {\paren {\sqrt {a x^2 + b x + c} }^3}$














\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \frac c a \paren {\frac {2 \paren {2 a x + b} } {\paren {4 a c - b^2} \sqrt {a x^2 + b x + c} } }\)





Primitive of $\dfrac 1 {\paren {\sqrt {a x^2 + b x + c} }^3}$














\(\ds \)

\(=\)







\(\ds \frac {\paren {2 b^2 - 4 a c} x + 2 b c} {a \paren {4 a c - b^2} \sqrt {a x^2 + b x + c} } + \frac 1 a \int \frac {\d x} {\sqrt {a x^2 + b x + c} }\)





simplifying



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sqrt {a x^2 + b x + c}$: $14.292$




