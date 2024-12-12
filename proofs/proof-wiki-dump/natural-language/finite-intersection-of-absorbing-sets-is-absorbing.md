# 

Source: https://proofwiki.org/wiki/Finite_Intersection_of_Absorbing_Sets_is_Absorbing

Theorem
Let $\GF \in \set {\R, \C}$.
Let $X$ be a vector space over $\GF$. 
Let $A_1, \ldots, A_n \subseteq X$ be absorbing sets.

Then:

$\ds \bigcap_{j \mathop = 1}^n A_j$ is absorbing.


Proof
Let $x \in X$ and $j \in \set {1, \ldots, n}$.
Since $A_j$ is absorbing, there exists $t_j \in \R_{> 0}$ such that:

$x \in \alpha A_j$ for $\alpha \in \C$ with $\cmod \alpha \ge t_j$.
Let $t = \max \set {t_1, \ldots, t_n}$.
Then, we have:

$\ds x \in \bigcap_{j \mathop = 1}^n \paren {\alpha A_j}$ for $\alpha \in \C$ with $\cmod \alpha \ge t$.
From Dilation of Intersection of Subsets of Vector Space, we have:

$\ds x \in \alpha \bigcap_{j \mathop = 1}^n A_j$ for $\alpha \in \C$ with $\cmod \alpha \ge t$.
So:

$\ds \bigcap_{j \mathop = 1}^n A_j$ is absorbing.
$\blacksquare$





