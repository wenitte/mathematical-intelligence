# 

Source: https://proofwiki.org/wiki/Group_of_Permutations_either_All_or_Half_Even

Theorem
Let $G$ be a group of permutations.

Then either exactly half of the permutations in $G$ are even, or they are all even.


Proof
From Parity Function is Homomorphism, the mapping:

$\sgn : G \to \Z_2$
is a homomorphism.
Then:

$G / \map \ker \sgn \cong \Img \sgn$
from the First Isomorphism Theorem.
The only possibilities for $\Img \sgn$ are $\set 0$ or $\Z_2$.
So either:

$\order {G / \map \ker \sgn} = 1$
in which case all the permutations of $G$ are even, or:

$\order {G / \map \ker \sgn} = 2$
in which case exactly half of them are.
$\blacksquare$





