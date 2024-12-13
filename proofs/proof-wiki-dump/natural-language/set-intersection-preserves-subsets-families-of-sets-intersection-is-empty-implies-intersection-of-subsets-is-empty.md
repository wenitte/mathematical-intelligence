# 

Source: https://proofwiki.org/wiki/Set_Intersection_Preserves_Subsets/Families_of_Sets/Intersection_is_Empty_Implies_Intersection_of_Subsets_is_Empty

Theorem
Let $I$ be an indexing set.
Let $\family {A_\alpha}_{\alpha \mathop \in I}$ and $\family {B_\alpha}_{\alpha \mathop \in I}$ be indexed families of subsets of a set $S$.
Let:

$\forall \beta \in I: A_\beta \subseteq B_\beta$

Then:

$\ds \bigcap_{\alpha \mathop \in I} B_\alpha = \O \implies \bigcap_{\alpha \mathop \in I} A_\alpha = \O$


Proof
Let $\ds \bigcap_{\alpha \mathop \in I} B_\alpha = \O$.
From Set Intersection Preserves Subsets/Families of Sets:

$\ds \bigcap_{\alpha \mathop \in I} A_\alpha \subseteq \bigcap_{\alpha \mathop \in I} B_\alpha = \O$
From Subset of Empty Set:

$\ds \bigcap_{\alpha \mathop \in I} A_\alpha = \O$
$\blacksquare$





