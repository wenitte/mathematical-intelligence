# 

Source: https://proofwiki.org/wiki/Coarseness_Relation_on_Topologies_is_Partial_Ordering

Theorem
Let $S$ be a set.
Let $\mathbb T$ be the set of all topologies on $S$.
Let $\le$ be the relation on $\mathbb T$ defined as:

$\forall \tau_1, \tau_2 \in \mathbb T: \tau_1 \le \tau_2$ if and only if $\tau_1$ is coarser than $\tau_2$.

Then $\le$ is a partial ordering on $\mathbb T$.


Proof
It follows directly from the definition of being coarser that:

$\tau_1 \le \tau_2 \iff \tau_1 \subseteq \tau_2$
By Subset Relation is Ordering it thus follows that $\le$ is an ordering.

From Topologies are not necessarily Comparable by Coarseness, it follows that such an ordering is not always total.
$\blacksquare$


Sources
1964: Steven A. Gaal: Point Set Topology ... (previous) ... (next): Chapter $\text {I}$: Topological Spaces: $1$. Open Sets and Closed Sets
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $1$: General Introduction




