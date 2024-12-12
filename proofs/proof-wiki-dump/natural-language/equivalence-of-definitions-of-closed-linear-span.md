# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Closed_Linear_Span


This page has been identified as a candidate for refactoring of basic complexity.In particular: standard formUntil this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.

This article needs to be tidied.In particular: big timePlease fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.
Theorem
Let $H$ be a Hilbert space over $\Bbb F \in \set {\R, \C}$, and let $A \subseteq H$ be a subset.
The following definitions of the concept of closed linear span of $A$ are equivalent:

$(1): \quad \ds \vee A = \bigcap \Bbb M$, where $\Bbb M$ consists of all closed linear subspaces $M$ of $H$ with $A \subseteq M$
$(2): \quad \vee A$ is the smallest closed linear subspace $M$ of $H$ with $A \subseteq M$
$(3): \quad \ds \vee A = \map \cl {\set {\sum_{k \mathop = 1}^n \alpha_k f_k: n \in \N_{\ge 1}, \alpha_i \in \Bbb F, f_i \in A} }$, where $\cl$ denotes closure


Proof
Let the proposition $(1)$ hold:
Assume the closed linear subspace $M'$ contains the set $A$.
Then because $M' \in \Bbb M$:

$\vee A \subseteq M'$
The intersection of arbitrary family of subspaces is a subspace.
For suppose $\CC$ is a family of subspaces.
Denote $\bigcap \CC = \set {f\in H: \forall V \in \CC: \exists f \in V}$
If $f \in \bigcap \CC$, then for any $V \in \CC$, $f \in V$ there exists $a f \in V$ for $a \in \Bbb F$.
If $f, g \in \bigcap \CC$, we have for any $V \in \CC$:

$f + g \in V$
Therefore, $\vee A$ is a subspace.
It is closed, as intersection of arbitrary family of closed sets is closed.
The choice of $M'$ is arbitrary.
Hence, $(2)$ holds.
This is the proof $(1) \implies (2)$.

Next, assume $(2)$ holds.
Since $A \subseteq \vee A$:

$\vee A \in \Bbb M$
$\vee A$ is the smallest one in $\Bbb M$.
Hence:

$\ds \vee A = \bigcap \Bbb M$
Thus we have established the equivalence between $(1)$ and $(2)$.

Finally we come to $(3)$:
We prove that $\map \cl {\map \span A}$ is a subspace.
Let $f \in \map \cl {\map \span A}$. 
By Definition of Hilbert Space:

$H$ is a metric space.
From Point in Closure of Subset of Metric Space iff Limit of Sequence:

there is a sequence $\sequence {f_i}$ in $\map \span A$ that its limit is $f$.
By the continuity of the function of the multiplication of numbers of the field $\Bbb F$ and points in $H$, the sequence $\sequence {af_i}$ with $a\in \Bbb F$ converges to $af$.
Because all the terms of the sequence $\sequence {af_i}$ are points in $\map \span A$, we have $af\in \map \cl {\map \span A}$.

The proof regards the addition of two vectors is by a similar manner.
If $f \in \map \cl {\map \span A}$ and $g\in \map \cl {\map \span A}$, then a sequence $\sequence {f_i}$, converges to $f$, and a sequence $\sequence {g_i}$, converges to $g$, of $\map \span A$ are given.
By the continuity of the function of the addition of points in $H$, $\sequence {f_i + g_i}$ converges to $f+g$. 
Because each terms of the sequence $f_i + g_i$ is in $\map \span A$, we have $f + g \in \map \cl {\map \span A}$.
Notice that in general, if $H'$ is a subspace, then $\map \cl {H'}$ is a subspace.

Finally we come to the proof of equivalence of $(2)$ and $(3)$:
$\map \cl {\map \span A}$, the closed linear subspace, contains $\map \span A$ and thus contains $A$.
For any closed linear subspace $M$ which contains $A$, $\map \span A \subseteq M$, since the linear span of $A$ is the smallest subspace that contains $A$.
Because $M$ is closed, $\map \cl {\map \span A} \subseteq M$.
$\map \cl {\map \span A}$ is the the smallest closed linear subspace $M$ of $H$ with $A \subseteq M$.
Because arbitrary intersection of closed sets is closed and arbitrary intersection of subspaces is a subspace, the smallestness is unique.
Hence $\vee A = \map \cl {\map \span A}$.
$\blacksquare$


Sources
1990: John B. Conway: A Course in Functional Analysis (2nd ed.) ... (previous) ... (next): $\text{I}$ Hilbert Spaces: $\S 2.$ Orthogonality: Exercise $4$

This page may be the result of a refactoring operation.As such, the following source works, along with any process flow, will need to be reviewed.When this has been completed, the citation of that source work (if it is appropriate that it stay on this page) is to be placed above this message, into the usual chronological ordering.In particular: Find the chapter and section, not by page which is obviously the wrong way to do thisIf you have access to any of these works, then you are invited to review this list, and make any necessary corrections.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{SourceReview}} from the code.
2004: James R. Munkres: Topology P130, Lemma $21.2$




