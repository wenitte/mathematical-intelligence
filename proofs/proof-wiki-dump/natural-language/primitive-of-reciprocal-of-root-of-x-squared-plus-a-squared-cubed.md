# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_Root_of_x_squared_plus_a_squared_cubed



Theorem
$\ds \int \frac {\d x} {\paren {\sqrt {x^2 + a^2} }^3} = \frac x {a^2 \sqrt {x^2 + a^2} } + C$


Proof 1













\(\ds x\)

\(=\)







\(\ds a \tan \theta\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d x} {\d \theta}\)

\(=\)







\(\ds a \sec^2 \theta\)





Derivative of Tangent Function








\(\ds \leadsto \ \ \)





\(\ds \int \frac {\d x} {\paren {\sqrt {x^2 + a^2} }^3}\)

\(=\)







\(\ds \int \frac {a \sec^2 \theta \rd \theta} {\sqrt {a^2 \tan^2 \theta + a^2}^3}\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \int \frac {a \sec^2 \theta \rd \theta} {a^3 \sec^3 \theta}\)





Difference of Squares of Secant and Tangent














\(\ds \)

\(=\)







\(\ds \dfrac 1 {a^2} \int \cos \theta \rd \theta\)





Definition of Real Secant Function and simplification














\(\ds \)

\(=\)







\(\ds \dfrac 1 {a^2} \sin \theta + C\)





Primitive of $\cos x$














\(\ds \)

\(=\)







\(\ds \dfrac 1 {a^2} \dfrac {a \sin \theta} {\cos \theta} \dfrac {\cos \theta} a + C\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {a^2} \dfrac {a \tan \theta} {a \sec \theta} + C\)





Tangent is Sine divided by Cosine, Definition of Real Secant Function














\(\ds \)

\(=\)







\(\ds \dfrac 1 {a^2} \dfrac {a \tan \theta} {\sqrt {a^2 \sec^2 \theta} } + C\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {a^2} \dfrac {a \tan \theta} {\sqrt {a^2 \tan^2 \theta + a^2} } + C\)





Difference of Squares of Secant and Tangent














\(\ds \)

\(=\)







\(\ds \dfrac 1 {a^2} \dfrac x {\sqrt {x^2 + a^2} } + C\)





substituting $x = a \tan \theta$



$\blacksquare$


Proof 2













\(\ds z\)

\(=\)







\(\ds x^2\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d z} {\d x}\)

\(=\)







\(\ds 2 x\)





Power Rule for Derivatives








\(\ds \leadsto \ \ \)





\(\ds \int \frac {\d x} {\paren {\sqrt {x^2 + a^2} }^3}\)

\(=\)







\(\ds \int \frac {\d z} {2 \sqrt z \paren {\sqrt {z + a^2} }^3}\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \frac 1 2 \int \frac {\d z} {\paren {z + a^2} \sqrt z \sqrt {z + a^2} }\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds \frac 1 2 \paren {\frac {2 \sqrt z} {a^2 \sqrt {z + a^2} } } + C\)





Primitive of $\dfrac 1 {\paren {p x + q} \sqrt {\paren {a x + b} \paren {p x + q} } }$














\(\ds \)

\(=\)







\(\ds \frac 1 2 \paren {\frac {2 x} {a^2 \sqrt {x^2 + a^2} } } + C\)





substituting for $z$














\(\ds \)

\(=\)







\(\ds \frac x {a^2 \sqrt {x^2 + a^2} } + C\)





simplifying



$\blacksquare$


Also see
Primitive of $\dfrac 1 {\paren {\sqrt {x^2 - a^2} }^3}$
Primitive of $\dfrac 1 {\paren {\sqrt {a^2 - x^2} }^3}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sqrt {x^2 + a^2}$: $14.196$




