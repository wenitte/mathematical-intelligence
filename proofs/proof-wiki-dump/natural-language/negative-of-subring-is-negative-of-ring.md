# 

Source: https://proofwiki.org/wiki/Negative_of_Subring_is_Negative_of_Ring

Theorem
Let $\struct {R, +, \circ}$ be a ring.
For each $x \in R$ let $-x$ denote the ring negative of $x$ in $R$.
Let $\struct {S, + {\restriction_S}, \circ {\restriction_S}}$ be a subring of $R$.
For each $x \in S$ let $\mathbin \sim x$ denote the ring negative of $x$ in $S$.

Then:

$\forall x \in S: \mathbin \sim x = -x$


Proof
Let $i_S: S \to R$ be the inclusion mapping from $S$ to $R$.
By Inclusion Mapping on Subring is Homomorphism, $i_S$ is a ring homomorphism.
By Ring Homomorphism of Addition is Group Homomorphism, $i_S$ is a group homomorphism on ring addition $+$.

Let $x \in S$.
Then:














\(\ds \mathbin \sim x\)

\(=\)







\(\ds \map {i_S} {\mathbin \sim x}\)





as $\mathbin \sim x \in S$














\(\ds \)

\(=\)







\(\ds -x\)





Group Homomorphism Preserves Inverses



$\blacksquare$





