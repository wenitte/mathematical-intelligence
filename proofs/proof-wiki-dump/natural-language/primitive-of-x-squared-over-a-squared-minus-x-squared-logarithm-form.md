# 

Source: https://proofwiki.org/wiki/Primitive_of_x_squared_over_a_squared_minus_x_squared/Logarithm_Form

Theorem
$\ds \int \frac {x^2 \rd x} {a^2 - x^2} = -x + \frac a 2 \map \ln {\frac {a + x} {a - x} } + C$
for $x^2 < a^2$.


Proof













\(\ds \int \frac {x^2 \rd x} {a^2 - x^2}\)

\(=\)







\(\ds \int \frac {x^2 - a^2 + a^2} {a^2 - x^2} \rd x\)




















\(\ds \)

\(=\)







\(\ds \int \frac {-\paren {a^2 - x^2} } {a^2 - x^2} \rd x + \int \frac {a^2} {a^2 - x^2} \rd x\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds -\int \d x + a^2 \int \frac {\d x} {a^2 - x^2}\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds -x + a^2 \int \frac {\d x} {a^2 - x^2} + C\)





Primitive of Constant














\(\ds \)

\(=\)







\(\ds -x + a^2 \paren {\frac 1 {2 a} \map \ln {\frac {a + x} {a - x} } } + C\)





Primitive of $\dfrac 1 {a^2 - x^2}$: Logarithm Form














\(\ds \)

\(=\)







\(\ds -x + \frac a 2 \map \ln {\frac {a + x} {a - x} } + C\)





simplifying



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $a^2 - x^2$, $x^2 < a^2$: $14.165$




