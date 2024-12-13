# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_x_squared_by_Root_of_x_squared_minus_a_squared/Proof_1

Theorem
$\ds \int \frac {\d x} {x^2 \sqrt {x^2 - a^2} } = \frac {\sqrt {x^2 - a^2} } {a^2 x} + C$
for $\size x > a$.


Proof
Let:














\(\ds x\)

\(=\)







\(\ds a \cosh \theta\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d x} {\d \theta}\)

\(=\)







\(\ds a \sinh \theta\)





Derivative of Hyperbolic Cosine




Then:














\(\ds x\)

\(=\)







\(\ds a \cosh \theta\)














\(\ds \leadsto \ \ \)





\(\ds \sqrt {x^2 - a^2}\)

\(=\)







\(\ds \sqrt {a^2 \paren {\cosh^2 \theta - 1} }\)




















\(\ds \)

\(=\)







\(\ds \sqrt {a^2 \sinh^2 \theta}\)





Difference of Squares of Hyperbolic Cosine and Sine














\(\ds \)

\(=\)







\(\ds a \sinh \theta\)










Hence:














\(\ds \int \frac {\d x} {x^2 \sqrt {x^2 - a^2} }\)

\(=\)







\(\ds \int \frac {a \sinh \theta \rd \theta} {a^2 \cosh^2 \theta \cdot a \sinh \theta}\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \dfrac 1 {a^2} \int \frac {\rd \theta} {\cosh^2 \theta}\)





simplifying














\(\ds \)

\(=\)







\(\ds \dfrac 1 {a^2} \tanh \theta + C\)





Primitive of $\dfrac 1 {\cosh^2 \theta}$














\(\ds \)

\(=\)







\(\ds \dfrac 1 {a^2} \dfrac {a \sinh \theta} {a \cosh \theta} + C\)





Definition 2 of Hyperbolic Tangent














\(\ds \)

\(=\)







\(\ds \dfrac 1 {a^2} \dfrac {\sqrt {x^2 - a^2} } x + C\)





substituting for $a \sinh \theta$ and $a \cosh \theta$



$\blacksquare$


Also see
Primitive of $\dfrac 1 {x^2 \sqrt {x^2 + a^2} }$
Primitive of $\dfrac 1 {x^2 \sqrt {a^2 - x^2} }$




