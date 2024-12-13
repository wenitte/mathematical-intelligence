# 

Source: https://proofwiki.org/wiki/Primitive_of_x_squared_over_Root_of_x_squared_minus_a_squared/Logarithm_Form

Theorem
$\ds \int \frac {x^2 \rd x} {\sqrt {x^2 - a^2} } = \frac {x \sqrt {x^2 - a^2} } 2 + \frac {a^2} 2 \ln \size {x + \sqrt {x^2 - a^2} } + C$
for $\size x > a$.


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







\(\ds \frac x {\sqrt {x^2 - a^2} }\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds \sqrt {x^2 - a^2}\)





Primitive of $\dfrac x {\sqrt {x^2 - a^2} }$




Then:














\(\ds \int \frac {x^2 \rd x} {\sqrt {x^2 - a^2} }\)

\(=\)







\(\ds \int x \frac {x \rd x} {\sqrt {x^2 - a^2} }\)




















\(\ds \)

\(=\)







\(\ds x \sqrt {x^2 - a^2} - \int \sqrt {x^2 - a^2} \rd x\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds x \sqrt {x^2 - a^2} - \paren {\frac {x \sqrt {x^2 - a^2} } 2 - \frac {a^2} 2 \ln \size {x + \sqrt {x^2 - a^2} } } + C\)





Primitive of $\sqrt {x^2 - a^2}$














\(\ds \)

\(=\)







\(\ds \frac {x \sqrt {x^2 - a^2} } 2 + \frac {a^2} 2 \ln \size {x + \sqrt {x^2 - a^2} } + C\)









$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sqrt {x^2 - a^2}$: $14.211$




