# 

Source: https://proofwiki.org/wiki/Primitive_of_x_squared_over_x_fourth_minus_a_fourth

Theorem
$\ds \int \frac {x^2 \rd x} {x^4 - a^4} = \frac 1 {4 a} \ln \size {\frac {x - a} {x + a} } + \frac 1 {2 a} \arctan \frac x a + C$


Proof













\(\ds \int \frac {x^2 \rd x} {x^4 - a^4}\)

\(=\)







\(\ds \int \frac {x^2 \rd x} {\paren {x^2 + a^2} \paren {x^2 - a^2} }\)





Difference of Two Squares














\(\ds \)

\(=\)







\(\ds \int \frac {\paren {x^2 + a^2 - a^2} \rd x} {\paren {x^2 + a^2} \paren {x^2 - a^2} }\)




















\(\ds \)

\(=\)







\(\ds \int \frac {\paren {x^2 + a^2} \rd x} {\paren {x^2 + a^2} \paren {x^2 - a^2} } + \int \frac {-a^2 \rd x} {\paren {x^2 + a^2} \paren {x^2 - a^2} }\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \int \frac {\d x} {x^2 - a^2} + \int \frac {-a^2 \rd x} {\paren {x^2 + a^2} \paren {x^2 - a^2} }\)





simplifying














\(\ds \)

\(=\)







\(\ds \int \frac {\d x} {x^2 - a^2} + \int \frac {\paren {x^2 - a^2 - x^2} \rd x} {\paren {x^2 + a^2} \paren {x^2 - a^2} }\)





Difference of Two Squares














\(\ds \)

\(=\)







\(\ds \int \frac {\d x} {x^2 - a^2} + \int \frac {\paren {x^2 - a^2} \rd x} {\paren {x^2 + a^2} \paren {x^2 - a^2} }\)





Linear Combination of Primitives














\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \int \frac {x^2 \rd x} {\paren {x^2 + a^2} \paren {x^2 - a^2} }\)




















\(\ds \)

\(=\)







\(\ds \int \frac {\d x} {x^2 - a^2} + \int \frac {\d x} {x^2 + a^2} - \int \frac {x^2 \rd x} {\paren {x^2 + a^2} \paren {x^2 - a^2} }\)





simplification














\(\ds \)

\(=\)







\(\ds \int \frac {\d x} {x^2 - a^2} + \int \frac {\d x} {x^2 + a^2} - \int \frac {x^2 \rd x} {x^4 - a^4}\)





Difference of Two Squares








\(\ds \leadsto \ \ \)





\(\ds 2 \int \frac {x^2 \rd x} {x^4 - a^4}\)

\(=\)







\(\ds \int \frac {\d x} {x^2 - a^2} - \int \frac {\d x} {x^2 + a^2}\)





gathering terms








\(\ds \leadsto \ \ \)





\(\ds \int \frac {\d x} {x^4 - a^4}\)

\(=\)







\(\ds \frac 1 2 \int \frac {\d x} {x^2 - a^2} - \frac 1 2 \int \frac {\d x} {x^2 + a^2}\)





gathering terms














\(\ds \)

\(=\)







\(\ds \frac 1 {4 a} \ln \size {\frac {x - a} {x + a} } - \frac 1 2 \int \frac {\d x} {x^2 + a^2}\)





Primitive of $\dfrac 1 {x^2 - a^2}$














\(\ds \)

\(=\)







\(\ds \frac 1 {4 a} \ln \size {\frac {x - a} {x + a} } - \frac 1 {2 a} \arctan \frac x a\)





Primitive of $\dfrac 1 {x^2 + a^2}$



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $x^4 \pm a^4$: $14.320$




