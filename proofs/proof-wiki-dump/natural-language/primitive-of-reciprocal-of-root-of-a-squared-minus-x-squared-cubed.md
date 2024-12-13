# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_Root_of_a_squared_minus_x_squared_cubed



Theorem
$\ds \int \frac {\d x} {\paren {\sqrt {a^2 - x^2} }^3} = \frac x {a^2 \sqrt {a^2 - x^2} } + C$


Proof 1
Let:














\(\ds z\)

\(=\)







\(\ds x^2\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d z} {\d x}\)

\(=\)







\(\ds 2 x\)





Power Rule for Derivatives








\(\ds \leadsto \ \ \)





\(\ds \int \frac {\d x} {\paren {\sqrt {a^2 - x^2} }^3}\)

\(=\)







\(\ds \int \frac {\d z} {2 \sqrt z \paren {\sqrt {a^2 - z} }^3}\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \frac 1 2 \int \frac {\d z} {\paren {a^2 - z} \sqrt z \sqrt {a^2 - z} }\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds \frac 1 2 \paren {\frac {2 \sqrt z} {a^2 \sqrt {a^2 - z} } } + C\)





Primitive of $\dfrac 1 {\paren {p x + q} \sqrt {\paren {a x + b} \paren {p x + q} } }$














\(\ds \)

\(=\)







\(\ds \frac 1 2 \paren {\frac {2 x} {a^2 \sqrt {a^2 - x^2} } } + C\)





substituting for $z$














\(\ds \)

\(=\)







\(\ds \frac x {a^2 \sqrt {a^2 - x^2} } + C\)





simplifying



$\blacksquare$


Proof 2
Let:














\(\ds x\)

\(=\)







\(\ds a \sin u\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac {\d x} {\d u}\)

\(=\)







\(\ds a \cos u\)





Derivative of Sine Function








\(\ds \leadsto \ \ \)





\(\ds a^2 - x^2\)

\(=\)







\(\ds a^2 \cos^2 u\)





Sum of Squares of Sine and Cosine



Hence:














\(\ds \int \frac {\d x} {\paren {\sqrt {a^2 - x^2} }^3}\)

\(=\)







\(\ds \int \frac {a \cos u \rd u} {a^3 \cos^3 u}\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \dfrac 1 {a^2} \int \sec^2 u \rd u\)





Secant is Reciprocal of Cosine














\(\ds \)

\(=\)







\(\ds \dfrac 1 {a^2} \tan u + c\)





Primitive of Secant Function














\(\ds \)

\(=\)







\(\ds \dfrac 1 {a^2} \dfrac {a \sin u} {a \cos u} + C\)





Definition of Real Tangent Function














\(\ds \)

\(=\)







\(\ds \dfrac x {a^2 \sqrt {a^2 - x^2} } + C\)





substituting for $a \sin u$ and $a \cos u$



$\blacksquare$


Also see
Primitive of $\dfrac 1 {\paren {\sqrt {x^2 + a^2} }^3}$
Primitive of $\dfrac 1 {\paren {\sqrt {x^2 - a^2} }^3}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sqrt {a^2 - x^2}$: $14.251$




