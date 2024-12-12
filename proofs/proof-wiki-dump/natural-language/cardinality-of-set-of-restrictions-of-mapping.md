# 

Source: https://proofwiki.org/wiki/Cardinality_of_Set_of_Restrictions_of_Mapping

Theorem
Let $S$ and $T$ be sets.
Let $f: S \to T$ be a mapping.
Let the cardinality of $S$ be $n$.
Let $F$ be the set of restrictions of $f$ to a subset of $S$.

Then there are $2^n$ elements of $F$.


Proof
Let $A \subseteq S$ be a subset of $S$.
Let $g: A \to T$ be the restriction of $f$ to $A$.
By definition of restriction of mapping:

$\forall x \in A: \map g x = \map f x$
and hence there is one mapping $g: A \to T$ such that $g$ is a restriction of $f$.
Therefore for each subset of $S$ there exists a unique restriction of $f$ to that subset.
Therefore there are as many restriction of $f$ as there are subsets of $S$.
That is, by definition of power set, the same as the number of elements of the power set of $S$.
From Cardinality of Power Set of Finite Set, that is $2^n$.
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $1$: Theory of Sets: $\S 9$: Inverse Functions, Extensions, and Restrictions




