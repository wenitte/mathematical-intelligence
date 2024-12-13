# 

Source: https://proofwiki.org/wiki/Normed_Vector_Space_is_Finite_Dimensional_iff_Unit_Sphere_is_Compact



Theorem
Let $X$ be a normed vector space.
Let $\Bbb S = \map {\Bbb S_1} 0$ be the unit sphere centred at $0$ in $X$.

Then $X$ is finite dimensional if and only if $\Bbb S$ is compact.


Proof
Necessary Condition
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
$\Box$

Sufficient Condition
Suppose that $X$ is not finite dimensional.
Then any finite dimensional subspace of $X$ is proper.
From Compact Subspace of Metric Space is Sequentially Compact in Itself, it suffices to show that $\Bbb S$ is not sequentially compact. 
For this, it suffices to show that there exists an $\epsilon > 0$ and sequence $\sequence {x_n}_{n \mathop \in \N}$ with $\norm {x_n} = 1$ for each $n$ and: 

$\norm {x_i - x_j} \ge \epsilon$ for each $i \ne j$.
Then no subsequence of $\sequence {x_n}_{n \mathop \in \N}$ is Cauchy. 
We construct $\sequence {x_n}_{n \mathop \in \N}$ iteratively. 
From Convergent Sequence is Cauchy Sequence, we will have that no subsequence of $\sequence {x_n}_{n \mathop \in \N}$ can converge. 
Take $x_1 \in X$ with $\norm {x_1} = 1$.
Let: 

$Y_1 = \span \set {x_1}$
From Finite Dimensional Subspace of Normed Vector Space is Closed, $Y_1$ is closed. 
From Riesz's Lemma, there exists $x_2 \in X$ with $\norm {x_2} = 1$ such that: 

$\ds \norm {x_2 - x_1} > \frac 1 2$
Now suppose that we have constructed $x_1, x_2, \ldots, x_n$ such that: 

$\ds \norm {x_i - x_j} > \frac 1 2$
for all $i \ne j$. 
Let: 

$Y_n = \span \set {x_1, x_2, \ldots, x_n}$
From Finite Dimensional Subspace of Normed Vector Space is Closed, $Y_n$ is closed. 
From Riesz's Lemma, there exists $x_{n + 1} \in X$ with $\norm {x_{n + 1} } = 1$ such that: 

$\ds \norm {x_{n + 1} - y} > \frac 1 2$
for all $y \in Y_n$. 
In particular: 

$\ds \norm {x_{n + 1} - x_k} > \frac 1 2$
for all $1 \le k \le n$.
From Norm Axiom $\text N 2$: Positive Homogeneity, we have: 

$\ds \norm {x_i - x_j} > \frac 1 2$
for each $1 \le i, j \le {n + 1}$ with $i \ne j$. 
Continuing this way, we have a sequence $\sequence {x_n}_{n \mathop \in \N}$ such that $\norm {x_n} = 1$ for each $n \in \N$ and: 

$\ds \norm {x_i - x_j} > \frac 1 2$
for each $i \ne j$. 
So for any subsequence $\sequence {x_{n_j} }_{j \mathop \in \N}$ of $\sequence {x_n}_{n \mathop \in \N}$ we have: 

$\ds \norm {x_{n_j} - x_{n_k} } > \frac 1 2$
for each $j \ne k$. 
So no subsequence $\sequence {x_{n_j} }_{j \mathop \in \N}$ can be Cauchy, and hence none can converge. 
$\blacksquare$





