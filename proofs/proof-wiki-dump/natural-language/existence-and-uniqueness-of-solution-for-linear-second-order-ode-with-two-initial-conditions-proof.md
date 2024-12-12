# 

Source: https://proofwiki.org/wiki/Existence_and_Uniqueness_of_Solution_for_Linear_Second_Order_ODE_with_two_Initial_Conditions/Proof

Theorem
Let $\map P x$, $\map Q x$ and $\map R x$ be continuous real functions on a closed real interval $\closedint a b$.
Let $x_0$ be any point in $\closedint a b$.
Let $y_0$ and ${y_0}'$ be real numbers.

Then the linear second order ordinary differential equation:

$(1): \quad \dfrac {\d^2 y} {\d x^2} + \map P x \dfrac {\d y} {\d x} + \map Q x y = \map R x$
has a unique particular solution $\map y x$ on $\closedint a b$ such that:

$\map y {x_0} = y_0$
and:

$\map {y'} {x_0} = {y_0}'$


Proof
Let $z = \dfrac {\d y} {\d x}$.

Then a solution to $(1)$ will yield a particular solution to:

$(2): \quad \begin{cases}
\dfrac {\d y} {\d x} = z & , \map y {x_0} = y_0 \\
& \\
\dfrac {\d z} {\d x} = -\map P x \dfrac {\d y} {\d x} - \map Q x y + \map R x & , \map z {x_0} = {y_0}'
\end{cases}$

From Lipschitz Condition on Linear ODE of Continuous Functions, $(2)$ satisfies the Lipschitz condition.
Hence Picard's Existence Theorem applies.
Hence the result.
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations: $\S 11.57$: Systems. The Second Order Linear Equation: Theorem $\text{A}$




