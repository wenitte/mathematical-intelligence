# 

Source: https://proofwiki.org/wiki/Exists_Subset_which_is_not_Element


It has been suggested that this page be renamed.In particular: clumsyTo discuss this page in more detail, feel free to use the talk page.
Theorem
Let $S$ be a set.
Then there exists at least one subset of $S$ which is not an element of $S$.


Proof 1
Let $S$ be a set.
Let $T$ be the set of all elements of $S$ which do not contain $S$ as elements.
Then by the corollary to Russell's paradox $T$ itself cannot be an element of $S$.
This $T$ is the required subset.


Proof 2
Consider the power set $\powerset S$ of $S$.
From Cantor's Theorem, there is no surjection $f: S \to \powerset S$.
That is, there are more subsets of $S$ than there are elements of $S$.
So there must be at least one subset of $S$ which is not an element of $S$.
$\blacksquare$





