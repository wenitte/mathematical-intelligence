# 

Source: https://proofwiki.org/wiki/Characterization_of_Paracompactness_in_T3_Space/Lemma_4


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $T = \struct{X, \tau}$ be a topological space.

Let $\VV$ be a cover of $T$.

Let $\WW = \set{W \in \tau : \set{V \in \VV : V \cap W \ne \O} \text{ is finite}}$ be an open cover of $T$.

Let $\AA$ be a closed locally finite refinement of $\WW$.

Then:

$\forall A \in \AA : \set{V \in \VV : V \cap A \ne \O}$ is finite


Proof
Let $A \in \AA$.

By definition of refinement:

$\exists W \in \WW : A \subseteq W$

From Subsets of Disjoint Sets are Disjoint:

$\forall V \in \VV : V \cap A \ne \O \leadsto V \cap W \ne \O$

Hence:

$\set{V \in \VV : V \cap A \ne \O} \subseteq \set{V \in \VV : V \cap W \ne \O}$

We have by hypothesis:

$\set{V \in \VV : V \cap W \ne \O}$ is finite

From Subset of Finite Set is Finite:

$\set{V \in \VV : V \cap A \ne \O}$ is finite

Since $A$ was arbitrary, it follows that:

$\forall A \in \AA : \set{V \in \VV : V \cap A \ne \O}$ is finite
$\blacksquare$





