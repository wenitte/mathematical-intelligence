# 

Source: https://proofwiki.org/wiki/Cancellable_Finite_Semigroup_is_Group



Theorem
Let $\struct {S, \circ}$ be a non-empty finite semigroup in which all elements are cancellable.
Then $\struct {S, \circ}$ is a group.


Proof
As $\struct {S, \circ}$ is a semigroup, it is a fortiori closed and associative.
It remains to be shown that:

$\struct {S, \circ}$ has an identity
every element of $S$ has an inverse in $S$.

Let $a \in S$ be arbitrary.
Let the mapping $\lambda_a: S \to S$ be the left regular representation of $\struct {S, \circ}$ with respect to $a$.
By Regular Representation wrt Cancellable Element on Finite Semigroup is Bijection, $\lambda_a$ is a bijection.

We have by hypothesis that:

$\struct {S, \circ}$ is non-empty
all elements of $S$ are cancellable
$S$ is finite.


Existence of Identity Element









\(\ds \exists e \in S: \, \)



\(\ds \map {\lambda_a} e\)

\(=\)







\(\ds a\)





as $\lambda_a$ is a surjection








\(\ds \leadsto \ \ \)





\(\ds a \circ e\)

\(=\)







\(\ds a\)





Definition of Left Regular Representation




Let $x \in S$ be arbitrary.
Then:














\(\ds a \circ \paren {e \circ x}\)

\(=\)







\(\ds a \circ x\)





Semigroup Axiom $\text S 0$: Closure








\(\ds \leadsto \ \ \)





\(\ds e \circ x\)

\(=\)







\(\ds x\)





Definition of Cancellable Element








\(\ds \leadsto \ \ \)





\(\ds x \circ \paren {e \circ x}\)

\(=\)







\(\ds x \circ x\)





Semigroup Axiom $\text S 0$: Closure








\(\ds \leadsto \ \ \)





\(\ds \paren {x \circ e} \circ x\)

\(=\)







\(\ds x \circ x\)





Semigroup Axiom $\text S 1$: Associativity








\(\ds \leadsto \ \ \)





\(\ds x \circ e\)

\(=\)







\(\ds x\)





Definition of Cancellable Element




Thus $e$ is an identity element.
By Identity is Unique, there is only one such.


Existence of Inverse Elements









\(\ds \exists y \in S: \, \)



\(\ds \map {\lambda_a} y\)

\(=\)







\(\ds e\)





as $\lambda_a$ is a surjection








\(\ds \leadsto \ \ \)





\(\ds a \circ y\)

\(=\)







\(\ds e\)





Definition of Left Regular Representation



Hence $y$ acts as a right inverse for $a$.
As $a$ is arbitrary, it follows that all $a \in S$ have a right inverse.
From Right Inverse for All is Left Inverse, each of these elements is also a left inverse, and therefore an inverse.

Thus $S$ is closed, associative, has an identity and every element has an inverse.
So, by definition, $\struct {S, \circ}$ is a group.
$\blacksquare$


Also see
Cancellable Infinite Semigroup is not necessarily Group


Sources
1964: Walter Ledermann: Introduction to the Theory of Finite Groups (5th ed.) ... (previous) ... (next): Chapter $\text {I}$: The Group Concept: $\S 4$: Alternative Axioms for Finite Groups: Theorem $1$
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: The Definition of Group Structure: $\S 26 \delta$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $6$: An Introduction to Groups: Exercise $3$




