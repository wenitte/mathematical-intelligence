# 

Source: https://proofwiki.org/wiki/Extending_Operation_is_a_Strictly_Progressing_Mapping

Theorem
Let $S$ denote the class of all ordinal sequences.
Let $E: S \to S$ be an extending operation on $S$.

Then $E$ is a strictly progressing mapping.


Proof
Let $\theta \in S$ be an $\alpha$-sequence.
By definition of extending operation:

$\map E \theta = \theta \cup \tuple {\alpha, x}$
where $x$ is arbitrary.
From Extending Operation is a Slowly Progressing Mapping we have a fortiori that $E$ is a progressing mapping.
By definition of $\alpha$-sequence:

$\alpha \notin \Dom \theta$
and so:

$\tuple {\alpha, x} \notin \theta$
Hence:

$\theta \subsetneqq \map E \theta$
demonstrating that $E$ is a strictly progressing mapping.
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $6$: Order Isomorphism and Transfinite Recursion: $\S 5$ Transfinite recursion theorems




