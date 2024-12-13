# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_a_x_%2B_b_by_p_x_%2B_q

Theorem
$\ds \int \frac {\d x} {\paren {a x + b} \paren {p x + q} } = \frac 1 {b p - a q} \ln \size {\frac {p x + q} {a x + b} } + C$
where $b p \ne a q$.


Proof













\(\ds \int \frac {\d x} {\paren {a x + b} \paren {p x + q} }\)

\(=\)







\(\ds \int \paren {\frac {-a} {\paren {b p - a q} \paren {a x + b} } + \frac p {\paren {b p - a q} \paren {p x + q} } } \rd x\)





Partial Fraction Expansion














\(\ds \)

\(=\)







\(\ds \frac 1 {b p - a q} \paren { {-a} \int \frac 1 {a x + b} \rd x + p \int \frac 1 {p x + q} \rd x}\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac 1 {b p - a q} \paren {\frac {-a} a \ln \size {a x + b} + \frac p p \ln \size {p x + q} } + C\)





Primitive of $\dfrac 1 {a x + b}$














\(\ds \)

\(=\)







\(\ds \frac 1 {b p - a q} \paren {\ln \size {p x + q} - \ln \size {a x + b} } + C\)





simplification














\(\ds \)

\(=\)







\(\ds \frac 1 {b p - a q} \ln \size {\frac {p x + q} {a x + b} } + C\)





Difference of Logarithms



$\blacksquare$


Sources
1964: Milton Abramowitz and Irene A. Stegun: Handbook of Mathematical Functions ... (previous) ... (next): $3$: Elementary Analytic Methods: $3.3$ Rules for Differentiation and Integration: Integrals of Rational Algebraic Functions: $3.3.20$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $a x + b$ and $p x + q$: $14.105$




