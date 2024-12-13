# 

Source: https://proofwiki.org/wiki/Primitive_of_x_squared_over_x_squared_minus_a_squared/Logarithm_Form

Theorem
$\ds \int \frac {x^2 \rd x} {x^2 - a^2} = x + \frac a 2 \map \ln {\frac {x - a} {x + a} } + C$
for $x^2 > a^2$.


Proof
Let:














\(\ds \int \frac {x^2 \rd x} {x^2 - a^2}\)

\(=\)







\(\ds \int \frac {x^2 - a^2 + a^2} {x^2 - a^2} \rd x\)




















\(\ds \)

\(=\)







\(\ds \int \frac {x^2 - a^2} {x^2 - a^2} \rd x + \int \frac {a^2} {x^2 - a^2} \rd x\)




















\(\ds \)

\(=\)







\(\ds \int \d x + a^2 \int \frac {\d x} {x^2 - a^2}\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds x + a^2 \int \frac {\d x} {x^2 - a^2} + C\)





Primitive of Constant














\(\ds \)

\(=\)







\(\ds x + a^2 \paren {\frac 1 {2 a} \map \ln {\frac {x - a} {x + a} } } + C\)





Primitive of $\dfrac 1 {x^2 - a^2}$: Logarithm Form














\(\ds \)

\(=\)







\(\ds x + \frac a 2 \map \ln {\frac {x - a} {x + a} } + C\)





simplifying



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $x^2 - a^2$, $x^2 > a^2$: $14.146$




