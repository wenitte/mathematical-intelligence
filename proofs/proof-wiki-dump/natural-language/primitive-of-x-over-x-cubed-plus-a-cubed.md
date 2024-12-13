# 

Source: https://proofwiki.org/wiki/Primitive_of_x_over_x_cubed_plus_a_cubed

Theorem
$\ds \int \frac {x \rd x} {x^3 + a^3} = \frac 1 {6 a} \map \ln {\frac {x^2 - a x + a^2} {\paren {x + a}^2} } + \frac 1 {a \sqrt 3} \arctan \frac {2 x - a} {a \sqrt 3}$


Proof













\(\ds \int \frac {x \rd x} {x^3 + a^3}\)

\(=\)







\(\ds \int \frac {\paren {x + a - a} \rd x} {x^3 + a^3}\)




















\(\ds \)

\(=\)







\(\ds \int \frac {\paren {x + a} \rd x} {x^3 + a^3} - a \int \frac {\d x} {x^3 + a^3}\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \int \frac {\paren {x + a} \rd x} {\paren {x + a} \paren {x^2 - a x + a^2} } - a \int \frac {\d x} {x^3 + a^3}\)





Sum of Two Cubes














\(\ds \)

\(=\)







\(\ds \int \frac {\d x} {x^2 - a x + a^2} - a \int \frac {\d x} {x^3 + a^3}\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac 2 {a \sqrt 3} \arctan \paren {\frac {2 x - a} {a \sqrt 3} } - a \int \frac {\d x} {x^3 + a^3}\)





Primitive of $\dfrac 1 {x^2 - a x + a^2}$














\(\ds \)

\(=\)







\(\ds \frac 2 {a \sqrt 3} \, \map \arctan {\frac {2 x - a} {a \sqrt 3} } - a \paren {\frac 1 {6 a^2} \ln \size {\frac {\paren {x + a}^2} {x^2 - a x + a^2} } + \frac 1 {a^2 \sqrt 3} \arctan \frac {2 x - a} {a \sqrt 3} }\)





Primitive of $\dfrac 1 {x^3 + a^3}$














\(\ds \)

\(=\)







\(\ds \frac 2 {a \sqrt 3} \, \map \arctan {\frac {2 x - a} {a \sqrt 3} } - \frac 1 {6 a} \ln \size {\frac {\paren {x + a}^2} {x^2 - a x + a^2} } - \frac 1 {a \sqrt 3} \arctan \frac {2 x - a} {a \sqrt 3}\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac 1 {6 a} \, \map \ln {\frac {x^2 - a x + a^2} {\paren {x + a}^2} } + \frac 1 {a \sqrt 3} \arctan \frac {2 x - a} {a \sqrt 3}\)





gathering terms



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $x^3 + a^3$: $14.300$




