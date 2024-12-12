# 

Source: https://proofwiki.org/wiki/Disjoint_Compact_Sets_in_Hausdorff_Space_have_Disjoint_Neighborhoods/Lemma

Theorem
Let $\struct {S, \tau}$ be a Hausdorff space.
Let $C$ be a compact subspace of $S$.
Let $x \in S \setminus C$.

Then there exist open sets $U$ and $V$ such that $x \in U$, $C \subseteq V$, and $U \cap V = \O$.


Proof
Let $\FF$ be the set of all ordered pairs $\tuple {A, B}$ such that $A$ and $B$ are open, $x \in A$, and $A \cap B = \O$.
As a set of ordered pairs, $\FF$ constitutes a relation on $\tau$:

$\FF \subseteq \tau \times \tau$

By the definition of Hausdorff space, for each $y \in C$ there exists an element $\tuple {A, B} \in \FF$ such that $y \in B$.
Thus the image of $\FF$ covers $C$.

By the definition of compactness, there exists a finite subset $\GG \subseteq \FF$ such that:

$\ds C \subseteq V = \bigcup \Img \GG$

This article, or a section of it, needs explaining.In particular: This does not follow directly. See the parent page for an outline of how the principle of finite choice leads to it.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Then $\Preimg \GG$ is also finite, so by the definition of a topology:

$\ds U = \bigcap \Preimg \GG$ is open.
Then $x \in U$, $C \subseteq V$, and $U \cap V = \O$.
$\blacksquare$





