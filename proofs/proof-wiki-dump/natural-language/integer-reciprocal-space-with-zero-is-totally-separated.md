# 

Source: https://proofwiki.org/wiki/Integer_Reciprocal_Space_with_Zero_is_Totally_Separated

Theorem
Let $A \subseteq \R$ be the set of all points on $\R$ defined as:

$A := \set 0 \cup \set {\dfrac 1 n : n \in \Z_{>0} }$
Let $\struct {A, \tau_d}$ be the integer reciprocal space with zero under the usual (Euclidean) topology.

Then $A$ is totally separated.


Proof
Let $a, b \in A$ such that $a < b$.
From Between two Rational Numbers exists Irrational Number:

$\exists \alpha \in \R \setminus \Q: a < \alpha < b$
Because $\forall x \in A: x \in \Q$ it follows that $\alpha \notin A$.

Consider the half-open intervals $S = \hointr 0 \alpha$ and $T = \hointl \alpha 1$
Let:

$U := S \cap A, V := T \cap A$
Let $\beta \in A$.
Then either:

$(1): \quad \beta < \alpha$
in which case:

$\beta \in U$
or:

$(2): \quad \beta > \alpha$
in which case:

$\beta \in V$
Thus $U \cup V = A$.

Let $a \in U$.
Then $a < \alpha$ and so $a \notin V$.
Similarly, let $b \in V$.
Then $b > \alpha$ and so $b \notin U$.

Then note that $x \in U$ and $y \in V$.
Thus $U \ne \O$ and $V \ne \O$.

Thus, by definition, $U$ and $V$ constitute a separation of $A$ such that $x \in U$ and $y \in V$.
Hence the result by definition of totally separated.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $32$. Special Subsets of the Real Line: $2 \ \text{(c)}$




