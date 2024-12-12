# 

Source: https://proofwiki.org/wiki/Characterization_of_Paracompactness_in_T3_Space/Lemma_2


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $T = \struct{X, \tau}$ be a topological space.

Let $\AA$ be a locally finite cover of $T$.

Let $\BB = \set{A^- : A \in \AA}$ be locally finite, where $A^-$ denotes the closure of $A$ in $T$.

Then:

$\BB$ is a cover of $T$ consisting of closed sets


Proof
Let $x \in X$.

By definition of refinement:

$\AA$ is a cover of $X$

By definition of cover of set:

$\exists A \in \AA : x \in A$

From Set is Subset of its Topological Closure:

$A \subseteq A^-$

By definition of subset:

$x \in A^-$

By definition of $\BB$:

$A^- \in \BB$

Since $x$ was arbitrary, $\BB$ is a cover of $T$ by definition.

From Topological Closure is Closed, every element of $\BB$ is closed in $T$
$\blacksquare$





