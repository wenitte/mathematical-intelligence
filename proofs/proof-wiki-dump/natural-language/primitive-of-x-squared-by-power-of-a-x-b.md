# 

Source: https://proofwiki.org/wiki/Primitive_of_x_squared_by_Power_of_a_x_%2B_b



Theorem
$\ds \int x^2 \paren {a x + b}^n \rd x = \frac {\paren {a x + b}^{n + 3} } {\paren {n + 3} a^3} - \frac {2 b \paren {a x + b}^{n + 2} } {\paren {n + 2} a^3} + \frac {b^2 \paren {a x + b}^{n + 1} } {\paren {n + 1} a^3} + C$
where $n \notin \set {-1, -2, -3}$.


Proof
Let $u = a x + b$.
Then:














\(\ds x\)

\(=\)







\(\ds \frac {u - b} a\)




















\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds \frac 1 a\)










Then:














\(\ds \int x \paren {a x + b}^n \rd x\)

\(=\)







\(\ds \int \frac 1 a \paren {\frac {u - b} a}^2 u^n \rd u\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \int \frac 1 {a^3} \paren {u^{n + 2} - 2 b u^{n + 1} + b^2 u^n} \rd u\)





Square of Difference and multiplying out














\(\ds \)

\(=\)







\(\ds \frac 1 {a^3} \int u^{n + 3} \rd u - \frac {2 b} {a^3} \int u^{n + 1} \rd u + \frac {b^2} {a^3} \int u^n \rd u\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac 1 {a^3} \frac {u^{n + 3} } {n + 3} - \frac {2 b} {a^3} \frac {u^{n + 2} } {n + 2} + \frac {b^2} {a^3} \frac {u^{n + 1} } {n + 1} + C\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \frac {\paren {a x + b}^{n + 3} } {\paren {n + 3} a^3} - \frac {2 b \paren {a x + b}^{n + 2} } {\paren {n + 2} a^3} + \frac {b^2 \paren {a x + b}^{n + 1} } {\paren {n + 1} a^3} + C\)





substituting for $u$



$\blacksquare$


Also see
Primitive of $x^2$ over $a x + b$ for the case when $n = -1$
Primitive of $x^2$ over $\paren {a x + b}^2$ for the case when $n = -2$
Primitive of $x^2$ over $\paren {a x + b}^3$ for the case when $n = -3$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $a x + b$: $14.82$




