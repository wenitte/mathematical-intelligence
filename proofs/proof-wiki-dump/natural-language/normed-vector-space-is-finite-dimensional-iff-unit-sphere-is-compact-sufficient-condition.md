# 

Source: https://proofwiki.org/wiki/Normed_Vector_Space_is_Finite_Dimensional_iff_Unit_Sphere_is_Compact/Sufficient_Condition

Theorem
Let $X$ be a normed vector space.
Let $\Bbb S = \map {\Bbb S_1} 0$ be the unit sphere centred at $0$ in $X$.

Then $X$ is finite dimensional if and only if $\Bbb S$ is compact.


Proof
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





