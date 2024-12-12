# 

Source: https://proofwiki.org/wiki/Centralizer_of_Group_Element_is_Subgroup/Proof_2

Theorem
Let $\struct {G, \circ}$ be a group and let $a \in G$.
Then $\map {C_G} a$, the centralizer of $a$ in $G$, is a subgroup of $G$.


Proof
Let $\struct {G, \circ}$ be a group.
We have that:

$\forall a \in G: e \circ a = a \circ e \implies e \in \map {C_G} a$
Thus $\map {C_G} a \ne \O$.

Let $x, y \in \map {C_G} a$.
Then from Commutation with Group Elements implies Commuation with Product with Inverse:

$a \circ x \circ y^{-1} = x \circ y^{-1} \circ a$
so:

$x \circ y^{-1} \in\map {C_G} a$
The result follows by the One-Step Subgroup Test, the result follows.
$\blacksquare$


Sources
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): $\S 3.2$: Groups; the axioms: Exercise $(11)$




