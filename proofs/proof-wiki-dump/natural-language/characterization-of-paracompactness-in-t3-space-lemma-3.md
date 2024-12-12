# 

Source: https://proofwiki.org/wiki/Characterization_of_Paracompactness_in_T3_Space/Lemma_3


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $T = \struct{X, \tau}$ be a topological space.

Let $\UU$ be an open cover of $T$.

Let:

$\VV = \set{V \in \tau : \exists U \in \UU : V^- \subseteq U}$ be  cover of $T$
where $V^-$ denotes the closure of $V$ in $T$.

Let $\AA$ be a locally finite refinement of $\VV$.

Let $\BB = \set{A^- : A \in \AA}$ be locally finite.

Then:

$\BB$ is a refinement of $\UU$


Proof
Lemma 2
$\BB$ is a cover of $T$ consisting of closed sets
$\Box$

Let $B \in \BB$.

By definition of $\BB$:

$\exists A \in \AA : A^- = B$
By definition of refinement:

$\exists V \in \VV : A \subseteq V$
From Set Closure Preserves Set Inclusion:

$B = A^- \subseteq V^-$
By definition of $\VV$:

$\exists U \in \UU : V^- \subseteq U$
From Subset Relation is Transitive:

$B \subseteq U$

It follows that $\BB$ is a refinement of $\UU$ by definition.
$\blacksquare$





