# 

Source: https://proofwiki.org/wiki/Discrete_Fourier_Transform_on_Abelian_Group


This article needs to be linked to other articles.In particular: Links to definitions of what $\chi$, $\C^\times$, $\map \phi q$, $\overline \chi$ all meanYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $G$ be a finite abelian group.
Let $G^*$ be the dual group of characters $G \to \C^\times$.
Let $\eta: G \to \C$ be a mapping from $G$ to the set of complex numbers.

Then for all $x \in G$:

$\ds \map \eta x = \frac 1 {\map \phi q} \sum_{\chi \mathop \in G^*} \innerprod \eta \chi_G \map \chi x$
where:

$\ds \innerprod \eta \chi_G = \sum_{x \mathop \in G} \map \eta x \map {\overline \chi} x$


Proof













\(\ds \frac 1 {\map \phi q} \sum_{\chi \mathop \in G^*} \innerprod \eta \chi_G \map \chi y\)

\(=\)







\(\ds \frac 1 {\map \phi q} \sum_{\chi \mathop \in G^*} \sum_{x \mathop \in G} \map \eta x \map {\overline \chi} x \map \chi y\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {\map \phi q} \sum_{x \mathop \in G} \map \eta x \sum_{\chi \mathop \in G^*} \map {\overline \chi} x \map \chi y\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {\map \phi q} \map \eta y \map \phi y\)





Orthogonality Relations for Characters














\(\ds \)

\(=\)







\(\ds \map \eta y\)









$\blacksquare$





