# 

Source: https://proofwiki.org/wiki/Ordering_is_Equivalent_to_Subset_Relation/Lemma

Theorem
Let $\struct {S, \preceq}$ be an ordered set.

Then:

$\forall a_1, a_2 \in S: \paren {a_1 \preceq a_2 \implies {a_1}^\preceq \subseteq {a_2}^\preceq}$
where ${a_1}^\preceq$ denotes the lower closure of $a_1$.


Proof
Let $a_1 \preceq a_2$.
Then by the definition of lower closure:

$a_1 \in {a_2}^\preceq$

Let $a_3 \in {a_1}^\preceq$.
Then by definition:

$a_3 \preceq a_1$
As an ordering is transitive, it follows that:

$a_3 \preceq a_2$
and so:

$a_3 \in {a_2}^\preceq$
This holds for all $a_3 \in {a_1}^\preceq$.
Thus by definition of subset:

${a_1}^\preceq \subseteq {a_2}^\preceq$
$\blacksquare$





