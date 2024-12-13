# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_Root_of_x_squared_plus_a_squared_cubed/Proof_2

Theorem
$\ds \int \frac {\d x} {\paren {\sqrt {x^2 + a^2} }^3} = \frac x {a^2 \sqrt {x^2 + a^2} } + C$


Proof













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





