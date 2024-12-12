# 

Source: https://proofwiki.org/wiki/Disjoint_Compact_Sets_in_Hausdorff_Space_have_Disjoint_Neighborhoods/Proof_1

Theorem
Let $T = \struct {S, \tau}$ be a Hausdorff space.
Let $V_1$ and $V_2$ be compact sets in $T$.

Then $V_1$ and $V_2$ have disjoint neighborhoods.


Proof
Let $\FF$ be the set of all ordered pairs $\tuple {Z, W}$ such that:

$Z, W \in \tau$
$V_1 \subseteq Z$
$Z \cap W = \O$
By the lemma, $\Img \FF$ covers $V_2$.


This article, or a section of it, needs explaining.In particular: It is not clear what mapping or relation $\Img \FF$ refers to.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
By the definition of compact space, there exists a finite subset $K$ of $\Img \FF$ which also covers $V_2$.
By the definition of topology, $\ds \bigcup K$ is open.
By the Principle of Finite Choice, there exists a bijection $\GG \subseteq \FF$ such that $\Img \GG = K$.


This article, or a section of it, needs explaining.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Then $\GG$, and hence its preimage, will be finite.
Let $\ds J = \bigcap \Preimg \GG$.
By Intersection is Largest Subset, $V_1 \subseteq J$.
By the definition of a topology, $J$ is open.
Then $\ds \bigcup K$ and $J$ are disjoint open sets such that $\ds V_2 \subseteq \bigcup K$ and $V_1 \subseteq J$.
$\blacksquare$





