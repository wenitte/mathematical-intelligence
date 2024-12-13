# 

Source: https://proofwiki.org/wiki/Group_Action_on_Prime_Power_Order_Subset/Stabilizer_of_Maximal_Power_Order_Subset

Lemma
Let $G$ be a finite group.
Let $\mathbb S = \set {S \subseteq G: \card S = p^n}$ where $p$ is prime.
That is, the set of all subsets of $G$ whose cardinality is the power of a prime number.

Let $G$ act on $\mathbb S$ by the group action defined in Group Action on Sets with k Elements:

$\forall S \in \mathbb S: g * S = g S = \set {x \in G: x = g s: s \in S}$.

Then:

If $p^n$ is the maximal power of $p$ dividing $\order G$, and if $p \nmid \card {\Orb S}$, then $\forall s \in S: \Stab S s = S$.


Proof
Let $p^n$ be the maximal power of $p$ dividing $\order G$.
Let $p \nmid \card {\Orb S}$.
From the Orbit-Stabilizer Theorem, we have:

$\order G = \card {\Orb S} \times \order {\Stab S}$

As $p \nmid \card {\Orb S}$, it must be the case that $p^n \divides \order {\Stab S}$.
Thus:

$\order {\Stab S} \ge p^n$
Now we note from Cosets are Equivalent that:

$\order {\Stab S} = \order {\Stab S s}$
Thus we have that:

$\order {\Stab S s} \ge p^n$
Again using the fact that:

$\forall S \in \mathbb S: \order {\Stab S s} \divides \card S = p^n$
we also have that:

$\order {\Stab S s} \le p^n$
Therefore:

$\order {\Stab S s} = p^n$
However, as was show in the proof of Group Action on Sets with k Elements:

$\forall s \in S: \Stab S s \subseteq S$
Therefore:

$\Stab S s = S$
$\blacksquare$





