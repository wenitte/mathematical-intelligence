# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Strongly_Locally_Compact_Space



Theorem
Let $T = \struct {S, \tau}$ be a topological space.

The following definitions of the concept of Strongly Locally Compact Space are equivalent:

Definition 1
The space $T$ is strongly locally compact if and only if:

every point of $S$ is contained in an open set whose closure is compact.
Definition 2
The space $T$ is strongly locally compact if and only if:

every point has a closed compact neighborhood.
That is:

every point of $S$ is contained in an open set which is contained in a closed compact subspace.


Proof
1 implies 2
Follows immediately from Topological Closure is Closed.
$\Box$


2 implies 1
Let $x \in S$
Let $U$ be an open neighborhood of $x$.
Let $K \subseteq S$ be a closed compact subspace with $U \subseteq K$.
By Topological Closure is Closed $\overline U$ is closed in $T$.
By Set Closure as Intersection of Closed Sets, the closure $\overline U$ of $U$ in $T$ satisfies $\overline U \subseteq K$.
By Closed Set in Closed Subspace, $\overline U$ is closed in $K$.
By Closed Subspace of Compact Space is Compact, $\overline U$ is compact.
$\blacksquare$





