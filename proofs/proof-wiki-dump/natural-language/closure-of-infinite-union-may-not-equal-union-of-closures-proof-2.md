# 

Source: https://proofwiki.org/wiki/Closure_of_Infinite_Union_may_not_equal_Union_of_Closures/Proof_2

Theorem
Let $T$ be a topological space.
Let $I$ be an infinite indexing set.
Let $\family {H_i}_{i \mathop \in I}$ be an indexed family of subsets of a set $S$.

Let $\ds H = \bigcup_{i \mathop \in I} H_i$ be the union of $\family {H_i}_{i \mathop \in I}$.

Then it is not always the case that:

$\ds \bigcup_{i \mathop \in I} \map \cl {H_i} = \map \cl {\bigcup_{i \mathop \in I} H_i}$
where $\map \cl {H_i}$ denotes the closure of $H_i$.


Proof
Proof by Counterexample:
Let $\struct {\R, \tau_d}$ denote the real number line with the usual (Euclidean) topology $\tau_d$.
Let $\struct {\Q, \tau_d}$ be the rational number space, also under the usual (Euclidean) topology $\tau_d$.
For a rational number $\alpha \in \Q$, let $B_\alpha$ denote the singleton containing $\alpha$.

From Union of Closures of Singleton Rationals is Rational Space:

$\ds \bigcup_{\alpha \mathop \in \Q} \map \cl {B_\alpha} = \Q$
From Closure of Union of Singleton Rationals is Real Number Line:

$\ds \map \cl {\bigcup_{\alpha \mathop \in \Q} B_\alpha} = \R$

So it is seen that:

$\ds \bigcup_{\alpha \mathop \in \Q} \map \cl {B_\alpha} \subset \ds \map \cl {\bigcup_{\alpha \mathop \in \Q} B_\alpha}$
but it is not the case that:

$\ds \bigcup_{\alpha \mathop \in \Q} \map \cl {B_\alpha} = \ds \map \cl {\bigcup_{\alpha \mathop \in \Q} B_\alpha}$
and the result is apparent.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $1$: General Introduction: Closures and Interiors




