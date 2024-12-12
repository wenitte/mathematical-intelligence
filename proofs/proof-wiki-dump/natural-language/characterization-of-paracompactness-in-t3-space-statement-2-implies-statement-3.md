# 

Source: https://proofwiki.org/wiki/Characterization_of_Paracompactness_in_T3_Space/Statement_2_implies_Statement_3


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $T = \struct{X, \tau}$ be a $T_3$ space.

If every open cover of $T$ has a locally finite refinement then:

every open cover of $T$ has a closed locally finite refinement
Proof
Let every open cover of $T$ have a locally finite refinement.

Let $\UU$ be an open cover of $T$.

Let $\VV = \set{V \in \tau : \exists U \in \UU : V^- \subseteq U}$ where $V^-$ denotes the closure of $V$ in $T$.

Lemma 1
$\VV$ is an open cover of $T$
$\Box$

By assumption:

there exists a locally finite refinement $\AA$ of $\VV$.
Let:

$\BB = \set{A^- : A \in \AA}$
From Closures of Elements of Locally Finite Set is Locally Finite:

$\BB$ is locally finite
Lemma 2
$\BB$ is a cover of $T$ consisting of closed sets
$\Box$

Lemma 3
$\BB$ is a refinement of $\UU$
$\Box$

Since $\UU$ was an arbitrary open cover of $T$ it follows that:

every open cover of $T$ has a closed locally finite refinement.
$\blacksquare$


Sources
1955: John L. Kelley: General Topology: Chapter $5$: Compact Spaces: $\S$Paracompactness: Lemma $29$
1970: Stephen Willard: General Topology: Chapter $6$: Compactness: $\S20$: Paracompactness: Theorem $20.7$




