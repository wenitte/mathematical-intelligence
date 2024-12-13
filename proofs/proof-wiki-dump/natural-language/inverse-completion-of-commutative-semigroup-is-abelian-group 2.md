# 

Source: https://proofwiki.org/wiki/Inverse_Completion_of_Commutative_Semigroup_is_Abelian_Group



Theorem
Let $\struct {S, \circ}$ be a commutative semigroup
Let all the elements of $\struct {S, \circ}$ be cancellable.

Then an inverse completion of $\struct {S, \circ}$ is an abelian group.


Proof
Let $\struct {S, \circ}$ be a commutative semigroup, all of whose elements are cancellable.
Let $\struct {T, \circ'}$ be an inverse completion of $\struct {S, \circ}$.

From Inverse Completion is Commutative Monoid:

$\struct {T, \circ'} = \struct {S \circ' S^{-1}, \circ'}$
has been shown to be a commutative monoid.

Taking the group axioms in turn:


Group Axiom $\text G 0$: Closure
As $\struct {T, \circ'}$ is a commutative semigroup, it is by definition closed.
$\Box$


Group Axiom $\text G 1$: Associativity
As $\struct {T, \circ'}$ is a commutative semigroup, it is by definition associative.
$\Box$


Group Axiom $\text G 2$: Existence of Identity Element
Let $x \in S$.
Then $x^{-1} \in S^{-1}$ by definition.
As $\struct {T, \circ'} = \struct {S \circ' S^{-1}, \circ'}$ is closed:

$x \circ' x^{-1} \in T$
This holds for all $x \in S$.
As $\struct {T, \circ'}$ is a commutative semigroup:

$\exists e \in T: \forall x \in S: x \circ' x^{-1} = e^{-1} = x \circ' x$
Thus $\struct {T, \circ'}$ has an identity element.
$\Box$


Group Axiom $\text G 3$: Existence of Inverse Element
Every element of $S$ has an inverse in $S^{-1}$.
Therefore every element of $S$ and $S^{-1}$ is invertible.
From Inverse of Product in Associative Structure, every element of $S \circ' S^{-1}$ is therefore also invertible.
Thus every element of $T$ has an inverse.
$\Box$

All the group axioms are thus seen to be fulfilled, and so $\struct {T, \circ'}$ is a group.

Commutativity of $\circ$ has been demonstrated.
Hence the result, by definition of abelian group.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $\S 20$: The Integers: Theorem $20.2$




