# 

Source: https://proofwiki.org/wiki/Pairwise_Disjoint_Sets_Partition_Any_Sets_in_Semiring

Lemma
Let $\mathbb S$ be a semiring of sets.
Let $A_1, A_2, \ldots, A_n$ all belong to $\mathbb S$.

Then there exists a finite system of pairwise disjoint sets:

$B_1, B_2, \ldots, B_t \in \mathbb S$
such that every $A_k$ where $k \in \closedint 1 n$ has a finite expansion:

$\ds A_k = \bigcap_{s \mathop \in M_k} B_s$
where $M_k \subseteq \closedint 1 s$.

That is, the nature of a semiring of sets $\mathbb S$ is such that for every collection $\mathbb T$ of elements of $\mathbb S$, there exists a finite collection of disjoint sets of $\mathbb S$ from which you can pick sets from that will build any of the elements of $\mathbb T$.


Proof
If $n = 1$, the lemma follows trivially from the definition of semiring of sets.
Now we suppose that the lemma holds for $n = m$, and we attempt to show it consequently holds for $n = m + 1$.

We consider a system of sets $A_1, A_2, \ldots, A_m, A_{m + 1}$ in $\mathbb S$.
Let $B_1, B_2, \ldots, B_t \in \mathbb S$ satisfy the terms of the lemma for $A_1, A_2, \ldots, A_m$.
Now let $B_{s 1} = A_{m + 1} \cap B_s$.
By Pairwise Disjoint Subsets in Semiring Part of Partition, there exists an expansion:

$\ds A_{m + 1} = \paren {\bigcup_{s \mathop = 1}^t B_{s 1} } \cup \paren {\bigcup_{p \mathop = 1}^q B_p'}$ where $B_p' \in \mathbb S$.
By definition of a semiring of sets, there is an expansion:

$B_s = B_{s 1} \cup B_{s 2} \cup \cdots \cup B_{s r_s}$ where $B_{s j} \in \mathbb S$.
It can be seen that:

$\ds A_k = \bigcup_{s \mathop \in M_k} \paren {\bigcup_{j \mathop = 1}^{r_s}B_{sj} }$ for $k \in \closedint 1 m$
for some $M_k$.
Also, the sets $B_{s j}, B_p'$ are pairwise disjoint.
So, the sets $B_{s j}, B_p'$ satisfy the conditions of the lemma with respect to the sets $A_1, A_2, \ldots, A_m, A_{m + 1}$.
Hence the result by induction.
$\blacksquare$





