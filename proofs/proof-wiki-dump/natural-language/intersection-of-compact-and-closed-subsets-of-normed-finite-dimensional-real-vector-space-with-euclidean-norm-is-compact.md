# 

Source: https://proofwiki.org/wiki/Intersection_of_Compact_and_Closed_Subsets_of_Normed_Finite-Dimensional_Real_Vector_Space_with_Euclidean_Norm_is_Compact

Theorem
Let $\struct {\R^d, \norm {\, \cdot \,}_2}$ be the normed finite-dimensional real vector space with Euclidean norm.
Let $K$ be a compact subset of $\struct {\R^d, \norm {\, \cdot \,}_2}$.
Let $F$ be a closed subset of $\struct {\R^d, \norm {\, \cdot \,}_2}$.

Then $F \cap K$ is compact in $\struct {\R^d, \norm {\, \cdot \,}_2}$.


Proof
By assumption, $K$ is compact.
We have that a compact subset of normed vector space is closed and bounded.
Hence, $K$ is closed and bounded.
Since $K$ is bounded:

$\exists C \in \R_{> 0} : \forall \mathbf x \in K : \norm {\mathbf x}_2 \le C$.
Then:

$\forall \mathbf x \in K \cap F : \norm {\mathbf x}_2 \le C$
Hence, $K \cap F$ is bounded.
By assumption, $K$ and $F$ are closed.
We have that intersection of closed sets is closed in normed vector space.
Therefore, $K \cap F$ is closed.
By Heine-Borel theorem, $K \cap F$ is compact.
$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 1.5$: Normed and Banach spaces. Compact sets




