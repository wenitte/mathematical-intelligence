# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Norm_of_Linear_Functional


2022:  It has been suggested that this page or section be merged into Equivalence of Definitions of Norm of Linear Transformation.In particular: This result is a special case of that.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mergeto}} from the code.

This page has been identified as a candidate for refactoring of basic complexity.In particular: Use the TFAE template as is standard for equivalence proofs such as this.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.


Theorem
Let $V$ be a normed vector space, and let $L$ be a bounded linear functional on $V$.
Define the following norms of $L$:

$(1): \quad \norm L_1 = \sup \set {\size {L h}: \norm h \le 1}$
$(2): \quad \norm L_2 = \sup \set {\size {L h}: \norm h = 1}$
$(3): \quad \norm L_3 = \sup \set {\dfrac {\size {L h} } {\norm h}: h \in H \setminus \set {\mathbf 0} }$
$(4): \quad \norm L_4 = \inf \set {c > 0: \forall h \in H: \size {L h} \le c \norm h}$
Then:

$\norm L_1 = \norm L_2 = \norm L_3 = \norm L_4$


Corollary
For all $v \in V$, the following inequality holds:

$\size {L v} \le \norm L \norm v$

This article, or a section of it, needs explaining.In particular: Define $\norm L$ and $\norm v$You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.


Proof
We have:

$\set {v \in V : \norm v = 1} \subseteq \set {v \in V : \norm v \le 1} \subseteq V$
So it follows from the definition of the supremum that 

$\norm L_2 \le \norm L_1 \le \norm L_3$
Next we show that $\norm L_2 = \norm L_3$:














\(\ds \norm L_2\)

\(=\)







\(\ds \sup \set {\norm {L v}: \norm h = 1}\)




















\(\ds \)

\(=\)







\(\ds \sup \set {\norm {L v'}: v \in V \setminus \set {\mathbf 0}, \ v' = v / \norm v}\)





as $\norm {v / \norm v} = \norm v / \norm v = 1$ for all $v \in V \setminus \set {\mathbf 0}$














\(\ds \)

\(=\)







\(\ds \sup \set {\norm {\frac 1 {\norm v} L v}: v \in V \setminus \set {\mathbf 0} }\)





as $L$ is linear














\(\ds \)

\(=\)







\(\ds \sup \set {\frac {\norm {L v} } {\norm v}: v \in V \setminus \set {\mathbf 0} }\)





Norm Axiom $\text N 2$: Positive Homogeneity














\(\ds \)

\(=\)







\(\ds \norm L_3\)









Therefore

$\norm L_1 = \norm L_2 = \norm L_3$
Moreover, if $\size {L v} \le c \norm v$ for all $v \in V \setminus \set {\mathbf 0}$, then we have:

$\norm L_3 = \sup \set {\dfrac {\size {L v} } {\norm v}: v \in V \setminus \set {\mathbf 0} } \le c$
Taking the infimum over all such $c$ this reads:

$\norm L_3 \le \norm L_4$
Aiming for a contradiction, suppose $c_0 := \norm L_4 > \norm L_3$.
Then by the definitions of these two norms, this means that there exists $\epsilon > 0$ such that for every $v \in V \setminus \set {\mathbf 0}$:

$\dfrac {\size {L v} } {\norm v} + \epsilon \le c_0$
But this in turn implies that for every $v \in V \setminus \set {\mathbf 0}$:

$\size {L v} \le c_0 \norm v - \epsilon \norm v = \paren {c_0 - \epsilon} \norm v$
This contradicts the fact that $c_0$ is the least such number satisfying this inequality.
Therefore:

$\norm L_3 = \norm L_4$
and the proof is complete.
$\blacksquare$


Sources
1990: John B. Conway: A Course in Functional Analysis (2nd ed.) ... (previous) ... (next): $\text{I}$ Hilbert Spaces: $\S 3.$ The Riesz Representation Theorem: Proposition $3.3$




