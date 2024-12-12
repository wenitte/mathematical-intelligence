# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Cartesian_Product_of_Indexed_Family



Theorem
The following definitions of the concept of Cartesian Product of Family are equivalent:

Definition 1
Let $I$ be an indexing set.
Let $\family {S_i}_{i \mathop \in I}$ be a family of sets indexed by $I$.
The cartesian product of $\family {S_i}_{i \mathop \in I}$ is the set of all families $\family {s_i}_{i \mathop \in I}$ with $s_i \in S_i$ for each $i \in I$.

This can be denoted $\ds \prod_{i \mathop \in I} S_i$ or, if $I$ is understood, $\ds \prod_i S_i$.

Definition 2
Let $\family {S_i}_{i \mathop \in I}$ be an indexed family of sets.
The cartesian product of $\family {S_i}_{i \mathop \in I}$ is the set:

$\ds \prod_{i \mathop \in I} S_i := \set {f \in \paren {\bigcup_{i \mathop \in I} S_i}^I : \forall i \in I: \paren {\map f i \in S_i} }$
where $\ds \paren {\bigcup_{i \mathop \in I} S_i}^I$ denotes the set of all mappings from $I$ to $\ds \bigcup_{i \mathop \in I} S_i$.


Proof
$(1)$ implies $(2)$
Let $\ds \prod_{i \mathop \in I} S_i$ be a Cartesian product of $\family {S_i}_{i \mathop \in I}$ by definition $1$.
Then by definition:

$\ds \prod_{i \mathop \in I} S_i$ is the set of all families $\family {s_i}_{i \mathop \in I}$ with $s_i \in S_i$ for each $i \in I$
By definition, a indexed family of sets is a mapping from an indexing set $I$ to a set of sets $\SS$ such that:

$\forall i \in I: S_i \subseteq \SS$
Let $f: I \to \SS$ be an indexed family of sets.

For each $i \in I$, $\map f i$ is an element of $S_i$.
That is:

$\map f i \in S_i$
Hence:

$\Img f = f \sqbrk I \subseteq \ds \bigcup_{i \mathop \in I} S_i$
Thus:

$\ds \prod_{i \mathop \in I} S_i = \set {f \in \paren {\bigcup_{i \mathop \in I} S_i}^I : \forall i \in I: \paren {\map f i \in S_i} }$

Hence $\ds \prod_{i \mathop \in I} S_i$ is a Cartesian product of $\family {S_i}_{i \mathop \in I}$ by definition $2$.
$\Box$


$(2)$ implies $(1)$
Let $\ds \prod_{i \mathop \in I} S_i$ be a Cartesian product of $\family {S_i}_{i \mathop \in I}$ by definition $2$.
Then by definition:

$\ds \prod_{i \mathop \in I} S_i := \set {f \in \paren {\bigcup_{i \mathop \in I} S_i}^I : \forall i \in I: \paren {\map f i \in S_i} }$
where $\ds \paren {\bigcup_{i \mathop \in I} S_i}^I$ denotes the set of all mappings from $I$ to $\ds \bigcup_{i \mathop \in I} S_i$.

Let $f \in \ds \prod_{i \mathop \in I} S_i$ be arbitrary.
Then:

$\forall i \in I: \map f i = s_i$ for some $s_i \in S_i$
That is, $\ds \prod_{i \mathop \in I} S_i$ is the set of all mapping from an indexing set $I$ to a set of sets $\ds \bigcup_{i \mathop \in I} S_i$.
Thus by definition of indexed family of sets:

$\ds \prod_{i \mathop \in I} S_i$ is the set of all families $\family {s_i}_{i \mathop \in I}$ with $s_i \in S_i$ for each $i \in I$
Thus $\ds \prod_{i \mathop \in I} S_i$ is a Cartesian product of $\family {S_i}_{i \mathop \in I}$ by definition $1$.
$\blacksquare$





