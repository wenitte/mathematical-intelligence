# 

Source: https://proofwiki.org/wiki/Power_Structure_of_Magma_is_Magma

Theorem
Let $\struct {S, \circ}$ be a magma.
Let $\struct {\powerset S, \circ_\PP}$ be the power structure of $\struct {S, \circ}$.

Then $\struct {\powerset S, \circ_\PP}$ is a magma.
That is, $\circ_\PP$ is closed in $\powerset S$.


Proof
Let $\struct {S, \circ}$ be a magma.
Let $A, B \subseteq S$.










\(\ds \forall a \in A, b \in B: \, \)



\(\ds a \circ b\)

\(\in\)







\(\ds S\)





Definition of Magma








\(\ds \leadsto \ \ \)





\(\ds A \circ B\)

\(\subseteq\)







\(\ds S\)





Definition of Subset Product








\(\ds \leadsto \ \ \)





\(\ds A \circ_\PP B\)

\(\subseteq\)







\(\ds S\)





Definition of Operation Induced on $\powerset S$ by $\circ$








\(\ds \leadsto \ \ \)





\(\ds A \circ_\PP B\)

\(\in\)







\(\ds \powerset S\)





Definition of Power Set



Thus $\struct {\powerset S, \circ_\PP}$ is a magma.
$\blacksquare$





