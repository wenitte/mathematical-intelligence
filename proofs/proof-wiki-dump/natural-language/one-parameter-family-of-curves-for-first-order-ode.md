# 

Source: https://proofwiki.org/wiki/One-Parameter_Family_of_Curves_for_First_Order_ODE

Theorem
Every one-parameter family of curves is the general solution of some first order ordinary differential equation.
Conversely, every first order ordinary differential equation has as its general solution some one-parameter family of curves.


Proof
From Picard's Existence Theorem, every point in a given rectangle is passed through by some curve which is the solution of a given integral curve of a differential equation.
The equation of this family can be written as:

$y = \map y {x, c}$
where different values of $c$ give different curves.
The integral curve which passes through $\tuple {x_0, y_0}$ corresponds to the value of $c$ such that:

$y_0 = \map y {x_0, c}$

Conversely, consider the one-parameter family of curves described by:

$\map f {x, y, c} = 0$
Differentiate $f$ with respect to $x$ to get a relation in the form:

$\map g {x, y, \dfrac {\d y} {\d x}, c} = 0$
Then eliminate $c$ between these expressions for $f$ and $g$ and get:

$\map F {x, y, \dfrac {\d y} {\d x} } = 0$
which is a first order ordinary differential equation.
$\blacksquare$


Sources
1956: E.L. Ince: Integration of Ordinary Differential Equations (7th ed.) ... (previous) ... (next): Chapter $\text {I}$: Equations of the First Order and Degree: $1$. Definitions: $(1.3)$
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $1$: The Nature of Differential Equations: $\S 3$: Families of Curves. Orthogonal Trajectories




