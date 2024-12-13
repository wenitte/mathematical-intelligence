# 

Source: https://proofwiki.org/wiki/Principle_of_Mathematical_Induction/Proof

Theorem
Let $\map P n$ be a propositional function depending on $n \in \Z$.
Let $n_0 \in \Z$ be given.

Suppose that:

$(1): \quad \map P {n_0}$ is true
$(2): \quad \forall k \in \Z: k \ge n_0 : \map P k \implies \map P {k + 1}$

Then:

$\map P n$ is true for all $n \in \Z$ such that $n \ge n_0$.


Proof
Let $\Z_{\ge n_0}$ denote the set:

$\Z_{\ge n_0} = \set {n \in \Z: n \ge n_0}$
Let $S$ be the set of integers defined as:

$S = \set {n \in \Z_{\ge n_0}: \map P n}$
That is, the set of all integers for which $n \ge n_0$ and for which $\map P n$ holds.
From Subset of Set with Propositional Function we have that:

$S \subseteq \Z_{\ge n_0}$

From $(1)$ we have that $\map P {n_0}$.
Hence $n_0 \in S$.
Let $k \in S$.
Then $\map P k$ holds.
But by $(2)$, $\map P {k + 1}$ also holds.
This implies $k + 1 \in S$.
So as:

$S \subseteq \Z_{\ge n_0}$
and:

$S$ satisfies $(1)$ and $(2)$
it follows by the Principle of Finite Induction that $S = \Z_{\ge n_0}$.
Hence for all $n \ge n_0$, $\map P n$ holds.
$\blacksquare$


Sources
1977: Gary Chartrand: Introductory Graph Theory ... (previous) ... (next): Appendix $\text{A}.6$: Mathematical Induction: Theorem $\text{A}.7$




