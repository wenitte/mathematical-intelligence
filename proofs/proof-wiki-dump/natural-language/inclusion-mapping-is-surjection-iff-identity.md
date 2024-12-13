# 

Source: https://proofwiki.org/wiki/Inclusion_Mapping_is_Surjection_iff_Identity



Theorem
Let $T$ be a set.
Let $S\subseteq T$ be a subset.
Let $i_S: S \to T$ be the inclusion mapping.

Then:

$i_S: S \to T$ is surjective if and only if $i_S: S \to T = I_S: S \to S$
where $I_S: S \to S$ denotes the identity mapping on $S$.

Alternatively, this theorem can be worded as:

$i_S: S \to S = I_S: S \to S$

It follows directly that from Surjection by Restriction of Codomain‎, the surjective restriction of $i_S: S \to T$ to $i_S: S \to \Img {i_S}$ is itself the identity mapping.


Proof
It is apparent from the definitions of both the inclusion mapping and the identity mapping that:

$(1): \quad \Dom {i_S} = S = \Dom {I_S}$
$(2): \quad \forall s \in S: \map {i_S} s = s = \map {I_S} s$


Necessary Condition
Let $i_S: S \to T = I_S: S \to S$.
From Equality of Mappings, we have that the codomain of $i_S$ equals the codomain of $I_S$.
Thus the codomain of $i_S$ equals the codomain of $I_S$ equals $S$ and thus $T = S$.
So $\forall s \in S: s = \map {i_S} s$ and so $i_S$ is surjective.
$\Box$


Sufficient Condition
Now let $i_S: S \to T$ be a surjection.

Then:

$\forall s \in T: s = \map {i_S} s \implies s \in S$
and therefore:

$T \subseteq S$
Thus:

$T = S$
and so the codomain of $i_S$ equals the codomain of $I_S$ which equals $S$.

Thus $i_S: S \to T = I_S: S \to S$.
$\blacksquare$


Sources
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 8$: Functions




