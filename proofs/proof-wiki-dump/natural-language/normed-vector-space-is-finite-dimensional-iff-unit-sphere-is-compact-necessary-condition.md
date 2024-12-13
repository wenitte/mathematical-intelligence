# 

Source: https://proofwiki.org/wiki/Normed_Vector_Space_is_Finite_Dimensional_iff_Unit_Sphere_is_Compact/Necessary_Condition

Theorem
Let $X$ be a finite dimensional normed vector space.
Let $\Bbb S = \map {\Bbb S_1} 0$ be the unit sphere centred at $0$ in $X$.

Then $\Bbb S$ is compact.


Proof
Let $X$ be a finite dimensional vector space $\R^d$.
We have that all norms on finite-dimensional vector space are equivalent.
Choose Euclidean norm $\norm {\, \cdot \,}_2$.
Let $\struct {\R^d, \norm {\, \cdot \,}_2}$ be the normed finite-dimensional real vector space with Euclidean norm.
Let $\map {\Bbb S^{d - 1}_1} 0$ be a unit sphere in $\struct {\R^d, \norm {\, \cdot \,}_2}$.
By definition, $\Bbb S^{d - 1}$ is bounded.
Let $\mathbf L := \tuple {L_1, \dots, L_d} \in \R^d$.
Let $\mathbf x_n := \tuple {x_n^{\paren 1}, \dots, x_n^{\paren d}}$.
Let $\sequence {\mathbf x_n}_{n \mathop \in \N}$ be a sequence in $\Bbb S^{d - 1}$.
Let $\sequence {\mathbf x_n}_{n \mathop \in \N}$ converge to $\mathbf L$:

$\forall \epsilon \in \R_{>0}: \exists N \in \N: \forall n \in \N: n > N \implies \norm {\mathbf x_n - \mathbf L}_2 < \epsilon$
Furthermore, for all $k \in \N : k \le d$ we have that:














\(\ds \size {x_n^{\paren k} - L_k}\)

\(=\)







\(\ds \sqrt {\size {x_n^{\paren k} - L_k}^2 }\)




















\(\ds \)

\(\le\)







\(\ds \sqrt{\sum_{j \mathop = 1}^d \size {x_n^{\paren j} - L_k}^2}\)




















\(\ds \)

\(=\)







\(\ds \norm {\mathbf x_n - \mathbf L}_2\)





Definition of Euclidean Norm



Thus:

$\forall k \in \N : k \le d : \forall \epsilon \in \R_{>0}: \exists N \in \N: \forall n \in \N: n > N \implies \size {x_n^{\paren k} - L_k} < \epsilon$
In other words, $\ds \lim_{n \mathop \to \infty} x_n^{\paren k} = L_k$.
We have that $\mathbf x_n \in \Bbb S^{d - 1}$.
Therefore:

$\ds \norm {\mathbf x_n}_2^2 = \sum_{j \mathop = 1}^d \paren {x_n^{\paren j}}^2 = 1$
$\map f x = x^2$ is a continuous function in its whole range.
By Limit of Composite Function, taking the limit $n \to \infty$ results in:

$\ds \norm {\mathbf L}_2^2 = \sum_{j \mathop = 1}^d \paren {L_j}^2 = 1$
Therefore, $\mathbf L \in \Bbb S^{d - 1}$.
Hence, $\Bbb S^{d - 1}$ is closed.
By Heine-Borel theorem, $\Bbb S^{d - 1}$ is compact.

$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 1.5$: Normed and Banach spaces. Compact sets




