# 

Source: https://proofwiki.org/wiki/Component_of_Finite_Union_in_Ultrafilter



Theorem
Let $S$ be a non-empty set.
Let $\UU$ be a ultrafilter on $S$.
Let $\set {Y_1, \dots, Y_n}$ be a pairwise disjoint set of subsets of $S$ such that $S = Y_1 \cup \cdots \cup Y_n$.

Then there is a unique $k \in \set {1, \dots, n}$ such that $Y_k \in \UU$.


Proof
Assume that none of the $Y_k$ are empty.
If not, then any empty ones can simply be removed.


Uniqueness
Aiming for a contradiction, suppose that $Y_j, Y_k \in \UU$ with $j \ne k$.
Then since $Y_1, \dots, Y_n$ are a pairwise disjoint:

$Y_j \cap Y_k = \O$
But by the definition of an ultrafilter, $\UU$ has the finite intersection property.
It follows from this contradiction that no such $Y_j, Y_k \in \UU$ with $j \ne k$ exists.
$\Box$


Existence
Aiming for a contradiction, suppose that $Y_1, \dots, Y_n \notin \UU$.
Since the $Y_k$ are pairwise disjoint:

$\ds Y_i^c = \bigcup \set {Y_k: k \ne i}$
Then by the definition of an ultrafilter:

$\ds \forall i: Y_i^c = \bigcup \set {Y_k: k \ne i} \in \UU$
But:

$\ds \bigcap_{i \mathop = 1}^n \bigcup \lset {Y_k: k \ne i} = \O$
contradicting the supposition that $\UU$ has the finite intersection property.
Thus $Y_k \in \UU$ for some $k$.
$\blacksquare$


Sources
2005: R.E. Hodel: Restricted versions of the Tukey-Teichmuller Theorem that are equivalent to the Boolean prime ideal theorem (Arch. Math. Logic Vol. 44: pp. 459 – 472)




