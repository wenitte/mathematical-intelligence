# 

Source: https://proofwiki.org/wiki/Schauder_Basis_is_Linearly_Independent

Theorem
Let $\Bbb F \in \set {\R, \C}$. 
Let $\struct {X, \norm \cdot}$ be a normed vector space over $\Bbb F$.
Let $\set {e_n : n \in \N}$ be a Schauder basis for $X$. 

Then $\set {e_n : n \in \N}$ is linearly independent.


Proof
Suppose that: 

$\ds \sum_{k \mathop = 1}^n \alpha_{i_k} e_{i_k} = 0$
for some $n \in \N$, $i_1, \ldots, i_n \in \N$ and $\alpha_{i_1}, \ldots, \alpha_{i_n} \in \Bbb F$.
Define a sequence $\sequence {\alpha_j}_{j \mathop \in \N}$ in $\Bbb F$ by: 

$\ds \alpha_j = \begin{cases}\alpha_{i_k} & \text { if there exists } k \text { such that } j = i_k \\ 0 & \text { otherwise}\end{cases}$
Then, we have: 

$\ds \sum_{j \mathop = 1}^\infty \alpha_j e_j = \sum_{k \mathop = 1}^n \alpha_{i_k} e_{i_k} = 0$
From the definition of Schauder basis, we then have: 

$\alpha_j = 0$ for each $j \in \N$
and in particular: 

$\alpha_{i_k} = 0$ for each $k$.
Since the coefficients $\alpha_{i_1}, \ldots, \alpha_{i_n}$ and $n \in \N$ were arbitrary, we have that:

$\set {e_n : n \in \N}$ is linearly independent.
$\blacksquare$


Sources
2020: James C. Robinson: Introduction to Functional Analysis ... (previous) ... (next) $9.1$: Schauder Bases in Normed Spaces




