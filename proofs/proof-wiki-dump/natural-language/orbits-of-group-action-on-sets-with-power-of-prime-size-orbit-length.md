# 

Source: https://proofwiki.org/wiki/Orbits_of_Group_Action_on_Sets_with_Power_of_Prime_Size/Orbit_Length

Lemma
Let $G$ be a finite group such that $\order G = k p^n$ where $p \nmid k$.
Let $\mathbb S = \set {S \subseteq G: \order S = p^n}$

Let $G$ act on $\mathbb S$ by the group action defined in Group Action on Sets with k Elements:

$\forall S \in \mathbb S: g * S = g S = \set {x \in G: x = g s: s \in S}$

Then:

The length of every orbit of this action is divisible by $k$.


Proof
From the Orbit-Stabilizer Theorem, $\order G = \card {\Orb S} \times \order {\Stab S}$.
From Group Action on Prime Power Order Subset, $\Stab S$ is a $p$-subgroup of $G$.
Therefore:

$k \nmid \order {\Stab S}$
and therefore:

$k \divides \card {\Orb S}$
$\blacksquare$





