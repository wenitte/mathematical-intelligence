# 

Source: https://proofwiki.org/wiki/Homotopic_Chain_Maps_Induce_Equal_Maps_on_Homology


This article needs to be linked to other articles.In particular: throughoutYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $A_\bullet$, $B_\bullet$ be chain complexes of abelian groups.
Let $f, g: A_\bullet \to B_\bullet$ be chain maps which are homotopic.

Then $f$ and $g$ induce equal maps on homology.


Proof
Let $\partial^A_\bullet, \partial^B_\bullet$ be the differentials on $A_\bullet$ and $B_{\bullet}$ respectively.
Let $h$ be a homotopy between $f$ and $g$. 
Let:

$a \in \map {H_n} A \cong \map \ker {\partial^A_n} / \Img {\partial^A_{n + 1} }$
There exists $\tilde a \in \map \ker {\partial^A_n}$ representing $a$.
It is enough to show that:

$\map {f_n} {\tilde a} \sim \map {g_n} {\tilde a}$
Equivalently:

$\map {f_n} {\tilde a} - \map {g_n} {\tilde a} \in \Img {\partial^B_{n + 1} }$
We know that:

$\partial h - h \partial = f - g$
This means:

$\partial^B_{n + 1} h_n - h_{n - 1} \partial^A_n = f_n - g_n$
Plugging in $\tilde a$: 

$\map {\partial^B_{n + 1} } {\map {h_n} {\tilde a} } - \map {h_{n - 1}} {\map {\partial^A_n} {\tilde a} } = \map {f_n} {\tilde a} - \map {g_n} {\tilde a}$
Since $\tilde a \in \map \ker {\partial^A_n}$:

$\map {\partial^B_{n + 1} } {\map {h_n} {\tilde a} } = \map {f_n} {\tilde a} - \map {g_n} {\tilde a}$
Therefore:

$\map {f_n} {\tilde a} - \map {g_n} {\tilde a} \in \Img {\partial^B_{n + 1} }$
$\blacksquare$





