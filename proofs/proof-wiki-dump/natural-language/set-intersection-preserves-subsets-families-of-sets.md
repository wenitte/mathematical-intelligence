# 

Source: https://proofwiki.org/wiki/Set_Intersection_Preserves_Subsets/Families_of_Sets



Theorem
Let $I$ be an indexing set.
Let $\family {A_\alpha}_{\alpha \mathop \in I}$ and $\family {B_\alpha}_{\alpha \mathop \in I}$ be indexed families of subsets of a set $S$.
Let:

$\forall \beta \in I: A_\beta \subseteq B_\beta$

Then:

$\ds \bigcap_{\alpha \mathop \in I} A_\alpha \subseteq \bigcap_{\alpha \mathop \in I} B_\alpha$


Corollary 1
Let $I$ be an indexing set.
Let $\family {B_\alpha}_{\alpha \mathop \in I}$ be an indexed family of subsets of a set $S$.

Let $A$ be a set such that $A \subseteq B_\alpha$ for all $\alpha \in I$.

Then:

$\ds A \subseteq \bigcap_{\alpha \mathop \in I} B_\alpha$


Corollary 2
Let $I$ be an indexing set.
Let $\family {A_\alpha}_{\alpha \mathop \in I}$ and $\family {B_\alpha}_{\alpha \mathop \in I}$ be indexed families of subsets of a set $S$.
Let:

$\forall \beta \in I: A_\beta \subseteq B_\beta$

Then:

$\ds \bigcap_{\alpha \mathop \in I} B_\alpha = \O \implies \bigcap_{\alpha \mathop \in I} A_\alpha = \O$


Proof













\(\ds x\)

\(\in\)







\(\ds \bigcap_{\alpha \mathop \in I} A_\alpha\)














\(\ds \leadsto \ \ \)

\(\ds \forall \alpha \in I: \, \)



\(\ds x\)

\(\in\)







\(\ds A_\alpha\)





Definition of Intersection of Family








\(\ds \leadsto \ \ \)

\(\ds \forall \alpha \in I: \, \)



\(\ds x\)

\(\in\)







\(\ds B_\alpha\)





Definition of Subset








\(\ds \leadsto \ \ \)





\(\ds x\)

\(\in\)







\(\ds \bigcap_{\alpha \mathop \in I} B_\alpha\)





Definition of Intersection of Family



By definition of subset:

$\ds \bigcap_{\alpha \mathop \in I} A_\alpha \subseteq \bigcap_{\alpha \mathop \in I} B_\alpha$
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $1$: Theory of Sets: $\S 4$: Indexed Families of Sets: Exercise $1 \ \text{(e)}$




