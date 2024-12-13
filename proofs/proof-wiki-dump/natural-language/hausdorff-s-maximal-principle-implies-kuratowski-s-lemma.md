# 

Source: https://proofwiki.org/wiki/Hausdorff%27s_Maximal_Principle_implies_Kuratowski%27s_Lemma

Theorem
Let Hausdorff's Maximal Principle be accepted as true.
Then Kuratowski's Lemma holds.


Proof 1
Recall Hausdorff's Maximal Principle:
Let $A$ be a non-empty set of sets.
Let $S$ be the set of all chain of sets of $A$ (ordered under the subset relation).
Then every element of $S$ is a subset of a maximal element of $S$ under the subset relation.
$\Box$

Recall Kuratowski's Lemma:
Let $S$ be a  set of sets which is closed under chain unions.
Then every element of $S$ is a subset of a maximal element of $S$ under the subset relation.
$\Box$

So, let us assume Hausdorff's Maximal Principle.
Let $S$ be a non-empty set of sets which is closed under chain unions.
$\set b$ is trivially a chain.
Hence by Hausdorff's Maximal Principle $\set b$ is a subset of a maximal chain of elements of $S$.
Hence $b$ is an element of a maximal chain $C$ of elements of $S$.
We have by hypothesis that $S$ is closed under chain unions.
Hence $\bigcup C \in S$.
Then $b \subseteq \bigcup C$.
If $\bigcup C$ were a proper subset of some element $x \in S$, $C$ would be a proper subset of the chain $C \cup \set x$.
But $C$ is maximal so that cannot happen.
Hence $\bigcup C$ is maximal .
Thus it is seen that Kuratowski's Lemma holds.
$\blacksquare$


Proof 2
We have:

Hausdorff's Maximal Principle implies Axiom of Choice
Axiom of Choice implies Kuratowski's Lemma
$\blacksquare$





