# 

Source: https://proofwiki.org/wiki/Primitive_of_x_squared_over_a_squared_minus_x_squared/Inverse_Hyperbolic_Tangent_Form

Theorem
$\ds \int \frac {x^2 \rd x} {a^2 - x^2} = -x + a \tanh^{-1} \frac x a + C$
for $x^2 < a^2$.


Proof
Let:














\(\ds \int \frac {x^2 \rd x} {a^2 - x^2}\)

\(=\)







\(\ds \int \frac {x^2 - a^2 + a^2} {a^2 - x^2} \rd x\)




















\(\ds \)

\(=\)







\(\ds \int \frac {-\paren {a^2 - x^2} } {a^2 - x^2} \rd x + \int \frac {a^2} {a^2 - x^2} \rd x\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds -\int \rd x + a^2 \int \frac {\rd x} {a^2 - x^2}\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds -x + a^2 \int \frac {\rd x} {a^2 - x^2} + C\)





Primitive of Constant














\(\ds \)

\(=\)







\(\ds -x + a^2 \paren {\frac 1 a \tanh^{-1} \frac x a} + C\)





Primitive of $\dfrac 1 {a^2 - x^2}$: $\tanh^{-1}$ form














\(\ds \)

\(=\)







\(\ds -x + a \tanh^{-1} \frac x a + C\)





simplifying



$\blacksquare$





