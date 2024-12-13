# 

Source: https://proofwiki.org/wiki/Orthogonal_Projection_is_Mapping

Theorem
Let $H$ be a Hilbert space.
Let $K$ be a closed linear subspace of $H$.
Let $P_K: H \to H$ be the orthogonal projection on $K$.

Then $P_K$ is a mapping.


Proof
For $P_K$ to be a mapping we need to show that:

$\forall h \in H: \map{P_K} h$ exists and is unique
By definition of $\map{P_K} h$, this amounts to:

There is a unique $k \in K$ such that $\norm{ h - k } = \map d {h, K}$
This is precisely the statement of Unique Point of Minimal Distance to Closed Convex Subset of Hilbert Space.
$\blacksquare$


Sources
1990: John B. Conway: A Course in Functional Analysis (2nd ed.) ... (previous) ... (next): $\text{I}$ Hilbert Spaces: $\S 2.$ Orthogonality




