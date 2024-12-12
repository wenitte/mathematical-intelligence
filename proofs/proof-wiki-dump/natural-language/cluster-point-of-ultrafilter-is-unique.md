# 

Source: https://proofwiki.org/wiki/Cluster_Point_of_Ultrafilter_is_Unique

Theorem
Let $S$ be a set.
Let $\FF$ be an ultrafilter on $S$.
Let $x \in S$ be a cluster point of $\FF$.

Then there is no point $y \in S: y \ne x$ such that $y$ is also a cluster point of $\FF$.


Proof
Let $x, y$ both be cluster points of an ultrafilter $\FF$ on a set $S$.
Then by definition:

$\forall U \in \FF: \set {x, y} \subseteq U$
But then we can create a finer filter $\FF \cup \set {\set x}$ on $S$.
So $\FF$ is not an ultrafilter.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $1$: General Introduction: Filters




