# 

Source: https://proofwiki.org/wiki/Set_Difference_Union_Intersection/Proof_3

Theorem
$S = \paren {S \setminus T} \cup \paren {S \cap T}$


Proof
By Set Difference is Subset:

$S \setminus T \subseteq S$
By Intersection is Subset:

$S \cap T \subseteq S$
Hence from Union is Smallest Superset:

$\paren {S \setminus T} \cup \paren {S \cap T} \subseteq S$

Let $s \in S$.
Either:

$s \in T$, in which case $s \in S \cap T$ by definition of set intersection
or

$s \notin T$, in which case $s \in S \setminus T$ by definition of set difference.

That is, by definition of set union:

$s \in \paren {S \setminus T} \cup \paren {S \cap T}$
and so by definition of subset:

$S \subseteq \paren {S \setminus T} \cup \paren {S \cap T}$

Hence the result by definition of set equality.
$\blacksquare$


Sources
1964: W.E. Deskins: Abstract Algebra ... (previous) ... (next): $\S 1.1$: Theorem $1.2$




