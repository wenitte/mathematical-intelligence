# 

Source: https://proofwiki.org/wiki/Primitive_of_x_squared_over_a_x_%2B_b/Proof_1

Theorem
$\ds \int \frac {x^2 \rd x} {a x + b} = \frac {\paren {a x + b}^2} {2 a^3} - \frac {2 b \paren {a x + b} } {a^3} + \frac {b^2} {a^3} \ln \size {a x + b} + C$


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














\(\ds \int \frac {x^2 \rd x} {a x + b}\)

\(=\)







\(\ds \int \frac 1 a \paren {\frac {u - b} a}^2 \frac {\d u} u\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \frac 1 {a^3} \int \frac {\paren {u - b}^2} u \rd u\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds \frac 1 {a^3} \int \paren {u - 2 b + \frac {b^2} u} \rd u\)





multiplying out and simplifying














\(\ds \)

\(=\)







\(\ds \frac 1 {a^3} \paren {\int u \rd u - \int 2 b \rd u + \int \frac {b^2} u \rd u}\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac 1 {a^3} \paren {\frac {u^2} 2 + C - \int 2 b \rd u + \int \frac {b^2} u \rd u}\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \frac 1 {a^3} \paren {\frac {u^2} 2 - 2 b u + C + \int \frac {b^2} u \rd u}\)





Primitive of Constant














\(\ds \)

\(=\)







\(\ds \frac 1 {a^3} \paren {\frac {u^2} 2 - 2 b u + C + b^2 \int \frac {\d u} u}\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds \frac 1 {a^3} \paren {\frac {u^2} 2 - 2 b u + b^2 \ln \size u} + C\)





Primitive of Reciprocal and subsuming arbitrary constant $C$














\(\ds \)

\(=\)







\(\ds \frac {\paren {a x + b}^2} {2 a^3} - \frac {2 b \paren {a x + b} } {a^3} + \frac {b^2} {a^3} \ln \size {a x + b} + C\)





substituting for $u$ and simplifying



$\blacksquare$





