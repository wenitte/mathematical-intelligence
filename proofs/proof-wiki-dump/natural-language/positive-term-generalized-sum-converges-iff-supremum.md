# 

Source: https://proofwiki.org/wiki/Positive-Term_Generalized_Sum_Converges_iff_Supremum


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.

This article needs to be linked to other articles.In particular: particularly to results usedYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.

This page has been identified as a candidate for refactoring of medium complexity.In particular: One proof that the net of finite sums is increasing. One proof that an increasing net converges to a point iff that point is the supremum of its image.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.


Theorem
Let $\struct {G, \circ, \le}$ be an abelian totally ordered group, considered under the order topology.
Let $\set {x_i: i \in I}$ be an indexed set of positive elements of $G$.


This article, or a section of it, needs explaining.In particular: What actually does "positive" mean in this context?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.

Then:

the generalized sum $\ds \sum \set {x_i: i \in I}$ converges to a point $x \in G$
if and only if

$x$ is the supremum of:
$P := \ds \set {\sum_{i \mathop \in F} x_i: \text{$F \subseteq I$ and $F$ is finite} }$


Proof

This article, or a section of it, needs explaining.In particular: There are plenty of details to fill in.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Sufficient Condition
Let $\ds \sum \set {x_i: i \in I}$ converge to $x$.
We first show that $x$ is an upper bound of $P$.
Aiming for a contradiction, suppose that for some finite subset $F$ of $I$:

$\ds \sum_{i \mathop \in F} x_i > x$
Then the net of finite sums is eventually less than $\ds \sum_{i \mathop \in F} x_i$.

Let $F \subseteq F' \subseteq I$.
Let $F'$ be finite.
Since finite sums are monotone:

$\ds \sum_{i \mathop \in F'} x_i \ge \sum_{i \mathop \in F} x_i$
which is a contradiction.
Thus we conclude that $x$ is an upper bound of $P$.
Let $m \in G$ such that $m < x$.
Then the net of finite sums is eventually greater than $m$.
Thus $m$ is certainly not an upper bound of $P$.
So we have shown that $x$ is the supremum of $P$.
$\Box$


Necessary Condition
Let $x$ be the supremum of $P$.
Then:

$\forall b > x: \forall y \in P: b > y$
so the net of finite sums is always (hence eventually) less than $b$.
For all $a < x$, $a$ is not an upper bound of $P$.
Therefore there exists a finite subset $F$ of $I$ such that:

$\ds \sum_{i \mathop \in F} x_i > a$
Since finite sums are monotone increasing, the net of finite sums is eventually greater than $a$.
Thus $\ds \sum \set {x_i: i \in I}$ converges to $x$.
$\blacksquare$





