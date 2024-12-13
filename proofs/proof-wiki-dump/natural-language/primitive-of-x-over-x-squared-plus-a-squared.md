# 

Source: https://proofwiki.org/wiki/Primitive_of_x_over_x_squared_plus_a_squared



Theorem
$\ds \int \frac {x \rd x} {x^2 + a^2} = \frac 1 2 \map \ln {x^2 + a^2} + C$
where $a$ is a non-zero constant.


Corollary
$\ds \int \frac {x \rd x} {a^2 + b^2 x^2} = \frac 1 {2 b^2} \map \ln {a^2 + b^2 x^2} + C$


Proof 1













\(\ds u\)

\(=\)







\(\ds x^2 + a^2\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds 2 x\)





Power Rule for Derivatives and Derivative of Constant








\(\ds \leadsto \ \ \)





\(\ds \int \frac {x \rd x} {x^2 + a^2}\)

\(=\)







\(\ds \frac 1 2 \ln \size {x^2 + a^2} + C\)





Primitive of Function under its Derivative














\(\ds \)

\(=\)







\(\ds \frac 1 2 \, \map \ln {x^2 + a^2} + C\)





Absolute Value of Even Power‎



$\blacksquare$


Proof 2
From Primitive of Power of x less one over Power of x plus Power of a:

$\ds \int \frac {x^{n - 1} \rd x} {x^n + a^n} = \frac 1 n \ln \size {x^n + a^n} + C$

So:














\(\ds \int \frac {x \rd x} {x^2 + a^2}\)

\(=\)







\(\ds \frac 1 2 \ln \size {x^2 + a^2} + C\)





Primitive of $\dfrac {x^{n - 1} } {\paren {x^n + a^n} }$ with $n = 2$














\(\ds \)

\(=\)







\(\ds \frac 1 2 \, \map \ln {x^2 + a^2} + C\)





Absolute Value of Even Power



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $x^2 + a^2$: $14.126$




