# 

Source: https://proofwiki.org/wiki/Relative_Matrix_of_Composition_of_Linear_Transformations/Proof_1

Theorem
Let $R$ be a ring with unity.
Let $M, N, P$ be free $R$-modules of finite dimension $m, n, p > 0$ respectively.
Let $\AA, \BB, \CC$ be ordered bases of $M, N, P$.
Let $f: M \to N$ and $g : N \to P$ be linear transformations, and $g \circ f$ be their composition.
Let $\mathbf M_{f, \BB, \AA}$ and $\mathbf M_{g, \CC, \BB}$ be their matrices relative to $\AA, \BB$ and $\BB, \CC$ respectively.

Then the matrix of $g \circ f$ relative to $\AA$ and $\CC$ is:

$\mathbf M_{g \mathop \circ f, \CC, \AA} = \mathbf M_{g, \CC, \BB} \cdot \mathbf M_{f, \BB, \AA}$


Proof
Let $m \in M$, and $\sqbrk m_\AA$ be its coordinate vector with respect to $\AA$.

On the one hand:














\(\ds \sqbrk {\map g {\map f m} }_\CC\)

\(=\)







\(\ds \mathbf M_{g \mathop \circ f, \CC, \AA} \cdot \sqbrk m_\AA\)





Change of Coordinate Vectors Under Linear Mapping applied to $g \circ f$




On the other hand:














\(\ds \sqbrk {\map g {\map f m} }_\CC\)

\(=\)







\(\ds \mathbf M_{g, \CC, \BB} \cdot \sqbrk {\map f m}_\BB\)





Change of Coordinate Vectors Under Linear Mapping applied to $g$














\(\ds \)

\(=\)







\(\ds \mathbf M_{g, \CC, \BB} \cdot \mathbf M_{f, \BB, \AA} \cdot \sqbrk m_\AA\)





Change of Coordinate Vectors Under Linear Mapping applied to $f$




Thus:

$\forall m \in M: \paren {\mathbf M_{g \mathop \circ f, \CC, \AA} - \mathbf M_{g, \CC, \BB} \cdot \mathbf M_{f, \BB, \AA} } \cdot \sqbrk m_\AA = 0$
The result follows.


This article, or a section of it, needs explaining.In particular: find a link whyYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
$\blacksquare$





