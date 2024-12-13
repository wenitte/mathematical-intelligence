# 

Source: https://proofwiki.org/wiki/Left_Cancellable_Elements_of_Semigroup_form_Subsemigroup

Theorem
Let $\struct {S, \circ}$ be a semigroup.
Let $C_\lambda$ be the set of left cancellable elements of $\struct {S, \circ}$.

Then $\struct {C_\lambda, \circ}$ is a subsemigroup of $\struct {S, \circ}$.


Proof
Let $C_\lambda$ be the set of left cancellable elements of $\struct {S, \circ}$:

$C_\lambda = \set {x \in S: \forall a, b \in S: x \circ a = x \circ b \implies a = b}$

Let $x, y \in C_\lambda$.
Then:














\(\ds \paren {x \circ y} \circ a\)

\(=\)







\(\ds \paren {x \circ y} \circ b\)














\(\ds \leadsto \ \ \)





\(\ds x \circ \paren {y \circ a}\)

\(=\)







\(\ds x \circ \paren {y \circ b}\)





by associativity of $\circ$








\(\ds \leadsto \ \ \)





\(\ds x \circ a\)

\(=\)







\(\ds x \circ b\)





as $y \in C_\lambda$








\(\ds \leadsto \ \ \)





\(\ds a\)

\(=\)







\(\ds b\)





as $x \in C_\lambda$








\(\ds \leadsto \ \ \)





\(\ds x \circ y\)

\(\in\)







\(\ds C_\lambda\)










Thus $\struct {C_\lambda, \circ}$ is closed.
Therefore by the Subsemigroup Closure Test $\struct {C_\lambda, \circ}$ is a subsemigroup of $\struct {S, \circ}$.
$\blacksquare$





