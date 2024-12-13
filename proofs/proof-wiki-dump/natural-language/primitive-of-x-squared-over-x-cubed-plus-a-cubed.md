# 

Source: https://proofwiki.org/wiki/Primitive_of_x_squared_over_x_cubed_plus_a_cubed



Theorem
$\ds \int \frac {x^2 \rd x} {x^3 + a^3} = \frac 1 3 \ln \size {x^3 + a^3} + C$


Proof 1













\(\ds \map {\frac \d {\d x} } {x^3 + a^3}\)

\(=\)







\(\ds 3 x^2\)





Derivative of Power








\(\ds \leadsto \ \ \)





\(\ds \int \frac {x^2 \rd x} {x^3 + a^3}\)

\(=\)







\(\ds \frac 1 3 \ln \size {x^3 + a^3} + C\)





Primitive of Function under its Derivative



$\blacksquare$


Proof 2
From Primitive of Power of x less one over Power of x plus Power of a:

$\ds \int \frac {x^{n - 1} \rd x} {x^n + a^n} = \frac 1 n \ln \size {x^n + a^n} + C$

So:














\(\ds \int \frac {x^2 \rd x} {x^3 + a^3}\)

\(=\)







\(\ds \frac 1 3 \ln \size {x^3 + a^3} + C\)





Primitive of $\dfrac {x^{n - 1} } {\paren {x^n + a^n} }$ with $n = 3$



directly.
$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $x^3 + a^3$: $14.301$




