# 

Source: https://proofwiki.org/wiki/Primitive_of_x_over_a_x_%2B_b_squared/Proof_1

Theorem
$\ds \int \frac {x \rd x} {\paren {a x + b}^2} = \frac b {a^2 \paren {a x + b} } + \frac 1 {a^2} \ln \size {a x + b} + C$


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














\(\ds \int \frac {x \rd x} {\paren {a x + b}^2}\)

\(=\)







\(\ds \int \frac 1 a \frac {u - b} {a u^2} \rd u\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \frac 1 {a^2} \int \frac {\d u} u - \frac b {a^2} \int \frac {\d u} {u^2}\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac 1 {a^2} \ln \size u + C - \frac b {a^2} \int \frac {\d u} u\)





Primitive of Reciprocal














\(\ds \)

\(=\)







\(\ds \frac 1 {a^2} \ln \size u - \frac b {a^2} \frac {-1} u + C\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \frac b {a^2 \paren {a x + b} } + \frac 1 {a^2} \ln \size {a x + b} + C\)





substituting for $u$ and rearranging



$\blacksquare$





