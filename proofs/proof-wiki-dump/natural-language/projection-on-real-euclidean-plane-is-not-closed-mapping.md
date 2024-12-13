# 

Source: https://proofwiki.org/wiki/Projection_on_Real_Euclidean_Plane_is_not_Closed_Mapping

Theorem
Let $\struct {\R^2, d}$ be the real number plane with the usual (Euclidean) topology.
Let $\rho: \R^2 \to \R$ be the first projection on $\R^2$ defined as:

$\forall \tuple {x, y} \in \R^2: \map \rho {x, y} = x$

Then $\rho$ is not a closed mapping.

The same applies with the second projection on $\R^2$.


Proof
Consider the set $A \subseteq R^2$ of all points defined as:

$A := \set {\tuple {x, y} \in \R^2: x y \ge 1}$
By Subset of Euclidean Plane whose Product of Coordinates are Greater Than or Equal to 1 is Closed:

$A$ is a closed set in $\struct {\R^2, d}$.
By inspection, it can be seen that the image of $A$ under $\rho$ is:

$\rho \sqbrk A = \openint \gets 0 \cup \openint 0 \to$
which by Union of Open Sets of Metric Space is Open is open.
Hence the result by definition of closed mapping.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $33$. Special Subsets of the Plane: $1$




