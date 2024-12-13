# 

Source: https://proofwiki.org/wiki/Primitive_of_x_over_Power_of_a_squared_minus_x_squared



Theorem
$\ds \int \frac {x \rd x} {\paren {a^2 - x^2}^n} = \frac 1 {2 \paren {n - 1} \paren {a^2 - x^2}^{n - 1} }$
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





Power Rule for Derivatives








\(\ds \leadsto \ \ \)





\(\ds \int \frac {x \rd x} {\paren {a^2 - x^2}^n}\)

\(=\)







\(\ds \int \frac {\d z} {- 2 z^n}\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \frac {-1} 2 \int z^{-n} \rd z\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds \frac {-1} 2 \frac {z^{-n + 1} } {-n + 1} + C\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \frac 1 {2 \paren {n - 1} z^{n - 1} } + C\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac 1 {2 \paren {n - 1} \paren {a^2 - x^2}^{n - 1} } + C\)





substituting for $z$



$\blacksquare$


Also see
Primitive of $\dfrac x {\paren {x^2 - a^2}^n}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $a^2 - x^2$, $x^2 < a^2$: $14.178$




