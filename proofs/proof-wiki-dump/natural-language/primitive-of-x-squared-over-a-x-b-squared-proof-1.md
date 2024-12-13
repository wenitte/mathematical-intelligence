# 

Source: https://proofwiki.org/wiki/Primitive_of_x_squared_over_a_x_%2B_b_squared/Proof_1

Theorem
$\ds \int \frac {x^2 \rd x} {\paren {a x + b}^2} = \frac {a x + b} {a^3} - \frac {b^2} {a^3 \paren {a x + b} } - \frac {2 b} {a^3} \ln \size {a x + b} + C$


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














\(\ds \int \frac {x^2 \rd x} {\paren {a x + b}^2}\)

\(=\)







\(\ds \int \frac 1 a \paren {\frac {u - b} a}^2 \frac 1 {u^2} \rd u\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \int \frac 1 {a^3} \paren {1 - \frac {2 b} u + \frac {b^2} {u^2} } \rd u\)





Square of Difference, and simplification














\(\ds \)

\(=\)







\(\ds \frac 1 {a^3} \int \d u - \frac {2 b} {a^3} \int \frac {\d u} u + \frac {b^2} {a^3} \int \frac {\d u} {u^2}\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac u {a^3} - \frac {2 b} {a^3} \int \frac {\d u} u + \frac {b^2} {a^3} \int \frac {\d u} {u^2} + C\)





Primitive of Constant














\(\ds \)

\(=\)







\(\ds \frac u {a^3} - \frac {2 b} {a^3} \ln \size u + \frac {b^2} {a^3} \int \frac {\d u} {u^2} + C\)





Primitive of Reciprocal














\(\ds \)

\(=\)







\(\ds \frac u {a^3} - \frac {2 b} {a^3} \ln \size u + \frac {b^2} {a^3} \frac {-1} u + C\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \frac {a x + b} {a^3} - \frac {b^2} {a^3 \paren {a x + b} } - \frac {2 b} {a^3} \ln \size {a x + b} + C\)





substituting for $u$ and rearranging



$\blacksquare$





