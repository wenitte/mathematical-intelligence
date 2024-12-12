# 

Source: https://proofwiki.org/wiki/Euler%27s_Equation/Integrated_wrt_Length_Element

Theorem
Let $y$ be a real mapping belonging to $C^2$ differentiability class.
Assume that:

$\ds J \sqbrk y = \int_a^b \map f {x, y, y'} \rd s$
where

$\rd s = \sqrt {1 + y'^2} \rd x$

Then Euler's Equation can be reduced to:

$f_y - f_x y' - f_{y'} y' y - f \dfrac {y} {\paren {1 + y'^2}^{\frac 3 2} } = 0$


Proof
Substitution of $\rd s$ into $J$ results in the following functional:

$\ds J \sqbrk y = \int_a^b \map f {x, y, y'} \sqrt {1 + y'^2} \rd x$
We can consider this as a functional with the following effective $F$:

$F = \map f {x, y, y'} \sqrt {1 + y'^2}$
Find Euler's Equation:














\(\ds F_y - \dfrac \d {\d x} F_{y'}\)

\(=\)







\(\ds f_y \sqrt {1 + y'^2} - \dfrac \d {\d x} \paren {\map f {x, y, y'} \frac {y'} {\sqrt {1 + y'^2} } }\)




















\(\ds \)

\(=\)







\(\ds f_y \sqrt {1 + y'^2} - \dfrac \d {\d x} \map f {x, y, y'} \frac {y'} {\sqrt {1 + y'^2} } - \map f {x, y, y'} \dfrac \d {\d x} \frac {y'} {\sqrt {1 + y'^2} }\)




















\(\ds \)

\(=\)







\(\ds f_y \sqrt {1 + y'^2} - f_x \frac {y'} {\sqrt {1 + y'^2} } - f_y \frac {y'^2} {\sqrt {1 + y'^2} } - f_{y'} \frac {y' y} {\sqrt {1 + y'^2} } - f \frac {y \sqrt {1 + y'^2} - \frac {y'^2 y} {\sqrt {1 + y'^2} } } {1 + y'^2}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {\sqrt {1 + y'^2} } \paren {f_y - f_x y' - f_{y'} y' y - f \frac {y} {\paren {1 + y'^2}^{\frac 3 2} } }\)









Due to assumptions on $y$, the prefactor does not vanish.
By Euler's Equation, the last expression vanishes.
$\blacksquare$


Sources
1963: I.M. Gelfand and S.V. Fomin: Calculus of Variations ... (previous) ... (next): $\S 1.4$: The Simplest Variational Problem. Euler's Equation




