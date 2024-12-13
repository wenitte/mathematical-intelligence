# 

Source: https://proofwiki.org/wiki/Primitive_of_x_cubed_over_x_squared_plus_a_squared_squared/Proof_2

Theorem
$\ds \int \frac {x^3 \rd x} {\paren {x^2 + a^2}^2} = \frac {a^2} {2 \paren {x^2 + a^2} } + \frac 1 2 \map \ln {x^2 + a^2} + C$


Proof













\(\ds \int \frac {x^3 \rd x} {\paren {x^2 + a^2}^2}\)

\(=\)







\(\ds \int \frac {x \paren {x^2 + a^2 - a^2} } {\paren {x^2 + a^2}^2} \rd x\)




















\(\ds \)

\(=\)







\(\ds \int \frac {x \paren {x^2 + a^2} } {\paren {x^2 + a^2}^2} \rd x - a^2 \int \frac {x \rd x} {\paren {x^2 + a^2}^2}\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \int \frac {x \rd x} {x^2 + a^2} - a^2 \int \frac {x \rd x} {\paren {x^2 + a^2}^2}\)





simplification














\(\ds \)

\(=\)







\(\ds \frac 1 2 \map \ln {x^2 + a^2} - a^2 \int \frac {x \rd x} {\paren {x^2 + a^2}^2} + C\)





Primitive of $\dfrac x {x^2 + a^2}$














\(\ds \)

\(=\)







\(\ds \frac 1 2 \map \ln {x^2 + a^2} - a^2 \paren {\frac {-1} {2 \paren {x^2 - a^2} } } + C\)





Primitive of $\dfrac x {\paren {x^2 + a^2}^2}$














\(\ds \)

\(=\)







\(\ds \frac {a^2} {2 \paren {x^2 + a^2} } + \frac 1 2 \map \ln {x^2 + a^2} + C\)





simplifying



$\blacksquare$





