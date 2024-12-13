# 

Source: https://proofwiki.org/wiki/Group_with_Normal_Series_with_Solvable_Factor_Groups_is_Solvable

Theorem
Let $G$ be a solvable group.
Let $\HH$ be a normal series for $G$.
Let all the factor groups of $\HH$ be solvable.

Then $G$ is solvable.


Proof
To be proved by construction of a composition series of $G$ from $\HH$.

Suppose $\HH$ is a normal series for $G$:

$\HH: \quad \set e = G_0 \subset G_1 \subset \dots \subset G_n = G$,
where $G_{k + 1} / G_k$ is solvable for $k = 0, 1, \dots, n - 1$.

If every factor of $\HH$ is cyclic of prime order then we are done.

Otherwise, pick a factor $G_{k + 1} / G_k$ that is not cyclic of prime order.
Then there exists a composition series $\SS_{k}$ for $G_{k + 1} / G_k$:

$\SS_k: \quad G_k / G_k = H_0 / G_k \subset H_1 / G_k \subset \dots \subset H_m / G_k = G_{k + 1} / G_k$,
where $\paren {H_{i + 1} / G_k} / \paren {H_i / G_k}$ is cyclic of prime order.

The Third Isomorphism Theorem induces the sequence:

$\HH_k: \quad G_k = H_0 \subset H_1 \subset \dots \subset H_m = G_{k + 1}$,
where $H_{i + 1} / H_i$ is also cyclic of prime order.
This shows that $\HH_k$ is complete.

We may refine the original series $\HH$ with $\HH_k$:

$\HH': \quad \set e = G_0 \subset G_1 \subset \dots \subset G_k = H_0 \subset \dots \subset H_m = G_{k + 1} \subset \dots \subset G_n = G$.

Repeating this process for all factors of $\HH$ that are not cyclic of prime order to obtain a composition series $\GG$ for $G$.
By this construction, every factor of $\GG$ is cyclic.
The result follows from the definition of solvable groups.
$\blacksquare$


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Normal and Composition Series: $\S 75 \beta$




