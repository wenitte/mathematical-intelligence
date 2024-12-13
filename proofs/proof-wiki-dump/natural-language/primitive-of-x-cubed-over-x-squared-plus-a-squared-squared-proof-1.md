# 

Source: https://proofwiki.org/wiki/Primitive_of_x_cubed_over_x_squared_plus_a_squared_squared/Proof_1

Theorem
$\ds \int \frac {x^3 \rd x} {\paren {x^2 + a^2}^2} = \frac {a^2} {2 \paren {x^2 + a^2} } + \frac 1 2 \map \ln {x^2 + a^2} + C$


Proof
Let:














\(\ds z\)

\(=\)







\(\ds x^2 + a^2\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d z} {\d x}\)

\(=\)







\(\ds 2 x\)





Derivative of Power








\(\ds \leadsto \ \ \)





\(\ds \int \frac {x^3 \rd x} {\paren {x^2 + a^2}^2}\)

\(=\)







\(\ds \int \frac {\paren {z - a^2} } {z^2} \frac {\d z} 2\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \frac 1 2 \int \frac {\d z} z - \frac {a^2} 2 \int \frac {\d z} {z^2}\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac 1 2 \int \frac {\d z} z + \frac {a^2} {2 z} + C\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \frac 1 2 \ln z + \frac {a^2} {2 z} + C\)





Primitive of Reciprocal














\(\ds \)

\(=\)







\(\ds \frac {a^2} {2 \paren {x^2 + a^2} } + \frac 1 2 \map \ln {x^2 + a^2} + C\)





substituting for $z$



$\blacksquare$





