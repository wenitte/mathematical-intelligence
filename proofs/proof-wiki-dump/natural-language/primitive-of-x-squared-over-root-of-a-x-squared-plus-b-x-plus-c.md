# 

Source: https://proofwiki.org/wiki/Primitive_of_x_squared_over_Root_of_a_x_squared_plus_b_x_plus_c

Theorem
Let $a \in \R_{\ne 0}$.
Then:

$\ds \int \frac {x^2 \rd x} {\sqrt {a x^2 + b x + c} } = \frac {2 a x - 3 b} {4 a^2} \sqrt {a x^2 + b x + c} + \frac {3 b^2 - 4 a c} {8 a^2} \int \frac {\d x} {\sqrt {a x^2 + b x + c} }$


Proof
First:














\(\ds z\)

\(=\)







\(\ds a x^2 + b x + c\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d z} {\d x}\)

\(=\)







\(\ds 2 a x + b\)





Derivative of Power




Then:














\(\ds \)

\(\)







\(\ds \int \frac {x^2 \rd x} {\sqrt {a x^2 + b x + c} }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 a \int \frac {a x^2 \rd x} {\sqrt {a x^2 + b x + c} }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 a \int \frac {\paren {a x^2 + b x + c - b x - c} \rd x} {\sqrt {a x^2 + b x + c} }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 a \int \frac {\paren {a x^2 + b x + c} \rd x} {\sqrt {a x^2 + b x + c} } - \frac b a \int \frac {x \rd x} {\sqrt {a x^2 + b x + c} } - \frac c a \int \frac {\d x} {\sqrt {a x^2 + b x + c} }\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac 1 a \int \sqrt {a x^2 + b x + c} \rd x - \frac b a \int \frac {x \rd x} {\sqrt {a x^2 + b x + c} } - \frac c a \int \frac {\d x} {\sqrt {a x^2 + b x + c} }\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac 1 a \paren {\frac {\paren {2 a x + b} \sqrt {a x^2 + b x + c} } {4 a} + \frac {4 a c - b^2} {8 a} \int \frac {\d x} {\sqrt {a x^2 + b x + c} } }\)





Primitive of $\sqrt {a x^2 + b x + c}$














\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \frac b a \int \frac {x \rd x} {\sqrt {a x^2 + b x + c} } - \frac c a \int \frac {\d x} {\sqrt {a x^2 + b x + c} }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 a \paren {\frac {\paren {2 a x + b} \sqrt {a x^2 + b x + c} } {4 a} + \frac {4 a c - b^2} {8 a} \int \frac {\d x} {\sqrt {a x^2 + b x + c} } }\)




















\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \frac b a \paren {\frac {\sqrt {a x^2 + b x + c} } a - \frac b {2 a} \int \frac {\d x} {\sqrt {a x^2 + b x + c} } } - \frac c a \int \frac {\d x} {\sqrt {a x^2 + b x + c} }\)





Primitive of $\dfrac x {\sqrt {a x^2 + b x + c} }$














\(\ds \)

\(=\)







\(\ds \frac {\paren {2 a x + b} \sqrt {a x^2 + b x + c} } {4 a^2} + \frac {4 a c - b^2} {8 a^2} \int \frac {\d x} {\sqrt {a x^2 + b x + c} }\)





simplifying














\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \frac {b \sqrt {a x^2 + b x + c} } {a^2} + \frac {b^2} {2 a^2} \int \frac {\d x} {\sqrt {a x^2 + b x + c} } - \frac c a \int \frac {\d x} {\sqrt {a x^2 + b x + c} }\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {2 a x + b} \sqrt {a x^2 + b x + c} } {4 a^2} + \frac {4 a c - b^2} {8 a^2} \int \frac {\d x} {\sqrt {a x^2 + b x + c} }\)





common denominators














\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \frac {4 b \sqrt {a x^2 + b x + c} } {4 a^2} + \frac {4 b^2} {8 a^2} \int \frac {\d x} {\sqrt {a x^2 + b x + c} } - \frac {8 a c} {8 a^2} \int \frac {\d x} {\sqrt {a x^2 + b x + c} }\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {2 a x + b - 4 b} \sqrt {a x^2 + b x + c} } {4 a^2} + \frac {4 a c - b^2 + 4 b^2 - 8 a c} {8 a^2} \int \frac {\d x} {\sqrt {a x^2 + b x + c} }\)





combining like terms














\(\ds \)

\(=\)







\(\ds \frac {2 a x - 3 b} {4 a^2} \sqrt {a x^2 + b x + c} + \frac {3 b^2 - 4 a c} {8 a^2} \int \frac {\d x} {\sqrt {a x^2 + b x + c} }\)





simplifying



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sqrt {a x^2 + b x + c}$: $14.282$




