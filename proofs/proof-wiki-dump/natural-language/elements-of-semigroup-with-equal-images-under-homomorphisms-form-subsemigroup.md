# 

Source: https://proofwiki.org/wiki/Elements_of_Semigroup_with_Equal_Images_under_Homomorphisms_form_Subsemigroup

Theorem
Let $\struct {A, \circ}$ and $\struct {B, *}$ be semigroups.
Let $f: A \to B$ and $g: A \to B$ be semigroup homomorphisms.

Then the set:

$S = \set {x \in A: \map f x = \map g x}$
is a subsemigroup of $A$.


Proof
Let $x, y \in A$. Then:














\(\ds \map f {x \circ y}\)

\(=\)







\(\ds \map f x * \map f y\)





Morphism Property














\(\ds \)

\(=\)







\(\ds \map g x * \map g y\)





Definition of $A$














\(\ds \)

\(=\)







\(\ds \map g {x \circ y}\)





Morphism Property




Thus $x \circ y \in A$.

So, by the Subsemigroup Closure Test:

$S$ is a subsemigroup of $A$.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 14$: Orderings: Exercise $14.13$




