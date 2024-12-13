# 

Source: https://proofwiki.org/wiki/Integer_Reciprocal_Space_contains_Cauchy_Sequence_with_no_Limit

Theorem
Let $A \subseteq \R$ be the set of all points on $\R$ defined as:

$A := \set {\dfrac 1 n : n \in \Z_{>0} }$
Let $\struct {A, \tau_d}$ be the integer reciprocal space under the usual (Euclidean) topology.

Then $A$ has a Cauchy sequence which has no limit in $A$.


Proof
Let $\sequence {x_n}$ be the sequence $1, \dfrac 1 2, \dfrac 1 3, \ldots$
Let $\epsilon \in \R_{>0}$ be a (strictly) positive real number.
By the Axiom of Archimedes:

$\exists \N \in n: n > \dfrac 1 \epsilon$
and so:

$\exists \N \in n: \dfrac 1 n < \epsilon$
As:

$0 < \dfrac 1 {n + 1} < \dfrac 1 n$
it follows that:

$\size {\dfrac 1 n - \dfrac 1 {n + 1} } < \epsilon$
and so $\sequence {x_n}$ is a Cauchy sequence.

From Sequence of Powers of Reciprocals is Null Sequence, $\sequence {x_n}$ is a basic null sequence.
That is:

$\ds \lim_{n \mathop \to \infty} \frac 1 n = 0$
As $0 \notin A$, the result follows.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $32$. Special Subsets of the Real Line: $1 \ \text{(c)}$




