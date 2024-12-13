# 

Source: https://proofwiki.org/wiki/Pairwise_Disjoint_Subsets_in_Semiring_Part_of_Partition



Lemma
Let $\mathbb S$ be a semiring of sets.
Let $A, A_1, A_2, \ldots, A_n$ all belong to $\mathbb S$.
Let $A_1, A_2, \ldots, A_n$ all be pairwise disjoint subsets of $A$.

Then there exists a finite expansion of $A$:

$\ds \exists s \ge n: A = \bigcup_{k \mathop = 1}^s A_k$
with $A_1, \ldots, A_n$ as its first $n$ elements, such that:

$(1): \quad \forall k, 1 \le k \le s: A_k \in \mathbb S$
$(2): \quad \forall k, l, 1 \le k \le s, 1 \le l \le s: k \ne l \implies A_k \cap A_l = \O$.

That is, the nature of a semiring is such that every collection of pairwise disjoint subsets of a given set $A$ of that semiring is part of a larger collection of pairwise disjoint subsets of $A$ which forms a complete partition of $A$.


Proof
Basis for the Induction
By definition of semiring of sets, the lemma holds for $n = 1$.


Induction Hypothesis
Now we suppose that the lemma holds for $n = m$, and we attempt to show it consequently holds for $n = m + 1$.


Induction Step
So, let $A_1, A_2, \ldots, A_m, A_{m + 1}$ all be pairwise disjoint subsets of $A$.
By hypothesis:

$A = A_1 \cup A_2 \cup \cdots \cup A_m \cup B_1 \cup \cdots \cup B_p$
where $A_1, A_2, \ldots, A_m, B_1, \ldots, B_p$ are pairwise disjoint subsets of $A$, all belonging to $\mathbb S$.
Let $B_{q 1} = A_{m + 1} \cap B_q$.
By definition of semiring of sets:

$B_q = B_{q 1} \cup \cdots \cup B_{q r_q}$
where all the $B_{q j}$ are pairwise disjoint subsets of $B_q$, all belonging to $\mathbb S$.

But then we see that:

$\ds A = A_1 \cup A_2 \cup \cdots \cup A_m \cup A_{m + 1} \cup \bigcup_{q \mathop = 1}^p \paren {\bigcup_{j \mathop = 2}^{r_q} B_{q j} }$
and so the lemma is true for $m + 1$.
The result follows by induction.
$\blacksquare$





