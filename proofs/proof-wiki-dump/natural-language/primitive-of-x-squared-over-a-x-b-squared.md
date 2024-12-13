# 

Source: https://proofwiki.org/wiki/Primitive_of_x_squared_over_a_x_%2B_b_squared



Theorem
$\ds \int \frac {x^2 \rd x} {\paren {a x + b}^2} = \frac {a x + b} {a^3} - \frac {b^2} {a^3 \paren {a x + b} } - \frac {2 b} {a^3} \ln \size {a x + b} + C$


Proof 1
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


Proof 2













\(\ds \int \frac {x^2 \rd x} {\paren {a x + b}^2}\)

\(=\)







\(\ds \int \frac {a x^2 \rd x} {a \paren {a x + b}^2}\)





multiplying top and bottom by $a$














\(\ds \)

\(=\)







\(\ds \int \frac {x \paren {a x + b - b} \rd x} {a \paren {a x + b}^2}\)





adding and subtracting $b x$














\(\ds \)

\(=\)







\(\ds \frac 1 a \int \frac {x \paren {a x + b} \rd x} {\paren {a x + b}^2} - \frac b a \int \frac {x \rd x} {\paren {a x + b}^2}\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac 1 a \int \frac {x \rd x} {a x + b} - \frac b a \int \frac {x \rd x} {\paren {a x + b}^2}\)





simplification














\(\ds \)

\(=\)







\(\ds \frac 1 a \paren {\frac x a - \frac b {a^2} \ln \size {a x + b} } - \frac b a \int \frac {\d x} {\paren {a x + b}^2} + C\)





Primitive of Reciprocal of $\dfrac x {\paren {a x + b} }$














\(\ds \)

\(=\)







\(\ds \frac 1 a \paren {\frac x a - \frac b {a^2} \ln \size {a x + b} } - \frac b a \paren {\frac b {a^2 \paren {a x + b} } + \frac 1 {a^2} \ln \size {a x + b} } + C\)





Primitive of Reciprocal of $\dfrac x {\paren {a x + b}^2}$














\(\ds \)

\(=\)







\(\ds \frac x {a^2} - \frac b {a^3} \ln \size {a x + b} - \frac {b^2} {a^3 \paren {a x + b} } - \frac b {a^3} \ln \size {a x + b} + C\)





multiplying out














\(\ds \)

\(=\)







\(\ds \frac x {a^2} - \frac {b^2} {a^3 \paren {a x + b} } - \frac {2 b} {a^3} \ln \size {a x + b} + C\)





gathering terms














\(\ds \)

\(=\)







\(\ds \frac {a x} {a^3} + \frac b {a^3} - \frac {b^2} {a^3 \paren {a x + b} } - \frac {2 b} {a^3} \ln \size {a x + b} + C\)





where $\dfrac b {a^3}$ is subsumed into $C$














\(\ds \)

\(=\)







\(\ds \frac {a x + b} {a^3} - \frac {b^2} {a^3 \paren {a x + b} } - \frac {2 b} {a^3} \ln \size {a x + b} + C\)





simplification



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $a x + b$: $14.68$




