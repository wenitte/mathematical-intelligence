# 

Source: https://proofwiki.org/wiki/Characterization_of_Paracompactness_in_T3_Space/Lemma_5


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $X$ be a set.

Let $\AA$ and $\VV$ be sets of subsets of $X$.

For each $V \in \VV$, let:

$V^* = X \setminus \ds \bigcup \set{A \in \AA | A \cap V = \O}$

Then:

$\forall V \in \VV: V \subseteq V^*$
Proof
Let $V \in \VV$.

Let $\AA_V = \set{A \in \AA | A \cap V = \O}$.

From Subset of Set Difference iff Disjoint Set:

$\forall A \in \AA_V : V \subseteq X \setminus A$

We have:














\(\ds V\)

\(\subseteq\)







\(\ds \bigcap \set{X \setminus A : A \in \AA_V}\)





Set is Subset of Intersection of Supersets














\(\ds \)

\(=\)







\(\ds X \setminus \bigcup \set{A : A \in \AA_V}\)





De Morgan's Laws for Set Difference














\(\ds \)

\(=\)







\(\ds V^*\)





definition of $V^*$



$\blacksquare$





