# 

Source: https://proofwiki.org/wiki/Primitive_of_x_over_a_x_squared_plus_b_x_plus_c



Theorem
Let $a \in \R_{\ne 0}$.
Then:

$\ds \int \frac {x \rd x} {a x^2 + b x + c} = \frac 1 {2 a} \ln \size {a x^2 + b x + c} - \frac b {2 a} \int \frac {\d x} {a x^2 + b x + c}$


Proof
First note that by Derivative of Power:

$(1): \quad \map {\dfrac \d {\d x} } {a x^2 + b x + c} = 2 a x + b$

Then:














\(\ds \int \frac {x \rd x} {a x^2 + b x + c}\)

\(=\)







\(\ds \frac 1 {2 a} \int \frac {2 a x \rd x} {a x^2 + b x + c}\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds \frac 1 {2 a} \int \frac {\paren {2 a x + b - b} \rd x} {a x^2 + b x + c}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {2 a} \int \frac {\paren {2 a x + b} \rd x} {a x^2 + b x + c} - \frac b {2 a} \int \frac {\d x} {a x^2 + b x + c}\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac 1 {2 a} \ln \size {a x^2 + b x + c} - \frac b {2 a} \int \frac {\d x} {a x^2 + b x + c}\)





Primitive of Function under its Derivative and $(1)$



$\blacksquare$


Examples
Primitive of $\dfrac x {x^2 + 4 x + 5}$
$\ds \int \dfrac {x \rd x} {x^2 + 4 x + 5} = \frac 1 2 \map \ln {x^2 + 4 x + 5} - 2 \map \arctan {x + 2} + C$


Also see
Primitive of $\dfrac 1 {a x^2 + b x + c}$


Sources
1964: Milton Abramowitz and Irene A. Stegun: Handbook of Mathematical Functions ... (previous) ... (next): $3$: Elementary Analytic Methods: $3.3$ Rules for Differentiation and Integration: Integrals of Rational Algebraic Functions: $3.3.19$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $a x^2 + b x + c$: $14.266$




