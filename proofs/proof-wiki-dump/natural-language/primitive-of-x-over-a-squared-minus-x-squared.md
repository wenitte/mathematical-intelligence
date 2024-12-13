# 

Source: https://proofwiki.org/wiki/Primitive_of_x_over_a_squared_minus_x_squared



Theorem
$\ds \int \frac {x \rd x} {a^2 - x^2} = -\frac 1 2 \map \ln {a^2 - x^2} + C$
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





\(\ds \int \frac {\d x} {x \paren {a^2 - x^2} }\)

\(=\)







\(\ds \int \frac {\d z} {-2 z}\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds -\frac 1 2 \int \frac {\d z} z\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds -\frac 1 2 \ln z + C\)





Primitive of Reciprocal: Corollary as $z > 0$














\(\ds \)

\(=\)







\(\ds -\frac 1 2 \, \map \ln {a^2 - x^2} + C\)





substituting for $z$



$\blacksquare$


Also see
Primitive of $\dfrac x {x^2 - a^2}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $a^2 - x^2$, $x^2 < a^2$: $14.164$



