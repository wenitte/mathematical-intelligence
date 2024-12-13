# 

Source: https://proofwiki.org/wiki/Image_of_Open_Set_under_Continuous_Mapping_in_Metric_Space_may_not_be_Open

Theorem
Let $M_1 = \struct {A_1, d_1}$ and $M_2 = \struct {A_2, d_2}$ be metric spaces.
Let $f: A_1 \to A_2$ be a $\tuple {d_1, d_2}$-continuous mapping from $A_1$ to $A_2$.
Let $U \subseteq A_1$ be an open set of $M_1$.

Then it is not necessarily the case that $f \sqbrk U$ is an open set of $M_2$.


Proof
Consider the constant mapping $f_0: \R^2 \to \R$ defined as:

$\forall \tuple {x, y} \in \R^2: \map f {x, y} = 0$
Then by Constant Mapping is Continuous $f$ is a continuous mapping.
But consider any open set $U \subseteq A_1$ of $M_1$ such that $U \ne \O$.
Then $f \sqbrk U = \set 0 = \closedint 0 0$ which is a closed interval of $\R$.
The result follows from Closed Real Interval is not Open Set.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $2$: Continuity generalized: metric spaces: $2.3$: Open sets in metric spaces: Warning $2.3.14$




