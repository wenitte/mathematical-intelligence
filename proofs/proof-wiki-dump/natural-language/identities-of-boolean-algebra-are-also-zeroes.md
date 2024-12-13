# 

Source: https://proofwiki.org/wiki/Identities_of_Boolean_Algebra_are_also_Zeroes



Theorem
Let $\struct {S, \vee, \wedge, \neg}$ be a Boolean algebra, defined as in Definition 1.
Let the identity for $\vee$ be $\bot$ and the identity for $\wedge$ be $\top$.

Then:




\(\text {(1)}: \quad\)





\(\ds \forall x \in S: \, \)



\(\ds x \vee \top\)

\(=\)







\(\ds \top\)










\(\text {(2)}: \quad\)





\(\ds \forall x \in S: \, \)



\(\ds x \wedge \bot\)

\(=\)







\(\ds \bot\)









That is:

$\bot$ is a zero element for $\wedge$
$\top$ is a zero element for $\vee$.


Proof
Let $x \in S$.
Then:














\(\ds x \vee \top\)

\(=\)







\(\ds \paren {x \vee \top} \wedge \top\)





Boolean Algebra Axiom $(\text {BA}_1 3)$: Identity Elements: $\top$ is the identity of $\wedge$














\(\ds \)

\(=\)







\(\ds \paren {x \vee \top} \wedge \paren {x \vee \neg x}\)





Boolean Algebra Axiom $(\text {BA}_1 4)$: Complements: $x \vee x' = \top$














\(\ds \)

\(=\)







\(\ds x \vee \paren {\top \wedge x'}\)





Boolean Algebra Axiom $(\text {BA}_1 2)$: Distributivity: both $\vee$ and $\wedge$ distribute over the other














\(\ds \)

\(=\)







\(\ds x \vee x'\)





Boolean Algebra Axiom $(\text {BA}_1 3)$: Identity Elements: $\top$ is the identity of $\wedge$














\(\ds \)

\(=\)







\(\ds \top\)





Boolean Algebra Axiom $(\text {BA}_1 4)$: Complements: $x \vee x' = \top$



So $x \vee \top = \top$.
$\Box$

The result $x \wedge \bot = \bot$ follows from the Duality Principle.
$\blacksquare$


Also known as
These identities can be seen referred to as the Null Laws.


Sources
1964: W.E. Deskins: Abstract Algebra ... (previous) ... (next): $\S 1.5$: Theorem $1.15, \ 1.15 \ \text{(b)}$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Boolean algebra
2008: Paul Halmos and Steven Givant: Introduction to Boolean Algebras ... (previous) ... (next): $\S 2$: Exercise $2$
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Boolean algebra




