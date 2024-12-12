# 

Source: https://proofwiki.org/wiki/Axiom:Axiom_of_Choice_for_Finite_Sets



Axiom
Let $\SS$ be a non-empty set of finite, non-empty sets.

Then there exists a choice function for $\SS$.


Remark

This page or section has statements made on it that ought to be extracted and proved in a Theorem page.In particular: Extract the below and put it into a theorem, no matter how trivial it may be. The "strictly weaker" statement also counts as something that ought to be stated formally.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by creating any appropriate Theorem pages that may be needed.To discuss this page in more detail, feel free to use the talk page.
The axiom of choice for finite sets is trivially implied by the axiom of choice, but it is strictly weaker.


Proof from the Ordering Principle
By the Axiom of Union, $\SS$ has a union.
Let $U = \bigcup \SS$.
By the Ordering Principle, there is a total ordering $\preceq$ on $U$.
For each $S \in \SS$, $S$ is a chain in $U$.
By Finite Non-Empty Subset of Totally Ordered Set has Smallest and Greatest Elements, each $S \in S$ has a minimum.
Let $f: \SS \to U$ be defined by:

$\map f S = \min S$
Then $f$ is a choice function for $\SS$.
$\blacksquare$


Proof from Hall's Marriage Theorem
Without loss of generality, suppose $\SS$ is pairwise disjoint.


This article, or a section of it, needs explaining.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
We will show that $\SS$ satisfies the marriage condition.
That is, for each finite subset $\FF$ of $\SS$:

$\card \FF \le \card {\bigcup \FF}$
as follows:

Let $\FF$ be a finite subset of $\SS$.
By the Principle of Finite Choice, $\FF$ has a choice function $f_\FF: \FF \to \bigcup \FF$ such that for each $S \in \FF$, $\map {f_\FF} S \in S$.
Since $\SS$ is pairwise disjoint, $f_\FF$ is an injection.
Thus $\card \FF \le \card {\bigcup \FF}$.
By Hall's Marriage Theorem for sets of finite sets, $\SS$ has a choice function.
$\blacksquare$





