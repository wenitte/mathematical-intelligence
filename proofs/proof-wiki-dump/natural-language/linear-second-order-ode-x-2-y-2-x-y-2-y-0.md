# 

Source: https://proofwiki.org/wiki/Linear_Second_Order_ODE/x%5E2_y%27%27_-_2_x_y%27_%2B_2_y_%3D_0

Theorem
The second order ODE:

$(1): \quad x^2 y - 2 x y' + 2 y = 0$
has the general solution:

$y = C_1 x + C_2 x^2$
on any closed real interval which does not contain $0$.


Proof 1
Consider the functions:

$\map {y_1} x = x$
$\map {y_2} x = x^2$

We have that:














\(\ds \frac \d {\d x} \, x\)

\(=\)







\(\ds 1\)





Power Rule for Derivatives














\(\ds \frac \d {\d x} \, x^2\)

\(=\)







\(\ds 2 x\)





Power Rule for Derivatives








\(\ds \leadsto \ \ \)





\(\ds \frac {\d^2} {\d x^2} \, x\)

\(=\)







\(\ds 0\)




















\(\ds \frac {\d^2} {\d x^2} \, x^2\)

\(=\)







\(\ds 2\)










Putting $x$ and $x^2$ into $(1)$ in turn:














\(\ds x^2 \cdot 0 - 2 x \cdot 1 + 2 x\)

\(=\)







\(\ds 2 x - 2 x\)




















\(\ds \)

\(=\)







\(\ds 0\)
























\(\ds x^2 \cdot 2 - 2 x \cdot 2 x + 2 x^2\)

\(=\)







\(\ds 2 x^2 - 4 x^2 + 2 x^2\)




















\(\ds \)

\(=\)







\(\ds 0\)










Hence it can be seen that:














\(\ds \map {y_1} x\)

\(=\)







\(\ds x\)




















\(\ds \map {y_2} x\)

\(=\)







\(\ds x^2\)









are particular solutions to $(1)$.

Calculating the Wronskian of $y_1$ and $y_2$:














\(\ds \map W {y_1, y_2}\)

\(=\)







\(\ds \begin{vmatrix} x & x^2 \\ 1 & 2 x \end{vmatrix}\)




















\(\ds \)

\(=\)







\(\ds 2 x^2 - x^2\)




















\(\ds \)

\(=\)







\(\ds x^2\)









So the Wronskian of $y_1$ and $y_2$ is zero only when $x = 0$.

Let $\Bbb I = \closedint a b$ be a closed real interval such that $0 \notin \Bbb I$.
Thus from Zero Wronskian of Solutions of Homogeneous Linear Second Order ODE iff Linearly Dependent:

$y_1$ and $y_2$ are linearly independent on $\Bbb I$.

We can manipulate $(1)$ is a homogeneous linear second order ODE in the form:

$y + \map P x y' + \map Q x y = 0$
where $\map P x = \dfrac {-2 x} {x^2}$ and $\map Q x = \dfrac 2 {x^2}$.
So by Real Rational Function is Continuous: $P$ and $Q$ are continuous on $\closedint a b$
Thus from Two Linearly Independent Solutions of Homogeneous Linear Second Order ODE generate General Solution:

$(1)$ has the general solution:
$y = C_1 x + C_2 x^2$
on any closed real interval $\Bbb I$ which does not include $0$.
$\blacksquare$


Proof 2
It can be seen that $(1)$ is an instance of the Cauchy-Euler Equation:

$x^2 y + p x y' + q y = 0$
where:

$p = -2$
$q = 2$

By Conversion of Cauchy-Euler Equation to Constant Coefficient Linear ODE, this can be expressed as:

$\dfrac {\d^2 y} {\d t^2} + \paren {p - 1} \dfrac {\d y} {\d t^2} + q y = 0$
by making the substitution:

$x = e^t$

Hence it can be expressed as:

$(2): \quad \dfrac {\d^2 y} {\d t^2} - \dfrac {\d y} {\d t^2} + 2 y = 0$

From Linear Second Order ODE: $y - 3 y' + 2 y = 0$, this has the general solution:














\(\ds y\)

\(=\)







\(\ds C_1 e^t + C_2 e^{2 t}\)




















\(\ds \)

\(=\)







\(\ds C_1 x + C_2 x^2\)





substituting $x = e^t$



$\blacksquare$
Note that when $x = 0$, $e^t = x$ has no solution for $t$, and so is excluded from this solution.





