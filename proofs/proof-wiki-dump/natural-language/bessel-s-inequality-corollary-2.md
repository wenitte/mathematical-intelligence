# 

Source: https://proofwiki.org/wiki/Bessel%27s_Inequality/Corollary_2

Corollary to Bessel's Inequality
Let $\struct {V, \innerprod \cdot \cdot}$ be an inner product space. 
Let $E$ be a orthonormal subset of $V$. 

Then, for all $h \in V$:

$\ds \sum_{e \mathop \in E} \size {\innerprod h e}^2 \le \norm h^2$


Proof
From Bessel's Inequality: Corollary $1$, we have that: 

$\innerprod h e \ne 0$ for only countably many $e \in E$.
So the set

$X = \set {e \in E : \innerprod h e \ne 0}$
is countable.
Hence, there exists a sequence $\sequence {e_k}_{k \in \N}$ such that: 

$X = \set {e_k : k \in \N}$
For brevity, write:

$X_n = \set {e_k : k \le n}$
for each $n \in \N$. 
We have, by Bessel's Inequality, that: 

$\ds \sum_{k \mathop = 1}^\infty \size {\innerprod h {e_k} }^2$ converges
with:

$\ds \sum_{k \mathop = 1}^\infty \size {\innerprod h {e_k} }^2 \le {\norm h}^2$
We now argue that:

$\ds \sum_{e \mathop \in E} \size {\innerprod h e}^2 = \sum_{k \mathop = 1}^\infty \size {\innerprod h {e_k} }^2$
Let $\epsilon > 0$.
From the definition of net convergence, we aim to show that for each $\epsilon > 0$, there exists a finite set $S \subseteq X$ such that:

$\ds \cmod {\sum_{e \mathop \in F} \size {\innerprod h e}^2 - \sum_{k \mathop = 1}^\infty \size {\innerprod h {e_k} }^2} < \epsilon$
for all finite sets $F \supseteq S$. 
Let $F$ be a finite set containing $X_n$. 
Since:

$\innerprod h e = 0$ for $h \not \in X$
we have: 

$\ds \sum_{e \mathop \in F} \size {\innerprod h e}^2 = \sum_{k \mathop = 1}^n \size {\innerprod h {e_k} }^2 + \sum_{k \in F_\ast} \size {\innerprod h {e_k} }^2$
where $F_\ast$ is some subset of $\set {k \in \N : k \ge n + 1}$. 
Since $\size {\innerprod h {e_k} }^2 \ge 0$ for each $k \in \N$, we have:

$\ds \sum_{k \mathop = 1}^n \size {\innerprod h {e_k} }^2 + \sum_{k \in F_\ast} \size {\innerprod h {e_k} }^2 \le \sum_{k \mathop = 1}^\infty \size {\innerprod h {e_k} }^2$
so that:

$\ds \sum_{e \mathop \in F} \size {\innerprod h e}^2 \le \sum_{k \mathop = 1}^\infty \size {\innerprod h {e_k} }^2$
For the lower bound, note that:

$\ds \sum_{k \mathop = 1}^n \size {\innerprod h {e_k} }^2 + \sum_{k \in F_\ast} \size {\innerprod h {e_k} }^2 \ge \sum_{k \mathop = 1}^n \size {\innerprod h {e_k} }^2$
Pick $N_\epsilon \in \N$ such that:

$\ds \sum_{k \mathop = 1}^{N_\epsilon} \size {\innerprod h {e_k} }^2 \ge \sum_{k \mathop = 1}^\infty \size {\innerprod h {e_k} }^2 - \epsilon$
So, for all finite sets $F \supseteq X_{N_\epsilon}$, we have:

$\ds \cmod {\sum_{e \mathop \in F} \size {\innerprod h e}^2 - \sum_{k \mathop = 1}^\infty \size {\innerprod h {e_k} }^2} < \epsilon$
So:

$\ds \sum_{e \mathop \in E} \size {\innerprod h e}^2$ converges as a generalized sum to $\ds \sum_{k \mathop = 1}^\infty \size {\innerprod h {e_k} }^2$
Since we have that:

$\ds \sum_{k \mathop = 1}^\infty \size {\innerprod h {e_k} }^2 \le \norm h^2$
we are done. 
$\blacksquare$


Sources
1990: John B. Conway: A Course in Functional Analysis (2nd ed.) ... (previous) ... (next): $\text{I}$ Hilbert Spaces: $\S 4.$ Orthonormal Sets of Vectors and Bases: Corollary $4.10$




