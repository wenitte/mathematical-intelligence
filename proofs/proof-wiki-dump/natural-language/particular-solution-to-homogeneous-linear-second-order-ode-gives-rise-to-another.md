# 

Source: https://proofwiki.org/wiki/Particular_Solution_to_Homogeneous_Linear_Second_Order_ODE_gives_rise_to_Another

Theorem
Let $\map {y_1} x$ be a particular solution to the homogeneous linear second order ODE:

$(1): \quad \dfrac {\d^2 y} {\d x^2} + \map P x \dfrac {\d y} {\d x} + \map Q x y = 0$
such that $y_1$ is not the trivial solution.

Then there exists a standard procedure to determine another particular solution $\map {y_2} x$ of $(1)$ such that $y_1$ and $y_2$ are linearly independent.


Proof
Let $\map {y_1} x$ be a non-trivial particular solution to $(1)$.
Thus, for all $C \in \R$, $C y_1$ is also a non-trivial particular solution to $(1)$.
Let $\map v x$ be a function of $x$ such that:

$(2): \quad \map {y_2} x = \map v x \, \map {y_1} x$
is a particular solution to $(1)$ such that $y_1$ and $y_2$ are linearly independent.
Thus:

$(3): \quad {y_2}' ' + \map P x {y_2}' + \map Q x y = 0$
Differentiating $(2)$ twice with respect to $x$:

${y_2}' = \map {v'} x \, \map {y_1} x + \map v x \, \map { {y_1}'} x$
and:

${y_2}' ' = \map {v' '} x \, \map {y_1} x + 2 \, \map {v'} x \, \map { {y_1}'} x + \map v x \, \map { {y_1}' '} x$
Substituting these into $(3)$ and rearranging:

$v \paren { {y_1}' ' + P {y_1}' + Q y_1} + v' ' y_1 + v' \paren {2 {y_1}' ' + P y_1} = 0$
Since $y_1$ is a particular solution of $(1)$, this reduces to:

$v' ' y_1 + v' \paren {2 {y_1}' ' + P y_1} = 0$
which can be expressed as:

$\dfrac {v' '} {v'} = -2 \dfrac { {y_1}'} {y_1} - P$
Integration gives:

$\ds \ln v' = - 2 \ln y_1 - \int P \rd x$
This leads to:

$v' = \dfrac 1 { {y_1}^2} e^{-\int P \rd x}$
and so:

$\ds v = \int \dfrac 1 { {y_1}^2} e^{-\int P \rd x} \rd x$
From Induced Solution to Homogeneous Linear Second Order ODE is Linearly Independent with Inducing Solution, $y_1$ and $v y_1$ are linearly independent.
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 3.16$: The Use of a Known Solution to find Another




