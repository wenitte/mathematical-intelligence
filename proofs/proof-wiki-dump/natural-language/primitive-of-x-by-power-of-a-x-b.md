# 

Source: https://proofwiki.org/wiki/Primitive_of_x_by_Power_of_a_x_%2B_b



Theorem
$\ds \int x \paren {a x + b}^n \rd x = \frac {\paren {a x + b}^{n + 2} } {\paren {n + 2} a^2} - \frac {b \paren {a x + b}^{n + 1} } {\paren {n + 1} a^2} + C$
where $n \ne - 1$ and $n \ne - 2$.


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







\(\ds \frac 1 a \int \frac {u - b} a u^n \rd u\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \frac 1 {a^2} \int u^{n + 1} \rd u - \frac b {a^2} \int u^n \rd u\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac 1 {a^2} \frac {u^{n + 2} } {n + 2} - \frac b {a^2} \frac {u^{n + 1} } {n + 1} + C\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \frac {\paren {a x + b}^{n + 2} } {\paren {n + 2} a^2} - \frac {b \paren {a x + b}^{n + 1} } {\paren {n + 1} a^2} + C\)





substituting for $u$



$\blacksquare$


Also presented as
This result is also seen presented in the form:

$\ds \int x \paren {a x + b}^n \rd x = \frac {\paren {a x + b}^{n + 1} } {a^2} \paren {\frac {a x + b} {n + 2} - \frac b {n + 1} } + C$


Also see
Primitive of $x$ over $a x + b$ for the case when $n = -1$
Primitive of $x$ over $\paren {a x + b}^2$ for the case when $n = -2$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $a x + b$: $14.81$




