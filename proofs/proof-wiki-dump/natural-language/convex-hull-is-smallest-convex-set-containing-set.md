# 

Source: https://proofwiki.org/wiki/Convex_Hull_is_Smallest_Convex_Set_containing_Set



Theorem
Let $X$ be a vector space over $\R$.
Let $U \subseteq X$ be non-empty.
Let $\map {\operatorname {conv} } U$ be the convex hull of $U$.

Then $\map {\operatorname {conv} } U$ is the smallest convex subset of $X$ containing $U$ in the sense that: 

$\map {\operatorname {conv} } U$ is convex and if $K \subseteq X$ is a convex subset with $U \subseteq K$, we have that $\map {\operatorname {conv} } U \subseteq K$.


Corollary
Let $K \subseteq X$ be non-empty.

Then: 

$K$ is convex if and only if $\map {\operatorname {conv} } K = K$


Proof
We have: 

$\ds \map {\operatorname {conv} } U = \set {\sum_{j \mathop = 1}^n \lambda_j u_j : n \in \N, \, u_j \in U \text { and } \lambda_j \in \R_{> 0} \text { for each } j, \, \sum_{j \mathop = 1}^n \lambda_j = 1}$
Considering $n = 1$ and $\lambda_1 = 1$, we obtain: 

$u \in \map {\operatorname {conv} } U$ for each $u \in U$.
So:

$U \subseteq \map {\operatorname {conv} } U$
Now we prove that $\map {\operatorname {conv} } U$ is convex.
Let $u, v \in \map {\operatorname {conv} } U$.
Then there exists $u_1, u_2, \ldots, u_n \in U$, $v_1, v_2, \ldots, v_m$ and $\lambda_1, \lambda_2, \ldots, \lambda_n, \mu_1, \ldots, \mu_m \in \R_{> 0}$ such that: 

$\ds u = \sum_{i \mathop = 1}^n \lambda_i u_i$
and:

$\ds v = \sum_{j \mathop = 1}^n \mu_j v_j$
with:

$\ds \sum_{i \mathop = 1}^n \lambda_i = 1$
and:

$\ds \sum_{j \mathop = 1}^n \mu_j = 1$
Now let $t \in \closedint 0 1$.
We have: 

$\ds t u + \paren {1 - t} v = \sum_{i \mathop = 1}^n t \lambda_i u_i + \sum_{j \mathop = 1}^m \paren {1 - t} \mu_j \lambda_j$
We have: 














\(\ds \sum_{i \mathop = 1}^n t \lambda_i + \sum_{j \mathop = 1}^m \paren {1 - t} \mu_j\)

\(=\)







\(\ds t \sum_{i \mathop = 1}^n \lambda_i + \paren {1 - t} \sum_{j \mathop = 1}^m \mu_j\)




















\(\ds \)

\(=\)







\(\ds t + \paren {1 - t}\)




















\(\ds \)

\(=\)







\(\ds 1\)









with $t \lambda_i \ge 0$ and $\paren {1 - t} \mu_j \ge 0$ for each $i, j$.
Since we have $u_i \in U$ for each $i$ and $v_j \in U$ for each $j$, we have: 

$t u + \paren {1 - t} v \in \map {\mathrm {conv} } U$
So $\map {\mathrm {conv} } U$ is convex.

Lemma
Let $K \subseteq X$ be a convex set with $U \subseteq K$.

Then: 

$\map {\operatorname {conv} } U \subseteq K$
$\Box$

Hence the result.
$\blacksquare$


Sources
2020: James C. Robinson: Introduction to Functional Analysis ... (previous) ... (next) $21.5$: The Convex Hull




