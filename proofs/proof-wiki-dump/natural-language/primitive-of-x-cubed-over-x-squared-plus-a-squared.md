# 

Source: https://proofwiki.org/wiki/Primitive_of_x_cubed_over_x_squared_plus_a_squared

Theorem
$\ds \int \frac {x^3 \rd x} {x^2 + a^2} = \frac {x^2} 2 - \frac {a^2} 2 \map \ln {x^2 + a^2} + C$


Proof













\(\ds \int \frac {x^3 \rd x} {x^2 + a^2}\)

\(=\)







\(\ds \int \paren {x - \frac {a^2 x} {x^2 + a^2} } \rd x\)





long division














\(\ds \)

\(=\)







\(\ds \int x \rd x - a^2 \int \frac {x \rd x} {x^2 + a^2}\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac {x^2} 2 - a^2 \int \frac {x \rd x} {x^2 + a^2} + C\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \frac {x^2} 2 - a^2 \paren {\frac 1 2 \map \ln {x^2 + a^2} } + C\)





Primitive of $\dfrac x {x^2 + a^2}$














\(\ds \)

\(=\)







\(\ds \frac {x^2} 2 - \frac {a^2} 2 \map \ln {x^2 + a^2} + C\)





simplifying



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $x^2 + a^2$: $14.128$




