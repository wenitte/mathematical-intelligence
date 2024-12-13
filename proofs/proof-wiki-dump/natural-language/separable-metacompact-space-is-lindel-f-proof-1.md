# 

Source: https://proofwiki.org/wiki/Separable_Metacompact_Space_is_Lindel%C3%B6f/Proof_1

Theorem
Let $T = \struct {S, \tau}$ be a separable topological space which is also metacompact.
Then $T$ is a Lindelöf space.


Proof
$T$ is separable if and only if there exists a countable subset of $S$ which is everywhere dense.
$T$ is metacompact if and only if every open cover of $S$ has an open refinement which is point finite.
$T$ is a Lindelöf space if every open cover of $S$ has a countable subcover.

Having established the definitions, we proceed.
Let $T = \left({S, \tau}\right)$ be separable and metacompact.
Aiming for a contradiction, suppose there exists an open cover $\UU$ of $S$ which has no countable subcover.

As $T$ is metacompact, $\UU$ has an open refinement $\VV$ which is point finite.
By nature of $\UU$, which has no countable subcover, $\VV$ is uncountable.


This article, or a section of it, needs explaining.In particular: How would $\VV$ being countable lead to a countable subcover of $\UU$? ACC is helpful for this.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
By hypothesis, $T$ is separable.
Let $\SS$ be a countable subset of $S$ which is everywhere dense.
Then each $V \in \VV$ contains some $s \in \SS$.


This article, or a section of it, needs explaining.In particular: why? Also, this is not true if $\VV$ contains the empty set.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
So some $s \in \SS$ is contained in an uncountable number of elements of $\VV$.
Thus, by definition, $\VV$ is not point finite.

Thus no uncountable open refinement $\VV$ of $\UU$ exists which is point finite.
It follows that $\VV$ must be countable.
Thus $\UU$ has a countable subcover.
That is, by definition, $T$ is a Lindelöf space.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $3$: Compactness: Paracompactness




