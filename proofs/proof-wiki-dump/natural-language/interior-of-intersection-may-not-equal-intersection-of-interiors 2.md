# 

Source: https://proofwiki.org/wiki/Interior_of_Intersection_may_not_equal_Intersection_of_Interiors



Theorem
Let $T$ be a topological space.

Let $\mathbb H$ be a set of subsets of $T$.
That is, let $\mathbb H \subseteq \powerset T$ where $\powerset T$ is the power set of $T$.

Then it is not necessarily the case that:

$\ds \paren {\bigcap_{H \mathop \in \mathbb H} H}^\circ = \bigcap_{H \mathop \in \mathbb H} H^\circ$
where $H^\circ$ denotes the interior of $H$.


Proof
From Intersection of Interiors contains Interior of Intersection it is seen that it is always the case that:

$\ds \paren {\bigcap_{H \mathop \in \mathbb H} H}^\circ \subseteq \bigcap_{H \mathop \in \mathbb H} H^\circ$
From Interior of Finite Intersection equals Intersection of Interiors it is seen that if $\mathbb H$ is finite, then:

$\ds \paren {\bigcap_{H \mathop \in \mathbb H} H}^\circ = \bigcap_{H \mathop \in \mathbb H} H^\circ$

It remains to be shown that in the case where $\mathbb H$ is infinite, then it is possible that:

$\ds \paren {\bigcap_{H \mathop \in \mathbb H} H}^\circ \ne \bigcap_{H \mathop \in \mathbb H} H^\circ$

Proof by Counterexample:
Let $A_n$ denote the open real interval:

$A_n := \openint {1 - \dfrac 1 n} {1 + \dfrac 1 n}$
for all $n \in \Z_{>0}$.
From Open Sets in Real Number Line, each of $A_n$ is an open set in $\R$.
From Interior of Open Set:

$\forall n \in \Z_{>0}: A_n^\circ = A_n$
Thus:

$\ds \bigcap A_n = \bigcap A_n^\circ = \set 1$
However:

$\ds \paren {\bigcap A_n}^\circ = \set 1^\circ = \O$
Hence the result.
$\blacksquare$


Also see
Interior of Finite Intersection equals Intersection of Interiors


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $1$: General Introduction: Closures and Interiors
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $32$. Special Subsets of the Real Line: $4$




