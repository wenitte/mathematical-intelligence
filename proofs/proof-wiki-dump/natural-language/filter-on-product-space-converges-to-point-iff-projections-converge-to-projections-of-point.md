# 

Source: https://proofwiki.org/wiki/Filter_on_Product_Space_Converges_to_Point_iff_Projections_Converge_to_Projections_of_Point


This article needs to be linked to other articles.In particular: The links to Convergence and Continuous need review. Other places where it would be good to put links in.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Let $\family{X_i}_{i \mathop \in I}$ be an indexed family of non-empty topological spaces where $I$ is an arbitrary index set.
Let $\ds X := \prod_{i \mathop \in I} X_i$ be the corresponding product space.
Let $\FF$ be a filter on $X$.
Let $x \in X$.
Let $\pr_i: X \to X_i$ denote the projection from $X$ onto $X_i$.

Then $\FF$ converges to $x$ if and only if:

for all $i \in I$ the image filter $\map {\pr_i} \FF$ converges to $x_i := \map {\pr_i} x$.


Proof
Necessary Condition
Let $\FF$ converge to $x$.
Let $i \in I$.
From Projection from Product Topology is Continuous, $\pr_i : X \to X_i$ is continuous.
Thus $\map {\pr_i} \FF$ converges to $\map {\pr_i} x$ as claimed.
$\Box$


Sufficient Condition
For all $i \in I$, let $\map {\pr_i} \FF$ converge to $\map {\pr_i} x$.
Let $V \subseteq X$ a neighborhood of $x$.
We have to show that $V \in \FF$.
Then there is a set $U$ from the natural basis of $X$ such that $x \in U \subseteq V$.
By the definition of the natural basis, there is a finite set $J \subseteq I$ such that:

$\ds U = \bigcap_{j \mathop \in J} \map {\pr_j^{-1}} {U_j}$
where $U_j \subseteq X_j$ is an open set for all $j \in J$.
Thus $U_j$ is an open neighborhood of $x_j$ for all $j \in J$.
Since $\map {\pr_j} \FF$ converges to $x_j$, this implies $U_j \in \map {\pr_j} \FF$ for all $j \in J$.
By the definition of $\map {\pr_j} \FF$, this implies $\map {\pr_j^{-1}} {U_j} \in \FF$ for all $j \in J$.
Since $J$ is finite, it follows that:

$\ds U = \bigcap_{j \mathop \in J} \map {\pr_j^{-1}} {U_j} \in \FF$
Recall that $U \subseteq V$.
As $\FF$ is a filter, this implies that also $V \in \FF$.
Thus $\FF$ converges to $x$ as claimed.
$\blacksquare$


Also see
Filter on Product Space Converges iff Projections Converge




