# 

Source: https://proofwiki.org/wiki/Riesz_Representation_Theorem_(Hilbert_Spaces)/Examples/L2_Space

Example of Use of Riesz Representation Theorem (Hilbert Spaces)
Let $\struct{ X, \Sigma, \mu }$ be a measure space.
Let $\map {L^2} \mu$ be the associated $L^2$ space.
Let $F: \map {L^2} \mu \to \GF$ be a bounded linear functional.

Then there exists a unique $f_0 \in \map {L^2} \mu$ such that:

$\ds \forall f \in \map {L^2} \mu: \map F f = \int f \overline{f_0} \rd \mu$


Proof
By $L^2$ Space forms Hilbert Space, $\map {L^2} \mu$ is a Hilbert space with the $L^2$ inner product $\innerprod \cdot \cdot$.
Hence, the Riesz Representation Theorem (Hilbert Spaces) applies, so that there exists a unique $f_0 \in \map {L^2} \mu$ such that:

$\forall f \in \map {L^2} \mu: \map F f = \innerprod f {f_0}$
Unpacking the definition of the $L^2$ inner product, the result follows.
$\blacksquare$


Sources
1990: John B. Conway: A Course in Functional Analysis (2nd ed.) ... (previous) ... (next): $\text{I}$ Hilbert Spaces: $\S 3.$ The Riesz Representation Theorem: Corollary $3.5$




