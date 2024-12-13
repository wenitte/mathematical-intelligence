# 

Source: https://proofwiki.org/wiki/Ordering_is_Equivalent_to_Subset_Relation


This article has been identified as a candidate for Featured Proof status.If you do not believe that this proof is worthy of being a Featured Proof, please state your reasons on the talk page.To discuss this page in more detail, feel free to use the talk page.


Theorem
Let $\struct {S, \preceq}$ be an ordered set.
Then there exists a set $\mathbb S$ of subsets of $S$ such that:

$\struct {S, \preceq} \cong \struct {\mathbb S, \subseteq}$
where:

$\struct {\mathbb S, \subseteq}$ is the relational structure consisting of $\mathbb S$ and the subset relation
$\cong$ denotes order isomorphism.

Hence any ordering on a set can be modelled uniquely by a set of subsets of that set under the subset relation.

Specifically:
Let

$\mathbb S := \set {a^\preceq: a \in S}$
where $a^\preceq$ is the lower closure of $a$.
That is:

$a^\preceq := \set {b \in S: b \preceq a}$
Let the mapping $\phi: S \to \mathbb S$ be defined as:

$\map \phi a = a^\preceq$

Then $\phi$ is an order isomorphism from $\struct {S, \preceq}$ to $\struct {\mathbb S, \subseteq}$.


Proof 1
From Subset Relation is Ordering, we have that $\struct {\mathbb S, \subseteq}$ is an ordered set.

Then let $T$ be defined as:

$T := \set {a^\prec: a \in S}$

Let the mapping $\phi: S \to T$ be defined as:

$\map \phi a = a^\prec$
We are to show that $\phi$ is an order isomorphism.

$\phi$ is clearly surjective, as every $a^\prec$ is defined from some $a \in S$.
Now suppose $x^\prec, y^\prec \in T: x^\prec = y^\prec$.
Then:

$\set {b \in S: b \preceq x} = \set {b \in S: b \preceq y}$
We have that:

$x \in x^\prec = y^\prec$ and $y \in y^\prec = x^\prec$
which means:

$x \preceq y$ and $y \preceq x$
So as an ordering is antisymmetric, we have $x = y$ and so $\phi$ is injective.
Hence by definition, $\phi$ is a bijection.

Now let $a_1 \preceq a_2$.
Then by definition:

$a_1 \in {a_2}^\prec$
Let $a_3 \in {a_1}^\prec$.
Then by definition:

$a_3 \preceq a_1$
As an ordering is transitive, it follows that:

$a_3 \preceq a_2$
and so:

$a_3 \in {a_2}^\prec$
So by definition of a subset:

${a_1}^\prec \subseteq {a_2}^\prec$
Therefore, $\phi$ is order-preserving

Conversely, suppose that ${a_1}^\prec \subseteq {a_2}^\prec$.
Then, since $a_1 \in {a_1}^\prec$, also $a_1 \in {a_2}^\prec$ by definition of subset.
By definition of ${a_2}^\prec$:

$a_1 \preceq a_2$
Hence it is seen that $\phi^{-1}$ is also order-preserving.

Thus it follows that $\phi$ is an order isomorphism between $\struct {S, \preceq}$ and $\struct {\mathbb S, \subseteq}$.
$\blacksquare$


Proof 2
First a lemma:

Lemma
Let $\struct {S, \preceq}$ be an ordered set.

Then:

$\forall a_1, a_2 \in S: \paren {a_1 \preceq a_2 \implies {a_1}^\preceq \subseteq {a_2}^\preceq}$
where ${a_1}^\preceq$ denotes the lower closure of $a_1$.
$\Box$

From Subset Relation is Ordering, we have that $\struct {\mathbb S, \subseteq}$ is an ordered set.
We are to show that $\phi$ is an order isomorphism.
$\phi$ is clearly surjective, as every $a^\preceq$ is defined from some $a \in S$.
By the Lemma, $\phi$ is order-preserving.

Suppose that ${a_1}^\preceq \subseteq {a_2}^\preceq$.
We have that:

$a_1 \in {a_1}^\preceq$
Thus by definition of subset:

$a_1 \in {a_2}^\preceq$
By definition of ${a_2}^\preceq$:

$a_1 \preceq a_2$
Thus $\phi$ is also order-reflecting.

Thus it follows that $\phi$ is an order isomorphism between $\struct {S, \preceq}$ and $\struct {\mathbb S, \subseteq}$.
$\blacksquare$


Also see
Definition:Representation Theorem, of which this is an example


Sources
1996: Winfried Just and Martin Weese: Discovering Modern Set Theory. I: The Basics ... (previous) ... (next): Part $1$: Not Entirely Naive Set Theory: Chapter $2$: Partial Order Relations: Exercise $21 \ \text {(b)}$




