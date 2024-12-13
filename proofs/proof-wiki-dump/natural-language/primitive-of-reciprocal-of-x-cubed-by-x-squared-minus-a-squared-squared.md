# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_x_cubed_by_x_squared_minus_a_squared_squared



Theorem
$\ds \int \frac {\d x} {x^3 \paren {x^2 - a^2}^2} = \frac {-1} {2 a^4 x^2} - \frac 1 {2 a^4 \paren {x^2 - a^2} } + \frac 1 {a^6} \map \ln {\frac {x^2} {x^2 - a^2} } + C$
for $x^2 > a^2$.


Proof













\(\ds \int \frac {\d x} {x^3 \paren {x^2 - a^2}^2}\)

\(=\)







\(\ds \int \paren {\frac 1 {a^4 x^3} + \frac 2 {a^6 x} - \frac {2 x} {a^6 \paren {x^2 - a^2} } + \frac x {a^4 \paren {x^2 - a^2}^2} } \rd x\)





Partial Fraction Expansion














\(\ds \)

\(=\)







\(\ds \frac 1 {a^4} \int \frac {\d x} {x^3} + \frac 2 {a^6} \int \frac {\d x} x - \frac 2 {a^6} \int \frac {x \rd x} {x^2 - a^2} + \frac 1 {a^4} \int \frac {x \rd x} {\paren {x^2 - a^2}^2}\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac 1 {a^4} \frac {-1} {2 x^2} + \frac 2 {a^6} \int \frac {\d x} x - \frac 2 {a^6} \int \frac {x \rd x} {x^2 - a^2} + \frac 1 {a^4} \int \frac {x \rd x} {\paren {x^2 - a^2}^2} + C\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \frac {-1} {2 a^4 x^2} + \frac 2 {a^6} \ln \size x - \frac 2 {a^6} \int \frac {x \rd x} {x^2 - a^2} + \frac 1 {a^4} \int \frac {x \rd x} {\paren {x^2 - a^2}^2} + C\)





Primitive of Reciprocal














\(\ds \)

\(=\)







\(\ds \frac {-1} {2 a^4 x^2} + \frac 2 {a^6} \ln \size x - \frac 2 {a^6} \frac 1 2 \map \ln {x^2 - a^2} + \frac 1 {a^4} \int \frac {x \rd x} {\paren {x^2 - a^2}^2} + C\)





Primitive of $\dfrac x {x^2 - a^2}$














\(\ds \)

\(=\)







\(\ds \frac {-1} {2 a^4 x^2} + \frac 2 {a^6} \ln \size x - \frac 1 {a^6} \map \ln {x^2 - a^2} + \frac 1 {a^4} \frac {-1} {2 \paren {x^2 - a^2} }  + C\)





Primitive of $\dfrac x {\paren {x^2 - a^2}^2}$














\(\ds \)

\(=\)







\(\ds \frac {-1} {2 a^4 x^2} + \frac 1 {a^6} \map \ln {x^2} - \frac 1 {a^6} \map \ln {x^2 - a^2} + \frac 1 {a^4} \frac {-1} {2 \paren {x^2 - a^2} }  + C\)





Logarithm of Power and $x^2 > 0$














\(\ds \)

\(=\)







\(\ds \frac {-1} {2 a^4 x^2} - \frac 1 {2 a^4 \paren {x^2 - a^2} } + \frac 1 {a^6} \map \ln {\frac {x^2} {x^2 - a^2} } + C\)





Difference of Logarithms



$\blacksquare$


Also see
Primitive of $\dfrac 1 {x^3 \paren {a^2 - x^2}^2}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $x^2 - a^2$, $x^2 > a^2$: $14.157$




