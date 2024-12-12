# 

Source: https://proofwiki.org/wiki/Closed_Topologist%27s_Sine_Curve_is_Connected

Theorem
Let $G$ be the graph of the function $y = \map \sin {\dfrac 1 x}$ for $x > 0$.
Let $J$ be the line segment joining the points $\tuple {0, -1}$ and $\tuple {0, 1}$ in $\R^2$.

Then $G \cup J$ is connected.


Proof
Since the open interval $\openint 0 \infty$ is connected, then so is $G$ by Continuous Image of Connected Space is Connected.

It is enough, from Set between Connected Set and Closure is Connected, to show that $J \subseteq \map \cl G$.
Let $p \in J$, say, $\tuple {0, y}$ where $-1 \le y \le 1$.
We need to show that:

$\forall \epsilon > 0: \map {N_\epsilon} p \cap G \ne \O$
where $\map {N_\epsilon} p$ is the $\epsilon$-neighborhood of $p$.
Let us choose $n \in \N: \dfrac 1 {2 n \pi} < \epsilon$.
From Sine of Half-Integer Multiple of Pi:

$\map \sin {\dfrac {\paren {4 n + 1} \pi} 2} = 1$
and:

$\map \sin {\dfrac {\paren {4 n + 3} \pi} 2} = -1$
So by the Intermediate Value Theorem, $\map \sin {\dfrac 1 x}$ takes every value between $-1$ and $1$ in the closed interval $\closedint {\dfrac 2 {\paren {4 n + 3} \pi} } {\dfrac 2 {\paren {4 n + 1} \pi} }$.
In particular, $\map \sin {\dfrac 1 {x_0} } = y$ for some $x_0$ in this interval.
The distance between the points $\tuple {0, y}$ and $\tuple {x_0, \map \sin {\dfrac 1 {x_0} } } = \tuple {x_0, y}$ is $x_0 < \epsilon$.
So:

$\tuple {x_0, \map \sin {\dfrac 1 {x_0} } } \in \map {N_\epsilon} p \cap G$
as required.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $6.2$: Connectedness: Example $6.2.19$




