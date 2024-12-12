# 

Source: https://proofwiki.org/wiki/Characterization_of_Paracompactness_in_T3_Space/Lemma_9


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $T = \struct{X, \tau}$ be a topological space.
Let every open cover of $T$ be even.

Let $\BB$ be a discrete set of subsets of $X$.

Then there exists an open neighborhood $W$ of the diagonal $\Delta_X$ of $X \times X$ in $T \times T$:

$\forall x \in X : \card {\set{B \in \BB : \map W x \cap W \sqbrk B \ne \O}} \le 1$
Proof
Let:

$\UU = \set{ U \in \tau : \card {\set{B \in \BB : U \cap B} } \le 1}$
Lemma 19
$\UU$ is a open cover of $X$ in $T$.
$\Box$

We have by hypothesis:

$\UU$ is an even cover.

Let $\tau_{X \times X}$ denote the product topology on the cartesian product $X \times X$.

By definition of even cover, there exists a neighborhood $V$ of the diagonal $\Delta_X$ of $X \times X$ in the product space $\struct {X \times X, \tau_{X \times X} }$:

$\set{\map V x : x \in X}$ is a refinement of $\UU$
Lemma 20
Let $N$ be a neighborhood of the diagonal $\Delta_X$ of $X \times X$ in the product space $\struct {X \times X, \tau_{X \times X} }$.

Then there exists an open neighborhood $W$ of the diagonal $\Delta_X$ in $\struct {X \times X, \tau_{X \times X} }$:

$W$ is symmetric as a relation on $X \times X$, that is, $W = W^{-1}$
the composite relation $W \circ W$ is a subset of $N$, that is, $W \circ W \subseteq N$
$\Box$

From Lemma 20, there exists an open neighborhood $W$ of the diagonal $\Delta_X$ in $\struct {X \times X, \tau_{X \times X} }$:

$W = W^{-1}$
$W \circ W \subseteq V$
Lemma 21
$\forall B \in \BB, x \in X : \map W x \cap W \sqbrk B \ne \O \leadsto \map {W \circ W} x \cap B \ne \O$
$\Box$

Let $x \in X$.

By definition of refinement:

$\exists U \in \UU : \map V x \subseteq U$

From Corollary to Image under Subset of Relation is Subset of Image under Relation:

$\map {W \circ W} x \subseteq \map V x$
From Subset Relation is Transitive:

$\map {W \circ W} x \subseteq U$

We have:














\(\ds \set{B \in \BB : \map W x \cap W \sqbrk B \ne \O}\)

\(\subseteq\)







\(\ds \set{B \in \BB : \map {W \circ W} x \cap B \ne \O}\)





Lemma 21














\(\ds \)

\(\subseteq\)







\(\ds \set{B \in \BB : U \cap B \ne \O}\)





Subsets of Disjoint Sets are Disjoint




By definition of $\UU$:

$\card {\set{B \in \BB : U \cap B \ne \O}} \le 1$

Hence:

$\card {\set{B \in \BB : \map W x \cap W \sqbrk B \ne \O}} \le 1$

Since $x$ was arbitrary, it follows that:

$\forall x \in X : \card {\set{B \in \BB : \map W x \cap W \sqbrk B \ne \O}} \le 1$
$\blacksquare$





