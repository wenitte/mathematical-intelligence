# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_x_squared_plus_a_squared/Arctangent_Form/Proof_2

Theorem
$\ds \int \frac {\d x} {x^2 + a^2} = \frac 1 a \arctan \frac x a + C$


Proof
We have that $x^2 + a^2$ is in the form $a x^2 + b x + c$, where $b^2 - 4 a c < 0$.
Thus from Primitive of $\dfrac 1 {a x^2 + b x + c}$ for $b^2 - 4 a c > 0$:

$\ds \int \frac {\d x} {a x^2 + b x + c} = \frac 2 {\sqrt {4 a c - b^2} } \map \arctan {\frac {2 a x + b} {\sqrt {4 a c - b^2} } } + C$
setting $a := 1, b := 0, c := a^2$:














\(\ds \int \frac 1 {x^2 + a^2} \rd x\)

\(=\)







\(\ds \dfrac 2 {\sqrt {4 a^2 - 0} } \map \arctan {\dfrac {2 x + 0} {\sqrt {4 a^2} } } + C\)





Primitive of $\dfrac 1 {a x^2 + b x + c}$














\(\ds \)

\(=\)







\(\ds \frac 1 a \arctan {\frac x a} + C\)





simplifying



$\blacksquare$





