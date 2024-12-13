# 

Source: https://proofwiki.org/wiki/Reflexive_and_Symmetric_Relation_is_not_necessarily_Transitive/Proof_2

Theorem
Let $S$ be a set.
Let $\alpha \subseteq S \times S$ be a relation on $S$.
Let $\alpha$ be both reflexive and symmetric.

Then it is not necessarily the case that $\alpha$ is also transitive.


Proof
Proof by Counterexample:
Let $S = \Z$ be the set of integers.
Let $n \in \Z$ such that $n > 1$.

Let $\alpha$ be the relation on $S$ defined as:

$\forall x, y \in S: x \mathrel \alpha y \iff \size {x - y} < n$
where $\size x$ denotes the absolute value of $x$.

It is seen that:

$\forall x \in \Z: \size {x - x} = 0 < n$
and so:

$\forall x \in \Z: x \mathrel \alpha x$
Thus $\alpha$ is reflexive

Then it is seen that:

$\forall x, y \in \Z: \size {x - y} = \size {y - x}$
and so if $\size {x - y} < n$ then so is $\size {y - x} < n$.
That is, if $x \mathrel \alpha y$ then $y \mathrel \alpha x$.

Thus $\alpha$ is symmetric.

Now let $x = -\paren{n - 1}, y = 0, z = n - 1$.
We have:














\(\ds \size {x - y}\)

\(=\)







\(\ds n - 1\)




















\(\ds \size {y - z}\)

\(=\)







\(\ds n - 1\)









and so both $x \mathrel \alpha y$ and $y \mathrel \alpha z$.

But:














\(\ds \size {x - z}\)

\(=\)







\(\ds \size {-\paren {n - 1} - \paren {n - 1} }\)




















\(\ds \)

\(=\)







\(\ds 2 n - 2\)




















\(\ds \)

\(\ge\)







\(\ds n + 2 - 2\)





as $n \ge 2$














\(\ds \)

\(=\)







\(\ds n\)





as $n \ge 2$








\(\ds \leadsto \ \ \)





\(\ds \neg \size {x - z}\)

\(<\)







\(\ds n\)









Thus:

$\neg x \mathrel \alpha z$
and so $\alpha$ is not transitive.

Hence $\alpha$ is both reflexive and symmetric but not transitive.
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $3$: Equivalence Relations and Equivalence Classes: Exercise $3$




