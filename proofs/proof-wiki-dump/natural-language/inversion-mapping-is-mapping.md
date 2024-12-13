# 

Source: https://proofwiki.org/wiki/Inversion_Mapping_is_Mapping

Theorem
Let $\struct {G, \circ}$ be a group.
Let $\iota: G \to G$ be the inversion mapping on $G$.

Then $\iota$ is indeed a mapping.


Proof
To show that $\iota$ is a mapping, it is sufficient to show that:

$\map \iota a \ne \map \iota b \implies a \ne b$:













\(\ds \map \iota a\)

\(\ne\)







\(\ds \map \iota b\)





by hypothesis








\(\ds \leadsto \ \ \)





\(\ds a^{-1}\)

\(\ne\)







\(\ds b^{-1}\)





Definition of $\iota$








\(\ds \leadsto \ \ \)





\(\ds a \circ a^{-1} \circ b\)

\(\ne\)







\(\ds a \circ b^{-1} \circ b\)





Cancellation Laws and Group Axiom $\text G 1$: Associativity








\(\ds \leadsto \ \ \)





\(\ds e \circ b\)

\(\ne\)







\(\ds a \circ e\)





Group Axiom $\text G 3$: Existence of Inverse Element








\(\ds \leadsto \ \ \)





\(\ds b\)

\(\ne\)







\(\ds a\)





Group Axiom $\text G 2$: Existence of Identity Element



$\blacksquare$





