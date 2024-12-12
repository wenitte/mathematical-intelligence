# 

Source: https://proofwiki.org/wiki/Conjugacy_Class_of_Identity_is_only_Conjugacy_Class_which_is_Subgroup



Theorem
Let $G$ be a group.
Let $e$ denote the identity of $G$.
Let $\conjclass g$ denote the conjugacy class of the element $g$.

Then conjugacy class of identity is the only conjugacy class which is a subgroup of $G$:

$\conjclass g < G \iff g = e$


Proof
Necessary Condition
Assume $g = e$.
Then by Identity of Group is in Singleton Conjugacy Class, $\conjclass e = \set e$, which is the trivial subgroup.
$\Box$


Sufficient Condition
Assume $g \neq e$.
Then by Conjugacy Classes are Disjoint, $e \notin \conjclass g$.
Since $\conjclass g$ does not contain the identity element, it could not be a subgroup.
$\blacksquare$


Sources
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): conjugacy class




