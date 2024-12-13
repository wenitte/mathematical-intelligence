# 

Source: https://proofwiki.org/wiki/Semilattice_has_Unique_Ordering_such_that_Operation_is_Supremum



Theorem
Let $\struct {S, \vee}$ be a semilattice.

Then there exists a unique ordering $\preccurlyeq$ on $S$ such that:

$x \vee y = \sup \set {x, y}$
where $\sup \set {x, y}$ is the supremum of $\set {x, y}$ with respect to $\preccurlyeq$.


Proof
Let us define a relation $\RR$ on $S$ as:

$\forall x, y \in S: x \mathrel \RR y \iff x \vee y = y$
From Semilattice Induces Ordering, we have that $\RR$ is an ordering.

Let us denote this ordering by $\preccurlyeq$, and recall its definition:

$x \vee y = y \iff x \preccurlyeq y$


Supremum
Let $x, y \in S$ be arbitrary.
Let $x \vee y = z$.

We have:














\(\ds x \vee y\)

\(=\)







\(\ds z\)





by supposition








\(\ds \leadsto \ \ \)





\(\ds x \vee \paren {x \vee y}\)

\(=\)







\(\ds x \vee z\)














\(\ds \leadsto \ \ \)





\(\ds \paren {x \vee x} \vee y\)

\(=\)







\(\ds x \vee z\)





Semilattice Axiom $\text {SL} 1$: Associativity








\(\ds \leadsto \ \ \)





\(\ds x \vee y\)

\(=\)







\(\ds x \vee z\)





Semilattice Axiom $\text {SL} 3$: Idempotence








\(\ds \leadsto \ \ \)





\(\ds z\)

\(=\)







\(\ds x \vee z\)





by hypothesis








\(\ds \leadsto \ \ \)





\(\ds x\)

\(\preccurlyeq\)







\(\ds z\)





Definition of $\preccurlyeq$




and:












\(\ds x \vee y\)

\(=\)







\(\ds z\)





by supposition








\(\ds \leadsto \ \ \)





\(\ds \paren {x \vee y} \vee y\)

\(=\)







\(\ds z \vee y\)














\(\ds \leadsto \ \ \)





\(\ds x \vee \paren {y \vee y}\)

\(=\)







\(\ds z \vee y\)





Semilattice Axiom $\text {SL} 1$: Associativity








\(\ds \leadsto \ \ \)





\(\ds x \vee y\)

\(=\)







\(\ds z \vee y\)





Semilattice Axiom $\text {SL} 3$: Idempotence








\(\ds \leadsto \ \ \)





\(\ds z\)

\(=\)







\(\ds y \vee z\)





by hypothesis, and Semilattice Axiom $\text {SL} 2$: Commutativity








\(\ds \leadsto \ \ \)





\(\ds y\)

\(\preccurlyeq\)







\(\ds z\)





Definition of $\preccurlyeq$



Hence we see that $x \vee y$ is an upper bound of $\set {x, y}$ with respect to $\preccurlyeq$.

Now let $w$ be an arbitrary upper bound of $\set {x, y}$ with respect to $\preccurlyeq$.

That is:

$x \preccurlyeq w$ and $y \preccurlyeq w$
Then:














\(\ds x \vee w\)

\(=\)







\(\ds w\)





Definition of $\preccurlyeq$














\(\ds y \vee w\)

\(=\)







\(\ds w\)





Definition of $\preccurlyeq$








\(\ds \leadsto \ \ \)





\(\ds x \vee \paren {y \vee w}\)

\(=\)







\(\ds x \vee w\)














\(\ds \leadsto \ \ \)





\(\ds \paren {x \vee y} \vee w\)

\(=\)







\(\ds x \vee w\)





Semilattice Axiom $\text {SL} 1$: Associativity








\(\ds \leadsto \ \ \)





\(\ds z \vee w\)

\(=\)







\(\ds x \vee w\)





as $x \vee y = z$














\(\ds \)

\(=\)







\(\ds w\)





a priori








\(\ds \leadsto \ \ \)





\(\ds z\)

\(\preccurlyeq\)







\(\ds w\)





Definition of $\preccurlyeq$



So:

$x \vee y$ is an upper bound of $\set {x, y}$ with respect to $\preccurlyeq$
for every upper bound $w$ of $\set {x, y}$ with respect to $\preccurlyeq$, we have that $x \vee y \preccurlyeq w$
Hence, by definition, $x \vee y$ is the supremum of $\set {x, y}$ with respect to $\preccurlyeq$.
$\Box$


Uniqueness
It remains to be proved that the ordering $\preccurlyeq$, with the property that:

$x \vee y = \sup \set {x, y}_\preccurlyeq$
is unique.

Indeed, suppose there exists another ordering $\preccurlyeq'$ such that:

$x \vee y = \sup \set {x, y}_{\preccurlyeq'}$
We have:














\(\ds \sup \set {x, y}_{\preccurlyeq'}\)

\(=\)







\(\ds x \vee y\)




















\(\ds \)

\(=\)







\(\ds \sup \set {x, y}_\preccurlyeq\)





as $x \vee y$ is uniquely defined



The proof is complete.
$\blacksquare$


Also see
Definition:Join (Order Theory)


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 14$: Orderings: Exercise $14.22 \ \text {(b)}$




