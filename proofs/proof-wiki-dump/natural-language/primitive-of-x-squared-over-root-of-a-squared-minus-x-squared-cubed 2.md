# 

Source: https://proofwiki.org/wiki/Primitive_of_x_squared_over_Root_of_a_squared_minus_x_squared_cubed



Theorem
$\ds \int \frac {x^2 \rd x} {\paren {\sqrt {a^2 - x^2} }^3} = \frac x {\sqrt {a^2 - x^2} } - \arcsin \frac x a + C$


Proof
With a view to expressing the problem in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds x\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds 1\)





Power Rule for Derivatives




and let:














\(\ds \frac {\d v} {\d x}\)

\(=\)







\(\ds \frac x {\paren {\sqrt {a^2 - x^2} }^3}\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds \frac 1 {\sqrt {a^2 - x^2} }\)





Primitive of $\dfrac x {\paren {\sqrt {a^2 - x^2} }^3}$




Then:














\(\ds \int \frac {x^2 \rd x} {\paren {\sqrt {a^2 - x^2} }^3}\)

\(=\)







\(\ds \int x \frac {x \rd x} {\paren {\sqrt {a^2 - x^2} }^3}\)




















\(\ds \)

\(=\)







\(\ds x \frac 1 {\sqrt {a^2 - x^2} } - \int \frac 1 {\sqrt {a^2 - x^2} } 1 + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds \frac x {\sqrt {a^2 - x^2} } - \int \frac 1 {\sqrt {a^2 - x^2} } + C\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac x {\sqrt {a^2 - x^2} } - \arcsin \frac x a + C\)





Primitive of $\dfrac 1 {\sqrt {a^2 - x^2} }$



$\blacksquare$


Also see
Primitive of $\dfrac {x^2} {\paren {\sqrt {x^2 + a^2} }^3}$
Primitive of $\dfrac {x^2} {\paren {\sqrt {x^2 - a^2} }^3}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sqrt {a^2 - x^2}$: $14.253$




