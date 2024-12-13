# 

Source: https://proofwiki.org/wiki/Primitive_of_x_over_Cube_of_Root_of_a_x_squared_plus_b_x_plus_c

Theorem
Let $a \in \R_{\ne 0}$.
Then:

$\ds \int \frac {x \rd x} {\paren {\sqrt {a x^2 + b x + c} }^3} = \frac {2 \paren {b x + 2 c} } {\paren {b^2 - 4 a c} \sqrt {a x^2 + b x + c} } + C$


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














\(\ds \int \frac {x \rd x} {\paren {\sqrt {a x^2 + b x + c} }^3}\)

\(=\)







\(\ds \frac 1 {2 a} \int \frac {2 a x \rd x} {\paren {\sqrt {a x^2 + b x + c} }^3}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {2 a} \int \frac {\paren {2 a x + b - b} \rd x} {\paren {\sqrt {a x^2 + b x + c} }^3}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {2 a} \int \frac {\paren {2 a x + b} \rd x} {\paren {\sqrt {a x^2 + b x + c} }^3} - \frac b {2 a} \int \frac {\d x} {\paren {\sqrt {a x^2 + b x + c} }^3}\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac 1 {2 a} \int \frac {\d z} {z^{3/2} } - \frac b {2 a} \int \frac {\d x} {\paren {\sqrt {a x^2 + b x + c} }^3}\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \frac 1 {2 a} \paren {\frac {-2} {\sqrt z} } - \frac b {2 a} \int \frac {\d x} {\paren {\sqrt {a x^2 + b x + c} }^3}\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \frac 1 {a \sqrt z} - \frac b {2 a} \paren {\frac {2 \paren {2 a x + b} } {\paren {4 a c - b^2} \sqrt {a x^2 + b x + c} } } + C\)





Primitive of $\dfrac 1 {\paren {\sqrt {a x^2 + b x + c} }^3}$














\(\ds \)

\(=\)







\(\ds \frac 1 {a \sqrt {a x^2 + b x + c} } - \frac b {2 a} \paren {\frac {2 \paren {2 a x + b} } {\paren {4 a c - b^2} \sqrt {a x^2 + b x + c} } } + C\)





substituting for $z$














\(\ds \)

\(=\)







\(\ds \frac {2 \paren {b x + 2 c} } {\paren {b^2 - 4 a c} \sqrt {a x^2 + b x + c} } + C\)





simplifying



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sqrt {a x^2 + b x + c}$: $14.291$




