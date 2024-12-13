# 

Source: https://proofwiki.org/wiki/Primitive_of_x_over_Root_of_a_squared_minus_x_squared_cubed



Theorem
$\ds \int \frac {x \rd x} {\paren {\sqrt {a^2 - x^2} }^3} = \frac 1 {\sqrt {a^2 - x^2} } + C$


Proof
Let:














\(\ds z\)

\(=\)







\(\ds a^2 - x^2\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d z} {\d x}\)

\(=\)







\(\ds -2 x\)





Power Rule for Derivatives








\(\ds \leadsto \ \ \)





\(\ds \int \frac {x \rd x} {\paren {\sqrt {a^2 - x^2} }^3}\)

\(=\)







\(\ds \int \frac {x \rd z} {-2 x z^{3/2} }\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \frac 1 2 \int -z^{-3/2} \rd z\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds \frac 1 2 \paren {\frac {z^{1/2} } {\frac 1 2} } + C\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \frac 1 {\sqrt z} + C\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac 1 {\sqrt {a^2 - x^2} } + C\)





substituting for $z$



$\blacksquare$


Also see
Primitive of $\dfrac x {\paren {\sqrt {x^2 + a^2} }^3}$
Primitive of $\dfrac x {\paren {\sqrt {x^2 - a^2} }^3}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sqrt {a^2 - x^2}$: $14.252$




