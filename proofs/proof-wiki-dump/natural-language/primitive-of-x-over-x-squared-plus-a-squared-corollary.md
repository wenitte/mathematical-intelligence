# 

Source: https://proofwiki.org/wiki/Primitive_of_x_over_x_squared_plus_a_squared/Corollary

Theorem
$\ds \int \frac {x \rd x} {a^2 + b^2 x^2} = \frac 1 {2 b^2} \map \ln {a^2 + b^2 x^2} + C$
where $a$ is a non-zero constant.


Proof
Let $z = b x$.
Then:

$\dfrac {\d x} {\d z} = \dfrac 1 b$
Hence:














\(\ds \int \frac {x \rd x} {a^2 + b^2 x^2}\)

\(=\)







\(\ds \int \dfrac 1 b \frac {\paren {z / b} \d z} {a^2 + z^2}\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \dfrac 1 {b^2} \int \frac {z \d z} {a^2 + z^2}\)





simplifying, and Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \dfrac 1 {b^2} \cdot \frac 1 2 \map \ln {a^2 + z^2} + C\)





Primitive of $\dfrac z {a^2 + z^2}$














\(\ds \)

\(=\)







\(\ds \dfrac 1 {2 b^2} \map \ln {a^2 + b^2 x^2} + C\)





subtituting for $z$ and simplifying



$\blacksquare$


Sources
1964: Milton Abramowitz and Irene A. Stegun: Handbook of Mathematical Functions ... (previous) ... (next): $3$: Elementary Analytic Methods: $3.3$ Rules for Differentiation and Integration: Integrals of Rational Algebraic Functions: $3.3.22$




