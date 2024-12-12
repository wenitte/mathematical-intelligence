# 

Source: https://proofwiki.org/wiki/Filter_on_Product_of_Hausdorff_Spaces_Converges_iff_Projections_Converge


This page has been identified as a candidate for refactoring of medium complexity.In particular: One direction is identical to the version for general topological spaces.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.

This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Let $\family {X_i}_{i \mathop \in I}$ be an indexed family of non-empty Hausdorff spaces where $I$ is an arbitrary index set.
Let $\ds X := \prod_{i \mathop \in I} X_i$ be the corresponding product space.
Let $\pr_i: X \to X_i$ denote the projection from $X$ onto $X_i$.
Let $\FF \subset \powerset X$ be a filter on $X$.

Then $\FF$ converges if and only if for each $i \in I$ the image filter $\map {\pr_i} \FF$ converges.


Proof
Sufficient Condition
Let $\FF$ converge.
Then there is a point $x \in X$ such that $\FF$ converges to $x$.
By Filter on Product Space Converges to Point iff Projections Converge to Projections of Point:

$\forall i \in I: \map {\pr_i} \FF$ converges to $x_i$.
Thus, for each $i \in I$, $\map {\pr_i} \FF$ converges.


Necessary Condition
For each $i \in I$, let $\map {\pr_i} \FF$ converge.
Since $X_i$ is a Hausdorff space for each $i \in I$, this implies that $\map {\pr_i} \FF$ converges to exactly one point for each $i \in I$.
For each $i$, let $x_i$ be the point in $X_i$ to which $\map {\pr_i} \FF$ converges.
Then by the definition of the product space, $x$ is an element of $X$.
By Filter on Product Space Converges to Point iff Projections Converge to Projections of Point, $\FF$ converges to $x$.
$\blacksquare$


Also see
Filter on Product Space Converges iff Projections Converge, a more general result requiring the axiom of choice.




