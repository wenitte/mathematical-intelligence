# 

Source: https://proofwiki.org/wiki/Primitive_of_x_squared_over_Root_of_a_squared_minus_x_squared



Theorem













\(\ds \int \frac {x^2 \rd x} {\sqrt {a^2 - x^2} }\)

\(=\)







\(\ds \frac {-x \sqrt {a^2 - x^2} } 2 + \frac {a^2} 2 \arcsin \frac x a + C\)




















\(\ds \)

\(=\)







\(\ds \frac {a^2} 2 \arcsin \frac x a - \frac {x \sqrt {a^2 - x^2} } 2 + C\)





either way round, whichever you prefer





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







\(\ds \frac x {\sqrt {a^2 - x^2} }\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds -\sqrt {a^2 - x^2}\)





Primitive of $\dfrac x {\sqrt {a^2 - x^2} }$




Then:














\(\ds \int \frac {x^2 \rd x} {\sqrt {a^2 - x^2} }\)

\(=\)







\(\ds \int x \frac {x \rd x} {\sqrt {a^2 - x^2} }\)




















\(\ds \)

\(=\)







\(\ds -x \sqrt {a^2 - x^2} - \int \paren {-\sqrt {a^2 - x^2} } \rd x\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds -x \sqrt {a^2 - x^2} + \int \paren {\sqrt {a^2 - x^2} } \rd x\)





simplifying














\(\ds \)

\(=\)







\(\ds -x \sqrt {a^2 - x^2} + \paren {\frac {x \sqrt {a^2 - x^2} } 2 + \frac {a^2} 2 \arcsin \frac x a} + C\)





Primitive of $\sqrt {a^2 - x^2}$














\(\ds \)

\(=\)







\(\ds \frac {-x \sqrt {a^2 - x^2} } 2 + \frac {a^2} 2 \arcsin \frac x a + C\)









$\blacksquare$


Also see
Primitive of $\dfrac {x^2} {\sqrt {x^2 + a^2} }$
Primitive of $\dfrac {x^2} {\sqrt {x^2 - a^2} }$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sqrt {a^2 - x^2}$: $14.239$
1968: George B. Thomas, Jr.: Calculus and Analytic Geometry (4th ed.) ... (previous) ... (next): Front endpapers: A Brief Table of Integrals: $33$.




