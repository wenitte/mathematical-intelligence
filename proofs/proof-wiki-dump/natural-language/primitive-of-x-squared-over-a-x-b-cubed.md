# 

Source: https://proofwiki.org/wiki/Primitive_of_x_squared_over_a_x_%2B_b_cubed

Theorem
$\ds \int \frac {x^2 \rd x} {\paren {a x + b}^3} = \frac {2 b} {a^3 \paren {a x + b} } - \frac {b^2} {2 a^3 \paren {a x + b}^2} + \frac 1 {a^3} \ln \size {a x + b} + C$


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














\(\ds \int \frac {x^2 \rd x} {\paren {a x + b}^3}\)

\(=\)







\(\ds \int \frac 1 a \paren {\frac {u - b} a}^2 \frac 1 {u^2} \rd u\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \int \frac 1 {a^3} \paren {\frac 1 u - \frac {2 b} {u^2} + \frac {b^2} {u^3} } \rd u\)





Square of Difference, and simplification














\(\ds \)

\(=\)







\(\ds \frac 1 {a^3} \int \frac {\d u} u - \frac {2 b} {a^3} \int \frac {\d u} {u^2} + \frac {b^2} {a^3} \int \frac {\d u} {u^3}\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac 1 {a^3} \ln \size u - \frac {2 b} {a^3} \int \frac {\d u} {u^2} + \frac {b^2} {a^3} \int \frac {\d u} {u^3} + C\)





Primitive of Reciprocal














\(\ds \)

\(=\)







\(\ds \frac 1 {a^3} \ln \size u - \frac {2 b} {a^3} \frac {-1} u + \frac {b^2} {a^3} \frac {-1} {2 u^2} + C\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \frac {2 b} {a^3 \paren {a x + b} } - \frac {b^2} {2 a^3 \paren {a x + b}^2} + \frac 1 {a^3} \ln \size {a x + b} + C\)





substituting for $u$ and rearranging



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $a x + b$: $14.75$




