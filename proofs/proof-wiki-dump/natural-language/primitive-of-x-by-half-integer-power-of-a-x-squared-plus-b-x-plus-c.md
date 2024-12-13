# 

Source: https://proofwiki.org/wiki/Primitive_of_x_by_Half_Integer_Power_of_a_x_squared_plus_b_x_plus_c

Theorem
Let $a \in \R_{\ne 0}$.
Then:

$\ds \int x \paren {a x^2 + b x + c}^{n + \frac 1 2} \rd x = \frac {\paren {a x^2 + b x + c}^{n + \frac 3 2} } {a \paren {2 n + 3} } - \frac b {2 a} \int \paren {a x^2 + b x + c}^{n + \frac 1 2} \rd x$


Proof













\(\ds \)

\(\)







\(\ds \int x \paren {a x^2 + b x + c}^{n + \frac 1 2} \rd x\)




















\(\ds \)

\(=\)







\(\ds \int \frac {2 a x \paren {a x^2 + b x + c}^{n + \frac 1 2} \rd x} {2 a}\)





multiplying top and bottom by $2 a$














\(\ds \)

\(=\)







\(\ds \int \frac {\paren {2 a x + b - b} \paren {a x^2 + b x + c}^{n + \frac 1 2} \rd x} {2 a}\)










\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds \frac 1 {2 a} \int \paren {2 a x + b} \paren {a x^2 + b x + c}^{n + \frac 1 2} \rd x - \frac b {2 a} \int \paren {a x^2 + b x + c}^{n + \frac 1 2} \rd x\)





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





\(\ds \int \paren {2 a x + b} \paren {a x^2 + b x + c}^{n + \frac 1 2} \rd x\)

\(=\)







\(\ds \int z^{n + \frac 1 2} \rd z\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \frac {z^{n + \frac 3 2} } {n + \frac 3 2}\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \frac {2 z^{n + \frac 3 2} } {2 n + 3}\)





simplifying




\(\text {(2)}: \quad\)









\(\ds \)

\(=\)







\(\ds \frac {2 \paren {a x^2 + b x + c}^{n + \frac 3 2} } {2 n + 3}\)





substituting for $z$




So:














\(\ds \)

\(\)







\(\ds \int x \paren {a x^2 + b x + c}^{n + \frac 1 2} \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {2 a} \int \paren {2 a x + b} \paren {a x^2 + b x + c}^{n + \frac 1 2} \rd x - \frac b {2 a} \int \paren {a x^2 + b x + c}^{n + \frac 1 2} \rd x\)





from $(1)$














\(\ds \)

\(=\)







\(\ds \frac 1 {2 a} \paren {\frac {2 \paren {a x^2 + b x + c}^{n + \frac 3 2} } {2 n + 3} } - \frac b {2 a} \int \paren {a x^2 + b x + c}^{n + \frac 1 2} \rd x\)





from $(2)$














\(\ds \)

\(=\)







\(\ds \frac {\paren {a x^2 + b x + c}^{n + \frac 3 2} } {a \paren {2 n + 3} } - \frac b {2 a} \int \paren {a x^2 + b x + c}^{n + \frac 1 2} \rd x\)





simplifying



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sqrt {a x^2 + b x + c}$: $14.296$




