# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_x_cubed_by_x_fourth_plus_a_fourth

Theorem
$\ds \int \frac {\d x} {x^3 \paren {x^4 + a^4} } = \frac {-1} {2 a^4 x^2} - \frac 1 {2 a^6} \arctan \frac {x^2} {a^2}$


Proof













\(\ds \int \frac {\d x} {x^3 \paren {x^4 + a^4} }\)

\(=\)







\(\ds \int \frac {a^4 \rd x} {a^4 x^3 \paren {x^4 + a^4} }\)





multiplying top and bottom by $a^4$














\(\ds \)

\(=\)







\(\ds \int \frac {\paren {x^4 + a^4 - x^4} \rd x} {a^4 x^3 \paren {x^4 + a^4} }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {a^4} \int \frac {\paren {x^4 + a^4} \rd x} {x^3 \paren {x^4 + a^4} } - \frac 1 {a^4} \int \frac {x^4 \rd x} {x^3 \paren {x^4 + a^4} }\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac 1 {a^4} \int \frac {\d x} {x^3} - \frac 1 {a^4} \int \frac {x \rd x} {x^4 + a^4}\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac 1 {a^4} \paren {\frac {-1} {2 x} } - \frac 1 {a^4} \int \frac {x \rd x} {x^4 + a^4}\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \frac {-1} {2 a^4 x^2} - \frac 1 {a^4} \paren {\frac 1 {2 a^2} \arctan \frac {x^2} {a^2} }\)





Primitive of $\dfrac x {x^4 + a^4}$














\(\ds \)

\(=\)







\(\ds \frac {-1} {2 a^4 x^2} - \frac 1 {2 a^6} \arctan \frac {x^2} {a^2}\)





simplifying



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $x^4 \pm a^4$: $14.317$




