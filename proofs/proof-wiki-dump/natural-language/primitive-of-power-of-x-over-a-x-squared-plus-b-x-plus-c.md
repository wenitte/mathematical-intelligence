# 

Source: https://proofwiki.org/wiki/Primitive_of_Power_of_x_over_a_x_squared_plus_b_x_plus_c

Theorem
Let $a \in \R_{\ne 0}$.
Then:

$\ds \int \frac {x^m \rd x} {a x^2 + b x + c} = \frac {x^{m - 1} } {\paren {m - 1} a} - \frac b a \int \frac {x^{m - 1} \rd x} {a x^2 + b x + c} - \frac c a \int \frac {x^{m - 2} \rd x} {a x^2 + b x + c}$


Proof













\(\ds \int \frac {x^m \rd x} {a x^2 + b x + c}\)

\(=\)







\(\ds \int \frac 1 a \frac {a x^m \rd x} {a x^2 + b x + c}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 a \int \frac {x^{m - 2} a x^2 \rd x} {a x^2 + b x + c}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 a \int \frac {x^{m - 2} \paren {a x^2 + b x + c - b x - c} \rd x} {a x^2 + b x + c}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 a \int \frac {x^{m - 2} \paren {a x^2 + b x + c} \rd x} {a x^2 + b x + c} - \frac b a \int \frac {x^{m - 2} x \rd x} {a x^2 + b x + c} - \frac c a \int \frac {x^{m - 2} \rd x} {a x^2 + b x + c}\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac 1 a \int x^{m - 2} \rd x - \frac b a \int \frac {x^{m - 1} \rd x} {a x^2 + b x + c} - \frac c a \int \frac {x^{m - 2} \rd x} {a x^2 + b x + c}\)





simplification














\(\ds \)

\(=\)







\(\ds \frac {x^{m - 1} } {\paren {m - 1} a} - \frac b a \int \frac {x^{m - 1} \rd x} {a x^2 + b x + c} - \frac c a \int \frac {x^{m - 2} \rd x} {a x^2 + b x + c}\)





Primitive of Power



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $a x^2 + b x + c$: $14.268$




