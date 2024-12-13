# 

Source: https://proofwiki.org/wiki/Primitive_of_x_cubed_over_Root_of_x_squared_plus_a_squared



Theorem
$\ds \int \frac {x^3 \rd x} {\sqrt {x^2 + a^2} } = \frac {\paren {\sqrt {x^2 + a^2} }^3} 3 - a^2 \sqrt {x^2 + a^2} + C$


Proof
With a view to expressing the problem in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds x^2\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds 2 x\)





Power Rule for Derivatives




and let:














\(\ds \frac {\d v} {\d x}\)

\(=\)







\(\ds \frac x {\sqrt {x^2 + a^2} }\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds \sqrt {x^2 + a^2}\)





Primitive of $\dfrac x {\sqrt {x^2 + a^2} }$




Then:














\(\ds \int \frac {x^3 \rd x} {\sqrt {x^2 + a^2} }\)

\(=\)







\(\ds \int x^2 \frac {x \rd x} {\sqrt {x^2 + a^2} }\)




















\(\ds \)

\(=\)







\(\ds x^2 \sqrt {x^2 + a^2} - \int 2 x \sqrt {x^2 + a^2} \rd x\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds x^2 \sqrt {x^2 + a^2} - 2 \paren {\frac {\paren {\sqrt {x^2 + a^2} }^3} 3 } + C\)





Primitive of $x \sqrt {x^2 + a^2}$














\(\ds \)

\(=\)







\(\ds \paren {x^2 + a^2 - a^2} \sqrt {x^2 + a^2} - 2 \paren {\frac {\paren {\sqrt {x^2 + a^2} }^3} 3 } + C\)




















\(\ds \)

\(=\)







\(\ds \paren {\sqrt {x^2 + a^2} }^3 - a^2 \sqrt {x^2 + a^2} - 2 \paren {\frac {\paren {\sqrt {x^2 + a^2} }^3} 3 } + C\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {\sqrt {x^2 + a^2} }^3} 3 - a^2 \sqrt {x^2 + a^2} + C\)









$\blacksquare$


Also see
Primitive of $\dfrac {x^3} {\sqrt {x^2 - a^2} }$
Primitive of $\dfrac {x^3} {\sqrt {a^2 - x^2} }$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sqrt {x^2 + a^2}$: $14.185$




