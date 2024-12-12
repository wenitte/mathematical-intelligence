# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Convex_Hull



Theorem
The following definitions of the concept of Convex Hull are equivalent:
Let $V$ be a vector space over $\R$. 
Let $U \subseteq V$. 

Definition $1$
The convex hull of $U$ is defined and denoted: 

$\ds \map {\operatorname {conv} } U = \set {\sum_{j \mathop = 1}^n \lambda_j u_j : n \in \N, \, u_j \in U \text { and } \lambda_j \in \R_{> 0} \text { for each } j, \, \sum_{j \mathop = 1}^n \lambda_j = 1}$
Definition $2$
The convex hull of $U$ is defined and denoted: 

$\ds \map {\operatorname {conv} } U = $ the intersection of all convex sets $C \subseteq V$ of $V$ such that $U \subseteq C$.
Definition $3$
The convex hull of $U$ is defined and denoted: 

$\ds \map {\operatorname {conv} } U = $ the smallest convex set $C$ such that $U \subseteq C$.


Proof
Definition $(1)$ iff Definition $(3)$
This is demonstrated in Convex Hull is Smallest Convex Set containing Set.
$\blacksquare$


Definition $(2)$ iff Definition $(3)$
Let $\bigcap C$ denote the intersection of all convex subsets of $V$ containing $U$.
From Intersection of Convex Sets is Convex Set (Vector Spaces), $\bigcap C$ is a convex subset of $V$.

Let $S$ be the smallest convex subset of $V$ containing $U$
By Intersection is Largest Subset:

$\bigcap C = S$
That is, a convex hull by definition $2$ is the same thing as a convex hull by definition $3$.
$\blacksquare$


Sources
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): convex hull




