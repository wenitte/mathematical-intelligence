# 

Source: https://proofwiki.org/wiki/Bounded_Generalized_Sum_is_Absolutely_Convergent


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $V$ be a Banach space.

Let $\family {v_i}_{i \mathop \in I}$ be an indexed family of elements of $V$.
Let $\FF$ denote the set of finite subsets of $I$.

Then:

the generalized sum $\ds \sum_{i \mathop \in I} v_i$ is absolutely net convergent
if and only if

there exists $M \in \R_{\mathop \ge 0}$ such that for all $F \in \FF$:
the summation $\ds \sum_{i \mathop \in F} \norm{v_i} \le M$


Proof
Necessary Condition
Let the generalized sum $\ds \sum_{i \mathop \in I} v_i$ be absolutely net convergent.
Let: 

$M = \ds \sum_{i \mathop \in I} \norm{v_i}$

Aiming for a contradiction, suppose

$\exists F_0 \in \FF : \sum_{i \mathop \in F_0} \norm{v_i} > M$

Let:

$(1) \quad \epsilon \in \R_{\mathop > 0} : \epsilon < \paren{\ds \sum_{i \mathop \in F_0} \norm{v_i} } - M$

By definition of absolutely net convergence:

$(2) \quad \exists F \in \FF : \forall E \in \FF : E \supseteq F \implies \ds \size{\sum_{i \mathop \in E} \norm{v_i} - M} < \epsilon$
Let:

$E = F \cup F_0$
From Set is Subset of Union:

$E \supseteq F$

We have:














\(\ds \sum_{i \mathop \in E} \norm{v_i}\)

\(<\)







\(\ds M + \epsilon\)





from $(2)$














\(\ds \)

\(<\)







\(\ds \sum_{i \mathop \in F_0} \norm{v_i}\)





from $(1)$














\(\ds \)

\(\le\)







\(\ds \sum_{i \mathop \in F_0} \norm{v_i} + \sum_{i \mathop \in E \setminus F_0} \norm{v_i}\)





Norm Axiom $\text N 1$: Positive Definiteness














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop \in E} \norm{v_i}\)





Summation over Union of Disjoint Finite Index Sets




We have a contradiction, so it follows that:

$\forall F \in \FF : \ds \sum_{i \mathop \in F} \norm{v_i} \le M$
$\Box$

Sufficient Condition
Let there exist $M \in \R_{\mathop \ge 0}$ such that for all $F \in \FF$: 

the summation $\ds \sum_{i \mathop \in F} \norm{v_i} \le M$.

Let $S = \set{\ds \sum_{i \mathop \in F} \norm{v_i} : F \in \FF}$

From Least Upper Bound Property, let:

$c = \sup S$

From Characterizing Property of Supremum of Subset of Real Numbers:

$(3)\quad \forall F \in \FF : \ds \sum_{i \mathop \in F} \norm{v_i} \le c$
and

$(4)\quad \forall \epsilon \in \R_{> 0}: \exists F \in \FF : \ds \sum_{i \mathop \in F} \norm{v_i} > c - \epsilon$

Let $\epsilon \in \R_{> 0}$.
From $(4)$:

$\exists F \in \FF : \ds \sum_{i \mathop \in F} \norm{v_i} > c - \epsilon$

Let $E \in \FF : E \supseteq F$.
We have:














\(\ds c\)

\(\ge\)







\(\ds \sum_{i \mathop \in E} \norm{v_i}\)





from $(3)$














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop \in F} \norm{v_i} + \sum_{i \mathop \in E \setminus F} \norm{v_i}\)





Summation over Union of Disjoint Finite Index Sets














\(\ds \)

\(\ge\)







\(\ds \sum_{i \mathop \in F} \norm{v_i}\)





Norm Axiom $\text N 1$: Positive Definiteness














\(\ds \)

\(>\)







\(\ds c - \epsilon\)





from $(4)$




Since $E$ was arbitrary, it follows:

$\forall E \in \FF : E \supseteq F \leadsto \ds \sum_{i \mathop \in E} \norm{v_i} \in \openint {c - \epsilon} {c + \epsilon}$

Since $\epsilon$ was arbitrary, it follows:

$\forall \epsilon \in \R_{> 0} : \exists F \in \FF : \forall E \in \FF : E \supseteq F \leadsto \ds \sum_{i \mathop \in E} \norm{v_i} \in \openint {c - \epsilon} {c + \epsilon}$

It follows that the generalized sum $\ds \sum_{i \mathop I} \norm{v_i}$ is convergent to $c$.
The result follows.
$\blacksquare$





