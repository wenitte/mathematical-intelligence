# 

Source: https://proofwiki.org/wiki/Extension_of_Extension_of_Mapping_is_Extension

Theorem
Let $A, B, C, S$ be sets such that $A \subseteq B \subseteq C$.
Let $f: A \to S$, $g: B \to S$ and $h: C \to S$ be mappings such that:

$g$ is an extension of $f$ to $B$
$h$ is an extension of $g$ to $C$.

Then $h$ is an extension of $f$ to $C$.


Proof
By definition of extension:

$\forall x \in A: \map f x = \map g x$
and:

$\forall x \in B: \map g x = \map h x$
and so:

$\forall x \in A: \map g x = \map h x$
from which it follows that:

$\forall x \in A: \map f x = \map h x$
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $1$: Theory of Sets: $\S 9$: Inverse Functions, Extensions, and Restrictions: Exercise $3$




