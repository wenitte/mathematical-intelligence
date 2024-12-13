# 

Source: https://proofwiki.org/wiki/Matroid_Bases_Satisfy_Formulation_7_of_Matroid_Base_Axiom/Lemma_1


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $S$ be a finite set.
Let $\mathscr C$ be a non-empty set of subsets satisfying the circuit axioms.

Let $n \in \N_{>0}$.
Let $C_1, C_2, \ldots, C_n \in \mathscr C$ satisfy:

$\forall 0 \le k \le n : C_k \nsubseteq \ds \bigcup_{i \ne k} C_i$
Let:

$A \subseteq S : \size A < n$
Let $r = \size A$.

Then:

$\ds \exists D_1, \ldots, D_{n - r} \in \mathscr C : \bigcup_{i = 1}^{n - r} D_i \subseteq \paren{\bigcup_{i = 1}^{n} C_i} \setminus A$


Proof
Case 1 : $n = 1$
Let $n = 1$.
Hence $\size A = 0$.
From Cardinality of Empty Set:

$A = \O$
It follows that $C_1$ suffices for $D_1$.
$\Box$


Case 2 : $n \ge 2$
Let $n \ge 2$.

This case is proved by Induction of Finite Set.
Let $\map P X$ be the predicate:

$\ds \exists D_1, \ldots, D_{n - s} \in \mathscr C : \paren{\bigcup_{i = 1}^{n - s} D_i \subseteq \paren{\bigcup_{i = 1}^{n} C_i} \setminus X} \land \paren{\forall 1 \le k \le n - s: D_k \nsubseteq \bigcup_{i = 1, i \ne k}^{n - s} D_i}$
where $s = \size X$.


Induction Base case
The induction base is $\map P \O$:

$\ds \exists D_1, \ldots, D_n \in \mathscr C : \paren{\bigcup_{i = 1}^n D_i \subseteq \paren{\bigcup_{i = 1}^{n} C_i} \setminus \O} \land \paren{\forall 1 \le k \le n : D_k \nsubseteq \bigcup_{i = 1, i \ne k}^n D_i}$

From Set Difference with Empty Set is Self:

$\ds \bigcup_{i = 1}^{n} C_i = \paren{\bigcup_{i = 1}^{n} C_i} \setminus \O$

It follows that $\map P \O$ is true.
$\Box$


Induction Hypothesis
The induction hypothesis is:

$\forall A_1 \subseteq A, x \in A : \map P {A_1} \implies \map P {A_1 \cup \set x}$

That is:

$\forall A_1 \subseteq A, x \in A $:













\(\ds \)

\(\)







\(\ds \exists D_1, \ldots, D_{n - s} \in \mathscr C : \paren{\bigcup_{i = 1}^{n - s} D_i \subseteq \paren{\bigcup_{i = 1}^{n} C_i} \setminus A_1} \land \paren{\forall 1 \le k \le n - s: D_k \nsubseteq \bigcup_{i = 1, i \ne k}^{n - s} D_i}\)




















\(\ds \)

\(\implies\)







\(\ds \exists E_1, \ldots, E_{n - s - 1} \in \mathscr C : \paren{\bigcup_{i = 1}^{n - s - 1} E_i \subseteq \paren{\bigcup_{i = 1}^{n} C_i} \setminus \paren{A_1 \cup \set x} } \land \paren{\forall 1 \le k \le n - s - 1: E_k \nsubseteq \bigcup_{i = 1, i \ne k}^{n - s -1} E_i}\)









where $s = \size {A_1}$
$\Box$


Induction Step
Let $A_1 \subseteq A$.
Let $x \in A$.
The induction hypothesis holds if $x \in A_1$.

Let $x \notin A_1$.
Let $s = \size {A_1}$
Let:

$D_1, \ldots, D_{n - s} \in \mathscr C$:
$\quad \ds \bigcup_{i = 1}^{n - s} D_i \subseteq \paren{\bigcup_{i = 1}^{n} C_i} \setminus A_1$
$\quad \ds \forall 1 \le k \le n - s: D_k \nsubseteq \bigcup_{i = 1, i \ne k}^{n - s} D_i$
Lemma 2
Let $m \in \Z: m \ge 2$.
Let $D_1, D_2, \ldots, D_m \in \mathscr C$ satisfy:

$\ds \forall 0 \le i \le m : D_i \nsubseteq \bigcup_{j = 1, j \ne i}^m D_j$

Let $X, Y \subseteq S$:

$\ds \bigcup_{i = 1}^m D_i \subseteq Y \setminus X$
Let $x \in S \setminus X$.

Then:

$\exists E_1, E_2, \ldots, E_{m - 1} \in \mathscr C$:
$\quad \ds \forall 0 \le i \le m - 1 : E_i \nsubseteq \bigcup_{j = 1,j \ne i}^{m - 1} E_j$
$\quad \ds \bigcup_{i = 1}^{m-1} E_i \subseteq Y \setminus \paren{X \cup \set x}$
$\Box$

From Cardinality of Proper Subset of Finite Set:

$s < r < n$
Hence:

$n - s \ge 2$

With:

$m := n - s$
$X := A_1$
$Y := \bigcup_{i = 1}^{n} C_i$
from Lemma 2:

$\exists E_1, \ldots, E_{n - s - 1} \in \mathscr C$:
$\quad \ds \bigcup_{i = 1}^{n - s - 1} E_i \subseteq \paren{\bigcup_{i = 1}^{n} C_i} \setminus \paren{A_1 \cup \set x}$
$\quad \ds \forall 1 \le k \le n - s - 1: E_k \nsubseteq \bigcup_{i = 1, i \ne k}^{n - s -1} E_i$

This proves the induction hypothesis
$\Box$

From Induction of Finite Set:

$\exists D_1, \ldots, D_{n - r} \in \mathscr C$:
$\quad \ds \bigcup_{i = 1}^{n - r} D_i \subseteq \paren{\bigcup_{i = 1}^{n} C_i} \setminus A$
$\quad \ds \forall 1 \le k \le n - r: D_k \nsubseteq \bigcup_{i = 1, i \ne k}^{n - r} D_i$
$\blacksquare$





