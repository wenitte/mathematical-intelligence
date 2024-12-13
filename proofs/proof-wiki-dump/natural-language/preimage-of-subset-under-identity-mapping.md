# 

Source: https://proofwiki.org/wiki/Preimage_of_Subset_under_Identity_Mapping


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $S$ be a set.
Let $\iota_S: S \to S$ be the identity mapping on $S$.

Let $T \subseteq S$.

Then:

$\iota_S^{-1} \sqbrk T = T$
where $\iota_S^{-1} \sqbrk T$ is the preimage of $T$ under $\iota_S$.


Proof
By definition of identity mapping:

$\iota_S: S \to S: \forall x \in S: \map {\iota_S} x = x$

Let $i_S: S \to S$ be the inclusion mapping of $S$ into $S$.
By definition of inclusion mapping:

$i_S: S \to S: \forall x \in S: \map {i_S} x = x$
From Equality of Mappings:

$\iota_S = i_S$

From Preimage of Subset under Inclusion Mapping:

$\forall T\subseteq S : \iota_S^{-1} \sqbrk T = T \cap S$
From Intersection with Subset is Subset:

$\forall T\subseteq S : T \cap S = T$
Hence:

$\forall T\subseteq S : \iota_S^{-1} \sqbrk T = T$
$\blacksquare$





