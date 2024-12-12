# 

Source: https://proofwiki.org/wiki/Existence_of_Homomorphism_between_Localizations_of_Ring



Theorem
Let $A$ be a commutative ring with unity.
Let $S, T \subseteq A$ be multiplicatively closed subsets.

The following statements are equivalent:

$(1): \quad$ There exists an $A$-algebra homomorphism $h : A_S \to A_T$ between localizations, the induced homomorphism.
$(2): \quad S$ is a subset of the saturation of $T$.
$(3): \quad$  The saturation of $S$ is a subset of the saturation of $T$.
$(4): \quad$  Every prime ideal meeting $S$ also meets $T$.


Proof
Let $i : A \to A_S$ and $j : A \to A_T$ be the localization homomorphisms.


$(1)$ implies $(2)$
Let $h : A_S \to A_T$ be an $A$-algebra homomorphism.
Then by definition, $j = h \circ i$:

$\xymatrix{
A \ar[d]_i \ar[r]^{j} & A_T\\
A_S \ar[ru]_{h} }$
Let $s \in S$.
By definition of localization, $\map i s$ is a unit of $A_S$.
By Ring Homomorphism Preserves Invertible Elements, $\map j s = \map h {\map i s}$ is a unit of $A_T$.
Thus $s$ is an element of the saturation of $T$.
$\Box$


$(2)$ implies $(1)$
Let $S$ be a subset of the saturation of $T$.
Then its image $j \sqbrk S \subseteq A_T^\times$ consists of units of $A_T$.
By definition of localization at $S$, there exists a unique $A$-algebra homomorphism $h : A_S \to A_T$.
$\Box$


2 implies 3
Let $S$ be a subset of the saturation of $T$.
By definition, its saturation is the smallest saturated multiplicatively closed subset of $A$ containing $S$.
Thus the saturation of $S$ is a subset of the saturation of $T$.
$\Box$


$(3)$ implies $(2)$
By definition, $S$ is a subset of its saturation.
$\Box$


$(3)$ iff $(4)$
By definition, the saturation of $S$ is the complement of the union of prime ideals that are disjoint from $S$:

$\ds \map {\operatorname{Sat} } S = A - \bigcup \set {\mathfrak p \in \Spec A: \mathfrak p \cap S = \O}$
Thus:














\(\ds \map {\operatorname{Sat} } S\)

\(\subseteq\)







\(\ds \map {\operatorname{Sat} } T\)














\(\ds \leadstoandfrom \ \ \)





\(\ds A - \bigcup \set {\mathfrak p \in \Spec A: \mathfrak p \cap S = \O}\)

\(\subseteq\)







\(\ds A - \bigcup \set {\mathfrak p \in \Spec A: \mathfrak p \cap T = \O}\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \bigcup \set {\mathfrak p \in \Spec A: \mathfrak p \cap S = \O}\)

\(\supseteq\)







\(\ds \bigcup \set {\mathfrak p \in \Spec A: \mathfrak p \cap T = \O}\)





Subset iff Complement is Superset of Complement








\(\ds \leadstoandfrom \ \ \)

\(\ds \forall \mathfrak p \in \Spec A: \, \)



\(\ds \mathfrak p \cap T = \O\)

\(\implies\)







\(\ds \mathfrak p \subseteq \bigcup \set {\mathfrak q \in \Spec A: \mathfrak q \cap S = \O}\)





Sets are Subset iff Union is Subset



To finish, we show that the last statement is equivalent to:

$\forall \mathfrak p \in \Spec A: \mathfrak p \cap T = \O \implies \mathfrak p \cap S = \O$
We show that, for $\mathfrak p \in \Spec A$:

$\ds \mathfrak p \subseteq \bigcup \set {\mathfrak q \in \Spec A: \mathfrak q \cap S = \O} \iff \mathfrak p \cap S = \O$
Let $\mathfrak p \in \Spec A$.
If $\mathfrak p \cap S = \O$, then by Set is Subset of Union:

$\ds \mathfrak p \subseteq \bigcup \set {\mathfrak q \in \Spec A: \mathfrak q \cap S = \O}$
Conversely, let $\ds \mathfrak p \subseteq \bigcup \set {\mathfrak q \in \Spec A: \mathfrak q \cap S = \O}$.
By:

Union of Sets Disjoint with Set
Subset of Disjoint Set
we have $\mathfrak p \cap S = \O$.
We conclude that $\map {\operatorname{Sat} } S \subseteq \map {\operatorname{Sat} } T$ if and only if

$\forall \mathfrak p \in \Spec A: \mathfrak p \cap T = \O \implies \mathfrak p \cap S = \O$
That is:

$\forall \mathfrak p \in \Spec A: \mathfrak p \cap S \ne \O \implies \mathfrak p \cap T \ne \O$
$\blacksquare$


Also see
Uniqueness of Homomorphism between Localizations of Ring




