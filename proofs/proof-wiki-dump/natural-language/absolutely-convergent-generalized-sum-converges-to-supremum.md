# 

Source: https://proofwiki.org/wiki/Absolutely_Convergent_Generalized_Sum_Converges_to_Supremum


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $V$ be a Banach space.

Let $\family {v_i}_{i \mathop \in I}$ be an indexed family of elements of $V$.
Let $\FF$ denote the set of finite subsets of $I$.

Let the generalized sum $\ds \sum_{i \mathop \in I} v_i$ converge absolutely to $c \in \R$.

Then:

$c = \sup \set{\ds \sum_{i \mathop \in F} \norm{v_i} : F \in \FF}$


Proof
Aiming for a contradiction, suppose:

$\exists E \in \FF : \ds \sum_{i \mathop \in E} \norm{v_i} > c$

Let:

$0 < \epsilon < \ds \sum_{i \mathop \in F} \norm{v_i} - c$

Let $F \in \FF$.
Let $E' = F \cup E$.
We have:














\(\ds \sum_{i \mathop \in E'} \norm{v_i}\)

\(=\)







\(\ds \sum_{i \mathop \in F} \norm{v_i} + \sum_{i \mathop \in E' \setminus F} \norm{v_i}\)





Summation over Union of Disjoint Finite Index Sets














\(\ds \)

\(\ge\)







\(\ds \sum_{i \mathop \in F} \norm{v_i}\)




















\(\ds \)

\(>\)







\(\ds c + \epsilon\)





Summation over Union of Disjoint Finite Index Sets








\(\ds \leadsto \ \ \)





\(\ds \epsilon\)

\(<\)







\(\ds \size{\sum_{i \mathop \in E'} \norm{v_i} - c}\)










Since $F$ was arbitrary, it follows:

$\forall F \in \FF : \exists E' \in \FF : E' \supseteq F$ and $\size{\ds \sum_{i \mathop \in E'} \norm{v_i} - c} > \epsilon$

This contradicts the hypothesis that $\ds \sum_{i \mathop \in I} v_i$ converges absolutely to $c \in \R$.

Hence:

$\forall E \in \FF : \ds \sum_{i \mathop \in E} \norm{v_i} \le c$

By definition of absolutely net convergence:

$\forall \epsilon \in \R_{\mathop > 0}: \exists F \in \FF : \forall E \in \FF : E \supseteq F \leadsto \ds \sum_{i \mathop \in E} \norm{v_i} \in \hointl {c - \epsilon} c$

From Characterizing Property of Supremum of Subset of Real Numbers:

$c = \sup \set{\ds \sum_{i \mathop \in F} \norm{v_i} : F \in \FF}$
$\blacksquare$





