# 

Source: https://proofwiki.org/wiki/Operation_is_Right_Operation_iff_Anticommutative_with_Left_Cancellable_Element



Theorem
Let $\struct {S, \circ}$ be a semigroup.
Then:

$\circ$ is the right operation
if and only if:

$\circ$ is anticommutative and has a left cancellable element.


Proof
Sufficient Condition
Let $\circ$ be the right operation.
Then from Right Operation is Anticommutative we have that $\circ$ is anticommutative.

Let $x \in S$ be arbitrary.
Let $y, z \in S$ such that:

$x \circ z = x \circ y$
Then:














\(\ds x \circ z\)

\(=\)







\(\ds z\)





Definition of Right Operation














\(\ds x \circ y\)

\(=\)







\(\ds y\)





Definition of Right Operation








\(\ds \leadsto \ \ \)





\(\ds z\)

\(=\)







\(\ds y\)









That is, $x$ is a left cancellable element for all $x \in S$.

Thus:

$\circ$ is anticommutative and has a left cancellable element.
$\Box$


Necessary Condition
Let $\circ$ be anticommutative and have a left cancellable element $z$.
As $\struct {S, \circ}$ is a semigroup it follows from Semigroup Axiom $\text S 1$: Associativity that $\circ$ is associative.

Hence from Associative and Anticommutative:

$\forall x, y, z \in S: z \circ x \circ y = z \circ y$
As $z$ is left cancellable:

$\forall x, y \in S: x \circ y = y$
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 7$: Semigroups and Groups: Exercise $7.17$




