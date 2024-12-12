# 

Source: https://proofwiki.org/wiki/Characterization_of_Paracompactness_in_T3_Space/Statement_3_implies_Statement_1


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $T = \struct{X, \tau}$ be a topological space.

If every open cover of $T$ have a closed locally finite refinement then:

$T$ is paracompact.
Proof
Let every open cover of $T$ have a closed locally finite refinement.

Let $\UU$ be an open cover of $T$.

Let $\VV$ be a closed locally finite refinement of $\UU$, which exists by assumption.

Let $\WW = \set{W \in \tau : \set{V \in \VV : V \cap W \ne \O} \text{ is finite}}$.

By definition of locally finite:

$\forall x \in X: \exists W \in \tau: x \in W$ and $\set{V \in \VV : V \cap W \ne \O}$ is finite.

Hence $\WW$ is an open cover of $T$, by definition.

Let $\AA$ be a closed locally finite refinement of $\WW$, which exists by assumption.

Lemma 4
$\forall A \in \AA : \set{V \in \VV : V \cap A \ne \O}$ is finite
$\Box$

For each $V \in \VV$, let:

$V^* = X \setminus \ds \bigcup \set{A \in \AA : A \cap V = \O}$
Lemma 5
$\forall V \in \VV: V \subseteq V^*$
$\Box$

Let $\VV^* = \set{V^* : V \in \VV}$.

Lemma 6
$\VV^*$ is an open locally finite cover of $T$
$\Box$

From Lemma 5 and Lemma 6 it follows that $\VV$ is a refinement of $\VV^*$ by definition.

By definition of refinement:

$\forall V \in \VV : \exists U \in \UU : V \subseteq U$

For each $V \in \VV$, let:

$U_V \in \UU : V \subseteq U_V$

Let:

$\UU^* = \set{V^* \cap U_V : V \in \VV}$
Lemma 7
$\UU^*$ is an open locally finite refinement of $\UU$
$\Box$

Since $\UU$ was arbitrary, it follows that $T$ is paracompact by definition.
$\blacksquare$


Sources
1970: Stephen Willard: General Topology: Chapter $6$: Compactness: $\S20$: Paracompactness: Theorem $20.7$




