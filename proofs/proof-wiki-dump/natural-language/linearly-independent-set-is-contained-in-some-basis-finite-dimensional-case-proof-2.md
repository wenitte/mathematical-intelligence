# 

Source: https://proofwiki.org/wiki/Linearly_Independent_Set_is_Contained_in_some_Basis/Finite_Dimensional_Case/Proof_2

Theorem
Let $E$ be a vector space of $n$ dimensions.
Let $H$ be a linearly independent subset of $E$.
There exists a basis $B$ for $E$ such that $H \subseteq B$.


Proof
Let $H = \set {\xi_1, \xi_2, \ldots, \xi_r}$.
Consider the basis $B = \set {\alpha_1, \alpha_2, \ldots, \alpha_n}$ of $E$.
Consider the set $G = H \cup B = \set {\xi_1, \xi_2, \ldots, \xi_r, \alpha_1, \alpha_2, \ldots, \alpha_n}$.
We have that $G$ is a generator of $E$.
As $B$ is a basis, it follows that each of $H$ is a linear combination of $B$.
Thus $G = H \cup B$ is linearly dependent.
Thus one of the elements $\alpha_i$ of $B$ is a linear combination of the preceding elements of $G$.
Eliminate this one, and do the same thing with with $G \setminus \set {\alpha_i}$. 
Eventually there will exist a set which is a basis of $E$ containing all the elements of $H$.
$\blacksquare$


Sources
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $7$: Vector Spaces: $\S 34$. Dimension: Theorem $67 \ \text{(i)}$




