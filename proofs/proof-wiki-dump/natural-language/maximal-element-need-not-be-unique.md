# 

Source: https://proofwiki.org/wiki/Maximal_Element_need_not_be_Unique



Theorem
Let $\struct {S, \preccurlyeq}$ be an ordered set.
It is possible for $S$ to have more than one maximal element.


Proof
Proof by Counterexample:
Consider the set $T$ defined as:

$T = \set {0, 1}$
Let $S$ be defined as:

$S := \powerset T \setminus T$
where $\powerset T$ denotes the power set of $T$.
That is:

$S = \set {\O, \set 0, \set 1}$

Let $\preccurlyeq$ be the relation defined on $S$ as:

$\forall a, b \in S: a \preccurlyeq b \iff a \subseteq b$
That is, $\preccurlyeq$ is the subset relation on $S$.
From Subset Relation is Ordering, $\struct {S, \preccurlyeq}$ is an ordered set.

Let $a \in S$ such that $\set 1 \preccurlyeq a$.
Then by inspection it is apparent that:

$a = \set 1$
That is, $\set 1$ is a maximal element of $\struct {S, \preccurlyeq}$.

Similarly, let $a \in S$ such that $\set 0 \preccurlyeq a$.
Then by inspection it is apparent that:

$a = \set 0$
That is, $\set 0$ is also a maximal element of $\struct {S, \preccurlyeq}$.

Hence $S$ has more than one maximal element.
$\blacksquare$


Examples
Arbitrary Example $1$
Consider the set $S = \set {a, b, c, d, e}$ with the partial ordering $\preccurlyeq$ defined as:

${\preccurlyeq} := \set {\tuple {c, a}, \tuple {d, a}, \tuple {e, a}, \tuple {d, b}, \tuple {e, b}, \tuple {c, b}, \tuple {c, e} }$
This can be illustrated using the following Hasse diagram:


It can be seen by inspection that both $a$ and $b$ are maximal elements of the partially ordered set $\struct {S, \preccurlyeq}$.


Arbitrary Example $2$
Consider the set $S = \set {1, 3, 5, 7, 9}$ under the subset ordering.
Let $T \subseteq \powerset S$ be the set of subsets of $S$ that do not contain both $3$ and $5$.

Then the subsets $\set {1, 3, 7, 9}$ and $\set {1, 5, 7, 9}$ of $S$ are maximal elements of the partially ordered set $\struct {T, \subseteq}$.


Also see
Greatest Element is Unique


Sources
1996: Winfried Just and Martin Weese: Discovering Modern Set Theory. I: The Basics ... (previous) ... (next): Part $1$: Not Entirely Naive Set Theory: Chapter $2$: Partial Order Relations
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): maximal
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): maximal




