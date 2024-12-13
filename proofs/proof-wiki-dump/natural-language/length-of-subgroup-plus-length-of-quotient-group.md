# 

Source: https://proofwiki.org/wiki/Length_of_Subgroup_Plus_Length_of_Quotient_Group

Theorem
Let $G$ be a finite group.
Let $H$ be a normal subgroup of $G$.

Then:

$\map l G = \map l H + \map l {G / H}$
where:

$\map l G$ denotes the length of $G$
$G / H$ denotes the quotient group of $G$ by $H$.


Proof
Let $\HH$ be a composition series of $H$:

$\set e = H_0 \subset H_1 \subset \dots \subset H_m = H$,

We can construct a composition series $\GG$ for $G$ which contains $H$:

$\set e = H_0 \subset H_1 \subset \dots \subset H_m = H = G_0 \subset G_1 \subset \dots \subset G_n = G$
where, for $k = 0, \dots, n - 1$:

$G_k \vartriangleleft G_{k + 1}$
and there exists no normal subgroup $G'$ of $G$ such that:

$G_k \subset G' \subset G_{k + 1}$.

Now consider the sequence $\SS$:

$H = G_0 \subset G_1 \subset \dots \subset G_n = G$
We can construct a normal series $\GG_1$ for $G / H$ from $\SS$:

$H = G_0 / H \subset G_1 / H \subset \dots \subset G_n / H = G / H$

$\GG_1$ is indeed a normal series for $G / H$ because:

$G_k \vartriangleleft G_{k + 1}$ by construction
$H \vartriangleleft G_k$
$\paren {G_{k + 1} / H} / \paren {G_k / H} \cong G_{k + 1} / G_k$ by Third Isomorphism Theorem.

Aiming for a contradiction, suppose there exists a normal subgroup $G' / H$ of $G / H$ such that:

$G_k / H \subset G' / H \subset G_{k + 1} / H$
for $k = 0, \dots, n - 1$.
Then the Third Isomorphism Theorem implies:

$\paren {G' / H} / \paren {G_k / H} \cong G' / G_k$
Then $G_k$ is a proper normal subgroup of $G'$, contradicting the construction of $\GG$.
So no such $G' / H$ exists.
Hence, $\GG_1$ has no proper refinements and is a composition series.

Since the isomorphism $\paren {G_{k + 1} / H} / \paren {G_k / H} \cong G_{k + 1} / G_k$ holds for all $G_k, G_{k + 1}$:

the length of $\SS$ is equal to $\map l {\GG_1} = \map l {G / H}$.

The result follows from the construction of $\GG$.
$\blacksquare$


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Normal and Composition Series: $\S 73 \beta$




