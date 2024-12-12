# 

Source: https://proofwiki.org/wiki/Galois_Connection_is_Unique_for_Given_Lower_Adjoint


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $\struct {S, \preceq}$ and $\struct {T, \precsim}$ be ordered sets.
Let $g: S \to T$, $d: T \to S$ be mappings such that $\tuple{g, d}$ is a Galois connection.

Then:

$\tuple{g, d}$ is the unique Galois connection such that $d$ is the lower adjoint
Proof
Let $g^\prime: S \to T$ be a mapping such that $\tuple{g^\prime, d}$ is a Galois connection.

We have:










\(\ds \forall x \in S: \, \)



\(\ds \map {g^\prime} x\)

\(=\)







\(\ds \map \max {d^{-1} \sqbrk {x^\preceq} }\)





Galois Connection is Expressed by Maximum














\(\ds \)

\(=\)







\(\ds \map g x\)





Galois Connection is Expressed by Maximum



where:

$\max$ denotes the maximum
$d^{-1} \sqbrk {x^\preceq}$ denotes the image of $x^\preceq$ under relation $d^{-1}$
$x^\preceq$ denotes the lower closure of $x$

From Equality of Mappings:

$g^\prime = g$

The result follows.
$\blacksquare$





