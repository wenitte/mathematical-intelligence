# 

Source: https://proofwiki.org/wiki/Range_of_Orthogonal_Projection

Theorem

It has been suggested that this page be renamed.In particular: Image of Orthogonal ProjectionTo discuss this page in more detail, feel free to use the talk page.

Let $H$ be a Hilbert space.
Let $K$ be a closed linear subspace of $H$.
Let $P_K$ denote the orthogonal projection on $K$.

Then: 

$P_K \sqbrk H = K$
where $P_K \sqbrk H$ denotes the image of $H$ under $P_K$.


Proof
We first show that $P_K \sqbrk H \subseteq K$. 
Let $k \in P_K \sqbrk H$.
Then there exists $h \in H$ such that: 

$\map {P_K} h = k$
From the definition of the orthogonal projection, we have: 

$\map {P_K} h \in K$
so:

$h \in K$
giving:

$P_K \sqbrk H \subseteq K$
$\Box$

We now show that: 

$K \subseteq P_K \sqbrk H$
Let $k \in K$. 
Then, from Fixed Points of Orthogonal Projection: 

$\map {P_K} k = k$
So:

$k \in P_K \sqbrk H$
and so: 

$K \subseteq P_K \sqbrk H$
$\Box$

Hence, by definition of set equality:

$K = P_K \sqbrk H$
$\blacksquare$


Sources
1990: John B. Conway: A Course in Functional Analysis (2nd ed.) ... (previous) ... (next): $\text{I}$ Hilbert Spaces: $\S 2.$ Orthogonality: Theorem $2.7 \text{(d)}$




