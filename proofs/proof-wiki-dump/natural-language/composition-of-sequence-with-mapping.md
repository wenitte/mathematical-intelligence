# 

Source: https://proofwiki.org/wiki/Composition_of_Sequence_with_Mapping

Theorem
Let $\sequence {a_j}_{j \mathop \in B}$ be a sequence.
Let $\sigma: A \to B$ be a mapping, where $A \subseteq \N$.

Then $\sequence {a_j} \circ \sigma$ is a sequence whose value at each $k \in A$ is $a_{\map \sigma k}$.
Thus $\sequence {a_j} \circ \sigma$ is denoted $\sequence {a_{\map \sigma k} }_{k \mathop \in A}$.


Proof
By definition, a sequence is a mapping whose domain is a subset of $\N$.
Let the range of $\sequence {a_j}_{j \mathop \in B}$ be $S$.
Thus $\sequence {a_j}_{j \mathop \in B}$ can be expressed using the mapping $f: B \to S$ as:

$\forall j \in B: \map f j = a_j$

Let $k \in A$.
Then $\map \sigma k \in B$.

By definition of composition of mappings:














\(\ds f \circ \map \sigma k\)

\(=\)







\(\ds \map f {\map \sigma k}\)














\(\ds \leadsto \ \ \)





\(\ds \sequence {a_j}_{j \mathop \in B}\)

\(=\)







\(\ds \sequence {a_{\map \sigma k} }_{\map \sigma k \mathop \in B}\)




















\(\ds \)

\(=\)







\(\ds \sequence {a_{\map \sigma k} }_{k \mathop \in A}\)





as $\map \sigma k \in B \implies k \in A$



$\blacksquare$





