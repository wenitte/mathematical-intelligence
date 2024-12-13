# 

Source: https://proofwiki.org/wiki/Rank_Function_Property_of_Well-Founded_Relation

Theorem
Let $\struct {S, \RR}$ be a relational structure.
Let $\struct {T, \prec}$ be a strictly well-ordered set.
Let there exist a rank function $\operatorname {rk}: S \to T$, that is:

$\forall x, y \in S: \paren {x \ne y \text { and } \tuple {x, y} \in \RR} \implies \map {\operatorname {rk} } x \prec \map {\operatorname {rk} } y$

Then $\RR$ is a well-founded relation.


Proof
Aiming for a contradiction, suppose $\RR$ is not a well-founded relation.
From Infinite Sequence Property of Well-Founded Relation, there exists an infinite sequence $\sequence {a_n}$ of elements of $S$ such that:

$\forall n \in \N: \paren {a_{n + 1} \mathrel \RR a_n} \text { and } \paren {a_{n + 1} \ne a_n}$
Let $A = \operatorname {rk} \sqbrk {\sequence {a_n} }$ denote the image of $\sequence {a_n}$ under $\operatorname {rk}$.
From Image is Subset of Codomain:

$A \subseteq T$
Let $m \in A$ be the smallest element of $A$.
Such a smallest element exists by the fact that $T$ is well-ordered by $\prec$.
Let $a_k \in S$ such that $\map {\operatorname {rk} } {a_k} = m$.
Then $a_{k + 1} \mathrel \RR a_k$ by hypothesis.
But then:

$\map {\operatorname {rk} } {a_{k + 1} } \prec m$
by definition of $\operatorname {rk}$.
Both $\map {\operatorname {rk} } {a_{k + 1} } \in A$ and $m \in A$.
But $m$ is the smallest element of $A$ under $\prec$.
This contradicts $\map {\operatorname {rk} } {a_{k + 1} } \prec m$.
Hence by Proof by Contradiction our initial assumption that $\RR$ is not a well-founded relation was false.
Hence the result.
$\blacksquare$


Sources
1996: Winfried Just and Martin Weese: Discovering Modern Set Theory. I: The Basics ... (previous) ... (next): Part $1$: Not Entirely Naive Set Theory: Chapter $2$: Partial Order Relations: Claim $4$




