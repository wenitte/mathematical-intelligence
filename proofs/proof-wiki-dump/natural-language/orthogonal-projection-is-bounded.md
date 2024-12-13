# 

Source: https://proofwiki.org/wiki/Orthogonal_Projection_is_Bounded

Theorem
Let $H$ be a Hilbert space with inner product $\innerprod \cdot \cdot$ and inner product norm $\norm \cdot$.
Let $K$ be a closed linear subspace of $H$.
Let $P_K$ denote the orthogonal projection on $K$.

Then $P_K$ is bounded. 
That is: 

$\norm {\map {P_K} h} \le \norm h$
for each $h \in H$. 


Proof
Let $h \in H$. 
Note that we can write: 

$h = \paren {h - \map {P_K} h} + \map {P_K} h$
We have, by the definition of orthogonal projection: 

$\map {P_K} h \in K$
From Unique Point of Minimal Distance to Closed Convex Subset of Hilbert Space, we have: 

$h - \map {P_K} h \in K^\bot$
so that: 

$\innerprod {\map {P_K} h} {h - \map {P_K} h} = 0$
By Pythagoras's Theorem (Inner Product Space), we therefore have: 

${\norm h}^2 = \norm {h - \map {P_K} h}^2 + \norm {\map {P_K} h}^2$
We have that: 

$\norm {h - \map {P_K} h}^2 \ge 0$
so:

${\norm h}^2 \ge \norm {\map {P_K} h}^2$
giving: 

$\norm {\map {P_K} h} \le \norm h$
$\blacksquare$


Sources
1990: John B. Conway: A Course in Functional Analysis (2nd ed.) ... (previous) ... (next): $\text{I}$ Hilbert Spaces: $\S 2.$ Orthogonality: Theorem $2.7 \text {(b)}$




