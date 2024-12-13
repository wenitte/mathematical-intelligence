# 

Source: https://proofwiki.org/wiki/Orbits_of_Group_Action_on_Sets_with_Power_of_Prime_Size/Orbit_whose_Length_is_not_Divisible_by_p

Lemma
Let $G$ be a finite group such that $\order G = k p^n$ where $p \nmid k$.
Let $\mathbb S = \set {S \subseteq G: \order S = p^n}$

Let $G$ act on $\mathbb S$ by the group action defined in Group Action on Sets with k Elements:

$\forall S \in \mathbb S: g * S = g S = \set {x \in G: x = g s: s \in S}$

Then:

Each orbit whose length is not divisible by $p$ contains exactly one Sylow $p$-subgroup.


Proof
First it is shown that each orbit whose length is not divisible by $p$ contains at least one Sylow $p$-subgroup.
From the reasoning in the First Sylow Theorem, we know that:

at least one $S \in \mathbb S$ is such that $p \nmid \card {\Orb S}$
and that for such a set:

$\Stab S$ is a Sylow $p$-subgroup of $G$.
From Group Action on Prime Power Order Subset:

$\forall s \in S: \Stab S s = S$
Therefore:

$\Stab S = S s^{-1}$
Thus for any $s \in S$, $S s^{-1}$ is a Sylow $p$-subgroup of $G$.
It also follows that $s^{-1} \Stab S s$ is also a subgroup of $G$ with the same number of elements as $\Stab S$.
Thus $s^{-1} \Stab S s = s^{-1} \paren {S s^{-1} } s = s^{-1} S$ is a Sylow $p$-subgroup of $G$ in the orbit of $S$.
From the Orbit-Stabilizer Theorem:

$\card {\Orb S} = k$
as $\order {\Stab S} = p^n$.
So if an orbit has length not divisible by $p$, this orbit contains at least one Sylow $p$-subgroup of $G$ (that is, $\Stab S$ and also $s^{-1} \Stab S s$).
The length of the orbit is $k$.
$\Box$

Next it is shown that each orbit whose length is not divisible by $p$ contains no more than one Sylow $p$-subgroup:
Let $H$ be a Sylow $p$-subgroup of $G$.
Now $\Orb H$ consists of all $g * H = g H$, that is, all the right cosets of $H$.
But the only right coset of $H$ which is a subgroup of $G$ is in fact $H$ itself.
None of the rest of the elements of $\mathbb S$ can actually be a subgroup of $G$.
Thus, no orbit can contain more than one Sylow $p$-subgroup.
$\blacksquare$





