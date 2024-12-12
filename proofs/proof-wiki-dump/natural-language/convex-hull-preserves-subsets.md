# 

Source: https://proofwiki.org/wiki/Convex_Hull_preserves_Subsets

Theorem
Let $X$ be a vector space over $\R$.
Let $U, V \subseteq X$ be non-empty with $U \subseteq V$. 

Then: 

$\map {\operatorname {conv} } U \subseteq \map {\operatorname {conv} } V$
where $\operatorname {conv}$ denotes the convex hull.


Proof
Let: 

$u \in \map {\operatorname {conv} } U$
From the definition of the convex hull, there exists $u_1, u_2, \ldots, u_n \in U$ and $\lambda_1, \lambda_2, \ldots, \lambda_n \in \R_{> 0}$ with: 

$\ds \sum_{i \mathop = 1}^n \lambda_i = 1$
such that: 

$\ds u = \sum_{i \mathop = 1}^n \lambda_i u_i$
Since $U \subseteq V$, we have: 

$u_i \in V$ for each $i$.
So, we have: 

$u \in \map {\operatorname {conv} } V$
So:

if $u \in \map {\operatorname {conv} } U$ then $u \in \map {\operatorname {conv} } V$.
So, from the definition of subset, we have: 

$\map {\operatorname {conv} } U \subseteq \map {\operatorname {conv} } V$
$\blacksquare$





