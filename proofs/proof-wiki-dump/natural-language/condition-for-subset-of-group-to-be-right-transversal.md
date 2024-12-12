# 

Source: https://proofwiki.org/wiki/Condition_for_Subset_of_Group_to_be_Right_Transversal

Theorem
Let $G$ be a group.
Let $H$ be a subgroup of $G$ whose index in $G$ is $n$:

$\index G H = n$
Let $S \subseteq G$ be a subset of $G$ of cardinality $n$.

Then $S$ is a right transversal for $H$ in $G$ if and only if:

$\forall x, y \in S: x \ne y \implies x y^{-1} \notin H$


Proof
From Definition of Right Transversal, $S$ is a right transversal for $H$ in $G$ if and only if every right coset of $H$ contains exactly one element of $S$.
Since there are $n$ right cosets of $H$  and $S$ has cardinality $n$, if $S$ is not a right transversal for $H$ in $G$, at least one right coset of $H$ contain more than one element of $S$.
Thus the contrapositive of the theorem is as follows:

At least one right coset of $H$ contain more than one element of $S$ if and only if:
$\exists x, y \in S: x \ne y \land x y^{-1} \in H$
This is a consequence of Elements in Same Right Coset iff Product with Inverse in Subgroup.
$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): Chapter $6$: Cosets: Exercise $5$




