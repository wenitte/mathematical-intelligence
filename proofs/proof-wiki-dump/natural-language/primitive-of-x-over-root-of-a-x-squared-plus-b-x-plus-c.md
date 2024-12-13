# 

Source: https://proofwiki.org/wiki/Primitive_of_x_over_Root_of_a_x_squared_plus_b_x_plus_c



Theorem
Let $a \in \R_{\ne 0}$.
Then for $x \in \R$ such that $a x^2 + b x + c > 0$:

$\ds \int \frac {x \rd x} {\sqrt {a x^2 + b x + c} } = \frac {\sqrt {a x^2 + b x + c} } a - \frac b {2 a} \int \frac {\d x} {\sqrt {a x^2 + b x + c} }$


Proof
First:














\(\ds z\)

\(=\)







\(\ds a x^2 + b x + c\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d z} {\d x}\)

\(=\)







\(\ds 2 a x + b\)





Derivative of Power




Then:














\(\ds \int \frac {x \rd x} {\sqrt {a x^2 + b x + c} }\)

\(=\)







\(\ds \frac 1 {2 a} \int \frac {2 a x \rd x} {\sqrt {a x^2 + b x + c} }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {2 a} \int \frac {\paren {2 a x + b - b} \rd x} {\sqrt {a x^2 + b x + c} }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {2 a} \int \frac {\paren {2 a x + b} \rd x} {\sqrt {a x^2 + b x + c} } - \frac b {2 a} \int \frac {\d x} {\sqrt {a x^2 + b x + c} }\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac 1 {2 a} \int \frac {\d z} {\sqrt z} - \frac b {2 a} \int \frac {\d x} {\sqrt {a x^2 + b x + c} }\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \frac 1 {2 a} 2 \sqrt z - \frac b {2 a} \int \frac {\d x} {\sqrt {a x^2 + b x + c} }\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \frac {\sqrt {a x^2 + b x + c} } a - \frac b {2 a} \int \frac {\d x} {\sqrt {a x^2 + b x + c} }\)





substituting for $z$



$\blacksquare$


Examples
Primitive of $\dfrac x {\sqrt {x^2 + 4 x + 5} }$
$\ds \int \dfrac {x \rd x} {\sqrt {x^2 + 4 x + 5} } = \sqrt {x^2 + 4 x + 5} - 2 \map \ln {x + 2 + \sqrt {x^2 + 4 x + 5} } + C$


Sources
1964: Milton Abramowitz and Irene A. Stegun: Handbook of Mathematical Functions ... (previous) ... (next): $3$: Elementary Analytic Methods: $3.3$ Rules for Differentiation and Integration: Integrals of Irrational Algebraic Functions: $3.3.39$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sqrt {a x^2 + b x + c}$: $14.281$




