# 

Source: https://proofwiki.org/wiki/Kernel_of_Orthogonal_Projection

Theorem
Let $H$ be a Hilbert space.
Let $K$ be a closed linear subspace of $H$.
Let $P_K$ denote the orthogonal projection on $K$.

Then: 

$\ker P_K = K^\bot$
where:

$\ker P_K$ denotes the kernel of $P_K$
$K^\bot$ denotes the orthocomplement of $K$.


Proof
We first prove that: 

$\ker P_K \subseteq K^\bot$
Let $h \in \ker P_K$.
Then: 

$\map {P_K} h = 0$
From Unique Point of Minimal Distance to Closed Convex Subset of Hilbert Space, ​we have: 

$h - \map {P_K} h \in K^\bot$
That is: 

$h \in K^\bot$
So:

$\ker P_K \subseteq K^\bot$

We now prove that: 

$K^\bot \subseteq \ker P_K$
Let $h \in K^\bot$. 
From Unique Point of Minimal Distance to Closed Convex Subset of Hilbert Space, we have that: 

$\map {P_K} h$ is the unique point such that $h - \map {P_K} h \in K^\bot$
So, since $h - 0 \in K^\bot$, we have $\map {P_K} h = 0$.
So, we have $h \in \ker P_K$, and we obtain: 

$K^\bot = \ker P_K$
$\blacksquare$


Sources
1990: John B. Conway: A Course in Functional Analysis (2nd ed.) ... (previous) ... (next): $\text{I}$ Hilbert Spaces: $\S 2.$ Orthogonality: Theorem $2.7 \text {(d)}$




