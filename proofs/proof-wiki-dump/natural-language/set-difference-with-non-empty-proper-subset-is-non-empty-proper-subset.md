# 

Source: https://proofwiki.org/wiki/Set_Difference_with_Non-Empty_Proper_Subset_is_Non-Empty_Proper_Subset

Theorem
Let $S$ be a set.
Let $T \subsetneq S$ be a non-empty proper subset of $S$.
Let $S \setminus T$ denote the set difference between $S$ and $T$.

Then:

$S \setminus T$ is a non-empty proper subset of $S$


Proof
From Set Difference is Subset:

$S \setminus T \subseteq S$
From Set Difference with Proper Subset:

$S \setminus T \ne \O$
Then by hypothesis:

$T \ne \O$
From Intersection with Subset is Subset:

$S \cap T = T$
Hence:

$S \cap T \ne \O$
From the contrapositive statement of Set Difference with Disjoint Set:

$S \setminus T \ne S$

It follows that $S \setminus T$ is a non-empty proper subset by definition.
$\blacksquare$





