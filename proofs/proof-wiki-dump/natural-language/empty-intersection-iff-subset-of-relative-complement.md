# 

Source: https://proofwiki.org/wiki/Empty_Intersection_iff_Subset_of_Relative_Complement

Theorem
Let $S$ be a set.
Let $A, B$ be subset of $S$.

Then $A \cap B = \O \iff A \subseteq \relcomp S B$


Proof
$A \cap B = \O$
if and only if

$\forall x \in S: x \notin A \cap B$ by Empty Set as Subset
if and only if

$\forall x \in S: \neg \paren {x \in A \land x \in B}$ by definition of intersection
if and only if

$\forall x \in S: x \notin A \lor x \notin B$ by De Morgan's Laws (Logic)/Disjunction of Negations
if and only if

$\forall x \in S: x \in A \implies x \notin B$ by Rule of Material Implication
if and only if

$\forall x \in S: x \in A \implies x \in \relcomp S B$ by definition of relative complement
if and only if

$A \subseteq \relcomp S B$ by Subset in Subsets.
$\blacksquare$


Sources
Mizar article SUBSET_1:23




