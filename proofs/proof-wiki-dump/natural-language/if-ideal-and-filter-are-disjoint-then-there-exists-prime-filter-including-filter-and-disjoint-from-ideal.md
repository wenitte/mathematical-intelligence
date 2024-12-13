# 

Source: https://proofwiki.org/wiki/If_Ideal_and_Filter_are_Disjoint_then_There_Exists_Prime_Filter_Including_Filter_and_Disjoint_from_Ideal

Theorem
Let $L = \struct {S, \vee, \wedge, \preceq}$ be a distributive lattice.
Let $I$ be an ideal in $L$.
Let $F$ be a filter on $L$ such that

$F \cap I = \O$

Then there exists a prime filter $P$ in $L$:
$F \subseteq P$ and $P \cap I = \O$


Proof
By Dual Distributive Lattice is Distributive:

$L^{-1}$ is a distributive lattice
where $L^{-1} = \struct {S, \succeq}$ denotes the dual of $L$.
By Filter is Ideal in Dual Ordered Set:

$I' := F$ as an ideal in $L^{-1}$.
By Ideal is Filter in Dual Ordered Set:

$F' := I$ as a filter on $L^{-1}$.
By assumption:

$I' \cap F' = \O$
By If Ideal and Filter are Disjoint then There Exists Prime Ideal Including Ideal and Disjoint from Filter:

there exists prime ideal $P'$ in $L^{-1}$: $I' \subseteq P'$ and $P' \cap F' = \O$
By Prime Filter is Prime Ideal in Dual Lattice:

$P := P'$ as a prime filter on $L$.
Thus there exists prime filter $P$ on $L$: $F \subseteq P$ and $P \cap I = \O$
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_7:25




