# 

Source: https://proofwiki.org/wiki/Join_Operation_on_Ordered_Set_such_that_Every_Doubleton_admits_Supremum_is_Entropic

Theorem
Let $\struct {S, \preccurlyeq}$ be an ordered set.
Let $\struct {S, \preccurlyeq}$ be such that every doubleton subset of $S$ admits a supremum.

Let $\vee$ be the join operation on $S$, defined as:

$\forall a, b \in S: a \vee b = \sup_\preccurlyeq \set {a, b}$
Then $\vee$ is an entropic operation.


Proof
By definition, $\struct {S, \vee, \preccurlyeq}$ is a join semilattice. 
From Join Semilattice is Semilattice, $\struct {S, \vee, \preccurlyeq}$ is indeed a semilattice.

Then:










\(\ds \forall a, b, c, d, \in S: \, \)



\(\ds \paren {a \vee b} \vee \paren {c \vee d}\)

\(=\)







\(\ds a \vee \paren {\paren {b \vee c} \vee d}\)





Semilattice Axiom $\text {SL} 1$: Associativity














\(\ds \)

\(=\)







\(\ds a \vee \paren {\paren {c \vee b} \vee d}\)





Semilattice Axiom $\text {SL} 2$: Commutativity














\(\ds \)

\(=\)







\(\ds \paren {a \vee c} \vee \paren {b \vee d}\)





Semilattice Axiom $\text {SL} 1$: Associativity



$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 14$: Orderings: Exercise $14.24$




