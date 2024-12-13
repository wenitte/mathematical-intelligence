# 

Source: https://proofwiki.org/wiki/Right_Cancellable_Elements_of_Semigroup_form_Subsemigroup

Theorem
Let $\struct {S, \circ}$ be a semigroup.
Let $C_\rho$ be the set of right cancellable elements of $\struct {S, \circ}$.

Then $\struct {C_\rho, \circ}$ is a subsemigroup of $\struct {S, \circ}$.


Proof
Let $C_\rho$ be the set of right cancellable elements of $\struct {S, \circ}$:

$C_\rho = \set {x \in S: \forall a, b \in S: a \circ x = b \circ x \implies a = b}$

Let $x, y \in C_\rho$.
Then:














\(\ds a \circ \paren {x \circ y}\)

\(=\)







\(\ds b \circ \paren {x \circ y}\)














\(\ds \leadsto \ \ \)





\(\ds \paren {a \circ x} \circ y\)

\(=\)







\(\ds \paren {b \circ x} \circ y\)





by associativity of $\circ$








\(\ds \leadsto \ \ \)





\(\ds a \circ x\)

\(=\)







\(\ds b \circ x\)





as $y \in C_\rho$








\(\ds \leadsto \ \ \)





\(\ds a\)

\(=\)







\(\ds b\)





as $x \in C_\rho$








\(\ds \leadsto \ \ \)





\(\ds x \circ y\)

\(\in\)







\(\ds C_\rho\)










Thus $\struct {C_\rho, \circ}$ is closed.
Therefore by the Subsemigroup Closure Test $\struct {C_\rho, \circ}$ is a subsemigroup of $\struct {S, \circ}$.
$\blacksquare$





