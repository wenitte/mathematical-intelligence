# 

Source: https://proofwiki.org/wiki/Relations_with_Combinations_of_Reflexivity,_Symmetry_and_Transitivity_Properties



Theorem
Let $S$ be a set which has at least $3$ elements.
Then it is possible to set up a relation $\circledcirc$ on $S$ which has any combination of the $3$ properties:

Reflexivity
Symmetry
Transitivity
but this is not possible for a set which has fewer than $3$ elements.


Proof
In the following:

$S_n$ denotes the set $S_n = \set {s_1, s_2, \ldots, s_n}$ of cardinality $n$, where $n \in \Z_{\ge 0}$ is a non-negative integer.
$\circledcirc$ denotes an arbitrary relation on $S_n$.

Let:

$\map R \circledcirc$ denote that $\circledcirc$ is reflexive
$\map S \circledcirc$ denote that $\circledcirc$ is symmetric
$\map T \circledcirc$ denote that $\circledcirc$ is transitive


Set of Cardinality $0$
When $S = S_0 = \O$, the result Relation on Empty Set is Equivalence applies.
Hence $\circledcirc$ is always reflexive, symmetric and transitive:

$\map R \circledcirc$
$\map S \circledcirc$
$\map T \circledcirc$
$\Box$


Set of Cardinality $1$
Let $S = S_1 = \set {s_1}$.
From Relation on Set of Cardinality 1 is Symmetric and Transitive, $\circledcirc$ symmetric and transitive.
Thus when $n = 1$, it is not possible for a relation on $S_n$ to be either non-symmetric or non-transitive

Hence either:

$\neg \map R \circledcirc$
$\map S \circledcirc$
$\map T \circledcirc$
when $\circledcirc$ is the null relation, or:

$\map R \circledcirc$
$\map S \circledcirc$
$\map T \circledcirc$
when $\circledcirc$ is the trivial relation.
$\Box$


Set of Cardinality $2$
Let $S = S_2 = \set {s_1, s_2}$.
From Reflexive Relation on Set of Cardinality 2 is Transitive, it is not possible for $\circledcirc$ to be both reflexive and non-transitive.
From Relation on Set of Cardinality 2 cannot be Non-Symmetric and Non-Transitive, it is not possible for $\circledcirc$ to be neither symmetric nor transitive.

Thus the following combinations of $R$, $S$ and $T$ are not possible with $S_2$:

$\neg \map R \circledcirc, \neg \map S \circledcirc, \neg \map T \circledcirc$
$\map R \circledcirc, \neg \map S \circledcirc, \neg \map T \circledcirc$
$\map R \circledcirc, \map S \circledcirc, \neg \map T \circledcirc$

However, we note the following examples of the possible combinations of properties for relations on $S_2$:

$(1): \quad \circledcirc := \O$, which is the null relation on $S_2$.
From Null Relation is Antireflexive, Symmetric and Transitive, $\circledcirc$ is always antireflexive, symmetric and transitive, and so:

$\neg \map R \circledcirc$
$\map S \circledcirc$
$\map T \circledcirc$

$(2):$

$\circledcirc := \set {\tuple {s_1, s_1}, \tuple {s_1, s_2}, \tuple {s_2, s_1}, \tuple {s_2, s_2} } = S \times S$
that is, the trivial relation.
From Trivial Relation is Equivalence:.

$\map R \circledcirc$
$\map S \circledcirc$
$\map T \circledcirc$

$(3): \quad \circledcirc := \set {\tuple {s_1, s_2} }$:
By inspection:

$\neg \map R \circledcirc$
$\map S \circledcirc$
$\neg \map T \circledcirc$

$(4):$

$\circledcirc := \set {\tuple {s_1, s_1}, \tuple {s_1, s_2} }$
By inspection:

$\neg \map R \circledcirc$
$\neg \map S \circledcirc$
$\map T \circledcirc$

$(5):$

$\circledcirc := \set {\tuple {s_1, s_1}, \tuple {s_2, s_2}, \tuple {s_1, s_2} }$
By inspection:

$\map R \circledcirc$
$\neg \map S \circledcirc$
$\map T \circledcirc$
$\Box$


Set of Cardinality $\ge 3$
Let $S_n = \set {s_1, s_2, \ldots, s_n}$.
In the following, the smallest examples of relations on $S_n$ will be given to exemplify each combination of $R$, $S$ and $T$,

$(1): \quad \circledcirc = \set {\tuple {s_1, s_2}, \tuple {s_2, s_3} }$
We have:

$\neg \map R \circledcirc$ because for example $\tuple {s_1, s_1} \notin \circledcirc$
$\neg \map S \circledcirc$ because for example $\tuple {s_1, s_2} \in \circledcirc$ but $\tuple {s_2, s_1} \notin \circledcirc$
$\neg \map T \circledcirc$ because for example $\tuple {s_1, s_2} \in \circledcirc$ and $\tuple {s_2, s_3} \in \circledcirc$ but $\tuple {s_1, s_3} \notin \circledcirc$.

$(2): \quad \circledcirc = \set {\tuple {s_1, s_2}, \tuple {s_2, s_3}, \tuple {s_1, s_3} }$
We have:

$\neg \map R \circledcirc$ because for example $\tuple {s_1, s_1} \notin \circledcirc$
$\neg \map S \circledcirc$ because for example $\tuple {s_1, s_2} \in \circledcirc$ but $\tuple {s_2, s_1} \notin \circledcirc$

We note that there exists exactly one pair of elements of $\circledcirc$ of the form $\tuple {\tuple {x, y}, \tuple {y, z} }$:

$\tuple {\tuple {s_1, s_2}, \tuple {s_2, s_3} }$
and in this case we also have that:

$\tuple {\tuple {s_1, s_3} }$
Hence:

$\map T \circledcirc$

$(3): \quad \circledcirc = \set {\tuple {s_1, s_2}, \tuple {s_2, s_1} }$
We have:

$\neg \map R \circledcirc$ because for example $\tuple {s_1, s_1} \notin \circledcirc$
$\neg \map T \circledcirc$ because for example $\tuple {s_1, s_2} \in \circledcirc$ and $\tuple {s_2, s_1} \in \circledcirc$ but $\tuple {s_1, s_1} \notin \circledcirc$.

We have:

$\tuple {s_1, s_2} \in \circledcirc$ and $\tuple {s_2, s_1} \in \circledcirc$
and so in all cases:

$\tuple {x, y} \in \circledcirc \implies \tuple {y, x} \in \circledcirc$
Hence:

$\map S \circledcirc$

$(4): \quad \circledcirc = \O$, that is, the null relation.
From Null Relation is Antireflexive, Symmetric and Transitive:

$\neg \map R \circledcirc$
$\map S \circledcirc$
$\map T \circledcirc$

It remains to provide examples of $\circledcirc$ for which $\circledcirc$ is reflexive.
By definition, $\circledcirc$ is reflexive if and only if it is a superset of the diagonal relation: 

$\Delta_S \subseteq \circledcirc$

So in the remaining examples it is taken as read that $\circledcirc$ is reflexive

$(5): \quad \circledcirc = \Delta_{S_n} \cup \set {\tuple {s_1, s_2}, \tuple {s_2, s_3} }$

$\map R \circledcirc$ as discussed
$\neg \map S \circledcirc$ because $\tuple {s_1, s_2} \in \circledcirc$ but $\tuple {s_2, s_1} \notin \circledcirc$
$\neg \map T \circledcirc$ because for example $\tuple {s_1, s_2} \in \circledcirc$ and $\tuple {s_2, s_3} \in \circledcirc$ but $\tuple {s_1, s_3} \notin \circledcirc$.

$(6): \quad \circledcirc = \Delta_{S_n} \cup \set {\tuple {s_1, s_2} }$

$\map R \circledcirc$ as discussed
$\neg \map S \circledcirc$ because $\tuple {s_1, s_2} \in \circledcirc$ but $\tuple {s_2, s_1} \notin \circledcirc$

Apart from the trivial $\tuple {\tuple {x, x}, \tuple {x, x} }$ pairs there exist exactly two pair of elements of $\circledcirc$ of the form $\tuple {\tuple {x, y}, \tuple {y, z} }$:

$\tuple {\tuple {s_1, s_1}, \tuple {s_1, s_2} } \implies \tuple {s_1, s_2}$
$\tuple {\tuple {s_1, s_2}, \tuple {s_2, s_2} } \implies \tuple {s_1, s_2}$
and so:

$\map T \circledcirc$

$(7): \quad \circledcirc = \Delta_{S_n} \cup \set {\tuple {s_1, s_2}, \tuple {s_2, s_3}, \tuple {s_3, s_2}, \tuple {s_2, s_1} }$

$\map R \circledcirc$ as discussed
$\map S \circledcirc$ by inspection
$\neg \map T \circledcirc$ because for example $\tuple {s_1, s_2} \in \circledcirc$ and $\tuple {s_2, s_3} \in \circledcirc$ but $\tuple {s_1, s_3} \notin \circledcirc$.

$(8): \quad \circledcirc = \Delta_{S_n}$
From Diagonal Relation is Equivalence:

$\map R \circledcirc$
$\map S \circledcirc$
$\map T \circledcirc$
$\blacksquare$


Sources
1977: Gary Chartrand: Introductory Graph Theory ... (previous) ... (next): Appendix $\text{A}.2$: Cartesian Products and Relations: Problem Set $\text{A}.2$: $12$
(examples of $3$ such categories on a set with cardinality $3$ only)




