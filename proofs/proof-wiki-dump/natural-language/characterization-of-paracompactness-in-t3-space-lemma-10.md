# 

Source: https://proofwiki.org/wiki/Characterization_of_Paracompactness_in_T3_Space/Lemma_10


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $T = \struct{X, \tau}$ be a topological space.

Let $\UU$ be an open cover of $T$.

Let $\AA = \ds \bigcup_{n \in \N} \AA_n$ be a $\sigma$-discrete refinement of $\UU$:

$\forall n \in \N : \AA_n$ is a discrete set of subsets

For each $n \in \N$, let $V_n$ be an open neighborhood of the diagonal $\Delta_X$ of $X \times X$ in the product space $\struct {X \times X, \tau_{X \times X} }$:

$\forall x \in X : \card {\set{A \in \AA_n : \map {V_n} x \cap V_n \sqbrk A \ne \O}} \le 1$

For each  $A \in \AA$ let:

$U_A \in U : A \subseteq U_A$

For each $n \in \N$, let:

$\WW_n = \set{U_A \cap V_n \sqbrk A : A \in \AA_n}$

Let:

$\WW = \ds \bigcup_{n \in \N} \WW_n$

Then:

$\WW$ is an open $\sigma$-discrete refinement of $\UU$


Proof
$\WW$ is Set of Open Sets
Let:

$W \in \WW$

By definition of $\WW$:

$\exists n \in \N, A \in \AA : W = U_A \cap V_n \sqbrk A$

We have by hypothesis:

$U_A \in \tau$

From Image of Subset under Open Neighborhood of Diagonal is Open Neighborhood of Subset:

$V_n \sqbrk A \in \tau$

By Open Set Axiom $\paren {\text O 2 }$: Pairwise Intersection of Open Sets:

$W \in \tau$

Since $W$ was arbitrary, it follows that:

$\WW$ is a set of open sets
$\Box$

$\WW$ is a Cover of $X$
Let:

$x \in X$

By definition of cover of set:

$\exists A \in \AA : x \in A$

Let:

$n = \min \set{m \in \N : A \in \AA_m}$

By definition of neighborhood:

$\Delta_X \subseteq V_n$
Hence:

$\forall a \in A : \tuple{a, a} \in V_n$

By definition of image:

$\forall a \in A : a \in V_n \sqbrk A$

By definition of subset:

$A \subseteq V_n \sqbrk A$

We have by hypothesis:

$A \subseteq U_A$

From Set is Subset of Intersection of Supersets:

$A \subseteq U_A \cap  V_n \sqbrk A$

By definition of subset:

$x \in U_A \cap  V_n \sqbrk A$

By definition of $\WW_n$:

$U_A \cap  V_n \sqbrk A \in \WW_n \subseteq \WW$

Hence:

$\exists W \in \WW : x \in W$

Since $x$ was arbitrary, it follows that $\WW$ is a cover of $X$.
$\Box$


$\WW$ is a Refinement of $\UU$
Let:

$W \in \WW$

By definition of $\WW$:

$\exists n \in \N, A \in \AA : W = U_A \cap V_n \sqbrk A$

From Intersection is Subset:

$W \subseteq U_A$
Hence:

$\exists U \in \UU : W \subseteq U$

Since $W$ was arbitrary, it follows that $\WW$ is a refinement of $\UU$ by definition.
$\Box$


$\WW_k$ is Discrete
Let $n \in \N$.

Let $x \in X$.

We have by hypothesis:

$\card {\set{A \in \AA_n : \map {V_n} x \cap V_n \sqbrk A \ne \O}} \le 1$

From Subsets of Disjoint Sets are Disjoint:

$\forall A \in A_n : \map {V_n} x \cap V_n \sqbrk A \cap U_A \ne \O \leadsto \map {V_n} x \cap V_n \sqbrk A \ne \O$

Hence:

$\set{A \in \AA_n : \map {V_n} x \cap V_n \sqbrk A \cap U_A \ne \O} \subseteq \set{A \in \AA_n : \map {V_n} x \cap V_n \sqbrk A \ne \O}$

From Cardinality of Subset of Finite Set:

$\card{\set{A \in \AA_n : \map {V_n} x \cap V_n \sqbrk A \cap U_A \ne \O}} \le 1$

The mapping $f: \set{A \in \AA_n : \map {V_n} x \cap V_n \sqbrk A \cap U_A \ne \O} \to \set{W \in \WW_n : \map {V_n} x \cap W \ne \O}$ defined by:

$\map f A = V_n \sqbrk A \cap U_A$
is surjective.

From Cardinality of Codomain of Surjection:

$\card {\set{W \in \WW_n : \map {V_n} x \cap W \ne \O}} \le \card {\set{A \in \AA_n : \map {V_n} x \cap V_n \sqbrk A \cap U_A \ne \O}}$

Hence:

$\card {\set{W \in \WW_n : \map {V_n} x \cap W \ne \O}} \le 1$

From Image of Point under Open Neighborhood of Diagonal is Open Neighborhood of Point:

$\map {V_n} x \in \tau$ is an open neighborhood of $x$

Since $x$ was arbitrary, it follows that:

$\forall x \in X : \map {V_n} x \in \tau : x \in \map {V_n} x : \card {\set{W \in \WW_n : \map {V_n} x \cap W \ne \O}} \le 1$

It follows that $\WW_n$ is a discrete set of subsets by definition.

Since $n$ was arbitrary, it follows that:

$\forall n \in \N : \WW_n$ is a discrete set of subsets
$\Box$

It follows that $\WW$ is an open $\sigma$-discrete refinement of $\UU$ by definition.
$\blacksquare$





