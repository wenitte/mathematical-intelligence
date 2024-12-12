# 

Source: https://proofwiki.org/wiki/Characterization_of_Paracompactness_in_T3_Space/Lemma_11


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $X$ be a set.

Let $\AA$ and $\VV$ be sets of subsets of $X$.

For each $V \in \VV$, let:

$V^* = X \setminus \ds \bigcup \set{A \in \AA | A \cap V = \O}$

Let:

$\VV^* = \set{V^* : V \in \VV}$.

Then:

$\forall A \in \AA, V^* \in \VV^* : A \cap V^* \ne \O \implies A \cap V \ne \O$
Proof
We prove the contrapositive statement:

$\forall A \in \AA, V \in \VV^* : A \cap V = \O \implies A \cap V^* = \O$

Let $B \in \AA, V^* \in \VV^* : B \cap V = \O$.

Hence:

$B \in \set{A \in \AA : A \cap V = \O }$

From Set is Subset of Union:

$B \subseteq \ds \bigcup \set{A \in \AA : A \cap V = \O }$

We have:














\(\ds V^*\)

\(=\)







\(\ds X \setminus \bigcup \set {A \in \AA : A \cap V = \O }\)





definition of $V^*$














\(\ds \)

\(\subseteq\)







\(\ds X \setminus B\)





Set Difference with Subset is Superset of Set Difference




From Subset of Set Difference iff Disjoint Set:

$V^* \cap B = \O$

Since $B$ and $V^*$ were arbitrary:

$\forall A \in \AA, V^* \in \VV^* : A \cap V = \O \implies A \cap V^* = \O$

The result follows from Rule of Transposition.
$\blacksquare$





