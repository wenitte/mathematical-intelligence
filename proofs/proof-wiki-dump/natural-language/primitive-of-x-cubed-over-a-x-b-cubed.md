# 

Source: https://proofwiki.org/wiki/Primitive_of_x_cubed_over_a_x_%2B_b_cubed

Theorem
$\ds \int \frac {x^3 \rd x} {\paren {a x + b}^3} = \frac x {a^3} - \frac {3 b^2} {a^4 \paren {a x + b} } + \frac {b^3} {2 a^4 \paren {a x + b}^2} - \frac {3 b} {a^4} \ln \size {a x + b} + C$


Proof
Put $u = a x + b$.
Then:














\(\ds x\)

\(=\)







\(\ds \frac {u - b} a\)




















\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds \frac 1 a\)










Then:














\(\ds \int \frac {x^3 \rd x} {\paren {a x + b}^3}\)

\(=\)







\(\ds \int \frac 1 a \paren {\frac {u - b} a}^3 \frac 1 {u^3} \rd u\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \int \frac 1 {a^4} \paren {1 - \frac {3 b} u + \frac {3 b^2} {u^2} - \frac {b^3} {u^3} } \rd u\)





multiplying out and simplification














\(\ds \)

\(=\)







\(\ds \frac 1 {a^4} \int \d u - \frac {3 b} {a^4} \int \frac {\d u} u + \frac {3 b^2} {a^4} \int \frac {\d u} {u^2} - \frac {b^3} {a^4} \int \frac {\d u} {u^3}\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac u {a^4} - \frac {3 b} {a^4} \int \frac {\d u} u + \frac {3 b^2} {a^4} \int \frac {\d u} {u^2} - \frac {b^3} {a^4} \int \frac {\d u} {u^3} + C\)





Primitive of Constant














\(\ds \)

\(=\)







\(\ds \frac u {a^4} - \frac {3 b} {a^4} \int \frac {\d u} u + \frac {3 b^2} {a^4} \frac {-1} u - \frac {b^3} {a^4} \frac {-1} {2 u^2} + C\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \frac u {a^4} - \frac {3 b} {a^4} \ln \size u - \frac {3 b^2} {a^4 u} + \frac {b^3} {2 a^4 u^2} + C\)





Primitive of Reciprocal














\(\ds \)

\(=\)







\(\ds \frac {a x + b} {a^4} - \frac {3 b^2} {a^4 \paren {a x + b} )} + \frac {b^3} {2 a^4 \paren {a x + b}^2} - \frac {3 b} {a^4} \ln \size {a x + b} + C\)





substituting for $u$ and rearranging














\(\ds \)

\(=\)







\(\ds \frac x {a^3} + \frac b {a^4} - \frac {3 b^2} {a^4 \paren {a x + b} } + \frac {b^3} {2 a^4 \paren {a x + b}^2} - \frac {3 b} {a^4} \ln \size {a x + b} + C\)





separating first term














\(\ds \)

\(=\)







\(\ds \frac x {a^3} - \frac {3 b^2} {a^4 \paren {a x + b} } + \frac {b^3} {2 a^4 \paren {a x + b}^2} - \frac {3 b} {a^4} \ln \size {a x + b} + C\)





subsuming $\dfrac b {a^4}$ into the arbitrary constant $C$



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $a x + b$: $14.76$




