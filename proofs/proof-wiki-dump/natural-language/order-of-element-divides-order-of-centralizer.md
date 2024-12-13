# 

Source: https://proofwiki.org/wiki/Order_of_Element_divides_Order_of_Centralizer

Theorem
Let $G$ be a finite group.
Let $x \in G$ be an element of $G$.
Let $\map {C_G} x$ denote the centralizer of $x$.

Then:

$\order x \divides \order {\map {C_G} x}$
where:

$\order x$ denotes the order of $x$ in $G$
$\divides$ denotes divisibility
$\order {\map {C_G} x}$ denotes the order of $\map {C_G} x$.


Proof
From Order of Cyclic Group equals Order of Generator:

$\order x = \order {\gen x}$
where $\gen x$ denotes the subgroup of $G$ generated  by $x$.
By definition, $\gen x$ is a cyclic group.
By Cyclic Group is Abelian, all elements of $\gen x$ commute with $x$.
Thus by definition of centralizer:

$\gen x \subseteq \map {C_G} x$
From Centralizer of Group Element is Subgroup, $\map {C_G} x$ is a subgroup of $G$.
So $\gen x$ is a subgroup of $\map {C_G} x$.
The result follows from Lagrange's theorem.
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $7$: Cosets and Lagrange's Theorem: Exercise $14$




