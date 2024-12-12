# 

Source: https://proofwiki.org/wiki/Characterization_of_Paracompactness_in_T3_Space/Lemma_21


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $X$ be a set.
Let $X \times X$ denote the Cartesian product of $X$ with itself.

Let $\BB$ be a set of subsets of $X$.
Let $W \subseteq X \times X$ be symmetric as a relation on $X \times X$.

Then:

$\forall B \in \BB, x \in X : \map W x \cap W \sqbrk B \ne \O \leadsto \map {W \circ W} x \cap B \ne \O$
where:

$\map W x$ denotes the image of $x$ under the relation $W$
$W \sqbrk B$ denotes the image of $B$ under the relation $W$
$W \circ W$ denotes the composite relation of $W$ with itself
Proof
Let $B \in \BB$.
Let $x \in X$.
Let $y \in \map W x \cap W \sqbrk B$.

By definition of intersection:

$y \in \map W x$
and

$y \in W \sqbrk B$

By definition of image of element:

$\tuple{x, y} \in W$
By definition of symmetric:

$\tuple{y, x} \in W$

By definition of image of subset:

$\exists z \in B : \tuple{z, y} \in W$

By definition of composite relation:

$\exists z \in B : \tuple{z, x} \in W \circ W$
By definition of image of element:

$z \in \map {W \circ W} x \cap B$
Hence:

$\map {W \circ W} x \cap B \ne \O$

Since $B$ and $x$ were arbitrary, then:

$\forall B \in \BB, x \in X : \map W x \cap W \sqbrk B \ne \O \leadsto \map {W \circ W} x \cap B \ne \O$
$\blacksquare$





