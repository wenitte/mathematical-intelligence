# 

Source: https://proofwiki.org/wiki/Condition_for_Composition_Series



Theorem
Let $G$ be a finite group.

Then:

a normal series $\HH$ for $G$ is a composition series for $G$
if and only if:

every factor group of $\HH$ is a simple group.


Proof
Let $G$ be a finite group whose identity is $e$.
Let:

$(1): \quad \set e = G_0 \lhd G_1 \lhd \cdots \lhd G_{n - 1} \lhd G_n = G$
be a normal series for $G$.


Necessary Condition
Suppose there exists $k$ such that $G_{k + 1} / G_k$ is not a simple group.
Then there exists a normal subgroup $G'$ such that:

$\set e \lhd G' \lhd G_{k + 1} / G_k$
It follows that:

$G_k \lhd G \lhd G_{k + 1}$
where:

$G$ is a normal subgroup of $G_{k + 1}$
and:

$G' = G / G_{k + 1}$

This article, or a section of it, needs explaining.In particular: why?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Thus $(1)$ has a proper refinement and so is not a composition series.
By the Rule of Transposition it follows that if normal series is a composition series, every factor group of that normal series is a simple group.
$\Box$


Sufficient Condition
Suppose $(1)$ is not a composition series for $G$.
Then a proper refinement of $(1)$ can be constructed by inserting a group $G$ into the series somewhere, for example:

$G_k \lhd G \lhd G_{k + 1}$
It follows that $G / G_k$ is a normal subgroup of $G_{k + 1} / G$.


This article, or a section of it, needs explaining.In particular: There's a specific result demonstrating that fact.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Thus, by definition, $G_{k + 1} / G_k$ is not a simple group.
Thus it has been shown that if a normal series is not a composition series, then it contains at least one factor group which is not a simple group
By the Rule of Transposition it follows that if every factor group of a normal series is a simple group, then that normal series is a composition series.
$\Box$

Hence the result.
$\blacksquare$


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Normal and Composition Series: $\S 74$
1978: John S. Rose: A Course on Group Theory ... (previous) ... (next): $1$: Introduction to Finite Group Theory: $1.10$




