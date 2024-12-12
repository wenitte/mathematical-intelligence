# 

Source: https://proofwiki.org/wiki/Countable_Union_of_Countable_Sets_is_Countable/Proof_2

Theorem
Let the Axiom of Countable Choice be accepted.
Then it can be proved that a countable union of countable sets is countable.


Proof
Let $\sequence {S_n}_{n \mathop \in \N}$ be a sequence of countable sets.
Define:

$\ds S = \bigcup_{n \mathop \in \N} S_n$.

For all $n \in \N$, let $\FF_n$ be the set of all surjections from $\N$ to $S_n$.
Since $S_n$ is countable, it follows by Surjection from Natural Numbers iff Countable that $\FF_n$ is non-empty.

Using the Axiom of Countable Choice, there exists a sequence $\sequence {f_n}_{n \mathop \in \N}$ such that $f_n \in \FF_n$ for all $n \in \N$.
Let $\phi: \N \times \N \to S$, where $\times$ denotes the cartesian product, be the surjection defined by:

$\map \phi {m, n} = \map {f_m} n$

Since $\N \times \N$ is countable, it follows by Surjection from Natural Numbers iff Countable that there exists a surjection $\alpha: \N \to \N \times \N$.
Since the composition of surjections is a surjection, the mapping $\phi \circ \alpha: \N \to S$ is a surjection.
By Surjection from Natural Numbers iff Countable, it follows that $S$ is countable.
$\blacksquare$


Sources
2000: James R. Munkres: Topology (2nd ed.) ... (previous) ... (next): $1$: Set Theory and Logic: $\S 7$: Countable and Uncountable Sets: Theorem $7.5$




