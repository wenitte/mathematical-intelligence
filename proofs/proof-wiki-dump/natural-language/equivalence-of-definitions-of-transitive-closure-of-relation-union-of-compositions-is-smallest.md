# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Transitive_Closure_of_Relation/Union_of_Compositions_is_Smallest


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $\RR$ be a relation on a set $S$.
Let:

$\RR^n := \begin {cases} \RR & : n = 0 \\ \RR^{n - 1} \circ \RR & : n > 0 \end {cases}$
where $\circ$ denotes composition of relations.


This article, or a section of it, needs explaining.In particular: Really? I would have thought $\RR^1 = \RR$, not $\RR^0 = \RR$. If anything, the diagonal relation $\Delta_S$ should be $\RR^0$.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Finally, let:

$\ds \RR^+ = \bigcup_{i \mathop \in \N} \RR^i$

Then $\RR^+$ is the smallest transitive relation on $S$ that contains $\RR$.


Proof
$\RR^+$ is Transitive
By Relation contains Composite with Self iff Transitive, we can prove that $\RR^+$ is transitive by proving the following:

$\RR^+ \circ \RR^+ \subseteq \RR^+$

Let $\tuple {a, c} \in \RR^+ \circ \RR^+$.
Then:

$\exists b \in S: \tuple {a, b} \in \RR^+, \tuple {b, c} \in \RR^+$
Thus:

$\exists n \in \N: \tuple {a, b} \in \RR^n$
$\exists m \in \N: \tuple {b, c} \in \RR^m$
From Composition of Relations is Associative:

$\RR^{n + m} = \RR^n \circ \RR^m$
so:

$\tuple {a, c} \in \RR^{n + m} \subseteq \RR^+$
Since this holds for all $\tuple {a, c} \in \RR^+ \circ \RR^+$:

$\RR^+ \circ \RR^+ \subseteq \RR^+$
Thus $\RR^+$ is transitive.
$\Box$


$\RR^+$ contains $\RR$
$\RR \subseteq \RR^+$ by Set is Subset of Union of Family.


$\RR^+$ is Smallest
Let $\RR'$ be a transitive relation on $S$ such that $\RR \subseteq \RR'$.
We must show that $\RR^+ \subseteq \RR'$.
Let $\tuple {a, b} \in \RR^+$.
That is:

$a \mathrel \RR b$
Then:

$\exists n \in \N: \tuple {a, b} \in \RR^n$
Thus by the definition of composition of relations, there exists $x_{n - 1} \in S$ such that:

$a \mathrel {\RR^{n - 1} } x_{n - 1} \land x_{n - 1} \mathrel \RR b$
Likewise there exists $x_{n - 2} \in S$ such that:

$a \mathrel {\RR^{n - 2} } x_{n - 2} \land x_{n - 2} \mathrel \RR x_{n - 1}$
And so forth there exist elements $x_0, \dots, x_n \in S$ such that:

$x_0 = a$
$x_n = b$
$\forall k \in \N_n: x_k \mathrel \RR x_{k + 1}$
Since $\RR \subseteq \RR'$:

$\forall k \in \N_n: x_k \mathrel {\RR'} x_{k + 1}$
Since $\RR'$ is transitive:

$a \mathrel {\RR'} b$
That is:

$\tuple {a, b} \in \RR'$
Since this holds for all $\tuple {a, b} \in \RR^+$:

$\RR^+ \subseteq \RR'$
Since this holds for all transitive relations $\RR'$ that contain $\RR$:

$\RR^+$ is the smallest transitive relation containing $\RR$.
$\blacksquare$





