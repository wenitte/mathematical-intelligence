# 

Source: https://proofwiki.org/wiki/Continuous_Real-Valued_Function/Examples/Non-Continuous_Example_1

Example of Continuous Real-Valued Function
Let $f: \R^2 \to \R$ be the real $2$-variable function defined as:

$\forall \tuple {x_1, x_2} \in \R^2: \map f {x_1, x_2} = \begin {cases} 0 & : \tuple {x_1, x_2} = \tuple {0, 0} \\ \dfrac {x_1 x_2} {x_1^2 + x_2^2} & : \text {otherwise} \end {cases}$
Then the restrictions of $f$:

$f_{\restriction \R \times \set 0}$
$f_{\restriction \set 0 \times \R}$
are both constant functions with value $0$ for all arguments.
Hence both are continuous at $\tuple {0, 0}$.
But $f$ is not continuous at $\tuple {0, 0}$.


Proof
Let $\epsilon = \dfrac 1 2$.
Let $\delta > 0$.
Then:

the point $x = \tuple {\dfrac \delta 2, \dfrac \delta 2}$ satisfies $\map {d_2} {x, 0} < \delta$
but:

$\size {\map f x - \map f 0} = \dfrac 1 2$
Thus $f$ is continuous in each variable separately, but not in both variables jointly.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $2$: Continuity generalized: metric spaces: $2.2$: Examples




