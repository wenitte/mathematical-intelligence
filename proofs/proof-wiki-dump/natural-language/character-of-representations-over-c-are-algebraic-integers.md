# 

Source: https://proofwiki.org/wiki/Character_of_Representations_over_C_are_Algebraic_Integers


It has been suggested that this page be renamed.To discuss this page in more detail, feel free to use the talk page.

This article needs to be linked to other articles.In particular: Several concepts here which are not yet defined on $\mathsf{Pr} \infty \mathsf{fWiki}$. Make sure the pages that are linked to are the correct definitions, because there are a few where the definitions either do not match the usage on this page or are in a form considerably different.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $G$ be a finite group.
Let $\chi$ be the character of any $\C \left[{G}\right]$-module $\left({V, \rho}\right)$.

Then for all $g \in G$, it follows that $\chi \left({g}\right)$ is an algebraic integer.


Proof
By the definition of character:

$\chi \left({g}\right) = \operatorname{Tr} \left({\rho_g}\right)$

This article, or a section of it, needs explaining.In particular: $\operatorname{Tr} \left({\rho_g}\right)$, and indeed $\rho_g$ itself.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
where:

$\rho \in \hom \left({\C \left[{G}\right], \operatorname{Aut} \left({V}\right)}\right): \vec {e_g} \mapsto \rho_g$
by definition.


This article, or a section of it, needs explaining.In particular: The above definition is not stated in that form on $\mathsf{Pr} \infty \mathsf{fWiki}$. Link to $\hom \left({\C \left[{G}\right]$ and $\operatorname{Aut} \left({V}\right)}\right)$, clarify specifically what $\C \left[{G}\right]$ is, and define $\vec {e_g}$.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.

Fix an arbitrary $g \in G$.
Let $\left\vert{g}\right\vert$ denote the order of $g$.
The trace $\operatorname{Tr} \left({\rho_g}\right)$ of $\rho_g$ is defined as the sum of the eigenvalues of $\rho_g$.


This article, or a section of it, needs explaining.In particular: The definition of Trace needs to be reviewed.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
From Eigenvalues of G-Representation are Roots of Unity, we have that any eigenvalue $\lambda$ of $\rho_g$ is a root of unity whose order is $\left\vert{g}\right\vert$.
We have that $\lambda$ satisfies the monic polynomial $x^{\left\vert{g}\right\vert} - 1$
Hence we have that $\lambda$ is an algebraic integer.

From Ring of Algebraic Integers, we have that the sum of the eigenvalues is also an algebraic integer.
Thus $\chi \left({g}\right)$ is an algebraic integer.
$\blacksquare$





