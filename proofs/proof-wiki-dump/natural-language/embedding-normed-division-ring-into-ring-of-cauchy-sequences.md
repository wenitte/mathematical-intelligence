# 

Source: https://proofwiki.org/wiki/Embedding_Normed_Division_Ring_into_Ring_of_Cauchy_Sequences

Theorem
Let $\struct {R, \norm {\, \cdot \,} }$ be a normed division ring.
Let $\CC$ be the ring of Cauchy sequences over $R$
Let $\phi: R \to \CC$ be the mapping from $R$ to $\CC$ defined as:

$\forall a \in R: \map \phi a = \tuple {a, a, a, \dots}$
where $\tuple {a, a, a, \dots}$ is the constant sequence.

Then $\phi$ is a ring monomorphism.


Proof
By Cauchy Sequences form Ring with Unity, $\CC$ is a subring of the ring of sequences over $R$.
Let $i: \CC \to  R^\N$ be the inclusion mapping of $\CC$ into the ring of sequences.
By Embedding Ring into Ring Structure Induced by Ring Operations the composition $i \circ \phi: R \to R^\N$ is a ring monomorphism.
Since for all $a \in R$, we have that:

$\map {\paren {i \circ \phi} } a = \map \phi a$
The result follows.
$\blacksquare$


Sources




