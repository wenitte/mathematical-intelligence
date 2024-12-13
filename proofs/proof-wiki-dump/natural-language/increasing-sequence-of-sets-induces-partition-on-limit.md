# 

Source: https://proofwiki.org/wiki/Increasing_Sequence_of_Sets_induces_Partition_on_Limit



Theorem
Let $\sequence {S_n}_{n \mathop \in \N} \uparrow S$ be an increasing sequence of sets with limit $S$.
Define $T_1 = S_1$, and, for $n \in \N$, $T_{n + 1} = S_{n + 1} \setminus S_n$, where $\setminus$ denotes set difference.

Then $\sequence {T_n}_{n \mathop \in \N}$ is a countable partition of $S$.


Proof
That $\sequence {T_n}_{n \mathop \in \N}$ partitions $S$, means precisely that:

$(1): \quad$ The $T_n$ are pairwise disjoint
$(2): \quad \ds \bigcup_{n \mathop \in \N} T_n = S$
It is more convenient to prove $(1)$ and $(2)$ separately:


Proof of $(1)$
Let $l, m \in \N$ be such that $l < m$.
Then by Set Difference is Subset, $T_l \subseteq S_l$.
As the $S_n$ form an increasing sequence of sets, it follows that also $T_l \subseteq S_{m - 1}$ because $m - 1 \ge l$.
Now compute as follows:














\(\ds T_m \cap T_l\)

\(\subseteq\)







\(\ds T_m \cap S_{m-1}\)





Set Intersection Preserves Subsets














\(\ds \)

\(\subseteq\)







\(\ds \paren {S_m \setminus S_{m - 1} } \cap S_{m-1}\)





Definition of $T_m$














\(\ds \)

\(=\)







\(\ds \O\)





Set Difference Intersection with Second Set is Empty Set



Hence $T_m \cap T_l = \O$.
Reversing the roles of $m$ and $l$ leads to the same conclusion if $l > m$.
Hence, by definition, the $T_n$ are pairwise disjoint.
$\Box$


Proof of $(2)$
By Set Union Preserves Subsets and Set Difference is Subset, have that:

$\ds \bigcup_{n \mathop \in \N} T_n \subseteq \bigcup_{n \mathop \in \N} S_n = S$
To establish $(2)$, by definition of set equality, it is now only required to show that $\ds S \subseteq \bigcup_{n \mathop \in \N} T_n$.

So let $s \in S$.
Then by definition of union, the set:

$N_s := \set {n \in \N: s \in S_n}$
is nonempty.
By Well-Ordering Principle, $N_s$ contains a minimal element, $n$, say.
If $n = 1$, then $s \in S_1 = T_1$.
If $n > 1$, then, by minimality of $n$, $s \notin S_{n - 1}$.
Hence, by definition of set difference, $s \in T_n = S_n \setminus S_{n - 1}$.

By definition of set union, it follows that:

$\ds s \in \bigcup_{n \mathop \in \N} T_n$
That is, by definition of subset:

$\ds S \subseteq \bigcup_{n \mathop \in \N} T_n$
$\blacksquare$





