# 

Source: https://proofwiki.org/wiki/Primitive_of_Root_of_a_x_squared_plus_b_x_plus_c_over_x_squared

Theorem
Let $a \in \R_{\ne 0}$.
Then:

$\ds \int \frac {\sqrt {a x^2 + b x + c} } {x^2} \rd x = \frac {-\sqrt {a x^2 + b x + c} } x + a \int \frac {\d x} {\sqrt {a x^2 + b x + c} } + \frac b 2 \int \frac {\d x} {x \sqrt {a x^2 + b x + c} }$


Proof













\(\ds \)

\(\)







\(\ds \int \frac {\sqrt {a x^2 + b x + c} } {x^2} \rd x\)




















\(\ds \)

\(=\)







\(\ds \int \frac {a x^2 + b x + c} {x^2 \sqrt {a x^2 + b x + c} } \rd x\)





multiplying top and bottom by $\sqrt {a x^2 + b x + c}$














\(\ds \)

\(=\)







\(\ds a \int \frac {x^2 \rd x} {x^2 \sqrt {a x^2 + b x + c} } + b \int \frac {x \rd x} {x^2 \sqrt {a x^2 + b x + c} } + c \int \frac {\d x} {x^2 \sqrt {a x^2 + b x + c} }\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds a \int \frac {\d x} {\sqrt {a x^2 + b x + c} } + b \int \frac {\d x} {x \sqrt {a x^2 + b x + c} } + c \int \frac {\d x} {x^2 \sqrt {a x^2 + b x + c} }\)





simplifying














\(\ds \)

\(=\)







\(\ds c \paren {-\frac {\sqrt {a x^2 + b x + c} } {c x} - \frac b {2 c} \frac {\d x} {x \sqrt {a x^2 + b x + c} } }\)





Primitive of $\dfrac 1 {x^2 \sqrt {a x^2 + b x + c} }$














\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds a \int \frac {\d x} {\sqrt {a x^2 + b x + c} } + b \int \frac {\d x} {x \sqrt {a x^2 + b x + c} }\)




















\(\ds \)

\(=\)







\(\ds \frac {-\sqrt {a x^2 + b x + c} } x + a \int \frac {\d x} {\sqrt {a x^2 + b x + c} } + \frac b 2 \int \frac {\d x} {x \sqrt {a x^2 + b x + c} }\)





simplifying



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sqrt {a x^2 + bx + c}$: $14.289$




