# 

Source: https://proofwiki.org/wiki/Characterization_of_Paracompactness_in_T3_Space/Lemma_19


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $T = \struct{X, \tau}$ be a topological space.

Let $\BB$ be a discrete set of subsets of $X$.

Let $\UU = \set{ U \in \tau : \size {\set{B \in \BB : U \cap B} } \le 1}$

Then:

$\UU$ is a open cover of $X$ in $T$.


Proof
Let $s \in X$.

By definition of discrete:

$\exists U \in \tau : x \in U : \size {\set{B \in \BB : U \cap B} } \le 1$

Hence:

$U \in \UU$

Since $x$ was arbitrary:

$\forall x \in X : \exists U \in \UU : x \in U$

It follows that $\UU$ is an open cover of $X$ in $T$ by definition.
$\blacksquare$





