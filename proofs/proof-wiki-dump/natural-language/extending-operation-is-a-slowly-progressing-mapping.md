# 

Source: https://proofwiki.org/wiki/Extending_Operation_is_a_Slowly_Progressing_Mapping

Theorem
Let $S$ denote the class of all ordinal sequences.
Let $E: S \to S$ be an extending operation on $S$.

Then $E$ is a slowly progressing mapping.


Proof
Let $\theta \in S$ be an $\alpha$-sequence.
By definition of extending operation:

$\map E \theta = \theta \cup \tuple {\alpha, x}$
where $x$ is arbitrary.
Thus:

$\theta \subseteq \map E \theta$
and it is seen that $E$ is by definition a progressing mapping.
It is also seen that:

$\card \theta = \card \alpha$
while:

$\card {\map E \theta} = \card \alpha + 1$
demonstrating that $E$ is a slowly progressing mapping.
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $6$: Order Isomorphism and Transfinite Recursion: $\S 5$ Transfinite recursion theorems




