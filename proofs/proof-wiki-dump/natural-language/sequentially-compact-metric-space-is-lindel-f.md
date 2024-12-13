# 

Source: https://proofwiki.org/wiki/Sequentially_Compact_Metric_Space_is_Lindel%C3%B6f


This page has been identified as a candidate for refactoring of medium complexity.In particular: See discussion on Talk:Sequentially Compact Metric Space is Lindelöf.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.
Theorem
Let $M = \struct {X, d}$ be a sequentially compact metric space.

Then $M$ is also a Lindelöf space.

That is, from every open cover of $M$, it is possible to extract a countable subcover.


Proof
Take any open cover $C$ of $M$.
We need to find a countable subset of $C$ which still covers $X$.

We have that a Sequentially Compact Metric Space is Second-Countable.
Thus, by definition, the topology of $M$ has a countable basis.

Let $\BB$ be a countable basis for the topology induced by $d$ of $M$.
Let $x \in X$.
As $C$ covers $X$:

$\exists U_x \in C: x \in U_x$
As $\BB$ is a basis:

$\exists B_x \in \BB: x \in B_x \subseteq U_x$
Thus:

$(1): \quad \forall x \in X: \exists B_x \in \BB: x \in B_x$

Consider the set $\Sigma := \set {B_x: x \in X}$.
$\Sigma$ is a subset of $\BB$.
Hence $\Sigma$ is countable.
As $\Sigma$ contains every $x \in X$ from $(1)$, $\Sigma$ covers $X$.

By construction of $\Sigma$, every open set in $\Sigma$ is contained in some $U \in C$.
For each open set $B \in \Sigma$, choose one $U_B \in C$ such that $B \subseteq U_B$.


This article, or a section of it, needs explaining.In particular: Does this need AoC or ACC?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Let $\UU$ be the set defined as:

$\UU = \set {U_B: B \in \Sigma}$
As $\UU$ does not have more sets than $\Sigma$, $\UU$ is countable.
We have that:

$\forall B \in \Sigma: B \subseteq U_B$
Thus it follows that $\UU$ covers $X$.
As:

$\forall U_B \in \UU: U_B \in C$
$U$ is a countable subcover of $C$.

Thus a countable subcover has been obtained from $C$.
As $C$ is arbitrary, it follows that $M$ is a Lindelöf space.
$\blacksquare$


Also see
Sequentially Compact Metric Space is Compact




