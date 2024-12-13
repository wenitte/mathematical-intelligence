# 

Source: https://proofwiki.org/wiki/Neighborhood_in_Topological_Space_has_Subset_Neighborhood

Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $x \in S$.
Let $N$ be a neighborhood of $x$ in $T$.

Then there exists a neighborhood $N'$ of $x$ such that:

$(1): \quad N' \subseteq N$
$(2): \quad N'$ is a neighborhood of each of its points.

That is:

$\forall x \in S: \forall N \in \NN_x: \exists N' \in \NN_x, N' \subseteq N: \forall y \in N': N' \in \NN_y$
where $\NN_x$ is the neighborhood filter of $x$.


Proof
By definition of neighborhood:

$\exists U \in \tau: x \in U \subseteq N \subseteq S$
where $U$ is an open set of $T$.
By Set is Open iff Neighborhood of all its Points, $N' = U$ fulfils the conditions of the statement.
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $3$: Topological Spaces: $\S 3$: Neighborhoods and Neighborhood Spaces: Theorem $3.1: \ N 5$




