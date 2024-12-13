# 

Source: https://proofwiki.org/wiki/Invertible_Elements_of_Monoid_form_Subgroup_of_Cancellable_Elements



Theorem
Let $\struct {S, \circ}$ be an monoid whose identity is $e_S$.
Let $C$ be the set of all cancellable elements of $S$.
Let $T$ be the set of all invertible elements of $S$.

Then $\struct {T, \circ}$ is a subgroup of $\struct {C, \circ}$.


Proof
From Cancellable Elements of Monoid form Submonoid, $\struct {C, \circ}$ is a submonoid of $\struct {S, \circ}$.
Let its identity be $e_C$ (which may or may not be the same as $e_S$).
Let $T$ be the set of all invertible elements of $S$.
From Invertible Element of Monoid is Cancellable, all the invertible elements of $S$ are also all cancellable, so $T \subseteq C$.

Let $x, y \in T$.
Clearly $x^{-1}, y^{-1} \in T$, as if $x, y$ are invertible, then so are their inverses.

Taking the group axioms in turn:


Group Axiom $\text G 0$: Closure
By Inverse of Product, $x^{-1} \circ y^{-1} \in T$.
Thus $\struct {T, \circ}$ is closed.
$\Box$


Group Axiom $\text G 1$: Associativity
This is inherited from $S$, by Subsemigroup Closure Test.
Thus $\struct {T, \circ}$ is associative.
$\Box$


Group Axiom $\text G 2$: Existence of Identity Element
All the elements of $\struct {C, \circ}$ are by definition cancellable
So, by Identity of Cancellable Monoid is Identity of Submonoid:

$e_C \in T$
Thus $\struct {T, \circ}$ has an identity element.
$\Box$


Group Axiom $\text G 3$: Existence of Inverse Element
By Inverse of Inverse in Monoid:

$\struct {x^{-1} \circ y^{-1} }^{-1} \in T$
Thus every element of $\struct {T, \circ}$ has an inverse.
$\Box$

All the group axioms are thus seen to be fulfilled, and so $\struct {T, \circ}$ is a group.
$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): Chapter $4$. Groups: Exercise $13$
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 8$: Compositions Induced on Subsets: Theorem $8.5$




