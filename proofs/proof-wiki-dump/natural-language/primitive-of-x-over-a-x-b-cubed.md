# 

Source: https://proofwiki.org/wiki/Primitive_of_x_over_a_x_%2B_b_cubed



Theorem
$\ds \int \frac {x \rd x} {\paren {a x + b}^3} = \frac {-1} {a^2 \paren {a x + b} } + \frac b {2 a^2 \paren {a x + b}^2} + C$


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














\(\ds \int \frac {x \rd x} {\paren {a x + b}^3}\)

\(=\)







\(\ds \int \frac 1 a \frac {u - b} {a u^3} \rd u\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \frac 1 {a^2} \int \frac {\d u} {u^2} - \frac b {a^2} \int \frac {\d u} {u^3}\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac 1 {a^2} \frac {-1} u - \frac b {a^2} \frac {-1} {2 u^2} + C\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \frac {-1} {a^2 \paren {a x + b} } + \frac b {2 a^2 \paren {a x + b}^2} + C\)





substituting for $u$ and rearranging



$\blacksquare$


Proof 2
From Primitive of $x$ by Power of $a x + b$:

$\ds \int x \paren {a x + b}^n \rd x = \frac {\paren {a x + b}^{n + 2} } {\paren {n + 2} a^2} - \frac {b \paren {a x + b}^{n + 1} } {\paren {n + 1} a^2} + C$
where $n \ne - 1$ and $n \ne - 2$.
The result follows by setting $n = -3$.
$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $a x + b$: $14.74$




