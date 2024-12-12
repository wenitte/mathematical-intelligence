# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Locally_Compact_Hausdorff_Space



Theorem
The following definitions of the concept of Locally Compact Hausdorff Space are equivalent:
Let $T = \struct {S, \tau}$ be a Hausdorff topological space.

Definition 1
$T$ is a locally compact Hausdorff space if and only if each point of $S$ has a compact neighborhood.
That is, if and only if $T$ is weakly locally compact.

Definition 2
$T$ is a locally compact Hausdorff space if and only if each point has a neighborhood basis consisting of compact sets.
That is, if and only if $T$ is locally compact (in the general sense).


Proof
$1$ implies $2$
Let $x \in S$.
Let $K$ be a compact neighborhood of $x$.
Let $\BB$ be the set of compact neighborhoods of $x$.
It is shown that $\BB$ is a neighborhood basis of $x$.

Let $U$ be a neighborhood of $x$.
We have to show that $U$ contains a compact neighborhood of $x$.
By Neighborhood in Topological Subspace, $U\cap K$ is a neighborhood of $x$ in $K$.
By Neighborhood in Compact Hausdorff Space Contains Compact Neighborhood, there is a compact neighborhood $V$ of $x$ in $K$ such that $V \subset U \cap K$.
From Neighborhood in Topological Subspace there exists a neighborhood $W$ of $x$ in $T$ such that $W \cap K = V$. 
From Intersection of Neighborhoods in Topological Space is Neighborhood we have $W \cap K = V$ is a neighborhood of $x$ in $T$.
From Compact in Subspace is Compact in Topological Space then $V$ is compact in $T$.
Hence $V \in \BB$.
The result follows.
$\Box$


$2$ implies $1$
Follows from Locally Compact Space is Weakly Locally Compact.
$\blacksquare$





