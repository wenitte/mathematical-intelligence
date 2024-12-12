# 

Source: https://proofwiki.org/wiki/Characterization_of_Paracompactness_in_T3_Space/Lemma_7


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $T = \struct{X, \tau}$ be a topological space.

Let $\UU$ be an open cover of $T$.

Let $\VV$ be a closed locally finite refinement of $\UU$.

For all $x \in X$, let:

$W_x \in \tau: x \in W_x$ and $\set{V \in \VV : V \cap W_x \ne \O}$ be finite

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

$\UU^*$ is an open locally finite refinement of $\UU$
Proof
Lemma 5
$\forall V \in \VV: V \subseteq V^*$
$\Box$

Lemma 6
$\VV^*$ is an open locally finite cover of $T$
$\Box$

Lemma 12
$\forall A \in \AA : \set{U^* \in \UU^* : U^* \cap A \ne \O}$ is finite
$\Box$

$\UU^*$ is an Open Cover of $T$
By Open Set Axiom $\paren {\text O 2 }$: Pairwise Intersection of Open Sets:

$\forall V^* \cap U_V \in \UU^* : V^* \cap U_V \in \tau$

From Set is Subset of Intersection of Supersets:

$\forall V \in \VV : V \subseteq V^* \cap U_V$

By definition of cover:

$\forall x \in X : \exists V \in \VV : x \in V$

By definition of subset:

$\forall x \in X : \exists V \in \VV : x \in V^* \cap U_V$

Hence $\UU^*$ is an  open cover of $T$ by definition.
$\Box$

$\UU^*$ is a Refinement of $\UU$
From Intersection is Subset:

$\forall V \in \VV : V^* \cap U_V \subseteq U_V \in \UU$

Hence $\UU^*$ is a refinement of $\UU$.
$\Box$

$\UU^*$ is Locally Finite
Let $x \in X$.

By definition of locally finite:

$\exists W \in \tau : x \in W : \set{A \in \AA : A \cap W \ne \O}$ is finite

Let:

$\set{A \in \VV : A \cap W \ne \O} = \set{A_1, A_2, \ldots, A_k}$ where $k \in \N$
From Subset of Cover is Cover of Subset:

$W \subseteq \ds \bigcup_{n = 1}^k A_n$

We have:














\(\ds \set{U^* \in \UU : U^* \cap W \ne \O}\)

\(\subseteq\)







\(\ds \set{U^* \in \UU : U^* \cap \bigcup_{n = 1}^k A_n \ne \O}\)





Subsets of Disjoint Sets are Disjoint














\(\ds \)

\(=\)







\(\ds \set{U^* \in \UU : \bigcup_{n = 1}^k \paren{U^* \cap  A_n} \ne \O}\)





Intersection Distributes over Union














\(\ds \)

\(=\)







\(\ds \bigcup_{n = 1}^k \set{U^* \in \UU : U^* \cap A_n \ne \O}\)





Union of Set of Sets is Non-empty iff some Set is Non-empty




From Lemma 12:

$\forall A_i = 1, \ldots , n : \set{U^* \in \UU : U^* \cap A_i \ne \O}$ is finite

From Finite Union of Finite Sets is Finite:

$\bigcup_{n = 1}^k \set{U^* \in \UU : U^* \cap A_n \ne \O}$  is finite

From Subset of Finite Set is Finite:

$\set{U^* \in \UU : U^* \cap W \ne \O}$ is finite

Since $x$ was arbitrary:

$\UU^*$ is locally finite by definition.
$\Box$

Hence:

$\UU^*$ is an open locally finite refinement of $\UU$ by definition.
$\blacksquare$





