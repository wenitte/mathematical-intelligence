# 

Source: https://proofwiki.org/wiki/Product_of_Change_of_Basis_Matrices

Theorem
Let $R$ be a ring with unity.
Let $M$ be a free $R$-module of finite dimension $n>0$.
Let $\AA$, $\BB$ and $\CC$ be ordered bases of $M$.
Let $\mathbf M_{\AA, \BB}$, $\mathbf M_{\BB, \CC}$ and $\mathbf M_{\AA, \CC}$ be the change of basis matrices from $\AA$ to $\BB$, $\BB$ to $\CC$ and $\AA$ to $\CC$ respectively.

Then:

$\mathbf M_{\AA, \CC} = \mathbf M_{\AA, \BB} \cdot \mathbf M_{\BB, \CC}$


Proof
Let $m \in M$.
Let $\sqbrk m_\AA$ be its coordinate vector relative to $\AA$, and similarly for $\BB$ and $\CC$.

On the one hand:














\(\ds \sqbrk m_\AA\)

\(=\)







\(\ds \mathbf M_{\AA, \CC} \cdot \sqbrk m_\CC\)





Change of Coordinate Vector Under Change of Basis




On the other hand:














\(\ds \sqbrk m_AA\)

\(=\)







\(\ds \mathbf M_{\AA, \BB} \cdot \sqbrk m_\BB\)





Change of Coordinate Vector Under Change of Basis














\(\ds \)

\(=\)







\(\ds \mathbf M_{\AA, \BB} \cdot \mathbf M_{\BB, \CC} \cdot \sqbrk m_\CC\)





Change of Coordinate Vector Under Change of Basis




Thus:

$\forall m \in M: \paren {\mathbf M_{\AA, \CC} - \mathbf M_{\AA, \BB} \cdot \mathbf M_{\BB, \CC} } \cdot \sqbrk m_\CC = 0$
Because $m$ is arbitrary, the result follows.


This article, or a section of it, needs explaining.In particular: find a link for thisYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
$\blacksquare$


Also see
Relative Matrix of Composition of Linear Transformations, an analogous result for linear transformations, of which this is a special case




