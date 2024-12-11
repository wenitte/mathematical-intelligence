# 

Source: https://proofwiki.org/wiki/Absorption_Laws_(Boolean_Algebras)

This proof is about Absorption Laws in the context of Boolean Algebra. For other uses, see Absorption Laws.

Theorem
Let $\struct {S, \vee, \wedge}$ be a Boolean algebra, defined as in Definition 1.
Then:










\(\ds \forall a, b \in S: \, \)



\(\ds a\)

\(=\)







\(\ds a \vee \paren {a \wedge b}\)




















\(\ds a\)

\(=\)







\(\ds a \wedge \paren {a \vee b}\)









That is, $\vee$ absorbs $\wedge$, and $\wedge$ absorbs $\vee$.


Proof
Let $a, b \in S$.

Then:














\(\ds a \vee \paren {a \wedge b}\)

\(=\)







\(\ds \paren {a \wedge \top} \vee \paren {a \wedge b}\)





Boolean Algebra Axiom $(\text {BA}_1 3)$: Identity Elements: $\top$ is the identity for $\wedge$














\(\ds \)

\(=\)







\(\ds a \wedge \paren {\top \vee b}\)





Boolean Algebra Axiom $(\text {BA}_1 2)$: Distributivity: $\wedge$ distributes over $\vee$














\(\ds \)

\(=\)







\(\ds a \wedge \top\)





Identities of Boolean Algebra are also Zeroes














\(\ds \)

\(=\)







\(\ds a\)





Boolean Algebra Axiom $(\text {BA}_1 3)$: Identity Elements: $\top$ is the identity for $\wedge$



as desired.
$\Box$

The result:

$a = a \wedge \paren {a \vee b}$
follows from the Duality Principle.
$\blacksquare$


Sources
1964: W.E. Deskins: Abstract Algebra ... (previous) ... (next): $\S 1.5$: Lemma $1.1$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Boolean algebra
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Boolean algebra




