# 

Source: https://proofwiki.org/wiki/Confocal_Conics_are_Self-Orthogonal

Theorem
The confocal conics defined by:

$\quad \dfrac {x^2} {a^2} + \dfrac {y^2} {a^2 - c^2} = 1$
forms a family of orthogonal trajectories which is self-orthogonal.





Proof
Consider:

$(1): \quad \dfrac {x^2} {a^2} + \dfrac {y^2} {a^2 - c^2} = 1$
From Equation of Confocal Ellipses: Formulation 2:

$(1)$ defines an ellipse when $a^2 > c^2$.
From Equation of Confocal Hyperbolas: Formulation 2:

$(1)$ defines a hyperbola when $a^2 < c^2$.
Thus it is seen that $(1)$ is that of a conic section.

We use the technique of formation of ordinary differential equation by elimination.
Differentiating with respect to $x$ gives:

$\dfrac {2 x} {a^2} + \dfrac {2 y} {a^2 - c^2} \dfrac {\d y} {\d x} = 0$
so

$\dfrac {\d y} {\d x} = - \dfrac {a^2 - c^2} {a^2} \dfrac x y$

Now we need to eliminate $c$ from the above.
We go back to $(1)$:














\(\ds \frac {x^2} {a^2} + \frac {y^2} {a^2 - c^2}\)

\(=\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds \frac {y^2} {a^2 - c^2}\)

\(=\)







\(\ds 1 - \frac {x^2} {a^2}\)




















\(\ds \)

\(=\)







\(\ds \frac {a^2 - x^2}{a^2}\)














\(\ds \leadsto \ \ \)





\(\ds a^2 - c^2\)

\(=\)







\(\ds \frac {a^2 y^2} {a^2 - x^2}\)









Substituting for $a^2 - c^2$:














\(\ds \dfrac {\d y} {\d x}\)

\(=\)







\(\ds -\frac {a^2 y^2} {a^2 \paren {a^2 - x^2} } \frac x y\)




















\(\ds \)

\(=\)







\(\ds \frac {x y} {a^2 - x^2}\)










This is separable, so separate it:

$\ds \int \frac {\d y} y = -\int \frac {x \rd x} {a^2 - x^2}$

which leads to:














\(\ds \ln y\)

\(=\)







\(\ds \frac 1 2 \, \map \ln {a^2 - x^2} + \ln k\)














\(\ds \leadsto \ \ \)





\(\ds 2 \ln y\)

\(=\)







\(\ds \map \ln {a^2 - x^2} + 2 \ln k\)














\(\ds \leadsto \ \ \)





\(\ds \ln y^2\)

\(=\)







\(\ds \map \ln {a^2 - x^2} + \ln k^2\)














\(\ds \leadsto \ \ \)





\(\ds \ln y^2\)

\(=\)







\(\ds \map \ln {k^2 \paren {a^2 - x^2} }\)














\(\ds \leadsto \ \ \)





\(\ds y^2\)

\(=\)







\(\ds k^2 \paren {a^2 - x^2}\)














\(\ds \leadsto \ \ \)





\(\ds y^2 + k^2 x^2\)

\(=\)







\(\ds a^2\)














\(\ds \leadsto \ \ \)





\(\ds \frac {x^2} {a^2} + \frac {y^2} {k^2 a^2}\)

\(=\)







\(\ds 1\)









Now $k^2$ is still arbitrary at this point, so set:

$k^2 = \dfrac {a^2 - c^2} {a^2}$
Substituting this into the above gives us:

$\dfrac {x^2} {a^2} + \dfrac {y^2} {a^2 - c^2} = 1$
which is $(1)$.
Hence the result by definition of self-orthogonal.
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $1$: The Nature of Differential Equations: : Miscellaneous Problems for Chapter $1$: $6$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): confocal conics
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): confocal conics




