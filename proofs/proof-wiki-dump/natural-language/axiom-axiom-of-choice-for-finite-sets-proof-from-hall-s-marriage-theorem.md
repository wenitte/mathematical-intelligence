# 

Source: https://proofwiki.org/wiki/Axiom:Axiom_of_Choice_for_Finite_Sets/Proof_from_Hall%27s_Marriage_Theorem

Theorem
Suppose that Hall's Marriage Theorem holds for all sets of finite sets.
Let $\SS$ be a non-empty set of finite, non-empty sets.

Then there exists a choice function for $\SS$.


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





