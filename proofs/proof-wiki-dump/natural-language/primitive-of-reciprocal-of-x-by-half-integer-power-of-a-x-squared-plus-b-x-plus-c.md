# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_x_by_Half_Integer_Power_of_a_x_squared_plus_b_x_plus_c

Theorem
Let $a \in \R_{\ne 0}$.
Then:

$\ds \int \frac {\d x} {x \paren {a x^2 + b x + c}^{n + \frac 1 2} } = \frac 1 {\paren {2 n - 1} c \paren {a x^2 + b x + c}^{n - \frac 1 2} } + \frac 1 c \int \frac {\d x} {x \paren {a x^2 + b x + c}^{n - \frac 1 2} } - \frac b {2 c} \int \frac {\d x} {\paren {a x^2 + b x + c}^{n + \frac 1 2} }$


Proof













\(\ds \)

\(\)







\(\ds \int \frac {\d x} {x \paren {a x^2 + b x + c}^{n + \frac 1 2} }\)




















\(\ds \)

\(=\)







\(\ds \int \frac {c \rd x} {c x \paren {a x^2 + b x + c}^{n + \frac 1 2} }\)





multiplying top and bottom by $c$














\(\ds \)

\(=\)







\(\ds \frac 1 c \int \frac {\paren {a x^2 + b x + c - a x^2 - b x} \rd x} {c x \paren {a x^2 + b x + c}^{n + \frac 1 2} }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 c \int \frac {\paren {a x^2 + b x + c} \rd x} {x \paren {a x^2 + b x + c}^{n + \frac 1 2} } - \frac a c \int \frac {x^2 \rd x} {x \paren {a x^2 + b x + c}^{n + \frac 1 2} } - \frac b c \int \frac {x \rd x} {x \paren {a x^2 + b x + c}^{n + \frac 1 2} }\)





Linear Combination of Primitives




\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds \frac 1 c \int \frac {\d x} {x \paren {a x^2 + b x + c}^{n - \frac 1 2} } - \frac a c \int \frac {x \rd x} {\paren {a x^2 + b x + c}^{n + \frac 1 2} } - \frac b c \int \frac {\d x} {\paren {a x^2 + b x + c}^{n + \frac 1 2} }\)





simplifying




Now take:














\(\ds \)

\(\)







\(\ds \int \frac {x \rd x} {\paren {a x^2 + b x + c}^{n + \frac 1 2} }\)




















\(\ds \)

\(=\)







\(\ds \int \frac {2 a x \rd x} {2 a \paren {a x^2 + b x + c}^{n + \frac 1 2} }\)





multiplying top and bottom by $2 a$














\(\ds \)

\(=\)







\(\ds \int \frac {\paren {2 a x + b - b} \rd x} {2 a \paren {a x^2 + b x + c}^{n + \frac 1 2} }\)










\(\text {(2)}: \quad\)









\(\ds \)

\(=\)







\(\ds \frac 1 {2 a} \int \frac {\paren {2 a x + b} \rd x} {\paren {a x^2 + b x + c}^{n + \frac 1 2} } - \frac b {2 a} \int \frac {\d x} {\paren {a x^2 + b x + c}^{n + \frac 1 2} }\)





Linear Combination of Primitives




Let:














\(\ds z\)

\(=\)







\(\ds a x^2 + b x + c\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d z} {\d x}\)

\(=\)







\(\ds 2 a x + b\)





Derivative of Power








\(\ds \leadsto \ \ \)





\(\ds \int \frac {\paren {2 a x + b} \rd x} {\paren {a x^2 + b x + c}^{n + \frac 1 2} }\)

\(=\)







\(\ds \int z^{-n - \frac 1 2} \rd z\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \frac {z^{-n + \frac 1 2} } {-n + \frac 1 2}\)





Primitive of Power




\(\text {(3)}: \quad\)









\(\ds \)

\(=\)







\(\ds \frac {-2} {\paren {2 n - 1} \paren {a x^2 + b x + c}^{n - \frac 1 2} }\)





simplifying




Thus:














\(\ds \)

\(\)







\(\ds \int \frac {x \rd x} {\paren {a x^2 + b x + c}^{n + \frac 1 2} }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {2 a} \int \frac {\paren {2 a x + b} \rd x} {\paren {a x^2 + b x + c}^{n + \frac 1 2} } - \frac b {2 a} \int \frac {\d x} {\paren {a x^2 + b x + c}^{n + \frac 1 2} }\)





from $(2)$














\(\ds \)

\(=\)







\(\ds \frac 1 {2 a} \paren {\frac {-2} {\paren {2 n - 1} \paren {a x^2 + b x + c}^{n - \frac 1 2} } } - \frac b {2 a} \int \frac {\d x} {\paren {a x^2 + b x + c}^{n + \frac 1 2} }\)





from $(3)$














\(\ds \)

\(=\)







\(\ds \frac {-1} {a \paren {2 n - 1} \paren {a x^2 + b x + c}^{n - \frac 1 2} } - \frac b {2 a} \int \frac {\d x} {\paren {a x^2 + b x + c}^{n + \frac 1 2} }\)





simplifying




So:














\(\ds \)

\(\)







\(\ds \int \frac {\d x} {x \paren {a x^2 + b x + c}^{n + \frac 1 2} }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 c \int \frac {\d x} {x \paren {a x^2 + b x + c}^{n - \frac 1 2} } - \frac a c \int \frac {x \rd x} {\paren {a x^2 + b x + c}^{n + \frac 1 2} } - \frac b c \int \frac {\d x} {\paren {a x^2 + b x + c}^{n + \frac 1 2} }\)





from $(1)$














\(\ds \)

\(=\)







\(\ds \frac 1 c \int \frac {\d x} {x \paren {a x^2 + b x + c}^{n - \frac 1 2} }\)




















\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \frac a c \paren {\frac {-1} {a \paren {2 n - 1} \paren {a x^2 + b x + c}^{n - \frac 1 2} } - \frac b {2 a} \int \frac {\d x} {\paren {a x^2 + b x + c}^{n + \frac 1 2} } }\)





from $(3)$














\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \frac b c \int \frac {\d x} {\paren {a x^2 + b x + c}^{n + \frac 1 2} }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 c \int \frac {\d x} {x \paren {a x^2 + b x + c}^{n - \frac 1 2} }\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \frac 1 {\paren {2 n - 1} c \paren {a x^2 + b x + c}^{n - \frac 1 2} } + \frac b {2 c} \int \frac {\d x} {\paren {a x^2 + b x + c}^{n + \frac 1 2} }\)





simplifying














\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \frac b c \int \frac {\d x} {\paren {a x^2 + b x + c}^{n + \frac 1 2} }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {\paren {2 n - 1} c \paren {a x^2 + b x + c}^{n - \frac 1 2} } + \frac 1 c \int \frac {\d x} {x \paren {a x^2 + b x + c}^{n - \frac 1 2} } - \frac b {2 c} \int \frac {\d x} {\paren {a x^2 + b x + c}^{n + \frac 1 2} }\)





gathering terms



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sqrt {a x^2 + b x + c}$: $14.298$




