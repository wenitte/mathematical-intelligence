# 

Source: https://proofwiki.org/wiki/Characterization_of_Paracompactness_in_T3_Space/Lemma_6



Theorem
Let $T = \struct {X, \tau}$ be a topological space.

Let $\UU$ be an open cover of $T$.

Let $\VV$ be a closed locally finite refinement of $\UU$.

For all $x \in X$, let:

$W_x \in \tau: x \in W_x$ and $\set {V \in \VV : V \cap W \ne \O}$ is finite

Let $\WW = \set {W_x : x \in X}$ be an open cover of $T$.

Let $\AA$ be a closed locally finite refinement of $\WW$.

For each $V \in \VV$, let:

$V^* = X \setminus \bigcup \set {A \in \AA | A \cap V = \O}$

Let $\VV^* = \set {V^* : V \in \VV}$.

Then:

$\VV^*$ is an open locally finite cover of $T$


Proof
Lemma 4
$\forall A \in \AA : \set{V \in \VV : V \cap A \ne \O}$ is finite
$\Box$


Lemma 11
$\forall A \in \AA, V^* \in \VV^* : A \cap V^* \ne \O \implies A \cap V \ne \O$
$\Box$


$\VV^*$ is a Set of Open Subsets
Let $V^* \in \VV^*$ for some $V \in \VV$.

Let $\AA_V = \set {A \in \AA | A \cap V = \O}$.

By definition of subset:

$\AA_V \subseteq \AA$

From Subset of Locally Finite Set of Subsets is Locally Finite:

$\AA_V$ is closed locally finite

From Union of Closed Locally Finite Set of Subsets is Closed:

$\bigcup \set{A \in \AA | A \cap V = \O}$ is closed in $T$

By definition of closed set:

$V^* = X \setminus \ds \bigcup \set{A \in \AA | A \cap V = \O} \in \tau$

Since $V^*$ was arbitrary, it follows that:

$V^* \in \VV^* : V^* \in \tau$
$\Box$


$\VV^*$ is a Cover
Let $x \in X$.

By definition of a cover:

$\exists V \in \VV : x \in V$

From Lemma $4$:

$V \subseteq V^*$

By definition of subset:

$x \in V^*$

Since $x$ was arbitrary, it follows that $\VV^*$ is a cover by definition.
$\Box$


$\VV^*$ is Locally Finite
Let $x \in X$.

By definition of locally finite:

$\exists U \in \tau : x \in U : \set{A \in \AA : A \cap U \ne \O}$ is finite.

Let $\set{A \in \AA : A \cap U \ne \O} = \set{A_1, A_2, \ldots, A_n}$ for some $n \in \N$.

From Subset of Cover is Cover of Subset:

$U \subseteq \ds \bigcup \set{A_1, A_2, \ldots, A_n}$

Let:

$V^* \in \VV^* : V^* \cap U \ne \O$

We have:














\(\ds \O\)

\(\ne\)







\(\ds V^* \cap \bigcup_{i = 1}^n A_i\)




















\(\ds \)

\(=\)







\(\ds \bigcup_{i = 1}^n V^* \cap A_i\)





Intersection Distributes over Union




Hence:

$\exists i \in \set{1, 2, \ldots, n} : V^* \cap A_i \ne \O$

From Lemma $11$:

$V \cap A_i \ne \O$

Hence:

$\set {V^* \in \VV^* : V^* \cap U} \subseteq \set {V^* \in \VV^* : \exists 1 \le i \le n : V \cap A_i \ne \O}$

For each $1 \le i \le n$:

$\exists W_i \in \WW : A_i \subseteq W_i$

By definition of $\WW$:

$\forall 1 \le i \le n : \set {V \in \VV : V \cap W_i \ne \O}$ is finite

Hence:

$\forall 1 \le i \le n : \set {V \in \VV : V \cap A_i \ne \O}$ is finite

From Union of Finite Sets is Finite:

$\set {V^* \in \VV^* : \exists 1 \le i \le n : V \cap A_i \ne \O}$ is finite

From Subset of Finite Set is Finite:

$\set {V^* \in \VV^* : V^* \cap U}$ is finite

Since $x$ was arbitrary, it follows that $\VV^*$ is locally finite.
$\blacksquare$





