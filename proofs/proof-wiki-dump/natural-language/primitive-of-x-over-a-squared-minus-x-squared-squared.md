# 

Source: https://proofwiki.org/wiki/Primitive_of_x_over_a_squared_minus_x_squared_squared



Theorem
$\ds \int \frac {x \rd x} {\paren {a^2 - x^2}^2} = \frac 1 {2 \paren {a^2 - x^2} } + C$
for $x^2 < a^2$.


Proof
Let:














\(\ds z\)

\(=\)







\(\ds a^2 - x^2\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d z} {\d x}\)

\(=\)







\(\ds -2 x\)





Derivative of Power








\(\ds \leadsto \ \ \)





\(\ds \int \frac {x \rd x} {\paren {a^2 - x^2}^2}\)

\(=\)







\(\ds \int \frac {\d z} {-2 z^2}\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds -\frac 1 2 \int \frac {\d z} {z^2}\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds -\frac 1 2 \paren {\frac {-1} z} + C\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \frac 1 {2 \paren {a^2 - x^2} } + C\)





substituting for $z$ and simplifying



$\blacksquare$


Also see
Primitive of $\dfrac x {\paren {x^2 - a^2}^2}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $a^2 - x^2$, $x^2 < a^2$: $14.171$




