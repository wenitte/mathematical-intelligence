# 

Source: https://proofwiki.org/wiki/Free_Matroid_is_Matroid

Theorem
Let $S$ be a finite set.
Let $\struct {S, \powerset S}$ be the free matroid of $S$.

Then $\struct {S, \powerset S}$ is a matroid.


Proof
Let $S$ have cardinality $n$.
Let $\struct {S, \mathscr I_{n, n} }$ be the uniform matroid of rank $n$.
From Cardinality of Proper Subset of Finite Set, every subset of $S$ has cardinality less than or equal to $n$.
It follows that $\mathscr I_{n, n} = \powerset S$.
From Uniform Matroid is Matroid, then $\struct {S, \powerset S}$ Is a matroid.
$\blacksquare$


Sources
1976: Dominic Welsh: Matroid Theory ... (previous) ... (next) Chapter $1.$ $\S 3.$ Examples of Matroids




