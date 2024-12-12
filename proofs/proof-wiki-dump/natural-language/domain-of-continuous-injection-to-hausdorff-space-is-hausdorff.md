# 

Source: https://proofwiki.org/wiki/Domain_of_Continuous_Injection_to_Hausdorff_Space_is_Hausdorff

Theorem
Let $T_\alpha = \struct {S_\alpha, \tau_\alpha}$ and $T_\beta = \struct {S_\beta, \tau_\beta}$ be topological spaces.
Let $f: S_\alpha \to S_\beta$ be a continuous mapping which is an injection.

If $T_\beta$ is a $T_2$ (Hausdorff) space, then $T_\alpha$ is also a $T_2$ (Hausdorff) space.


Proof
Let $x, y \in S_\alpha$ be distinct points.
We want to find disjoint open sets $U, V \in \tau_\alpha$ containing $x$ and $y$ respectively.

Since $f$ is injective the points $\map f x, \map f y \in S_\beta$ are distinct.
By assumption $T_\beta$ is Hausdorff.
Therefore we can choose disjoint open sets $U', V'$ of $T_\beta$ such that $\map f x \in U'$ and $\map f y \in V'$.
Since $f$ is continuous, the sets $U = f^{-1} \sqbrk {U'}$ and $V = f^{-1} \sqbrk {V'}$ are open.
Moreover we have $x \in U$ and $y \in V$.

Finally we show that the sets $U$ and $V$ are disjoint.
Aiming for a contradiction, suppose $z \in U \cap V$.
Then by the definition of $U$, $V$ we have $\map f z \in U'$ and $\map f z \in V'$.
This is a contradiction, since $U' \cap V' = \O$.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $4$: The Hausdorff condition: $4.2$: Separation axioms: Proposition $4.2.4 \ \text{(c)}$
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $4$: The Hausdorff condition: Exercise $4.3: 2$




