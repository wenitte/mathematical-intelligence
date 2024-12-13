# 

Source: https://proofwiki.org/wiki/Relation_between_Two_Ordinals/Corollary



Corollary to Relation between Two Ordinals
Let $S$ and $T$ be ordinals.
If $S \ne T$, then either $S$ is an initial segment of $T$, or vice versa.


Proof 1
By Ordinal Membership is Trichotomy, either $S \in T$ or $T \in S$.
By definition, every element of an ordinal is an initial segment.
Hence the result.
$\blacksquare$


Proof 2
If either $S \subset T$ or $T \subset S$ then we invoke Ordinal Subset of Ordinal is Initial Segment, and the proof is complete.

Aiming for a contradiction, suppose $S \not \subset T$ and $T \not \subset S$.
Now from Intersection is Subset, we have $S \cap T \subset T$ and $S \cap T \subset S$.
By Intersection of Two Ordinals is Ordinal‎, $S \cap T$ is an ordinal.
So by Ordinal Subset of Ordinal is Initial Segment, we have:

$S \cap T = S_a$ for some $a \in S$
$S \cap T = S_b$ for some $b \in T$
Then:

$a = S_a = S \cap T = T_b = b$
But $a \in S, b \in T$.
Thus $a = b = S \cap T$.
But $S \cap T = S_a$, so:

$x \in S \cap T \implies x \subset a$
In particular, this means $a \subset a$, which is a contradiction.
So either $S \subset T$ or $T \subset S$, and again we invoke Ordinal Subset of Ordinal is Initial Segment, and the proof is complete.
$\blacksquare$


Proof 3
We have that $S \ne T$
Therefore, from Relation between Two Ordinals either $S \subset T$ or $T \subset S$.
By Ordering on Ordinal is Subset Relation or Transitive Set is Proper Subset of Ordinal iff Element of Ordinal, either $S \in T$ or $T \in S$.
By definition, every element of an ordinal is an initial segment; hence the result.
$\blacksquare$





