# 

Source: https://proofwiki.org/wiki/Primitive_of_x_squared_over_x_squared_plus_a_squared

Theorem
$\ds \int \frac {x^2 \rd x} {x^2 + a^2} = x - a \arctan {\frac x a} + C$
where $a$ is a non-zero constant.


Proof













\(\ds \int \frac {x^2 \rd x} {x^2 + a^2}\)

\(=\)







\(\ds \int \paren {1 - \frac {a^2} {x^2 + a^2} } \rd x\)





long division














\(\ds \)

\(=\)







\(\ds \int \d x - a^2 \int \frac {\d x} {x^2 + a^2}\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds x - a^2 \int \frac {\d x} {x^2 + a^2} + C\)





Primitive of Constant














\(\ds \)

\(=\)







\(\ds x - a^2 \frac 1 a \arctan {\frac x a} + C\)





Primitive of $\dfrac 1 {x^2 + a^2}$














\(\ds \)

\(=\)







\(\ds x - a \arctan {\frac x a} + C\)





simplifying



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $x^2 + a^2$: $14.127$




