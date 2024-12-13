# 

Source: https://proofwiki.org/wiki/Primitive_of_x_squared_over_Root_of_x_squared_plus_a_squared_cubed



Theorem
$\ds \int \frac {x^2 \rd x} {\paren {\sqrt {x^2 + a^2} }^3} = \frac {-x} {\sqrt {x^2 + a^2} } + \map \ln {x + \sqrt {x^2 + a^2} } + C$


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







\(\ds \frac x {\paren {\sqrt {x^2 + a^2} }^3}\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds \frac {-1} {\sqrt {x^2 + a^2} }\)





Primitive of $\dfrac x {\paren {\sqrt {x^2 + a^2} }^3}$




Then:














\(\ds \int \frac {x^2 \rd x} {\paren {\sqrt {x^2 + a^2} }^3}\)

\(=\)







\(\ds \int x \frac {x \rd x} {\paren {\sqrt {x^2 + a^2} }^3}\)




















\(\ds \)

\(=\)







\(\ds x \frac {-1} {\sqrt {x^2 + a^2} } - \int \frac {-1} {\sqrt {x^2 + a^2} } 1 + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds \frac {-x} {\sqrt {x^2 + a^2} } + \int \frac 1 {\sqrt {x^2 + a^2} } + C\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac {-x} {\sqrt {x^2 + a^2} } + \map \ln {x + \sqrt {x^2 + a^2} } + C\)





Primitive of $\dfrac 1 {\sqrt {x^2 + a^2} }$



$\blacksquare$


Also see
Primitive of $\dfrac {x^2} {\paren {\sqrt {x^2 - a^2} }^3}$
Primitive of $\dfrac {x^2} {\paren {\sqrt {a^2 - x^2} }^3}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sqrt {x^2 + a^2}$: $14.198$




