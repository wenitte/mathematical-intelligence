# 

Source: https://proofwiki.org/wiki/Primitive_of_x_squared_over_a_x_%2B_b_squared_by_p_x_%2B_q

Theorem
$\ds \int \frac {x^2 \rd x} {\paren {a x + b}^2 \paren {p x + q} } = \frac {b^2} {\paren {b p - a q} a^2 \paren {a x + b} } + \frac 1 {\paren {b p - a q}^2} \paren {\frac {q^2} p \ln \size {p x + q} + \frac {b \paren {b p - 2 a q} } {a^2} \ln \size {a x + b} } + C$


Proof













\(\ds \)

\(\)







\(\ds \int \frac {x^2 \rd x} {\paren {a x + b}^2 \paren {p x + q} }\)




















\(\ds \)

\(=\)







\(\ds \int \paren {\frac {-b^2} {a \paren {b p - a q} \paren {a x + b}^2} + \frac {q^2} {\paren {b p - a q}^2 \paren {p x + q} } + \frac {b \paren {b p - 2 a q} } {a \paren {b p - a q}^2 \paren {a x + b} } } \rd x\)





Partial Fraction Expansion














\(\ds \)

\(=\)







\(\ds \frac {-b^2} {a \paren {b p - a q} } \int \frac {\d x} {\paren {a x + b}^2} + \frac {q^2} {\paren {b p - a q}^2} \int \frac {\d x} {p x + q} + \frac {b \paren {b p - 2 a q} } {a \paren {b p - a q}^2} \int \frac {\d x} {a x + b}\)





Linear Combination of Primitives




We have:














\(\ds \int \frac {\d x} {\paren {a x + b}^2}\)

\(=\)







\(\ds \frac {-1} {a \paren {a x + b} }\)





Primitive of $\dfrac 1 {\paren {a x + b}^2}$














\(\ds \int \frac {\d x} {p x + q}\)

\(=\)







\(\ds \frac 1 p \ln \size {p x + q}\)





Primitive of $\dfrac 1 {a x + b}$














\(\ds \int \frac {\d x} {a x + b}\)

\(=\)







\(\ds \frac 1 a \ln \size {a x + b}\)





Primitive of $\dfrac 1 {a x + b}$




Therefore:














\(\ds \)

\(\)







\(\ds \int \frac {x^2 \rd x} {\paren {a x + b}^2 \paren {p x + q} }\)




















\(\ds \)

\(=\)







\(\ds \frac {-b^2} {a \paren {b p - a q} } \frac {-1} {a \paren {a x + b} } + \frac {q^2} {\paren {b p - a q}^2} \paren {\frac 1 p \ln \size {p x + q} } + \frac {b \paren {b p - 2 a q} } {a \paren {b p - a q}^2} \paren {\frac 1 a \ln \size {a x + b} } + C\)





Substitution














\(\ds \)

\(=\)







\(\ds \frac {b^2} {\paren {b p - a q} a^2 \paren {a x + b} } + \frac 1 {\paren {b p - a q}^2} \paren {\frac {q^2} p \ln \size {p x + q} + \frac {b \paren {b p - 2 a q} } {a^2} \ln \size {a x + b} } + C\)





simplifying



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $a x + b$ and $p x + q$: $14.109$




