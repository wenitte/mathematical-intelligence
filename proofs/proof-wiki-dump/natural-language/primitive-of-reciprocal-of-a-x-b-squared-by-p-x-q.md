# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_a_x_%2B_b_squared_by_p_x_%2B_q

Theorem
$\ds \int \frac {\d x} {\paren {a x + b}^2 \paren {p x + q} } = \frac 1 {b p - a q} \paren {\frac 1 {a x + b} + \frac p {b p - a q} \ln \size {\frac {p x + q} {a x + b} } } + C$


Proof













\(\ds \)

\(\)







\(\ds \int \frac {\d x} {\paren {a x + b}^2 \paren {p x + q} }\)




















\(\ds \)

\(=\)







\(\ds \int \paren {\frac 1 {b p - a q} \paren {\frac {-a p} {\paren {b p - a q} \paren {a x + b} } + \frac {-a} {\paren {a x + b}^2} + \frac {p^2} {\paren {b p - a q} \paren {p x + q} } } } \rd x\)





Partial Fraction Expansion














\(\ds \)

\(=\)







\(\ds \frac 1 {b p - a q} \paren {\frac {-a p} {b p - a q} \int \frac {\d x} {a x + b} - a \int \frac {\d x} {\paren {a x + b}^2} + \frac {p^2} {b p - a q} \int \frac {\d x} {p x + q} }\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac 1 {b p - a q} \paren {\frac {-a p} {b p - a q} \frac 1 a \ln \size {a x + b} - a \int \frac {\d x} {\paren {a x + b}^2} + \frac {p^2} {b p - a q} \frac 1 p \ln \size {p x + q} } + C\)





Primitive of $\dfrac 1 {a x + b}$














\(\ds \)

\(=\)







\(\ds \frac 1 {b p - a q} \paren {\frac {-p} {b p - a q} \ln \size {a x + b} - a \frac {-1} {a \paren {a x + b} } + \frac p {b p - a q} \ln \size {p x + q} } + C\)





Primitive of $\dfrac 1 {\paren {a x + b}^2}$














\(\ds \)

\(=\)







\(\ds \frac 1 {b p - a q} \paren {\frac 1 {a x + b} + \frac p {b p - a q} \ln \size {\frac {p x + q} {a x + b} } } + C\)





Difference of Logarithms



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $a x + b$ and $p x + q$: $14.107$




