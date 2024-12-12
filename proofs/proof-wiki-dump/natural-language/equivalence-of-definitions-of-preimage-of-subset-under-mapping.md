# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Preimage_of_Subset_under_Mapping



Theorem
Let $f: S \to T$ be a mapping from a set $S$ to a set $T$.
Let $Y \subseteq T$ be a subset of $T$.
The following definitions of the concept of Preimage of Subset under Mapping are equivalent:

Definition 1
The preimage of $Y$ under $f$ is defined as:

$f^{-1} \sqbrk Y := \set {s \in S: \exists t \in Y: \map f s = t}$

That is, the preimage of $Y$ under $f$ is the image of $Y$ under $f^{-1}$, where $f^{-1}$ can be considered as a relation.

Definition 2
The preimage of $Y$ under $f$ can be seen to be an element of the codomain of the inverse image mapping $f^\gets: \powerset T \to \powerset S$ of $f$:

$\forall Y \in \powerset T: \map {f^\gets} Y := \set {s \in S: \exists t \in Y: \map f s = t}$
Thus:

$\forall Y \subseteq T: f^{-1} \sqbrk Y = \map {f^\gets} Y$


Proof
The difference in definitions is no more than a difference in notations.

Let $X$ be a preimage by definition $2$.
Then by definition:

$X := \map {f^\gets} Y$
By definition of inverse image mapping of mapping:

$\forall Y \in \powerset T: \map {f^\gets} Y = \set {s \in S: \exists t \in Y: \map f s = t}$
Thus $X$ is a preimage by definition $1$.
$\blacksquare$





