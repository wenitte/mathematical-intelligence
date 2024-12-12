# 

Source: https://proofwiki.org/wiki/Exists_Bijection_to_a_Disjoint_Set

Theorem
Let $S$ and $T$ be sets.

Then there exists a bijection from $T$ onto a set $T'$ disjoint from $S$.


Proof
Consider the set:

$X = \text{Ran}(S) =  \set {y: \paren {\exists x : \tuple {x, y} \in S} }$
From Relation is Set implies Domain and Image are Sets, this is indeed a set.
That is, $X$ consists of all the elements which are the second coordinate of some ordered pair which happens to be in $S$.

From Exists Element Not in Set, we have that $\exists z: z \notin X$.

Now consider the cartesian product $T' = T \times \set z$.
Suppose that $p \in T'$.
Then $p = \tuple {c, z}$ where $c \in T$.
Suppose $\tuple {c, z} \in S$.
Then that would mean that $z \in X$.
But we have specifically selected $z$ such that $z \notin X$.
So $p = \tuple {c, z} \notin S$.
Thus we have that $T' \cap S = \O$.

There is an obvious bijection $g: T \to T'$:

$\forall t \in T: \map g t = \tuple {t, z}$
and hence the result.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 8$: Compositions Induced on Subsets
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 8$: Compositions Induced on Subsets: Exercise $8.12$




