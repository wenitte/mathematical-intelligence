# 

Source: https://proofwiki.org/wiki/Orthogonal_Projection_is_Projection

Theorem
Let $\HH$ be a Hilbert space.
Let $K$ be a closed linear subspace of $H$.
Let $P_K$ denote the orthogonal projection onto $K$.

Then $P_K$ is a projection.


Proof
Let $h \in H$.
From the definition of the orthogonal projection, we have:

$\map {P_K} h \in K$
So, from Fixed Points of Orthogonal Projection, we have: 

$\map {P_K^2} h = \map {P_K} {\map {P_K} h} = \map {P_K} h$
Since $h$ was arbitrary, we have:

$P_K^2 = P_K$
So $P_K$ is an idempotent.
Further, from Kernel of Orthogonal Projection, we have:

$\ker {P_K} = K^\bot$
where $K^\bot$ is the orthocomplement of $K$.
From Range of Orthogonal Projection, we have:

$K = \Img {P_K}$
Hence we conclude:

$\ker {P_K} = \paren {\Img {P_K} }^\bot$
Hence $P_K$ is a projection.
$\blacksquare$


Sources
1990: John B. Conway: A Course in Functional Analysis (2nd ed.) ... (previous) ... (next): $\text{I}$ Hilbert Spaces: $\S 2.$ Orthogonality: Theorem $2.7 \text{(c)}$




