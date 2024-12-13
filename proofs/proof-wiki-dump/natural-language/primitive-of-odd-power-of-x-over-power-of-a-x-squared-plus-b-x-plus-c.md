# 

Source: https://proofwiki.org/wiki/Primitive_of_Odd_Power_of_x_over_Power_of_a_x_squared_plus_b_x_plus_c

Theorem
Let $a \in \R_{\ne 0}$.
Then:

$\ds \int \frac {x^{2 n - 1} \rd x} {\paren {a x^2 + b x + c}^n} = \frac 1 a \int \frac {x^{2 n - 3} \rd x} {\paren {a x^2 + b x + c}^{n - 1} } - \frac c a \int \frac {x^{2 n - 3} \rd x} {\paren {a x^2 + b x + c}^n} - \frac b a \int \frac {x^{2 n - 2} \rd x} {\paren {a x^2 + b x + c}^n}$


Proof













\(\ds \)

\(\)







\(\ds \int \frac {x^{2 n - 1} \rd x} {\paren {a x^2 + b x + c}^n}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 a \int \frac {x^{2 n - 3} a x^2 \rd x} {\paren {a x^2 + b x + c}^n}\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds \frac 1 a \int \frac {x^{2 n - 3} \paren {a x^2 + b x + c - b x - c} \rd x} {\paren {a x^2 + b x + c}^n}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 a \int \frac {x^{2 n - 3} \rd x} {\paren {a x^2 + b x + c}^{n - 1} } - \frac c a \int \frac {x^{2 n - 3} \rd x} {\paren {a x^2 + b x + c}^n} - \frac b a \int \frac {x^{2 n - 2} \rd x} {\paren {a x^2 + b x + c}^n}\)





Linear Combination of Primitives



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $a x^2 + b x + c$: $14.276$




