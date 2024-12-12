# 

Source: https://proofwiki.org/wiki/Existence_of_Maximal_Commutative_Subalgebra/Unital

Theorem
Let $K$ be a field. 
Let $A$ be an unital algebra over $K$.
Let $S \subseteq A$ be a non-empty set such that:

for all $x, y \in S$ we have $x y = y x$.

Then there exists a commutative unital subalgebra of $A$ containing $S$ that is maximal (among all subalgebras) with respect to set inclusion.


Proof
Let ${\mathbf 1}_A$ be the identity element of $A$. 
Note that ${\mathbf 1}_A$ commutes with every element of $S$.
Hence $S' = S \cup \set { {\mathbf 1}_A}$ is such that:

for all $x, y \in S'$ we have $x y = y x$.
Hence applying Existence of Maximal Commutative Subalgebra to $S'$, there exists a commutative subalgebra of $A$ containing $S'$ that is maximal (among all subalgebras) with respect to set inclusion.
In particular:

there exists a commutative unital subalgebra of $A$ containing $S$ that is maximal (among all subalgebras) with respect to set inclusion.
$\blacksquare$





