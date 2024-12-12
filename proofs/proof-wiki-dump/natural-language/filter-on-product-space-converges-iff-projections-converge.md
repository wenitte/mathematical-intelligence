# 

Source: https://proofwiki.org/wiki/Filter_on_Product_Space_Converges_iff_Projections_Converge


This page has been identified as a candidate for refactoring of medium complexity.In particular: One direction needs AoC; the other does not, and the latter is identical to the version for Hausdorff spaces. We should probably split them.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.

This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Let $\family {X_i}_{i \mathop \in I}$ be an indexed family of non-empty topological spaces where $I$ is an arbitrary index set.
Let $\ds X := \prod_{i \mathop \in I} X_i$ be the corresponding product space.
Let $\pr_i: X \to X_i$ denote the projection from $X$ onto $X_i$.
Let $\FF \subset \powerset X$ be a filter on $X$.

Then $\FF$ converges if and only if for all $i \in I$ the image filter $\map {\pr_i} \FF$ converges.


Proof
Sufficient Condition
Let $\FF$ converge.
Then there is a point $x \in X$ such that $\FF$ converges to $x$.
By Filter on Product Space Converges to Point iff Projections Converge to Projections of Point:

$\forall i \in I: \map {\pr_i} \FF$ converges to $x_i$
Thus

$\forall i \in I: \map {\pr_i} \FF$ converges.


Necessary Condition
Suppose that for each $i \in I$, $\map {\pr_i} \FF$ converges.
For each $i \in I$, let $S_i$ be the set of points to which $\map {\pr_i} \FF$ converges.
By our supposition, $S_i$ is non-empty for each $i \in I$.
By the axiom of choice, there is a point $x \in X$ such that:

$\forall i \in I: \map {\pr_i} x \in S_i$
By Filter on Product Space Converges to Point iff Projections Converge to Projections of Point, $\FF$ converges to $x$.
$\blacksquare$

Axiom of Choice
This theorem depends on the Axiom of Choice.
Because of some of its bewilderingly paradoxical implications, the Axiom of Choice is considered in some mathematical circles to be controversial.
Most mathematicians are convinced of its truth and insist that it should nowadays be generally accepted.
However, others consider its implications so counter-intuitive and nonsensical that they adopt the philosophical position that it cannot be true.


Also see
Filter on Product of Hausdorff Spaces Converges iff Projections Converge, a more restricted result that does not require the axiom of choice.




