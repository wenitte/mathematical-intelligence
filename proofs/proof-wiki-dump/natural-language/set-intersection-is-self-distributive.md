# 

Source: https://proofwiki.org/wiki/Set_Intersection_is_Self-Distributive



Theorem
Set intersection is self-distributive:

$\forall A, B, C: \paren {A \cap B} \cap \paren {A \cap C} = A \cap B \cap C = \paren {A \cap C} \cap \paren {B \cap C}$
where $A, B, C$ are sets.


Families of Sets
Let $I$ be an indexing set.
Let $\family {A_\alpha}_{\alpha \mathop \in I}$ and $\family {B_\alpha}_{\alpha \mathop \in I}$ be indexed families of subsets of a set $S$.

Then:

$\ds \map {\bigcap_{\alpha \mathop \in I} } {A_\alpha \cap B_\alpha} = \paren {\bigcap_{\alpha \mathop \in I} A_\alpha} \cap \paren {\bigcap_{\alpha \mathop \in I} B_\alpha}$
where $\ds \bigcap_{\alpha \mathop \in I} A_\alpha$ denotes the intersection of $\family {A_\alpha}$.


General Result
Let $\family {\mathbb S_i} _{i \mathop \in I}$ be an $I$-indexed family of sets of sets.
Then:

$\ds \bigcap_{i \mathop \in I} \bigcap \mathbb S_i = \bigcap \bigcap_{i \mathop \in I} \mathbb S_i$


Proof
We have:

Intersection is Associative
Intersection is Commutative
Set Intersection is Idempotent
The result follows from Associative Commutative Idempotent Operation is Self-Distributive.
$\blacksquare$





