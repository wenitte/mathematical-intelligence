# 

Source: https://proofwiki.org/wiki/Primitive_of_Logarithm_of_x_squared_plus_a_squared



Theorem
$\ds \int \map \ln {x^2 + a^2} \rd x = x \map \ln {x^2 + a^2} - 2 x + 2 a \arctan \frac x a + C$


Proof
With a view to expressing the primitive in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds \map \ln {x^2 + a^2}\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds \frac {2 x} {x^2 + a^2}\)





Derivative of $\ln x$, Derivative of Power, Chain Rule for Derivatives




and let:














\(\ds \frac {\d v} {\d x}\)

\(=\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds x\)





Primitive of Power




Then:














\(\ds \int \map \ln {x^2 + a^2} \rd x\)

\(=\)







\(\ds x \map \ln {x^2 + a^2} - \int \frac {2 x^2 \rd x} {x^2 + a^2} + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds x \map \ln {x^2 + a^2} - 2 \int \frac {x^2 \rd x} {x^2 + a^2} + C\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds x \map \ln {x^2 + a^2} - 2 \paren {x - a \arctan {\frac x a} } + C\)





Primitive of $\dfrac {x^2} {x^2 + a^2}$














\(\ds \)

\(=\)







\(\ds x \map \ln {x^2 + a^2} - 2 x + 2 a \arctan \frac x a + C\)





simplifying



$\blacksquare$


Also see
Primitive of $\map \ln {x^2 - a^2}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\ln x$: $14.537$




