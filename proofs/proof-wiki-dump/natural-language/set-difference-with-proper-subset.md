# 

Source: https://proofwiki.org/wiki/Set_Difference_with_Proper_Subset

Theorem
Let $S$ be a set.
Let $T \subsetneq S$ be a proper subset of $S$.
Let $S \setminus T$ denote the set difference between $S$ and $T$.

Then:

$S \setminus T \ne \O$
where $\O$ denotes the empty set.


Proof
Aiming for a contradiction, suppose $S \setminus T = \O$.
Then:

$\not \exists x \in S: x \notin T$
By De Morgan's laws:

$\forall x \in S: x \in T$
By definition of subset:

$S \subseteq T$
By definition of proper subset, we have that $T \subseteq S$ such that $T \ne S$.
But we have $T \subseteq S$ and $S \subseteq T$.
So by definition of set equality:

$S = T$
From this contradiction it follows that:

$S \setminus T \ne \O$
$\blacksquare$





