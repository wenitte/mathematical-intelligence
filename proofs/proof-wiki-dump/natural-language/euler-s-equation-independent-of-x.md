# 

Source: https://proofwiki.org/wiki/Euler%27s_Equation/Independent_of_x

Theorem
Let $y$ be a mapping.
Let $J$ be a functional such that:

$\ds J \sqbrk y = \int_a^b \map F {y, y'} \rd x$

Then the corresponding Euler's Equation can be reduced to:

$F - y' F_{y'} = C$
where $C$ is an arbitrary constant.


Proof
Assume that:

$\ds J \sqbrk y = \int_a^b \map F {y, y'} \rd x$
Then:














\(\ds \delta J\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds F_y - \dfrac \d {\d x} F_{y'}\)

\(=\)







\(\ds F_y - \paren {\dfrac {\d y} {\d x} \dfrac {\partial F_{y'} } {\partial y} + \dfrac {\d y'} {\d x} \dfrac {\partial F_{y'} } {\partial y'} }\)




















\(\ds \)

\(=\)







\(\ds F_y - y' F_{y'y} - y F_{y'y'}\)









Multiply this differential equation by $y'$.
This gives:














\(\ds F_y y' - {y'}^2 F_{y'y} - y'y F_{y'y'}\)

\(=\)







\(\ds \paren {F_{y} y' + F_{y'} y} - F_{y'} y - y' \paren {y' F_{y'y} + y F_{y'y'} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\d F} {\d x} - y' \paren {\dfrac {\d y} {\d x} \dfrac {\partial F_{y'} } {\partial y} + \dfrac {\d y'} {\d x} \dfrac {\partial F_{y'} } {\partial y'} } - F_{y'} y\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\d F} {\d x} - y' \dfrac {\d F} {\d x} - \dfrac {\d y'} {\d x} F_{y'}\)




















\(\ds \)

\(=\)







\(\ds \dfrac \d {\d x} \paren {F - y' F_{y'} }\)




















\(\ds \)

\(=\)







\(\ds 0\)









Integration yields the desired result.
$\blacksquare$


Sources
1963: I.M. Gelfand and S.V. Fomin: Calculus of Variations ... (previous) ... (next): $\S 1.4$: The Simplest Variational Problem. Euler's Equation




