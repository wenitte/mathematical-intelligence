# 

Source: https://proofwiki.org/wiki/Axiom_of_Choice_implies_Hausdorff%27s_Maximal_Principle/Proof_1

Theorem
Let the Axiom of Choice be accepted.
Then Hausdorff's Maximal Principle holds.


Proof
Let $S$ be the set of all chains of $\PP$.
$S \ne \O$ since the empty set is an element of $S$. 
From Subset Relation is Ordering, we have that $\struct {S, \subseteq}$ is partially ordered by inclusion.
Let $C$ be a totally ordered subset of $\struct {S, \subseteq}$.
Then $\bigcup C$ is a chain in $C$ by Set of Chains is Closed under Chain Unions under Subset Relation.
This shows that $S$, ordered by set inclusion, is an inductive ordered subset.
By applying Zorn's Lemma, the result follows.
$\blacksquare$


Source of Name
This entry was named for Felix Hausdorff.





