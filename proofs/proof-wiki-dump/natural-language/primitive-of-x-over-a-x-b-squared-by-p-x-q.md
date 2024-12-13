# 

Source: https://proofwiki.org/wiki/Primitive_of_x_over_a_x_%2B_b_squared_by_p_x_%2B_q



Theorem
$\ds \int \frac {x \rd x} {\paren {a x + b}^2 \paren {p x + q} } = \frac 1 {b p - a q} \paren {\frac q {b p - a q} \ln \size {\frac {a x + b} {p x + q} } - \frac b {a \paren {a x + b} } } + C$


Corollary
$\ds \int \frac {x \rd x} {\paren {a x + b}^2 \paren {p x + q} } = \frac 1 {b p - a q} \paren {\frac q {b p - a q} \ln \size {\frac {a x + b} {p x + q} } + \frac x {a x + b} } + C$


Proof













\(\ds \)

\(\)







\(\ds \int \frac {x \rd x} {\paren {a x + b}^2 \paren {p x + q} }\)




















\(\ds \)

\(=\)







\(\ds \int \paren {\frac 1 {b p - a q} \paren {\frac {a q} {\paren {b p - a q} \paren {a x + b} } + \frac b {\paren {a x + b}^2} - \frac {p q} {\paren {b p - a q} \paren {p x + q} } } } \rd x\)





Partial Fraction Expansion














\(\ds \)

\(=\)







\(\ds \frac 1 {b p - a q} \paren {\frac {a q} {b p - a q} \int \frac {\d x} {a x + b} + b \int \frac {\d x} {\paren {a x + b}^2} - \frac {p q} {b p - a q} \int \frac {\d x} {p x + q} }\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac 1 {b p - a q} \paren {\frac {a q} {b p - a q} \frac 1 a \ln \size {a x + b} + b \int \frac {\d x} {\paren {a x + b}^2} + \frac {p q} {b p - a q} \frac 1 p \ln \size {p x + q} } + C\)





Primitive of $\dfrac 1 {a x + b}$














\(\ds \)

\(=\)







\(\ds \frac 1 {b p - a q} \paren {\frac q {b p - a q} \ln \size {a x + b} + b \frac {-1} {a \paren {a x + b} } - \frac q {b p - a q} \ln \size {p x + q} } + C\)





Primitive of $\dfrac 1 {\paren {a x + b}^2}$














\(\ds \)

\(=\)







\(\ds \frac 1 {b p - a q} \paren {\frac q {b p - a q} \ln \size {\frac {a x + b} {p x + q} } - \frac b {a \paren {a x + b} } } + C\)





Difference of Logarithms



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $a x + b$ and $p x + q$: $14.108$




