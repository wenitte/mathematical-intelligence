# 

Source: https://proofwiki.org/wiki/Continuous_Image_of_Compact_Space_is_Compact/Corollary_3

Corollary to Continuous Image of Compact Space is Compact
Let $S$ be a compact topological space.
Let $f: S \to \R$ be a continuous real-valued function.

Then $f$ attains its bounds on $S$.


Proof 1
By Continuous Image of Compact Space is Compact: Corollary $2$, $f \sqbrk S$ is bounded.
By Supremum of Bounded Above Set of Reals is in Closure:

$\map \sup {f \sqbrk S} \in \map \cl {f \sqbrk S}$
and by Infimum of Bounded Below Set of Reals is in Closure:

$\map \inf {f \sqbrk S} \in \map \cl {f \sqbrk S}$

From Continuous Image of Compact Space is Compact, $f \sqbrk S$ is compact in $\R$.
From Non-Closed Set of Real Numbers is not Compact, it follows from the Rule of Transposition that $f \sqbrk S$ is closed in $\R$.
From Closed Set equals its Closure:

$f \sqbrk S = \map \cl {f \sqbrk S}$
Hence the result that:

$\map \sup {f \sqbrk S} \in f \sqbrk S$
and:

$\map \inf {f \sqbrk S} \in f \sqbrk S$
$\blacksquare$


Proof 2
By Continuous Image of Compact Space is Compact, $f \sqbrk S$ is compact.
From Compact Metric Space is Complete and Compact Metric Space is Totally Bounded, $f \sqbrk S$ is complete and totally bounded.
A Totally Bounded Metric Space is Bounded.
Hence both the supremum and the infimum of $f \sqbrk S$ exist in $\R$.
Because $f \sqbrk S$ is  complete:

$\sup f \sqbrk S \in f \sqbrk S$
and:

$\inf f \sqbrk S \in f \sqbrk S$

This article, or a section of it, needs explaining.In particular: why?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
$\blacksquare$





