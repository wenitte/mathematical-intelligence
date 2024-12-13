# 

Source: https://proofwiki.org/wiki/Quasilinear_Differential_Equation/Examples/x_%2B_y_y%27_%3D_0



Theorem
The first order quasilinear ordinary differential equation over the real numbers $\R$:

$x + y y' = 0$
has the general solution:

$x^2 + y^2 = C$
where:

$C > 0$
$y \ne 0$
$x < \size {\sqrt C}$
with the singular point:

$x = y = 0$


Proof 1
Let us rearrange the equation in question:














\(\ds x + y y'\)

\(=\)







\(\ds 0\)














\(\ds \leadstoandfrom \ \ \)





\(\ds y \dfrac {\d y} {\d x}\)

\(=\)







\(\ds -x\)














\(\ds \leadstoandfrom \ \ \)





\(\ds y \rd y\)

\(=\)







\(\ds \paren {-1} x \rd x\)









This is in the form:

$y \rd y = k x \rd x$
where $k = 1$.
From First Order ODE: $y \rd y = k x \rd x$:

$y^2 = \paren {-1} x^2 + C$
from which the result follows.
$\blacksquare$


Proof 2
Observe that from Derivative of Power and Chain Rule for Derivatives:

$\dfrac {\map \d {x^2 + y^2} } {\d y} = 2 x + 2 y \dfrac {\d y} {\d x}$
Hence:

$\dfrac {\map \d {x^2 + y^2} } {\d y} = 0$
So from Derivative of Constant:

$x^2 + y^2 = C$
where $C$ is abitrary.
$\blacksquare$


Explicit Solution
The general solution of $x + y y' = 0$ is implicitly over the real numbers.
We have:














\(\ds x^2 + y^2\)

\(=\)







\(\ds y\)





Quasilinear Differential Equation: $x + y y' = 0$








\(\ds \leadsto \ \ \)





\(\ds y^2\)

\(=\)







\(\ds C - x^2\)





where $C - x^2 \ge 0$








\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds \pm \sqrt {C - x^2}\)





where $\size {\sqrt C} \ge x$



But when $y = 0$, the derivative $y'$ of the ordinary differential equation $x + y y' = 0$ needs to be infinite for non-zero $x$.
Hence:

$-\sqrt C < x < \sqrt C$
$\blacksquare$


Solution Curves
Its solution curves can be presented as:





Sources
1978: Garrett Birkhoff and Gian-Carlo Rota: Ordinary Differential Equations (3rd ed.) ... (previous) ... (next): Chapter $1$ First-Order Differential Equations: $1$ Introduction: Example $1$




