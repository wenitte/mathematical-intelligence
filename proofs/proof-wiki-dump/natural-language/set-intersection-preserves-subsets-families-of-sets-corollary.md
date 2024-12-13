# 

Source: https://proofwiki.org/wiki/Set_Intersection_Preserves_Subsets/Families_of_Sets/Corollary

Theorem
Let $I$ be an indexing set.
Let $\family {B_\alpha}_{\alpha \mathop \in I}$ be an indexed family of subsets of a set $S$.

Let $A$ be a set such that $A \subseteq B_\alpha$ for all $\alpha \in I$.

Then:

$\ds A \subseteq \bigcap_{\alpha \mathop \in I} B_\alpha$


Proof
For each $\alpha \in I$, define $A_\alpha := A$.
Then by Set Intersection is Idempotent, it follows that:

$\ds \bigcap_{\alpha \mathop \in I} A_\alpha = A$

Since $A \subseteq B_\alpha$ for all $\alpha \in I$, the premises of Set Intersection Preserves Subsets are satisfied.
Applying this theorem gives:

$\ds A = \bigcap_{\alpha \mathop \in I} A_\alpha \subseteq \bigcap_{\alpha \mathop \in I} B_\alpha$
which is precisely the desired result.
$\blacksquare$





