# 

Source: https://proofwiki.org/wiki/Matrix_of_Bilinear_Form_Under_Change_of_Basis

Theorem
Let $R$ be a ring with unity.
Let $M$ be a free $R$-module of finite dimension $n > 0$.
Let $\AA$ and $\BB$ be ordered bases of $M$.
Let $\mathbf M_{\AA, \BB}$ be the change of basis matrix from $\AA$ to $\BB$.
Let $f : M \times M \to R$ be a bilinear form.
Let $\mathbf M_{f, \AA}$ be its matrix relative to $\AA$.

Then its matrix relative to $\BB$ equals:

$\mathbf M_{f, \BB} = \mathbf M_{\AA, \BB}^\intercal \mathbf M_{f, \AA} \mathbf M_{\AA, \BB}$


Proof
Let $m \in M$, and let $\sqbrk m_\AA$ and $\sqbrk m_\BB$ denote its coordinate vectors relative to $\AA$ and $\BB$.
We have:














\(\ds \map f m\)

\(=\)







\(\ds \sqbrk m_\AA^\intercal \cdot \mathbf M_{f, \AA} \cdot \sqbrk m_\AA\)




















\(\ds \)

\(=\)







\(\ds \paren {\mathbf M_{\AA, \BB} \cdot \sqbrk m_\BB}^\intercal \cdot \mathbf M_{f, \AA} \cdot \paren {\mathbf M_{\AA, \BB} \cdot \sqbrk m_\BB}\)





Change of Coordinate Vector Under Change of Basis














\(\ds \)

\(=\)







\(\ds \sqbrk m_\BB^\intercal \cdot \mathbf M_{\AA, \BB}^\intercal \cdot \mathbf M_{f, \AA} \cdot \mathbf M_{\AA, \BB} \cdot \sqbrk m_\BB\)





Transpose of Matrix Product



Thus $\mathbf M_{f, \BB} = \mathbf M_{\AA, \BB}^\intercal \mathbf M_{f, \AA} \mathbf M_{\AA, \BB}$.


This article, or a section of it, needs explaining.In particular: find a link for this and the first equality above, or make it an alternative definitionYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
$\blacksquare$





