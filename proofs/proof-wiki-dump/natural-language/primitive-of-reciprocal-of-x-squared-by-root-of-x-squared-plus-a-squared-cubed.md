# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_x_squared_by_Root_of_x_squared_plus_a_squared_cubed



Theorem
$\ds \int \frac {\d x} {x^2 \paren {\sqrt {x^2 + a^2} }^3} = \frac {-\sqrt {x^2 + a^2} } {a^4 x} - \frac x {a^4 \sqrt {x^2 + a^2} } + C$


Proof













\(\ds \int \frac {\d x} {x^2 \paren {\sqrt {x^2 + a^2} }^3}\)

\(=\)







\(\ds \int \frac {a^2 \rd x} {a^2 x^2 \paren {\sqrt {x^2 + a^2} }^3}\)




















\(\ds \)

\(=\)







\(\ds \int \frac {\paren {x^2 + a^2 - x^2} \rd x} {a^2 x^2 \paren {\sqrt {x^2 + a^2} }^3}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {a^2} \int \frac {\paren {x^2 + a^2} \rd x} {a^2 x^2 \paren {\sqrt {x^2 + a^2} }^3} - \frac 1 {a^2} \int \frac {x^2 \rd x} {x^2 \paren {\sqrt {x^2 + a^2} }^3}\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac 1 {a^2} \int \frac {\d x} {x^2 \sqrt {x^2 + a^2} } - \frac 1 {a^2} \int \frac {\d x} {\paren {\sqrt {x^2 + a^2} }^3}\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac 1 {a^2} \frac {-\sqrt {x^2 + a^2} } {a^2 x} - \frac 1 {a^2} \int \frac {\d x} {\paren {\sqrt {x^2 + a^2} }^3} + C\)





Primitive of $\dfrac 1 {x^2 \sqrt {x^2 + a^2} }$














\(\ds \)

\(=\)







\(\ds \frac {-\sqrt {x^2 + a^2} } {a^4 x} - \frac 1 {a^2} \frac x {a^2 \sqrt {x^2 + a^2} } + C\)





Primitive of $\dfrac 1 {\paren {\sqrt {x^2 + a^2} }^3}$














\(\ds \)

\(=\)







\(\ds \frac {-\sqrt {x^2 + a^2} } {a^4 x} - \frac x {a^4 \sqrt {x^2 + a^2} } + C\)





simplification



$\blacksquare$


Also see
Primitive of $\dfrac 1 {x^2 \paren {\sqrt {x^2 - a^2} }^3}$
Primitive of $\dfrac 1 {x^2 \paren {\sqrt {a^2 - x^2} }^3}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sqrt {x^2 + a^2}$: $14.201$




