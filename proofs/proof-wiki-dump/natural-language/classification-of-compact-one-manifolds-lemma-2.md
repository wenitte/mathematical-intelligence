# 

Source: https://proofwiki.org/wiki/Classification_of_Compact_One-Manifolds/Lemma_2


This article needs to be linked to other articles.In particular: throughoutYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Lemma for Classification of Compact One-Manifolds
Let $f$ be a Morse function on a one-manifold $X$.
Let $S$ be the union of the critical points of $f$ and $\partial X$.
As $S$ is finite, $X - S$ consists of a finite number of one-manifolds, $L_1, L_2, \cdots, L_n$.

$f$ maps each $L_i$ diffeomorphically onto an open interval in $\R$.


Proof
Let $L$ be any of the $L_i$.
Because $f$ is a local diffeomorphism and $L$ is connected, $f \sqbrk L$ is open and connected in $\R$.
We also have $f \sqbrk L \in f \sqbrk X$, the latter of which is compact.
Hence there are numbers $c$ and $d$ such that $f \sqbrk L = \openint c d$.
It suffices to show $f$ is one to one on $L$, because then $f^{-1}: \openint c d \to L$ is defined and locally smooth.
Let $p$ be any point of $L$.
Set $q = \map f p$.
It suffices to show that every other point $z \in L$ can be joined to $p$ by a curve $\gamma: \closedint q y \to L$ such that $f \circ \gamma$ is the identity and $\map \gamma y = z$.
Since $\map f z = y \ne q = \map f p$, this result shows $f$ is one to one.
So let $Q$ be the set of points $x$ that can be so joined.
Since $f$ is a local diffeomorphism, $Q$ is both open and Definition:Closed Set (Topology).
Hence $Q = L$.
$\blacksquare$


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.




