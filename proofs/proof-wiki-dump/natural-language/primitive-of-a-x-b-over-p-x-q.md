# 

Source: https://proofwiki.org/wiki/Primitive_of_a_x_%2B_b_over_p_x_%2B_q

Theorem
$\ds \int \frac {a x + b} {p x + q} \rd x  = \frac {a x} p + \frac {b p - a q} {p^2} \ln \size {p x + q} + C$


Proof













\(\ds \int \frac {a x + b} {p x + q} \rd x\)

\(=\)







\(\ds a \int \frac {x \rd x} {p x + q} + b \int \frac {\d x} {p x + q}\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds a \paren {\frac x p - \frac q {p^2} \ln \size {p x + q} } + b \int \frac {\d x} {p x + q} + C\)





Primitive of $\dfrac x {a x + b}$














\(\ds \)

\(=\)







\(\ds \frac {a x} p - \frac {a q} {p^2} \ln \size {p x + q} + b \paren {\frac 1 p \ln \size {p x + q} } + C\)





Primitive of $\dfrac 1 {a x + b}$














\(\ds \)

\(=\)







\(\ds \frac {a x} p - \frac {a q} {p^2} \ln \size {p x + q} + \frac b p \ln \size {p x + q} + C\)




















\(\ds \)

\(=\)







\(\ds \frac {a x} p + \frac {b p - a q} {p^2} \ln \size {p x + q} + C\)





common denominator



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $a x + b$ and $p x + q$: $14.111$




