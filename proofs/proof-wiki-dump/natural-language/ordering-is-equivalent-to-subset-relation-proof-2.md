# 

Source: https://proofwiki.org/wiki/Ordering_is_Equivalent_to_Subset_Relation/Proof_2

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


Proof
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





