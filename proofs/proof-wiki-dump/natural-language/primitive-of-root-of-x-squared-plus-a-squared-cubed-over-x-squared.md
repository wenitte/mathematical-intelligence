# 

Source: https://proofwiki.org/wiki/Primitive_of_Root_of_x_squared_plus_a_squared_cubed_over_x_squared



Theorem
$\ds \int \frac {\paren {\sqrt {x^2 + a^2} }^3} {x^2} \rd x = \frac {-\paren {\sqrt {x^2 + a^2} }^3} x + \frac {3 x \sqrt {x^2 + a^2} } 2 + \frac {3 a^2} 2 \map \ln {x + \sqrt {x^2 + a^2} } + C$


Proof
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





\(\ds \int \frac {\paren {\sqrt {x^2 + a^2} }^3} {x^2} \rd x\)

\(=\)







\(\ds \int \frac {\paren {\sqrt {z + a^2} }^3} {2 z \sqrt z} \rd z\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \frac {-\paren {\sqrt {z + a^2} }^3} {\sqrt z} + \frac 3 2 \int \frac {\sqrt {z + a^2} } {\sqrt z} \rd z\)





Primitive of $\dfrac {\paren {a x + b}^m} {\paren {p x + q}^n}$: Formulation 3














\(\ds \)

\(=\)







\(\ds \frac {-\paren {\sqrt {x^2 + a^2} }^3} x + 3 \int \sqrt {x^2 + a^2} \rd x\)





substituting for $z$ and simplifying














\(\ds \)

\(=\)







\(\ds \frac {-\paren {\sqrt {x^2 + a^2} }^3} x + \frac {3 x \sqrt {x^2 + a^2} } 2 + \frac {3 a^2} 2 \map \ln {x + \sqrt {x^2 + a^2} } + C\)





Primitive of $\sqrt {x^2 + a^2}$



$\blacksquare$


Also see
Primitive of $\dfrac {\paren {\sqrt {x^2 - a^2} }^3} {x^2}$
Primitive of $\dfrac {\paren {\sqrt {a^2 - x^2} }^3} {x^2}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sqrt {x^2 + a^2}$: $14.208$




