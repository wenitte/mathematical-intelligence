# 

Source: https://proofwiki.org/wiki/Recursion_Property_of_Elementary_Symmetric_Function/Proof_1

Theorem
Let $\set {z_1, z_2, \ldots, z_{n + 1} }$ be a set of $n + 1$ numbers, duplicate values permitted.

Then for $1 \le m \le n$:

$\map {e_m} {\set {z_1, \ldots, z_n, z_{n + 1} } } = z_{n + 1} \map {e_{m - 1} } {\set {z_1, \ldots, z_n} } + \map {e_m} {\set {z_1, \ldots, z_n} }$


Proof
Case $m = 1$ holds because $e_0$ is $1$ and $e_1$ is the sum of the elements.

Assume $2 \le m \le n$.
Define four sets:

$A = \set {\set {p_1, \ldots, p_m} : 1 \le p_1 < \cdots < p_m \le n + 1}$
$B = \set {\set {p_1, \ldots, p_m} : 1 \le p_1 < \cdots < p_{m - 1} \le n, p_m = n + 1}$
$C = \set {\set {p_1, \ldots, p_m} : 1 \le p_1 < \cdots < p_m \le n}$
$D = \set {\set {p_1, \ldots, p_{m - 1} } : 1 \le p_1 < \cdots < p_{m - 1} \le n}$

Then $A = B \cup C$ and $B \cap C = \O$ implies:


This article, or a section of it, needs explaining.In particular: Prove the above $A = B \cup C$ and $B \cap C = \O$, perhaps as lemmataYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
$\ds \sum_A z_{p_1} \cdots z_{p_m} = \sum_B z_{p_1} \cdots z_{p_m} + \sum_C z_{p_1} \cdots z_{p_m}$
Simplify:

$\ds \sum_B z_{p_1} \cdots z_{p_m} = z_{n + 1} \sum_D z_{p_1} \cdots z_{p_{m - 1} }$

By definition of elementary symmetric function:














\(\ds \map {e_m} {\set {z_1, \ldots, z_n, z_{n + 1} } }\)

\(=\)







\(\ds \sum_A z_{p_1} \cdots z_{p_m}\)




















\(\ds \sum_D z_{p_1} \cdots z_{p_{m - 1} }\)

\(=\)







\(\ds \map {e_{m - 1} } {\set {z_1, \ldots, z_n} }\)




















\(\ds \sum_C z_{p_1} \cdots z_{p_m}\)

\(=\)







\(\ds \map {e_m} {\set {z_1, \ldots, z_n} }\)










Assemble the preceding equations:














\(\ds \map {e_m} {\set {z_1, \ldots, z_n, z_{n + 1} } }\)

\(=\)







\(\ds \sum_A z_{p_1} \cdots z_{p_m}\)




















\(\ds \)

\(=\)







\(\ds \sum_B z_{p_1} \cdots z_{p_m} + \sum_C z_{p_1} \cdots z_{p_m}\)




















\(\ds \)

\(=\)







\(\ds z_{n + 1} \sum_D z_{p_1} \cdots z_{p_m} + \sum_C z_{p_1} \cdots z_{p_m}\)




















\(\ds \)

\(=\)







\(\ds z_{n + 1} \map {e_{m - 1} } {\set {z_1, \ldots, z_n} } + \map {e_m} {\set {z_1, \ldots, z_n} }\)









$\blacksquare$





