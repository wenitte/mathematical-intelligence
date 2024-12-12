# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Set_Partition



Theorem
Let $S$ be a set

The following definitions of the concept of Set Partition are equivalent:

Definition 1
A partition of $S$ is a set of subsets $\Bbb S$ of $S$ such that:

$(1): \quad$ $\Bbb S$ is pairwise disjoint: $\forall S_1, S_2 \in \Bbb S: S_1 \cap S_2 = \O$ when $S_1 \ne S_2$
$(2): \quad$ The union of $\Bbb S$ forms the whole set $S$: $\ds \bigcup \Bbb S = S$
$(3): \quad$ None of the elements of $\Bbb S$ is empty: $\forall T \in \Bbb S: T \ne \O$.
Definition 2
A partition of $S$ is a set of non-empty subsets $\Bbb S$ of $S$ such that each element of $S$ lies in exactly one element of $\Bbb S$.


Proof
Definition 1 implies Definition 2
Let $\Bbb S$ be a set of subsets $\Bbb S$ of $S$ such that:

$(1): \quad$ $\Bbb S$ is pairwise disjoint: $\forall S_1, S_2 \in \Bbb S: S_1 \cap S_2 = \O$ when $S_1 \ne S_2$
$(2): \quad$ The union of $\Bbb S$ forms the whole set $S$: $\ds \bigcup \Bbb S = S$
$(3): \quad$ None of the elements of $\Bbb S$ is empty: $\forall T \in \Bbb S: T \ne \O$.

By $(3)$ all sets in $\Bbb S$ are non-empty.

Aiming for a contradiction, suppose there exists $x \in S$ in more than one set of $\Bbb S$.
That is:

$\exists S_1, S_2 \in \Bbb S, S_1 \ne S_2: x \in S_1 \land x \in S_2$
Then by definition of set intersection:

$x \in S_1 \cap S_2$
and so $S_1 \cap S_2 \ne \O$.
This contradicts condition $(1)$.
So no element of $S$ can be in more than one set of $\Bbb S$.

Aiming for a contradiction, suppose there exists $x \in S$ in none of the sets of $\Bbb S$.
Then $\ds x \notin \bigcup \Bbb S$ and so $\Bbb S \notin S$.
This contradicts condition $(2)$.
So every element of $S$ is in at least one set of $\Bbb S$.

Thus $x$ lies in exactly one element of $\Bbb S$.
Hence it follows that $\Bbb S$ is a set of non-empty subsets of $S$ such that each element of $S$ lies in exactly one element of $\Bbb S$.
$\Box$


Definition 2 implies Definition 1
Let $\Bbb S$ be a set of non-empty subsets of $S$ such that each element of $S$ lies in exactly one element of $\Bbb S$.

$(3)$ is fulfilled automatically by definition.

Consider $\Bbb S$.
From Union of Subsets is Subset: Subset of Power Set:

$\ds \bigcup \Bbb S \subseteq S$
Let $x \in T$.
We have by hypothesis:

$\exists S_1 \in \Bbb S: x \in S_1$
That is:

$\ds x \in \bigcup \Bbb S$
and so:

$\ds S \subseteq \bigcup \Bbb S$
By definition of set equality:

$\ds \bigcup \Bbb S = S$
thus demonstrating that $(2)$ holds.

Aiming for a contradiction, suppose $\Bbb S$ were not pairwise disjoint, and that:

$\exists S_1, S_2 \in \Bbb S: S_1 \cap S_2 \ne \O$
Then:

$\exists x \in S: x \in S_1 \cap S_2$
By definition of set intersection:

$x \in S_1$ and $x \in S_2$
thus contradicting the supposition that each element of $S$ lies in exactly one element of $\Bbb S$.
So $\Bbb S$ is pairwise disjoint and so $(1)$ holds.
Hence the result.
$\blacksquare$





