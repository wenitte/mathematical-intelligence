# 

Source: https://proofwiki.org/wiki/Group_Action_on_Prime_Power_Order_Subset/Stabilizer_is_p-Subgroup

Lemma
Let $G$ be a finite group.
Let $\mathbb S = \set {S \subseteq G: \card S = p^n}$ where $p$ is prime.
That is, the set of all subsets of $G$ whose cardinality is the power of a prime number.

Let $G$ act on $\mathbb S$ by the group action defined in Group Action on Sets with k Elements:

$\forall S \in \mathbb S: g * S = g S = \set {x \in G: x = g s: s \in S}$.

Then:

$\Stab S$ is a $p$-subgroup of $G$.


Proof
First we show that $\Stab S$ is a $p$-subgroup of $G$:
From Group Action on Sets with k Elements:

$\forall S \in \mathbb S: \order {\Stab S} \divides \card S$
So:

$\order {\Stab S} \divides p^\alpha$
Thus $\Stab S$ is a $p$-group
Thus by Stabilizer is Subgroup, $\Stab S$ is a $p$-subgroup of $G$.
$\blacksquare$





