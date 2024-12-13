# 

Source: https://proofwiki.org/wiki/Product_of_Hausdorff_Factor_Spaces_is_Hausdorff



Theorem
Let $T_\alpha = \struct {S_\alpha, \tau_\alpha}$ and $T_\beta = \struct {S_\beta, \tau_\beta}$ be topological spaces.
Let $T = T_\alpha \times T_\beta$ be the product space of $T_\alpha$ and $T_\beta$
Let $T_\alpha$ and $T_\beta$ both be $T_2$ (Hausdorff) spaces.

Then $T$ is also a $T_2$ (Hausdorff) space.


General Result
Let $\SS = \family {\struct {S_\alpha, \tau_\alpha} }$ be an indexed family of topological spaces for $\alpha$ in some indexing set $I$.
Let $\ds T = \struct {S, \tau} = \prod_{\alpha \mathop \in I} \struct {S_\alpha, \tau_\alpha}$ be the product space of $\SS$.
Let each of $\struct {S_\alpha, \tau_\alpha}$ for $\alpha \in I$ be $T_2$ (Hausdorff) spaces.

Then $T$ is a $T_2$ (Hausdorff) space.


Proof
Let $T_\alpha$ and $T_\beta$ be Hausdorff spaces.
Let $\tuple {a, b}$ and $\tuple {c, d}$ be two distinct points of the product space $T$.

Let $a = c$.
Then as $\tuple {a, b} \ne \tuple {c, d}$ it follows that $b \ne d$.
As $T_\beta$ is Hausdorff, there exists two disjoint open sets $U, V \subseteq T_\beta$ such that $b \in U, d \in V$.
Then $T_\alpha \times U$ and $T_\alpha \times V$ are two open disjoint sets in the product space $T$ containing $\tuple {a, b}$ and $\tuple {c, d}$.

Let $a \ne c$.
As $T_\alpha$ is Hausdorff, there exists two disjoint open sets $U, V \subseteq T_\alpha$ such that $a \in U, c \in V$.
Then $U \times T_\beta$ and $V \times T_\beta$ are two open disjoint sets in the product space $T$ containing $\tuple {a, b}$ and $\tuple {c, d}$.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $4$: The Hausdorff condition: $4.2$: Separation axioms: Proposition $4.2.4 \ \text{(b)}$
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $4$: The Hausdorff condition: Exercise $4.3: 2$




