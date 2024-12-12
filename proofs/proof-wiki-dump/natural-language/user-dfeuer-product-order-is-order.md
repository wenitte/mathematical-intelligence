# 

Source: https://proofwiki.org/wiki/User:Dfeuer/Product_Order_is_Order


This page has been identified as a candidate for refactoring.In particular: Put this live as Simple Order Product of Family of Ordered Sets is Ordered SetUntil this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.
Theorem
Let $\struct {S_i, \preceq_i}$ be an ordered set for each $i \in I$.
Let $\preceq$ be the User:Dfeuer/Definition:Product Order on:

$S = \ds \prod_{i \mathop \in I} S_i$
Then $\struct {S, \preceq}$ is an ordered set.


Proof
$\preceq$ is reflexive:
Let $x \in S$.
Since $\preceq_i$ is reflexive for each $i \in I$, $x_i \preceq_i x_i$ for each $i \in i$.
Thus by the definition of the product order, $x \preceq x$.
$\preceq$ is transitive:
Suppose that $x \preceq y$ and $y \preceq z$.
Then by the definition of the product order, for each $i \in I$,
$x_i \preceq_i y_i$ and $y_i \preceq_i z_i$.
Since each $\preceq_i$ is transitive,
for each $i \in I$, $x_i \preceq_i z_i$.
Thus, by the definition of the product order, $x \preceq z$.
$\preceq$ is antisymmetric:
Suppose that $x \preceq y$ and $y \preceq x$.
By the definition of the product order, for each $i \in I$,
$x_i \preceq_i y_i$ and $y_i \preceq_i x_i$.
Since each $\preceq_i$ is anti-symmetric, for each $i \in I$,
$x_i = y_i$.
By the definition of cartesian product, $x = y$.

$\blacksquare$





