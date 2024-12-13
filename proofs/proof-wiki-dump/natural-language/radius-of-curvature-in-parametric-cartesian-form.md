# 

Source: https://proofwiki.org/wiki/Radius_of_Curvature_in_Parametric_Cartesian_Form

Definition
Let $C$ be a curve defined by a real function which is twice differentiable.
Let $C$ be embedded in a cartesian plane and defined by the parametric equations:

$\begin{cases} x = \map x t \\ y = \map y t \end{cases}$

The radius of curvature $\rho$ of $C$ at a point $P = \tuple {x, y}$ is given by:

$\rho = \size {\dfrac {\tuple {x'^2 + y'^2}^{3/2} } {x' y - y' x} }$
where:

$x' = \dfrac {\d x} {\d t}$ is the derivative of $x$ with respect to $t$ at $P$
$y' = \dfrac {\d y} {\d t}$ is the derivative of $y$ with respect to $t$ at $P$
$x$ and $y$ are the second derivatives of $x$ and $y$ with respect to $t$ at $P$.
$\size {\, \cdot \,}$ denotes the absolute value function.


Proof
$\kappa = \dfrac {x' y - y' x} {\tuple {x'^2 + y'^2}^{3/2} }$
where:

$x' = \dfrac {\d x} {\d t}$ is the derivative of $x$ with respect to $t$ at $P$
$y' = \dfrac {\d y} {\d t}$ is the derivative of $y$ with respect to $t$ at $P$
$x$ and $y$ are the second derivatives of $x$ and $y$ with respect to $t$ at $P$.

By definition, the radius of curvature $\rho$ is given by:

$\rho = \dfrac 1 {\size \kappa}$
where $\kappa$ is the curvature, given in parametric Cartesian form as:

$\kappa = \dfrac {x' y - y' x} {\tuple {x'^2 + y'^2}^{3/2} }$
As $\tuple {x'^2 + y'^2}^{3/2}$ is positive, it follows that:

$\size {\dfrac {x' y - y' x} {\tuple {x'^2 + y'^2}^{3/2} } } = \dfrac {\size {x' y - y' x} } {\tuple {x'^2 + y'^2}^{3/2} }$
Hence the result.
$\blacksquare$


Sources
1969: J.C. Anderson, D.M. Hum, B.G. Neal and J.H. Whitelaw: Data and Formulae for Engineering Students (2nd ed.) ... (previous) ... (next): $4.$ Mathematics: $4.4$ Differential calculus: $\text {(i)}$ Radius of curvature




