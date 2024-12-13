# 

Source: https://proofwiki.org/wiki/Group_has_Latin_Square_Property/Proof_2

Theorem
Let $\struct {G, \circ}$ be a group.
Then $G$ satisfies the Latin square property.
That is, for all $a, b \in G$, there exists a unique $g \in G$ such that $a \circ g = b$.
Similarly, there exists a unique $h \in G$ such that $h \circ a = b$.


Proof
We shall prove that this is true for the first equation:















\(\ds a \circ g\)

\(=\)







\(\ds b\)














\(\ds \leadstoandfrom \ \ \)





\(\ds a^{-1} \circ \paren {a \circ g}\)

\(=\)







\(\ds a^{-1} \circ b\)





$\circ$ is a Cancellable Binary Operation








\(\ds \leadstoandfrom \ \ \)





\(\ds \paren {a^{-1} \circ a} \circ g\)

\(=\)







\(\ds a^{-1} \circ b\)





Group Axiom $\text G 1$: Associativity








\(\ds \leadstoandfrom \ \ \)





\(\ds e \circ g\)

\(=\)







\(\ds a^{-1} \circ b\)





Group Axiom $\text G 3$: Existence of Inverse Element








\(\ds \leadstoandfrom \ \ \)





\(\ds g\)

\(=\)







\(\ds a^{-1} \circ b\)





Group Axiom $\text G 2$: Existence of Identity Element




Because the statements:

$a \circ g = b$
and

$g = a^{-1} \circ b$
are equivalent, we may conclude that $g$ is indeed the only solution of the equation.

The proof that the unique solution of $h$ is $b \circ a^{-1}$ in the second equation follows similarly.
$\blacksquare$


Sources
1974: Thomas W. Hungerford: Algebra ... (previous) ... (next): $\text{I}$: Groups: $\S 1$ Semigroups, Monoids and Groups




