# 

Source: https://proofwiki.org/wiki/Complement_of_Set_of_Rational_Pairs_in_Real_Euclidean_Plane_is_Arc-Connected

Theorem
Let $\struct {\R^2, d}$ be the real number plane with the usual (Euclidean) topology.
Let $S \subseteq \R^2$ be the subset of $\R^2$ defined as:

$\forall x, y \in \R^2: \tuple {x, y} \in S \iff x, y \in \Q$
Hence let $A := \R^2 \setminus S$:

$\tuple {x, y} \in A$ if and only if either $x$ or $y$ or both is irrational.

Then $A$ is arc-connected.


Proof
Let $\tuple {a, b} \in A$.
Consider any point $\tuple {x_1, y_1} \in A$ whose coordinates are both irrational.
By definition, either $a$ or $b$ is irrational.
Without loss of generality, suppose $a$ is irrational.
Then the union of the straight lines $x = a, y = y_1$ is an arc-connected subset of $A$ connecting $\tuple {x_1, y_1}$ to $\tuple {a, b}$.
Hence any point in $A$ can be connected to $\tuple {x_1, y_1}$ by an arc.
Hence the result, by definition of arc-connected.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $33$. Special Subsets of the Plane: $2$




