# 

Source: https://proofwiki.org/wiki/Basis_for_Partition_Topology

Theorem
Let $S$ be a set.
Let $\PP$ be a partition of $S$.
Let $\tau$ be the partition topology on $S$ defined as:

$a \in \tau \iff a$ is the union of sets of $\PP$

Then $\PP$ forms a basis of $\tau$.


Proof
Checking the criteria for $\PP$ to be a synthetic basis for $\tau$:

We have that $\ds S = \bigcup \PP$ from the definition of a partition.
Therefore, $\ds S \subseteq \bigcup \PP$ and $\PP$ is a cover for $S$.

Next, let $B_1, B_2 \in \PP$.
Then as $\PP$ is a partition of $S$, we have that $B_1 \cap B_2 = \O$.
But from Union of Empty Set we have that $\O$ is the (vacuous) union of sets of $\PP$.

Hence $\PP$ is a synthetic basis for $\tau$.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $5$. Partition Topology




