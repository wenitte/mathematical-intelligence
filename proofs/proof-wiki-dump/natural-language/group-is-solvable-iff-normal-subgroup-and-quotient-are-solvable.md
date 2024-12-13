# 

Source: https://proofwiki.org/wiki/Group_is_Solvable_iff_Normal_Subgroup_and_Quotient_are_Solvable

Theorem
Let $G$ be a finite group.
Let $H$ be a normal subgroup of $G$.

Then $G$ is solvable if and only if:

$(1): \quad H$ is solvable
and

$(2): \quad G / H$ is solvable
where $G / H$ is the quotient group of $G$ by $H$.


Proof
As $H \lhd G$ we can construct the normal series:

$(A): \quad \set e \lhd H \lhd G$
By Finite Group has Composition Series, $(A)$ can be refined to a composition series for $G$:

$(B): \quad \set e = G_0 \lhd G_1 \lhd \cdots \lhd G_n = G$

Suppose $G_k = H$.
Then we can construct the composition series:

$(C): \quad \set e = G_0 \lhd G_1 \lhd \cdots \lhd G_k = H$
and:

$(D): \quad \set e = G_k / H \lhd G_{k + 1} / H \lhd \cdots \lhd G_n / H = G / H$

Furthermore, by the Third Isomorphism Theorem:

$\dfrac {G_{i + 1} / H} {G_i / H} \cong \dfrac {G_{i + 1} } {G_i}$
for all $k \le i \le n$.

So each factor of the composition series for $G$ is a factor of either:

the composition series for $H$
or:

the composition series for $G / H$.
The result follows.
$\blacksquare$


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Normal and Composition Series: $\S 75$. Solvable Groups




