# 

Source: https://proofwiki.org/wiki/Primitive_of_Power_of_x_over_x_cubed_plus_a_cubed

Theorem
$\ds \int \frac {x^m \rd x} {x^3 + a^3} = \frac {x^{m - 2} } {m - 2} - a^3 \int \frac {x^{m - 3} \rd x} {x^3 + a^3}$


Proof













\(\ds \int \frac {x^m \rd x} {x^3 + a^3}\)

\(=\)







\(\ds \int \frac {x^{m - 3} \paren {x^3} \rd x} {x^3 + a^3}\)




















\(\ds \)

\(=\)







\(\ds \int \frac {x^{m - 3} \paren {x^3 + a^3 - a^3} \rd x} {x^3 + a^3}\)




















\(\ds \)

\(=\)







\(\ds \int \frac {x^{m - 3} \paren {x^3 + a^3} \rd x} {x^3 + a^3} - a^3 \int \frac {x^{m - 3} \rd x} {x^3 + a^3}\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \int x^{m - 3} \rd x - a^3 \int \frac {x^{m - 3} \rd x} {x^3 + a^3}\)





simplification














\(\ds \)

\(=\)







\(\ds \frac {x^{m - 2} } {m - 2} - a^3 \int \frac {x^{m - 3} \rd x} {x^3 + a^3}\)





Primitive of Power



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $x^3 + a^3$: $14.309$




