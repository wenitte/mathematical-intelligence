# 

Source: https://proofwiki.org/wiki/Compact_Subset_of_Compact_Space_is_not_necessarily_Closed

Theorem
A compact subset of a compact space is not necessarily closed.


Proof
Let $S$ be a set containing more than one element.
Let $\tau = \set {S, \O}$ be the indiscrete topology on $S$.
Let $x \in S$.
Let $H = S \setminus \set x$.
Then $H$ is a proper subset of $S$.
Then from Subset of Indiscrete Space is Compact and Sequentially Compact, the subspace induced by $\tau$ on $H$ is a compact subspace of $\struct {S, \tau}$.
But from Closed Sets in Indiscrete Topology, the only closed subsets of $\struct {S, \tau}$ are $S$ and $\O$.
Thus $H$ is a compact subspace of $\struct {S, \tau}$ which is not closed in $S$.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $1$: General Introduction




