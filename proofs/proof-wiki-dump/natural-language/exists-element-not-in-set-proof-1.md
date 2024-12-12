# 

Source: https://proofwiki.org/wiki/Exists_Element_Not_in_Set/Proof_1

Theorem
Let $S$ be a set.

Then:

$\exists x: x \notin S$

That is, for any set, there exists some element which is not in that set.


Proof
Consider the power set $\powerset S$ of $S$.
Aiming for a contradiction, suppose $\forall x \in \powerset S: x \in S$.
Then the identity mapping $I_S: S \to \powerset S$ would be a surjection.
But from Cantor's Theorem, there is no surjection $f: S \to \powerset S$.
From this contradiction it follows that:

$\exists x \in \powerset S: x \notin S$
Hence the result.
$\blacksquare$





