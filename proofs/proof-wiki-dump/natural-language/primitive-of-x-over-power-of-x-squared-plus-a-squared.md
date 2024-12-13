# 

Source: https://proofwiki.org/wiki/Primitive_of_x_over_Power_of_x_squared_plus_a_squared

Theorem
$\ds \int \frac {x \rd x} {\paren {x^2 + a^2}^n} = \frac {-1} {2 \paren {n - 1} \paren {x^2 + a^2}^{n - 1} }$


Proof
Let:














\(\ds z\)

\(=\)







\(\ds x^2 + a^2\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d z} {\d x}\)

\(=\)







\(\ds 2 x\)





Power Rule for Derivatives








\(\ds \leadsto \ \ \)





\(\ds \int \frac {x \rd x} {\paren {x^2 + a^2}^n}\)

\(=\)







\(\ds \int \frac {\d z} {2 z^n}\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \frac 1 2 \int z^{-n} \rd z\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds \frac 1 2 \frac {z^{-n + 1} } {-n + 1} + C\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \frac {-1} {2 \paren {n - 1} z^{n - 1} } + C\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac {-1} {2 \paren {n - 1} \paren {x^2 + a^2}^{n - 1} } + C\)





substituting for $z$



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $x^2 + a^2$: $14.140$




