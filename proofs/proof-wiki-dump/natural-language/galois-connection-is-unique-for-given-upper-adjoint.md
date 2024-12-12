# 

Source: https://proofwiki.org/wiki/Galois_Connection_is_Unique_for_Given_Upper_Adjoint


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $\struct {S, \preceq}$ and $\struct {T, \precsim}$ be ordered sets.
Let $g: S \to T$, $d: T \to S$ be mappings such that $\tuple{g, d}$ is a Galois connection.

Then:

$\tuple{g, d}$ is the unique Galois connection such that $g$ is the upper adjoint
Proof
Let $d^\prime: T \to S$ be a mapping such that $\tuple{g, d^\prime}$ is a Galois connection.

We have:










\(\ds \forall y \in T: \, \)



\(\ds \map {d^\prime} y\)

\(=\)







\(\ds \map \min {g^{-1} \sqbrk {t^\succsim} }\)





Galois Connection is Expressed by Minimum














\(\ds \)

\(=\)







\(\ds \map d x\)





Galois Connection is Expressed by Minimum



where:

$\min$ denotes the minimum
$g^{-1} \sqbrk {y^\succsim}$ denotes the image of $y^\succsim$ under relation $g^{-1}$
$y^\succsim$ denotes the upper closure of $y$

From Equality of Mappings:

$d^\prime = d$

The result follows.
$\blacksquare$





