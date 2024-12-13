# 

Source: https://proofwiki.org/wiki/Quotient_Structure_on_Group_defined_by_Congruence_equals_Quotient_Group



Theorem
Let $\struct {G, \circ}$ be a group whose identity is $e$.
Let $\RR$ be a congruence relation for $\circ$.
Let $\struct {G / \RR, \circ_\RR}$ be the quotient structure defined by $\RR$.
Let $N = \eqclass e \RR$ be the normal subgroup induced by $\RR$.
Let $\struct {G / N, \circ_N}$ be the quotient group of $G$ by $N$.

Then $\struct {G / \RR, \circ_\RR}$ is the subgroup $\struct {G / N, \circ_N}$ of the semigroup $\struct {\powerset G, \circ_\PP}$.


Proof
Let $\eqclass x \RR \in G / \RR$.
By Congruence Relation on Group induces Normal Subgroup:

$\eqclass x \RR = x N$
where $x N$ is the (left) coset of $N$ in $G$.

Similarly, let $y N \in G / N$.
Then from Normal Subgroup induced by Congruence Relation defines that Congruence:

$y N = \eqclass x \RR$
where:

$\eqclass x \RR$ is the equivalence class of $y$ under $\RR$
$\RR$ is the equivalence relation defined by $N$.

Hence the result.
$\blacksquare$


Also see
Congruence Relation induces Normal Subgroup
Congruence Relation on Group induces Normal Subgroup
Normal Subgroup induced by Congruence Relation defines that Congruence


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 11$: Quotient Structures: Theorem $11.5$




