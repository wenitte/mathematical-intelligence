# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_a_x_%2B_b_cubed



Theorem
$\ds \int \frac {\d x} {\paren {a x + b}^3} = -\frac 1 {2 a \paren {a x + b}^2} + C$


Proof 1
Let $u = a x + b$.
Then:














\(\ds \int \frac {\rd x} {\paren {a x + b}^3}\)

\(=\)







\(\ds \frac 1 a \int \frac {\rd u} {u^3}\)





Primitive of Function of $a x + b$














\(\ds \)

\(=\)







\(\ds \frac 1 a \frac {-1} {2 u^2} + C\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds -\frac 1 {2 a \paren {a x + b}^2} + C\)





substituting for $u$



$\blacksquare$


Proof 2
From Primitive of Power of $a x + b$:

$\ds \int \paren {a x + b}^n \rd x = \frac {\paren {a x + b}^{n + 1} } {\paren {n + 1} a} + C$
where $n \ne 1$.
The result follows by setting $n = -3$.
$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $a x + b$: $14.73$
(in which a mistake apppears)




