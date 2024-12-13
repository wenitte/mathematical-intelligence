# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_x_by_x_squared_plus_a_squared_squared

Theorem
$\ds \int \frac {\d x} {x \paren {x^2 + a^2}^2} = \frac 1 {2 a^2 \paren {x^2 + a^2} } + \frac 1 {2 a^4} \map \ln {\frac {x^2} {x^2 + a^2} } + C$


Proof
Let:














\(\ds \int \frac {\d x} {x \paren {x^2 + a^2}^2}\)

\(=\)







\(\ds \int \paren {\frac 1 {a^4 x} - \frac x {a^4 \paren {x^2 + a^2} } - \frac x {a^2 \paren {x^2 + a^2}^2} } \rd x\)





Partial Fraction Expansion














\(\ds \)

\(=\)







\(\ds \frac 1 {a^4} \int \frac {\d x} x - \frac 1 {a^4} \int \frac {x \rd x} {x^2 + a^2} - \frac 1 {a^2} \int \frac {x \rd x} {\paren {x^2 + a^2}^2}\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac 1 {a^4} \ln x - \frac 1 {a^4} \int \frac {x \rd x} {x^2 + a^2} - \frac 1 {a^2} \int \frac {x \rd x} {\paren {x^2 + a^2}^2} + C\)





Primitive of Reciprocal














\(\ds \)

\(=\)







\(\ds \frac 1 {a^4} \ln x - \frac 1 {a^4} \paren {\frac 1 2 \map \ln {x^2 + a^2} } - \frac 1 {a^2} \int \frac {x \rd x} {\paren {x^2 + a^2}^2} + C\)





Primitive of $\dfrac x {x^2 + a^2}$














\(\ds \)

\(=\)







\(\ds \frac 1 {a^4} \ln x - \frac 1 {a^4} \paren {\frac 1 2 \map \ln {x^2 + a^2} } - \frac 1 {a^2} \paren {-\frac 1 {2 \paren {x^2 + a^2} } } + C\)





Primitive of $\dfrac x {\left({x^2 + a^2}\right)^2}$














\(\ds \)

\(=\)







\(\ds \frac 1 {2 a^2 \paren {x^2 + a^2} } + \frac 1 {2 a^4} \map \ln {\frac {x^2} {x^2 + a^2} } + C\)





simplification



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $x^2 + a^2$: $14.136$




