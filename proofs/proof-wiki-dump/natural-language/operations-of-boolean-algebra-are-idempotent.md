# 

Source: https://proofwiki.org/wiki/Operations_of_Boolean_Algebra_are_Idempotent

Definition
Let $\struct {S, \vee, \wedge}$ be a Boolean algebra.

Then:

$\forall x \in S: x \wedge x = x = x \vee x$
That is, both $\vee$ and $\wedge$ are idempotent operations.


Proof
Let $x \in S$.
Then:














\(\ds x\)

\(=\)







\(\ds x \vee \bot\)





as $\bot$ is the identity of $\vee$














\(\ds \)

\(=\)







\(\ds x \vee \paren {x \wedge \neg x}\)





as $x \wedge \neg x = \bot$














\(\ds \)

\(=\)







\(\ds \paren {x \vee x} \wedge \paren {x \vee \neg x}\)





both $\vee$ and $*$ distribute over the other














\(\ds \)

\(=\)







\(\ds \paren {x \vee x} \wedge \top\)





as $x \vee \neg x = \top$














\(\ds \)

\(=\)







\(\ds x \vee x\)









So $x = x \vee x$.
$\Box$

The result $x = x \wedge x$ follows from Duality Principle (Boolean Algebras).
$\blacksquare$


Sources
1964: W.E. Deskins: Abstract Algebra ... (previous) ... (next): $\S 1.5$: Theorem $1.13$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Boolean algebra
2008: Paul Halmos and Steven Givant: Introduction to Boolean Algebras ... (previous) ... (next): $\S 2$: Exercise $2$
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Boolean algebra




