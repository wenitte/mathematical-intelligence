# 

Source: https://proofwiki.org/wiki/Naturally_Ordered_Semigroup_Axioms_are_Independent



Theorem
Consider the naturally ordered semigroup axioms:
A naturally ordered semigroup is a (totally) ordered commutative semigroup $\struct {S, \circ, \preceq}$ satisfying:




\((\text {NO} 1)\)  

$:$  



$S$ is well-ordered by $\preceq$   

  \(\ds \forall T \subseteq S:\)

\(\ds T = \O \lor \exists m \in T: \forall n \in T: m \preceq n \)   







  


\((\text {NO} 2)\)  

$:$  



$\circ$ is cancellable in $S$   

  \(\ds \forall m, n, p \in S:\)

\(\ds m \circ p = n \circ p \implies m = n \)   







  












\(\ds p \circ m = p \circ n \implies m = n \)   







  


\((\text {NO} 3)\)  

$:$  



Existence of product   

  \(\ds \forall m, n \in S:\)

\(\ds m \preceq n \implies \exists p \in S: m \circ p = n \)   







  


\((\text {NO} 4)\)  

$:$  



$S$ has at least two distinct elements   

  \(\ds \exists m, n \in S:\)

\(\ds m \ne n \)   







  


Each of the naturally ordered semigroup axioms is independent of all the others.
That is, you cannot drop any one of them and still uniquely define a naturally ordered semigroup.


Proof
This will be proved by demonstrating that for each of the naturally ordered semigroup axioms, it is possible to create an algebraic structure which fulfils all the others, but is not a naturally ordered semigroup.


Positive Rational Numbers under Addition fulfil Naturally Ordered Semigroup Axioms 2 to 4
The algebraic structure:

$\struct {\Q_{\ge 0}, +, \le}$
is an ordered semigroup which fulfils the axioms:

Naturally Ordered Semigroup Axiom $\text {NO} 2$: Cancellability
Naturally Ordered Semigroup Axiom $\text {NO} 3$: Existence of Product
Naturally Ordered Semigroup Axiom $\text {NO} 4$: Existence of Distinct Elements
but:

does not fulfil Naturally Ordered Semigroup Axiom $\text {NO} 1$: Well-Ordered
$\struct {\Q_{\ge 0}, +}$is not isomorphic to $\struct {\N, +}$.
$\Box$


Natural Numbers with Extension fulfil Naturally Ordered Semigroup Axioms 1, 3 and 4
Let $\N$ denote the set of natural numbers.
Let $\beta$ be an object such that $\beta \notin \N$
Let $M = \N \cup \set \beta$.
Let us extend the operation of natural number addition from $\N$ to $M$ by defining:














\(\ds 0 + \beta\)

\(=\)







\(\ds \beta + 0 = \beta\)




















\(\ds \beta + \beta\)

\(=\)







\(\ds \beta\)




















\(\ds n + \beta\)

\(=\)







\(\ds \beta + n = n\)










There exists a unique total ordering $\le$ on $M$ such that:

the restriction of $\le$ to $\N$ is the given total ordering $\le$ on $\N$
$0 < \beta < 1$
such that the algebraic structure:

$\struct {M, +, \le}$
is an ordered semigroup which fulfils the axioms:

Naturally Ordered Semigroup Axiom $\text {NO} 1$: Well-Ordered
Naturally Ordered Semigroup Axiom $\text {NO} 3$: Existence of Product
Naturally Ordered Semigroup Axiom $\text {NO} 4$: Existence of Distinct Elements
but:

does not fulfil Naturally Ordered Semigroup Axiom $\text {NO} 2$: Cancellability
$\struct {M, +}$ is not isomorphic to $\struct {\N, +}$.
$\Box$


Natural Numbers without 1 fulfil Naturally Ordered Semigroup Axioms 1, 2 and 4
Let $S \subseteq \N$ be the subset of the natural numbers defined as:

$S = \N \setminus \set 1 = \set {0, 2, 3, 4, \ldots}$
Then the algebraic structure:

$\struct {S, +, \le}$
is an ordered semigroup which fulfils the axioms:

Naturally Ordered Semigroup Axiom $\text {NO} 1$: Well-Ordered
Naturally Ordered Semigroup Axiom $\text {NO} 2$: Cancellability
Naturally Ordered Semigroup Axiom $\text {NO} 4$: Existence of Distinct Elements
but:

does not fulfil Naturally Ordered Semigroup Axiom $\text {NO} 3$: Existence of Product
$\struct {S, +}$ is not isomorphic to $\struct {\N, +}$.
$\Box$


Singleton fulfils Naturally Ordered Semigroup Axioms 1 to 3
Let $S$ be a singleton:

$S = \set s$
for an arbitrary object $s$.
Let $+$ be the operation on $S$ defined as:

$\forall s \in S:  s + s = s$
Let $\le$ be the relation defined on $S$ as:

$s \le s$
Then the algebraic structure:

$\struct {S, +, \le}$
is an ordered semigroup which fulfils the axioms:

Naturally Ordered Semigroup Axiom $\text {NO} 1$: Well-Ordered
Naturally Ordered Semigroup Axiom $\text {NO} 2$: Cancellability
Naturally Ordered Semigroup Axiom $\text {NO} 3$: Existence of Product
but:

does not fulfil Naturally Ordered Semigroup Axiom $\text {NO} 4$: Existence of Distinct Elements
$\struct {S, +}$ is not isomorphic to $\struct {\N, +}$.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 16$: The Natural Numbers




