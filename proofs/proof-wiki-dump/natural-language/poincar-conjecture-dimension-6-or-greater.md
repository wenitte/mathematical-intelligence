# 

Source: https://proofwiki.org/wiki/Poincar%C3%A9_Conjecture/Dimension_6_or_Greater


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $\Sigma^m$ be a smooth $m$-manifold where $m \ge 6$.
Let $\Sigma^m$ satisfy:

$H_0 \struct {\Sigma; \Z} = 0$
and:

$H_m \struct {\Sigma; \Z} = \Z$
Then $\Sigma^m$ is homeomorphic to the $m$-sphere $\Bbb S^m$.



This article, or a section of it, needs explaining.In particular: Definition of the notation $H_0 \struct {\Sigma; \Z}$, nature of $H_0$ and $H_m$You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Proof
We can cut two small $m$-disks $D', D' '$ from $\Sigma$.
The remaining manifold, $\Sigma \setminus \paren {D' \cup D' '}$ is an h-cobordism between $\partial D'$ and $\partial D' '$.
These are just two copies of $\Bbb S^{m-1}$.
By the $h$-cobordism theorem, there exists a diffeomorphism:

$\phi: \Sigma \setminus \paren {D' \cup D' '} \to \Bbb S^{m - 1} \times \closedint 0 1$
which can be chosen to restrict to the identity on one of the $\Bbb S^{m - 1}$.
Let $\Xi$ denote this $\Bbb S^{m - 1}$ such that $\phi$ restricts to the identity.
Since $\psi \vert_\Xi = Id$, we can extend $\psi$ across $D' '$, the interior of $\Xi$ to obtain a diffeomorphism $\phi': \Sigma \setminus D' ' \to \Bbb S^{m - 1} \cup D'$.


This article, or a section of it, needs explaining.In particular: What does $\psi \vert_\Xi$ mean?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Let $\Bbb D^m$ denote this latter manifold, which is merely an $m$-disk.
Our diffeomorphism $\phi': \Sigma \setminus D' ' \to \Bbb D^m$ induces a diffeomorphism on the boundary spheres $\Bbb S^{m - 1}$.
Any diffeomorphism of the boundary sphere $\Bbb S^{m - 1}$ can be extended radially to the whole disk:

$\map {\operatorname {int} } {\Bbb S^{m - 1} } = D' '$
but only as a homeomorphism of $D' '$.  
Hence the extended function $\phi' ': \Sigma \to \Bbb S^m$ is a homeomorphism.
$\blacksquare$





