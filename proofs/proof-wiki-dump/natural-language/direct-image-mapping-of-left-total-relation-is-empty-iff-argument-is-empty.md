# 

Source: https://proofwiki.org/wiki/Direct_Image_Mapping_of_Left-Total_Relation_is_Empty_iff_Argument_is_Empty



Theorem
Let $S$ and $T$ be sets.
Let $\RR: S \to T$ be a left-total relation on $S \times T$.

Let $\RR^\to$ be the direct image mapping of $\RR$:

$\RR^\to: \powerset S \to \powerset T: \map {\RR^\to} X = \set {t \in T: \exists s \in X: \tuple {s, t} \in \RR}$

Then:

$\map {\RR^\to} X = \O \iff X = \O$


Proof
Sufficient Condition
Let $\map {\RR^\to} X = \O$.
By definition of direct image mapping:

$\set {t \in T: \exists s \in X: \tuple {s, t} \in \RR} = \O$
That is:

$\neg \exists s \in X: \tuple {s, t} \in \RR$
But as $\RR$ is a left-total relation:

$\forall s \in X: \exists t \in T: \tuple {s, t} \in \RR$
Thus:

$\neg \exists s \in X$
and so:

$X = \O$
$\Box$


Sufficient Condition
Let $X = \O$.
Then by definition of direct image mapping:

$\map {\RR^\to} X = \O$
$\blacksquare$





