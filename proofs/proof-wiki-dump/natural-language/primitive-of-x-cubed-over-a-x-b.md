# 

Source: https://proofwiki.org/wiki/Primitive_of_x_cubed_over_a_x_%2B_b

Theorem
$\ds \int \frac {x^3 \rd x} {a x + b} = \frac {\paren {a x + b}^3} {3 a^4} - \frac {3 b \paren {a x + b}^2} {2 a^4} - \frac {3 b^2 \paren {a x + b} } {a^4} + \frac {b^3} {a^4} \ln \size {a x + b} + C$


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














\(\ds \int \frac {x^3 \rd x} {a x + b}\)

\(=\)







\(\ds \int \frac 1 a \paren {\frac {u - b} a}^3 \frac {\d u} u\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \frac 1 {a^4} \int \frac {\paren {u - b}^3} u \rd u\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds \frac 1 {a^4} \int \paren {u^2 - 3 b u + 3 b^2 - \frac {b^3} u} \rd u\)





multiplying out and simplifying














\(\ds \)

\(=\)







\(\ds \frac 1 {a^4} \paren {\int u^2 \rd u - \int 3 b u \rd u + \int 3 b^2 \rd u - \int \frac {b^3 \rd u} u}\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac 1 {a^4} \paren {\frac {u^3} 3 - 3 b \frac {u^2} 2 + \int 3 b^2 \rd u - \int \frac {b^3} u \rd u} + C\)





Primitive of Power (two instances)














\(\ds \)

\(=\)







\(\ds \frac 1 {a^4} \paren {\frac {u^3} 3 - 3 b \frac {u^2} 2 + b^2 u - \int \frac {b^3} u \rd u} + C\)





Primitive of Constant and subsuming arbitrary constant $C$














\(\ds \)

\(=\)







\(\ds \frac 1 {a^4} \paren {\frac {u^3} 3 - 3 b \frac {u^2} 2 + 3 b^2 u - b^3 \int \frac {\d u} u} + C\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds \frac 1 {a^4} \paren {\frac {u^3} 3 - 3 b \frac {u^2} 2 + 3 b^2 u - b^3 \ln \size u} + C\)





Primitive of Reciprocal














\(\ds \)

\(=\)







\(\ds \frac {\paren {a x + b}^3} {3 a^4} - \frac {3 b \paren {a x + b}^2} {2 a^4} - \frac {3 b^2 \paren {a x + b} } {a^4} + \frac {b^3} {a^4} \ln \size {a x + b} + C\)





substituting for $u$ and simplifying



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $a x + b$: $14.62$




