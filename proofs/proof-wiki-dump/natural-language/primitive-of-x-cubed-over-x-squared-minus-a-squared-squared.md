# 

Source: https://proofwiki.org/wiki/Primitive_of_x_cubed_over_x_squared_minus_a_squared_squared



Theorem
$\ds \int \frac {x^3 \rd x} {\paren {x^2 - a^2}^2} = \frac {-a^2} {2 \paren {x^2 - a^2} } + \frac 1 2 \map \ln {x^2 - a^2} + C$
for $x^2 > a^2$.


Proof













\(\ds \int \frac {x^3 \rd x} {\paren {x^2 - a^2}^2}\)

\(=\)







\(\ds \int \frac {x \paren {x^2 - a^2 + a^2} } {\paren {x^2 - a^2}^2} \rd x\)




















\(\ds \)

\(=\)







\(\ds \int \frac {x \paren {x^2 - a^2} } {\paren {x^2 - a^2}^2} \rd x + a^2 \int \frac {x \rd x} {\paren {x^2 - a^2}^2}\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \int \frac {x \rd x} {x^2 - a^2} + a^2 \int \frac {x \rd x} {\paren {x^2 - a^2}^2}\)





simplification














\(\ds \)

\(=\)







\(\ds \frac 1 2 \map \ln {x^2 - a^2} + a^2 \int \frac {x \rd x} {\paren {x^2 - a^2}^2} + C\)





Primitive of $\dfrac x {x^2 - a^2}$














\(\ds \)

\(=\)







\(\ds \frac 1 2 \map \ln {x^2 - a^2} + a^2 \paren {-\frac 1 {2 \paren {x^2 - a^2} } } + C\)





Primitive of $\dfrac x {\paren {x^2 - a^2}^2}$














\(\ds \)

\(=\)







\(\ds \frac {-a^2} {2 \paren {x^2 - a^2} } + \frac 1 2 \map \ln {x^2 - a^2} + C\)





simplifying



$\blacksquare$


Also see
Primitive of $\dfrac {x^3} {\paren {a^2 - x^2}^2}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $x^2 - a^2$, $x^2 > a^2$: $14.154$




