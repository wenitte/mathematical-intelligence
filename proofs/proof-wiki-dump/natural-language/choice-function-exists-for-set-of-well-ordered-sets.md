# 

Source: https://proofwiki.org/wiki/Choice_Function_Exists_for_Set_of_Well-Ordered_Sets

Theorem
Let $\mathbb S$ be a set of sets such that:

$\forall S \in \mathbb S: S \ne \O$
that is, none of the sets in $\mathbb S$ may be empty.
Let every element of $\mathbb S$ be well-ordered.

Then there exists a choice function $f: \mathbb S \to \bigcup \mathbb S$ satisfying:

$\forall S \in \mathbb S: \exists x \in S: \map f S = x$


Proof
Every member of $\mathbb S$ is a well-ordered set. 
Thus, for $S \in \mathbb S$, there is a minimal element $s$ for $S$ (with respect to the ordering of $S$). 
By Well-Ordering Minimal Elements are Unique, $s$ is unique.
Therefore, we can define $f$ by:

$\forall S \in \mathbb S: \map f S = s$
$\blacksquare$


Warning
Note that this only applies if we are given a well-ordering for each $S \in \mathbb S$.
More formally, this means: if there is a mapping that maps $S \in \mathbb S$ to a well-ordering of $S$.


This has to be rewritten.In particular: simple sentences, and perhaps extract whatever is trying to be said into appropriate pagesYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by doing so.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Rewrite}} from the code.
If we just know that each $S \in \mathbb S$ is well-orderable, we generally do need AoC to get a choice function (to apply the proof above, we have to pick a well-order for each $S\in \mathbb S$, which requires AoC. This is related to the fact that generally we need AoC to show that, for example, the countable union of countable sets is countable.)





