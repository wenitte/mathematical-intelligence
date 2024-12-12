# 

Source: https://proofwiki.org/wiki/Countable_Open_Covers_Condition_for_Separated_Sets


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $A, B \subseteq S$

For all $X \subseteq S$, let $X^-$ denote the closure of $X$ in $T$.

Let:

$\UU = \set {U_n : n \in \N}$ be a countable open cover of $A : \forall n \in \N : {U_n}^- \cap B = \O$

Let:

$\VV = \set {V_n : n \in \N}$ be a countable open cover of $B : \forall n \in \N : {V_n}^- \cap A = \O$

Then:

$A$ and $B$ can be separated in $T$


Proof
By definition of cover:

$\ds A \subseteq \bigcup_{n \mathop \in \N} U_n$

We have:

$\ds A \cap \paren{\bigcup_{n \mathop \in \N} {V_n}^-} = \O$

From Subset of Set Difference iff Disjoint Set:

$(1): \quad \ds A \subseteq \paren {\bigcup_{n \mathop \in \N} U_n} \setminus \paren {\bigcup_{n \mathop \in \N} {V_n}^-}$

Similarly:

$(2): \quad \ds B \subseteq \paren {\bigcup_{n \mathop \in \N} V_n} \setminus \paren {\bigcup_{n \mathop \in \N} {U_n}^-}$

For each $n \in \N$, let:

${U_n}' = U_n \setminus \paren {\ds \bigcup_{p \mathop \le n} {V_p}^-}$

For each $n \in \N$, let:

${V_n}' = V_n \setminus \paren {\ds \bigcup_{p \mathop \le n} {U_p}^-}$


Lemma 1
$\forall n, m \in \N : {U_n}' \cap {V_m}' = \O$
$\Box$

Let:

$U = \ds \bigcup_{n \mathop \in \N} {U_n}'$
and

$V = \ds \bigcup_{n \mathop \in \N} {V_n}'$

From Lemma 1:

$U \cap V = \O$


Lemma 2
$U$ and $V$ are open in $T$.
$\Box$

We have:














\(\ds A\)

\(\subseteq\)







\(\ds \paren {\bigcup_{n \mathop \in \N} U_n} \setminus \paren {\bigcup_{n \mathop \in \N} {V_n}^-}\)





From $(1)$ above














\(\ds \)

\(=\)







\(\ds \bigcup_{n \mathop \in \N} \paren {U_n \setminus \paren {\bigcup_{p \mathop \in \N} {V_p}^-} }\)





Set Difference is Right Distributive over Union














\(\ds \)

\(\subseteq\)







\(\ds \bigcup_{n \mathop \in \N} \paren {U_n \setminus \paren {\bigcup_{p \mathop \le n} {V_p}^-} }\)





Set Difference with Subset is Superset of Set Difference














\(\ds \)

\(=\)







\(\ds \bigcup_{n \mathop \in \N} {U_n}'\)





Definition of ${U_n}'$














\(\ds \)

\(=\)







\(\ds U\)





Definition of $U$




Similarly, from $(2)$ above:














\(\ds B\)

\(\subseteq\)







\(\ds V\)










It has been shown:

there exists $U, V \in \tau$ such that $A \subseteq U, B \subseteq V$ and $U \cap V = \O$.
Hence, by definition, $A$ and $B$ can be separated in $T$.
$\blacksquare$





