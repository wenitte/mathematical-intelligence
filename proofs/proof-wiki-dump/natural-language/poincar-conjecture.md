# 

Source: https://proofwiki.org/wiki/Poincar%C3%A9_Conjecture


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Let $\Sigma^m$ be a smooth $m$-manifold.
Let $\Sigma^m$ satisfy:

$H_0 \struct {\Sigma; \Z} = 0$
and:

$H_m \struct {\Sigma; \Z} = \Z$
Then $\Sigma^m$ is homeomorphic to the $m$-sphere $\Bbb S^m$.



This article, or a section of it, needs explaining.In particular: Definition of the notation $H_0 \struct {\Sigma; \Z}$, nature of $H_0$ and $H_m$You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Proof
The proof proceeds on several dimensional-cases. Note that the case $m = 3$ is incredibly intricate, and that a full proof would be impractical to produce here.  An outline of the $m = 3$ case will be given instead.

Dimension $m = 1$
Follows from the Classification of Compact One-Manifolds.
$\Box$


Dimension $m = 2$
Follows from the Classification of Compact Two-Manifolds.
$\Box$


Dimension $m = 3$
Follows from Thurston's Geometrization Conjecture.


This theorem requires a proof.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by crafting such a proof.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{ProofWanted}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
$\Box$


Dimension $m = 4$
Follows from $4$-dimensional Topological $h$-Cobordism Theorem.


This theorem requires a proof.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by crafting such a proof.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{ProofWanted}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
$\Box$


Dimension $m = 5$

This theorem requires a proof.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by crafting such a proof.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{ProofWanted}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Summary:
Any $\Sigma^5$ bounds a contractible $6$-manifold $Z$.
Let $\Bbb D^6$ be a $6$-disk (AKA $6$-ball).


This article, or a section of it, needs explaining.In particular: Open or closed disk / ball?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Then $Z - \Bbb D^6$ is an $h$-cobordism between $\Sigma$ and $\partial \Bbb D^6 = \Bbb S^5$.
Hence $\Sigma$ is differomorphic to $\Bbb S^5$ by the $h$-Cobordism Theorem.
$\Box$


Dimension $m \ge 6$
Let $\Sigma^m$ be a smooth $m$-manifold where $m \ge 6$.
Let $\Sigma^m$ satisfy:

$H_0 \struct {\Sigma; \Z} = 0$
and:

$H_m \struct {\Sigma; \Z} = \Z$
Then $\Sigma^m$ is homeomorphic to the $m$-sphere $\Bbb S^m$.
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


Source of Name
This entry was named for Jules Henri Poincaré.


Historical Note
The Poincaré Conjecture was first posed in $1904$ by Jules Henri Poincaré.
For $n = 1$ and $n = 2$ the result was long known to be true.
For $n \ge 5$ it was proved by Stephen Smale in $1960$.
The case for $n = 4$ was solved by Michael Hartley Freedman in $1982$.
The remaining case for $n = 3$ was finally resolved by the work of Grigori Perelman, who solved Thurston's Geometrization Conjecture in $2003$ (although some sources say $2004$).
He did this by using the Ricci flow method.


Sources
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): Poincaré conjecture
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Poincaré conjecture
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Millennium Prize problems
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Poincaré conjecture
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Millennium Prize problems
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous): Appendix $23$: Millennium Prize problems: $7$.




