# 

Source: https://proofwiki.org/wiki/Direct_Image_Mapping_of_Relation_is_Mapping

Theorem
Let $S$ and $T$ be sets.
Let $\RR \subseteq S \times T$ be a relation on $S \times T$.
Let $\RR^\to: \powerset S \to \powerset T$ be the direct image mapping of $\RR$:

$\forall X \in \powerset S: \map {\RR^\to} X = \set {t \in T: \exists s \in X: \tuple {s, t} \in \RR}$

Then $\RR^\to$ is indeed a mapping.


Proof
Take the general relation $\RR \subseteq S \times T$.
Let $X \subseteq S$, that is $X \in \powerset S$.

Suppose $X = \O$.
Then from Image of Empty Set is Empty Set:

$\map {\RR^\to} X = \O \subseteq T$

Suppose $X = S$.
Then from Image is Subset of Codomain: Corollary 1:

$\map {\RR^\to} X = \Img \RR \subseteq T$

Finally, suppose $\O \subset X \subset S$.
From Image is Subset of Codomain, again:

$\map {\RR^\to} X \subseteq T$

Now, from the definition of the power set, we have that:

$Y \subseteq T \iff Y \in \powerset T$

We defined $\RR^\to \subseteq \powerset S \times \powerset T$ such that:

$\RR^\to: \powerset S \to \powerset T: \map {\RR^\to} X = \set {t \in T: \exists s \in X: \tuple {s, t} \in \RR}$
By definition, there is only one $\map {\RR^\to} X$ for any given $X$, and so $\RR^\to$ is many-to-one.

We have shown that:

$\forall X \subseteq S: \map {\RR^\to} X \in \powerset T$
So:

$\forall X \in \powerset S: \exists_1 Y \in \powerset T: \map {\RR^\to} X = Y$
So:

$\RR^\to$ is defined for all $X \in \powerset S$
and therefore $\RR^\to$ is a mapping.
$\blacksquare$


Also see
Inverse Image Mapping of Relation is Mapping




