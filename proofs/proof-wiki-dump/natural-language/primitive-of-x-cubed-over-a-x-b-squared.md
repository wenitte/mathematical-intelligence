# 

Source: https://proofwiki.org/wiki/Primitive_of_x_cubed_over_a_x_%2B_b_squared

Theorem
$\ds \int \frac {x^3 \rd x} {\paren {a x + b}^2} = \frac {\paren {a x + b}^2} {2 a^4} - \frac {3 b \paren {a x + b} } {a^4} + \frac {b^3} {a^4 \paren {a x + b} } + \frac {3 b^2} {a^4} \ln \size {a x + b} + C$


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














\(\ds \int \frac {x^3 \rd x} {\paren {a x + b}^2}\)

\(=\)







\(\ds \int \frac 1 a \paren {\frac {u - b} a}^3 \frac 1 {u^2} \rd u\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \int \frac 1 {a^4} \paren {u - 3 b + \frac {3 b^2} u - \frac {b^3} {u^2} } \rd u\)





multiplying out and simplification














\(\ds \)

\(=\)







\(\ds \frac 1 {a^4} \int u \rd u - \frac {3 b} {a^4} \int \d u + \frac {3 b^2} {a^4} \int \frac {\d u} u - \frac {b^3} {a^4} \int \frac {\d u} {u^2}\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac {u^2} {2 a^4} - \frac {3 b} {a^4} \int \d u + \frac {3 b^2} {a^4} \int \frac {\d u} u - \frac {b^3} {a^4} \frac {-1} u + C\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \frac {u^2} {2 a^4} - \frac {3 b u} {a^4} + \frac {3 b^2} {a^4} \int \frac {\d u} u + \frac {b^3} {a^4 u} + C\)





Primitive of Constant














\(\ds \)

\(=\)







\(\ds \frac {u^2} {2 a^4} - \frac {3 b u} {a^4} + \frac {3 b^2} {a^4} \ln \size u + \frac {b^3} {a^4 u} + C\)





Primitive of Reciprocal














\(\ds \)

\(=\)







\(\ds \frac {\paren {a x + b}^2} {2 a^4} -  \frac {3 b \paren {a x + b} } {a^4} + \frac {b^3} {a^4 \paren {a x + b} } + \frac {3 b^2} {a^4} \ln \size {a x + b} + C\)





substituting for $u$ and rearranging



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $a x + b$: $14.69$




