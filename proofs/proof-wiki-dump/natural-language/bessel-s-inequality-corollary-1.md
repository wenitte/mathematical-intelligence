# 

Source: https://proofwiki.org/wiki/Bessel%27s_Inequality/Corollary_1

Corollary to Bessel's Inequality
Let $\struct {V, \innerprod \cdot \cdot}$ be an inner product space. 
Let $E$ be a orthonormal subset of $V$. 

Then, for each $h \in V$, the set: 

$\set {e \in E : \innerprod h e \ne 0}$
is countable.


Proof
Let:

$X = \set {e \in E : \innerprod h e \ne 0}$
For each natural number $n$, define: 

$\ds X_n = \set {e \in E : \size {\innerprod h e} > \frac 1 n}$
We have that: 

$\ds X = \bigcup_{n \mathop = 1}^\infty X_n$
We can show that for each $n \in \N$, the set $X_n$ is finite. 

Aiming for a contradiction, suppose, suppose that for some $m \in \N$, the set $X_m$ is infinite. 
Then, there exists an countable orthonormal subset of $X_m$, say $\set {e_k : k \in \N}$, such that: 

$\ds \size {\innerprod h {e_k} } > \frac 1 m$
for each $k$. 
By Bessel's Inequality, we have that: 

$\ds \sum_{k \mathop = 1}^\infty \size {\innerprod h {e_k} }^2$ converges
and: 

$\ds \sum_{k \mathop = 1}^\infty \size {\innerprod h {e_k} }^2 \le {\norm h}^2$
However, for each $n \in \N$, we have: 

$\ds \sum_{k \mathop = 1}^n \size {\innerprod h {e_k} }^2 > \frac n {m^2}$
So, for any natural number $n$ with $n > m^2 {\norm h}^2$, we have: 

$\ds \sum_{k \mathop = 1}^n \size {\innerprod h {e_k} }^2 > {\norm h}^2$
This contradicts Bessel's Inequality, so we must have that each $X_m$ is finite. 

We therefore see that:

$\ds X = \bigcup_{n \mathop = 1}^\infty X_n$
is the countable union of finite sets, so by Countable Union of Finite Sets is Countable:

$X$ is countable
as required.
$\blacksquare$


Sources
1990: John B. Conway: A Course in Functional Analysis (2nd ed.) ... (previous) ... (next): $\text{I}$ Hilbert Spaces: $\S 4.$ Orthonormal Sets of Vectors and Bases: Corollary $4.9$




