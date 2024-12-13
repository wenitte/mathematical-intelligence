# 

Source: https://proofwiki.org/wiki/Orthogonal_Trajectories_of_One-Parameter_Family_of_Curves

Theorem
Every one-parameter family of curves has a unique family of orthogonal trajectories.


Proof
Let $\map f {x, y, z}$ define a one-parameter family of curves $\FF$.
From One-Parameter Family of Curves for First Order ODE‎, there is a corresponding first order ODE:

$\map F {x, y, \dfrac {\d y} {\d x} }$
whose solution is $\FF$.

From Slope of Orthogonal Curves, the slope of one curve is the negative reciprocal of any curve orthogonal to it.
So take the equation:

$\map F {x, y, \dfrac {\d y} {\d x} }$
and from it create the equation:

$\map F {x, y, -\dfrac {\d x} {\d y} }$
that is, replace $\dfrac {\d y} {\d x}$ with $-\dfrac {\d x} {\d y}$.
This is also a first order ODE, which corresponds with a one-parameter family of curves $\GG$ defined by the implicit function $\map f {x, y, z}$.

There is clearly one way of doing the above.
Hence the result.
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $1$: The Nature of Differential Equations: $\S 3$: Families of Curves. Orthogonal Trajectories




