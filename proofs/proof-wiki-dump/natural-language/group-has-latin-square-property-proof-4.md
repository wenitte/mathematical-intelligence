# 

Source: https://proofwiki.org/wiki/Group_has_Latin_Square_Property/Proof_4

Theorem
Let $\struct {G, \circ}$ be a group.
Then $G$ satisfies the Latin square property.
That is, for all $a, b \in G$, there exists a unique $g \in G$ such that $a \circ g = b$.
Similarly, there exists a unique $h \in G$ such that $h \circ a = b$.


Proof
We shall prove that this is true for the first equation:















\(\ds b\)

\(=\)







\(\ds a \circ g\)














\(\ds \leadsto \ \ \)





\(\ds a^{-1} \circ b\)

\(=\)







\(\ds a^{-1} \circ \paren {a \circ g}\)





Group Axiom $\text G 3$: Existence of Inverse Element














\(\ds \)

\(=\)







\(\ds \paren {a^{-1} \circ a} \circ g\)





Group Axiom $\text G 1$: Associativity














\(\ds \)

\(=\)







\(\ds e \circ g\)





Group Axiom $\text G 3$: Existence of Inverse Element














\(\ds \)

\(=\)







\(\ds g\)





Group Axiom $\text G 2$: Existence of Identity Element




Conversely:














\(\ds g\)

\(=\)







\(\ds a^{-1} \circ b\)














\(\ds \leadsto \ \ \)





\(\ds a \circ g\)

\(=\)







\(\ds a \circ \paren {a^{-1} \circ b}\)




















\(\ds \)

\(=\)







\(\ds \paren {a \circ a^{-1} } \circ b\)





Group Axiom $\text G 1$: Associativity














\(\ds \)

\(=\)







\(\ds e \circ b\)





Group Axiom $\text G 3$: Existence of Inverse Element














\(\ds \)

\(=\)







\(\ds b\)





Group Axiom $\text G 2$: Existence of Identity Element




The proof that the unique solution of $h$ is $b \circ a^{-1}$ in the second equation follows similarly.
$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 4.6$. Elementary theorems on groups: Theorem $\text{(ii)}$
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): $\S 3.2$: Groups; the axioms




