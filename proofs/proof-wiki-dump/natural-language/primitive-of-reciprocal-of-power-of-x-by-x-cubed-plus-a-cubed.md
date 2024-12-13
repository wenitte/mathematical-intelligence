# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_Power_of_x_by_x_cubed_plus_a_cubed

Theorem
$\ds \int \frac {\d x} {x^n \paren {x^3 + a^3} } = \frac {-1} {a^3 \paren {n - 1} x^{n - 1} } - \frac 1 {a^3} \int \frac {\d x} {x^{n - 3} \paren {x^3 + a^3} }$


Proof













\(\ds \int \frac {\d x} {x^n \paren {x^3 + a^3} }\)

\(=\)







\(\ds \int \frac {a^3 \rd x} {a^3 x^n \paren {x^3 + a^3} }\)




















\(\ds \)

\(=\)







\(\ds \int \frac {\paren {x^3 + a^3 - x^3} \rd x} {a^3 x^n \paren {x^3 + a^3} }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {a^3} \int \frac {\paren {x^3 + a^3} \rd x} {x^n \paren {x^3 + a^3} } - \frac 1 {a^3} \int \frac {x^3 \rd x} {x^n \paren {x^3 + a^3} }\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac 1 {a^3} \int \frac {\d x} {x^n} - \frac 1 {a^3} \int \frac {x^3 \rd x} {x^n \paren {x^3 + a^3} }\)





simplification














\(\ds \)

\(=\)







\(\ds \frac {-1} {a^3 \paren {n - 1} x^{n - 1} } - \frac 1 {a^3} \int \frac {\d x} {x^{n - 3} \paren {x^3 + a^3} }\)





Primitive of Power



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $x^3 + a^3$: $14.310$




