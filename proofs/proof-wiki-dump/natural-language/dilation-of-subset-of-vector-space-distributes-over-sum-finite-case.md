# 

Source: https://proofwiki.org/wiki/Dilation_of_Subset_of_Vector_Space_Distributes_over_Sum/Finite_Case

Theorem
Let $K$ be a field.
Let $X$ be a vector space over $K$. 
Let $A_1, \ldots, A_n \subseteq X$ and $\lambda \in \GF$. 

Then:

$\ds \lambda \sum_{j \mathop = 1}^n A_j = \sum_{j = 1}^n \paren {\lambda A_j}$
where:

$\ds \lambda \paren \ldots$ denotes dilation by $\lambda$
$\ds \sum_{j \mathop = 1}^n A_j$ denotes the linear combination of subsets of a vector space.


Proof
Let $x \in X$.
We have:

$\ds x \in \lambda \sum_{j \mathop = 1}^n A_j$
if and only if there exists $x_j \in A_j$ for each $j \in \set {1, 2, \ldots, n}$ such that:

$\ds x = \lambda \sum_{j \mathop = 1}^n x_j$
This is equivalent to:

$\ds x = \sum_{j \mathop = 1}^n \lambda x_j \in \sum_{j = 1}^n \paren {\lambda A_j}$ for some $x_j \in A_j$.
Hence we have:

$\ds x \in \lambda \sum_{j \mathop = 1}^n A_j$
if and only if:

$\ds x \in \sum_{j = 1}^n \paren {\lambda A_j}$
Hence we obtain:

$\ds \lambda \sum_{j \mathop = 1}^n A_j = \sum_{j = 1}^n \paren {\lambda A_j}$
$\blacksquare$





