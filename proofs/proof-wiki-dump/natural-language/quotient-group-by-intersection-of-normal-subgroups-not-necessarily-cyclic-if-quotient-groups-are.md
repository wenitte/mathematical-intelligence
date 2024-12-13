# 

Source: https://proofwiki.org/wiki/Quotient_Group_by_Intersection_of_Normal_Subgroups_not_necessarily_Cyclic_if_Quotient_Groups_are

Theorem
Let $G$ be a group.
Let $N$ and $K$ be normal subgroups of $G$.
Let the quotient groups $G / N$ and $G / K$ be cyclic.

Then the quotient group $G / \paren {N \cap K}$ is not necessarily cyclic.


Proof
Proof by Counterexample:
Let $G = \set {e, a, b, c}$ be the Klein $4$-group whose identity element is $e$.
Let $N = \set {e, a}$ and $K = \set {e, b}$.
By Subgroups of Klein Four-Group, both $N$ and $K$ are subgroups of $G$.
By Prime Group is Cyclic, both $N$ and $K$ are cyclic.
By Subgroup of Abelian Group is Normal, both $N$ and $K$ are normal in $G$.
Then we have that:

$N \cap K = e$
and so by Trivial Quotient Group is Quotient Group:

$G / \paren {N \cap K} \cong G$
But $G$ is the Klein $4$-group, which is not cyclic.
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $8$: Homomorphisms, Normal Subgroups and Quotient Groups: Exercise $16$




