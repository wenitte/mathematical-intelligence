# 

Source: https://proofwiki.org/wiki/Orbits_of_Group_Action_on_Sets_with_Power_of_Prime_Size/Orbit_whose_Length_is_Divisible_by_p

Lemma
Let $G$ be a finite group such that $\order G = k p^n$ where $p \nmid k$.
Let $\mathbb S = \set {S \subseteq G: \order S = p^n}$

Let $G$ act on $\mathbb S$ by the group action defined in Group Action on Sets with k Elements:

$\forall S \in \mathbb S: g * S = g S = \set {x \in G: x = g s: s \in S}$

Then:

Each orbit whose length is divisible by $p$ contains no Sylow $p$-subgroups.


Proof
Let $H$ be a Sylow $p$-subgroup of $G$.
By the definition of $\mathbb S$, and because $\order H = p^n$:

$H \in \mathbb S$
By Group Action on Sets with k Elements:

$g \in G \implies g * H = g H$
which is a left coset of $G$.
However, we know that $g H = H \iff g \in H$.
Now:

$g \in \Stab H \iff g * H = H \iff g \in H$
Thus:

$\Stab H = H$
From the Orbit-Stabilizer Theorem:

$\card {\Orb H} = k$
that is, not divisible by $p$.
As $H \in \Orb H$, the result follows.
$\blacksquare$





