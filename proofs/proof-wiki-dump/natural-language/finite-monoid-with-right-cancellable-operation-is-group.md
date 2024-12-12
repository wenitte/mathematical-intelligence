# 

Source: https://proofwiki.org/wiki/Finite_Monoid_with_Right_Cancellable_Operation_is_Group

Theorem
Let $\struct {S, \circ}$ be a finite monoid.
Let $\circ$ be a right cancellable operation.

Then $\struct {S, \circ}$ is a group.


Proof
Group Axiom $\text G 0$: Closure, Group Axiom $\text G 1$: Associativity and Group Axiom $\text G 2$: Existence of Identity Element are satisfied by dint of $\struct {S, \circ}$ being a monoid.
Recall the definition of right cancellable operation:

$\forall a, b, c \in S: a \circ c = b \circ c \implies a = b$
Let $\rho_c: S \to S$ be the right regular representation of $\struct {S, \circ}$ with respect to $c$.
By Right Cancellable iff Right Regular Representation Injective, $\rho_c$ is an injection.
By Right Regular Representation wrt Right Cancellable Element on Finite Semigroup is Bijection, $\rho_c$ is a bijection.
Thus $a \circ b = e$ has a unique solution for all $a \in S$.
That is, Group Axiom $\text G 3$: Existence of Inverse Element holds on $S$.
$\blacksquare$


Sources
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): $\S 3.2$: Groups; the axioms: Proposition $2$




