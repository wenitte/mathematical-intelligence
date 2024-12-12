# 

Source: https://proofwiki.org/wiki/Composition_of_Relation_with_Inverse_is_Symmetric

Theorem
Let $\RR \subseteq S \times T$ be a relation.
Then the composition of $\RR$ with its inverse $\RR^{-1}$ is symmetric:

$(1): \quad \RR^{-1} \circ \RR$ is a symmetric relation on $S$
$(2): \quad \RR \circ \RR^{-1}$ is a symmetric relation on $T$.


Proof
Note that this result holds for any $\RR \subseteq S \times T$, and does not require that $\struct {S, \RR}$ necessarily be a relational structure.














\(\ds \tuple {a, b}\)

\(\in\)







\(\ds \RR^{-1} \circ \RR\)














\(\ds \leadsto \ \ \)

\(\ds \exists c \in T: \, \)



\(\ds \tuple {a, c}\)

\(\in\)







\(\ds \RR\)





Definition of Composition of Relations












\(\, \ds \land \, \)

\(\ds \tuple {c, b}\)

\(\in\)







\(\ds \RR^{-1}\)














\(\ds \leadsto \ \ \)

\(\ds \exists c \in T: \, \)



\(\ds \tuple {b, c}\)

\(\in\)







\(\ds \RR\)





Definition of Inverse Relation












\(\, \ds \land \, \)

\(\ds \tuple {c, a}\)

\(\in\)







\(\ds \RR^{-1}\)














\(\ds \leadsto \ \ \)





\(\ds \tuple {b, a}\)

\(\in\)







\(\ds \RR^{-1} \circ \RR\)





Definition of Composition of Relations




Thus $\tuple {a, b} \in \RR^{-1} \circ \RR \implies \tuple {b, a} \in \RR^{-1} \circ \RR$ and thus $\RR^{-1} \circ \RR$ is symmetric.

As $\RR = \paren {\RR^{-1} }^{-1}$ from Inverse of Inverse Relation, it follows that $\RR \circ \RR^{-1} = \paren {\RR^{-1} }^{-1} \circ \RR^{-1}$ is likewise a symmetric relation.

The domain of $\RR^{-1} \circ \RR$ is $S$ from Domain of Composite Relation, as is its codomain from Codomain of Composite Relation and the definition of Inverse Relation.
Similarly, the codomain of $\RR \circ \RR^{-1}$ is $T$, as is its domain.
This completes the proof.
$\blacksquare$





