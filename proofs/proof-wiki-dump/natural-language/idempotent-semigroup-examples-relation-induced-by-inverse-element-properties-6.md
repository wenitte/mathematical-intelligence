# 

Source: https://proofwiki.org/wiki/Idempotent_Semigroup/Examples/Relation_induced_by_Inverse_Element/Properties/6

Example of Idempotent Semigroup
Let $\struct {S, \circ}$ be an idempotent semigroup.
Let $\RR$ be the relation on $S$ defined as:

$\forall a, b \in S: a \mathrel \RR b \iff \paren {a \circ b \circ a = a \land b \circ a \circ b = b}$
That is, such that $a$ is the inverse of $b$ and $b$ is the inverse of $a$.

The quotient structure $\struct {S / \RR, \circ_\RR}$ is a commutative idempotent semigroup.
The equivalence classes under $\RR$ are anticommutative subsemigroups of $\struct {S, \circ}$.


Proof
From Idempotent Semigroup: Relation induced by Inverse Element: $5$:

$\RR$ is a congruence relation on $\struct {S, \circ}$.
Hence $\struct {S / \RR, \circ_\RR}$ is indeed a quotient structure, and Quotient Structure is Well-Defined applies.

From Quotient Structure of Semigroup is Semigroup, we have that $\struct {S / \RR, \circ_\RR}$ is a semigroup.
Then we have:










\(\ds \forall \eqclass a \RR \in S / \RR: \, \)



\(\ds \)

\(\)







\(\ds \eqclass a \RR \circ_\RR \eqclass a \RR\)




















\(\ds \)

\(=\)







\(\ds \eqclass {a \circ a} \RR\)





Definition of Operation Induced on Quotient Set














\(\ds \)

\(=\)







\(\ds \eqclass a \RR\)





Definition of Idempotent Operation



Thus $\struct {S / \RR, \circ_\RR}$ is an idempotent semigroup.

To prove commutativity, it is sufficient to prove that $\paren {a \circ b} \mathrel \RR \paren {b \circ a}$.
We have:










\(\ds \forall a, b \in S: \, \)



\(\ds \)

\(\)







\(\ds \paren {a \circ b} \circ \paren {b \circ a} \circ \paren {a \circ b}\)




















\(\ds \)

\(=\)







\(\ds a \circ \paren {b \circ b} \circ \paren {a \circ a} \circ b\)





Semigroup Axiom $\text S 1$: Associativity














\(\ds \)

\(=\)







\(\ds a \circ b \circ a \circ b\)





Definition of Idempotent Operation














\(\ds \)

\(=\)







\(\ds \paren {a \circ b} \circ \paren {a \circ b}\)





Semigroup Axiom $\text S 1$: Associativity














\(\ds \)

\(=\)







\(\ds a \circ b\)





Definition of Idempotent Operation




and:










\(\ds \forall a, b \in S: \, \)



\(\ds \)

\(\)







\(\ds \paren {b \circ a} \circ \paren {a \circ b} \circ \paren {b \circ a}\)




















\(\ds \)

\(=\)







\(\ds b \circ \paren {a \circ a} \circ \paren {b \circ b} \circ a\)





Semigroup Axiom $\text S 1$: Associativity














\(\ds \)

\(=\)







\(\ds b \circ a \circ b \circ a\)





Definition of Idempotent Operation














\(\ds \)

\(=\)







\(\ds \paren {b \circ a} \circ \paren {b \circ a}\)





Semigroup Axiom $\text S 1$: Associativity














\(\ds \)

\(=\)







\(\ds b \circ a\)





Definition of Idempotent Operation



That is:

$\paren {a \circ b} \mathrel \RR \paren {b \circ a}$
Hence:










\(\ds \forall \eqclass a \RR, \eqclass b \RR \in S / \RR: \, \)



\(\ds \)

\(\)







\(\ds \eqclass a \RR \circ_\RR \eqclass b \RR\)




















\(\ds \)

\(=\)







\(\ds \eqclass {a \circ b} \RR\)




















\(\ds \)

\(=\)







\(\ds \eqclass {b \circ a} \RR\)




















\(\ds \)

\(=\)







\(\ds \eqclass b \RR \circ_\RR \eqclass a \RR\)









Thus we have shown that $\struct {S / \RR, \circ_\RR}$ is a commutative idempotent semigroup.
$\Box$

Let $\eqclass x \RR$ be an arbitrary element of $S / \RR$.
We have that $\eqclass x \RR$ is a subset of $\struct {S, \circ}$.

We now show that $\struct {\eqclass x \RR, \circ}$ is a subsemigroup of $\struct {S, \circ}$.
From Subsemigroup Closure Test, it is sufficient to show that $\struct {\eqclass x \RR, \circ}$ is closed.
Hence, let $a, b \in \eqclass x \RR$.
Then:

$a \mathrel \RR b$
and so:














\(\ds a\)

\(=\)







\(\ds a \circ b \circ a\)




















\(\ds b\)

\(=\)







\(\ds b \circ a \circ b\)










We have:














\(\ds a \circ b\)

\(=\)







\(\ds \paren {a \circ b} \circ \paren {a \circ b}\)





Definition of Idempotence














\(\ds \)

\(=\)







\(\ds \paren {a \circ b} \circ a \circ \paren {a \circ b}\)





Definition of Idempotence



and:














\(\ds a\)

\(=\)







\(\ds a \circ b \circ a\)





Definition of $\RR$














\(\ds \)

\(=\)







\(\ds a \circ a \circ b \circ a\)





Definition of Idempotence














\(\ds \)

\(=\)







\(\ds a \circ \paren {a \circ b} \circ a\)





Semigroup Axiom $\text S 1$: Associativity



That is:

$a \mathrel \RR a \circ b$
and so:

$a, b \in \eqclass x \RR \implies a \circ b \in \eqclass x \RR$
Thus Semigroup Axiom $\text S 0$: Closure is satisfied.
Hence from Subsemigroup Closure Test $\eqclass x \RR$ is a subsemigroup of $\struct {S, \circ}$

It remains to be shown that $\struct {\eqclass x \RR, \circ}$ is anticommutative.
Suppose $a, b \in \eqclass x \RR$ such that $a \circ b = b \circ a$.
We have:














\(\ds a \circ b\)

\(=\)







\(\ds b \circ a\)














\(\ds \leadsto \ \ \)





\(\ds a \circ b \circ b\)

\(=\)







\(\ds b \circ a \circ b\)





Definition of Idempotent Operation, Definition of $\RR$








\(\ds \leadsto \ \ \)





\(\ds a \circ b\)

\(=\)







\(\ds b\)










Then:














\(\ds a \circ b\)

\(=\)







\(\ds b \circ a\)














\(\ds \leadsto \ \ \)





\(\ds a \circ b \circ a\)

\(=\)







\(\ds b \circ a \circ a\)














\(\ds \leadsto \ \ \)





\(\ds a\)

\(=\)







\(\ds b \circ a\)





Definition of Idempotent Operation, Definition of $\RR$














\(\ds \)

\(=\)







\(\ds a \circ b\)





by hypothesis














\(\ds \)

\(=\)







\(\ds b\)





a priori




That is:

$a \circ b = b \circ a \implies a = b$
and so $\struct {\eqclass x \RR, \circ}$ is an anticommutative subsemigroup of $\struct {S, \circ}$.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 11$: Quotient Structures: Exercise $11.19 \ \text {(h)}$
J.-E. Pin (https://math.stackexchange.com/users/89374/j-e-pin), Idempotent Semigroup $S$ with Equivalence Relation $(a R b) \iff (aba=a), (bab=b)$: $S/R$ is commutative - why?, URL (version: 2022-03-15): https://math.stackexchange.com/q/4404012




