# 

Source: https://proofwiki.org/wiki/Isomorphic_Ordinals_are_Equal

Theorem
Let $A$ and $B$ be ordinals that are order isomorphic.
Then $A = B$.


Proof 1
Let $S \cong T$.
Aiming for a contradiction, suppose that $S \ne T$.
Then from the corollary to Relation between Two Ordinals, either:

$S$ is an initial segment of $T$
or:

$T$ is an initial segment of $S$.
But as $S \cong T$, from Well-Ordered Class is not Isomorphic to Initial Segment, neither $S$ nor $T$ can be an initial segment of the other.
From this contradiction it follows that $S = T$.
$\blacksquare$


Proof 2
From Well-Ordered Class is not Isomorphic to Initial Segment, neither $A$ nor $B$ can be an initial segment of the other.
By definition, every element of an ordinal is an initial segment of it.
Hence, neither $A$ nor $B$ can be an element of the other.
By Ordinal Membership is Trichotomy, it follows that $A = B$.
$\blacksquare$





