# 

Source: https://proofwiki.org/wiki/Characterization_of_Paracompactness_in_T3_Space/Lemma_12


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $T = \struct{X, \tau}$ be a topological space.

Let $\UU$ be an open cover of $T$.

Let $\VV$ be a closed locally finite refinement of $\UU$.

For all $x \in X$, let:

$W_x \in \tau: x \in W_x$ and $\set{V \in \VV : V \cap W \ne \O}$ be finite

Let $\WW = \set{W_x : x \in X}$ be an open cover of $T$.

Let $\AA$ be a closed locally finite refinement of $\WW$.

For each $V \in \VV$, let:

$V^* = X \setminus \ds \bigcup \set{A \in \AA | A \cap V = \O}$

Let $\VV^* = \set{V^* : V \in \VV}$.

For each $V \in \VV$, let:

$U_V \in \UU : V \subseteq U_V$

Let:

$\UU^* = \set{V^* \cap U_V : V \in \VV}$

Then:

$\forall A \in \AA : \set{U^* \in \UU^* : U^* \cap A \ne \O}$ is finite
Proof
Lemma 4
$\forall A \in \AA : \set{V \in \VV : V \cap A \ne \O}$ is finite
$\Box$

Lemma 11
$\forall A \in \AA, V^* \in \VV^* : A \cap V^* \ne \O \implies A \cap V \ne \O$
$\Box$

Let $A \in \AA$.

From Lemma 4:

$\set{V \in \VV : V \cap A_0 \ne \O}$ is finite

Consider the surjection:

$f: \set{V \in \VV : V \cap A \ne \O} \to \set{V^* \cap U_V : V \in \VV : V \cap A \ne \O}$ defined by:
$\forall V \in \VV: \map f V =  V^* \cap U_V$

From Cardinality of Codomain of Surjection:

$\set{V^* \cap U_V : V \in \VV : V \cap A \ne \O}$ is finite

From Lemma 11:

$\set{V^* \cap U_V : V \in \VV : V^* \cap A \ne \O} \subseteq \set{V^* \cap U_V : V \in \VV : V \cap A \ne \O}$

From Subsets of Disjoint Sets are Disjoint:

$\set{V^* \cap U_V : V \in \VV : V^* \cap U_V \cap A \ne \O} \subseteq \set{V^* \cap U_V : V \in \VV : V^* \cap A \ne \O}$

From Subset of Finite Set is Finite:

$\set{V^* \cap U_V : V \in \VV : V^* \cap U_V \cap A \ne \O}$  is finite

That is:

$\set{U^* \in \UU^* : U^* \cap A \ne \O}$ is finite

Since $A$ was arbitrary, it follows that:

$\forall A \in \AA : \set{U^* \in \UU^* : U^* \cap A \ne \O}$ is finite
$\blacksquare$





