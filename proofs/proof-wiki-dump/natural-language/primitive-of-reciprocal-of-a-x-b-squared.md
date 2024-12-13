# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_a_x_%2B_b_squared



Theorem
$\ds \int \frac {\d x} {\paren {a x + b}^2} = -\frac 1 {a \paren {a x + b} } + C$


Proof 1
Let $u = a x + b$.
Then:














\(\ds \int \frac {\d x} {\paren {a x + b}^2}\)

\(=\)







\(\ds \frac 1 a \int \frac {\d u} {u^2}\)





Primitive of Function of $a x + b$














\(\ds \)

\(=\)







\(\ds \frac 1 a \frac {-1} u + C\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds -\frac 1 {a \paren {a x + b} } + C\)





substituting for $u$



$\blacksquare$


Proof 2
From Primitive of Power of $a x + b$:

$\ds \int \paren {a x + b}^n \rd x = \frac {\paren {a x + b}^{n + 1} } {\paren {n + 1} a} + C$
where $n \ne 1$.
The result follows by setting $n = -2$.
$\blacksquare$


Examples
Primitive of $\dfrac 1 {\paren {x - a}^2}$
$\ds \int \frac {\d x} {\paren {x - a}^2} = -\frac 1 {\paren {x - a} } + C$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $a x + b$: $14.66$




