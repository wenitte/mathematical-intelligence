# 

Source: https://proofwiki.org/wiki/Primitive_of_x_over_a_x_%2B_b/Proof_1

Theorem
$\ds \int \frac {x \rd x} {a x + b} = \frac x a - \frac b {a^2} \ln \size {a x + b} + C$


Proof
Put $u = a x + b$
Then:














\(\ds x\)

\(=\)







\(\ds \frac {u - b} a\)




















\(\ds \frac {\d x} {\d u}\)

\(=\)







\(\ds \frac 1 a\)










Then:














\(\ds \int \frac {x \rd x} {a x + b}\)

\(=\)







\(\ds \int \frac 1 a \frac {u - b} {a u} \rd u\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \frac 1 {a^2} \int \rd u - \frac b {a^2} \int \frac {\d u} u\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac u {a^2} + C - \frac b {a^2} \int \frac {\d u} u\)





Primitive of Constant














\(\ds \)

\(=\)







\(\ds \frac u {a^2} - \frac b {a^2} \ln \size u + C\)





Primitive of Reciprocal














\(\ds \)

\(=\)







\(\ds \frac {a x + b} {a^2} - \frac b {a^2} \ln \size {a x + b} + C\)





substituting for $u$














\(\ds \)

\(=\)







\(\ds \frac x a + \frac b {a^2} - \frac b {a^2} \ln \size {a x + b} + C\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac x a - \frac b {a^2} \ln \size {a x + b} + C\)





subsuming $\dfrac b {a^2}$ into the arbitrary constant $C$



$\blacksquare$





