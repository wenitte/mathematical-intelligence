# 

Source: https://proofwiki.org/wiki/Operation_is_Left_Operation_iff_Anticommutative_with_Right_Cancellable_Element



Theorem
Let $\struct {S, \circ}$ be an semigroup.
Then:

$\circ$ is the left operation
if and only if:

$\circ$ is anticommutative and has a right cancellable element.


Proof
Sufficient Condition
Let $\circ$ be the left operation.
Then from Left Operation is Anticommutative we have that $\circ$ is anticommutative.

Let $x \in S$ be arbitrary.
Let $y, z \in S$ such that:

$z \circ x = y \circ x$

Then:














\(\ds z \circ x\)

\(=\)







\(\ds z\)





Definition of Left Operation














\(\ds y \circ x\)

\(=\)







\(\ds y\)





Definition of Left Operation








\(\ds \leadsto \ \ \)





\(\ds z\)

\(=\)







\(\ds y\)









That is, $x$ is a right cancellable element for all $x \in S$.

Thus:

$\circ$ is anticommutative and has a right cancellable element.
$\Box$


Necessary Condition
Let $\circ$ be anticommutative and have a right cancellable element $z$.
As $\struct {S, \circ}$ is a semigroup it follows from Semigroup Axiom $\text S 1$: Associativity that $\circ$ is associative.

Hence from Associative and Anticommutative:

$\forall x, y, z \in S: x \circ y \circ z = x \circ z$
As $z$ is right cancellable:

$\forall x, y \in S: x \circ y = x$
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 7$: Semigroups and Groups: Exercise $7.17$




