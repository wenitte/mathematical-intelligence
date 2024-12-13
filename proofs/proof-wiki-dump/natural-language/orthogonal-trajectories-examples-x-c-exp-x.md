# 

Source: https://proofwiki.org/wiki/Orthogonal_Trajectories/Examples/x_%2B_C_exp_-x

Theorem
Consider the one-parameter family of curves:

$(1): \quad y = x + C e^{-x}$

Its family of orthogonal trajectories is given by the equation:

$x = y - 2 + C e^{-y}$





Proof
We use the technique of formation of ordinary differential equation by elimination.
Differentiating $(1)$ with respect to $x$ gives:

$\dfrac {\d y} {\d x} = 1 - C e^{-x}$

Eliminating $C$:














\(\ds C\)

\(=\)







\(\ds \frac {y - x} {e^{-x} }\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d y} {\d x}\)

\(=\)







\(\ds 1 - \frac {y - x} {e^{-x} } e^{-x}\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d y} {\d x} + y\)

\(=\)







\(\ds x + 1\)










Thus from Orthogonal Trajectories of One-Parameter Family of Curves, the family of orthogonal trajectories is given by:

$-\dfrac {\d y} {\d x} = - x = 1 - y$
The integrating factor is $e^y$, giving:

$\ds e^y x = \int y e^y - e^y \rd y$
Using Primitive of $x e^{a x}$:

$\ds \int y e^y \rd y = y e^y - e^y$
Thus we get:

$e^y x = y e^y - e^y  - e^y + C$
which gives us:

$x = y - 2 + C e^{-y}$
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 2.10$: Problem $5$




