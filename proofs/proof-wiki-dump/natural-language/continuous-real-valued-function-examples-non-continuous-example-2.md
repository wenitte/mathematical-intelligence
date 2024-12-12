# 

Source: https://proofwiki.org/wiki/Continuous_Real-Valued_Function/Examples/Non-Continuous_Example_2

Example of Continuous Real-Valued Function
Let $f: \R^2 \to \R$ be the real $2$-variable function defined as:

$\forall \tuple {x, y} \in \R^2: \map f {x, y} = \begin {cases} 0 & : y = 0 \\ \dfrac {x^2} y \end {cases}$
Then the restriction of $f$:

$f_{\restriction \tuple {x, y} \mathop \in \R^2: y \mathop = m x}$
is continuous.
But $f$ is not continuous at $\tuple {0, 0}$.


Proof
Let $N_\epsilon$ be a neighborhood of $\tuple {0, 0}$.
The for sufficiently small $k$, the point $\tuple {k, k^2} \in N_\epsilon$.
But $\map f {k, k^2} = 1$.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $2$: Continuity generalized: metric spaces: Exercise $2.6: 24$




