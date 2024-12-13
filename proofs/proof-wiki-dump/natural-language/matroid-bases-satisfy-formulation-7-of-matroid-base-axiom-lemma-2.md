# 

Source: https://proofwiki.org/wiki/Matroid_Bases_Satisfy_Formulation_7_of_Matroid_Base_Axiom/Lemma_2


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $S$ be a finite set.
Let $\mathscr C$ be a non-empty set of subsets satisfying the circuit axioms.

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
Proof
Case 1: $x$ is not in any $D_i$
Let:

$\forall 1 \le i \le m : x \notin D_i$

We have:














\(\ds \bigcup_{i = 1}^m D_i\)

\(=\)







\(\ds \bigcup_{i = 1}^m \paren{D_i \setminus \set x}\)





Set Difference with Disjoint Set














\(\ds \)

\(=\)







\(\ds \paren{\bigcup_{i = 1}^m D_i} \setminus \set x\)





Set Difference is Right Distributive over Union














\(\ds \)

\(\subseteq\)







\(\ds \paren{Y \setminus X} \setminus \set x\)





by hypothesis














\(\ds \)

\(=\)







\(\ds Y \setminus \paren{X \cup \set x}\)





Set Difference with Union




Furthermore:

$\ds \forall 0 \le i \le m - 1 : D_i \nsubseteq \ds \bigcup_{i = 1, j \ne i}^{m - 1} D_j$

Hence $D_1, D_2, \ldots, D_{m - 1}$ suffice as the required $E_1, E_2, \ldots, E_{m - 1}$.
$\Box$


Case 2: $x$ is in some $D_i$
Let:

$\exists 1 \le i \le m : x \in D_i$

Without loss of generality, suppose:

$x \in D_m$

By definition of subset:

$\ds \forall i = 1, \ldots, m - 1: \exists d_i \in D_i \setminus \paren{\bigcup_{j = 1, j \ne i}^{m - 1} D_j}$

Let $i \in \closedint {1} {m-1}$.


Case 2.1: $x \in D_i$
Let:

$x \in D_i$
By definition of set intersection:

$x \in D_i \cap D_n$

By circuit axiom $(\text C 4)$:

$\exists E_i \in \mathscr C$:
$d_i \in E_i \subseteq \paren{D_i \cup D_m} \setminus \set x$
$\Box$


Case 2.2: $x \notin D_i$
Let:

$x \notin D_i$

Let $E_i = D_i$.

Then:

$d_i \in E_i = D_i \subseteq \paren{D_i \cup D_m} \setminus \set x$
$\Box$

In both cases:
$\exists E_i \in \mathscr C : d_i \in E_i \subseteq \paren{D_i \cup D_m} \setminus \set x$

Since $i$ was arbitrary, it follows that:

$(1) \quad \forall i = 1, \ldots, m - 1 : \exists E_i \in \mathscr C : d_i \in E_i \subseteq \paren{D_i \cup D_m} \setminus \set x$

We have:














\(\ds \bigcup_{i = 1}^{m-1} E_i\)

\(\subseteq\)







\(\ds \bigcup_{i = 1}^{m-1} \paren{D_i \cup D_m} \setminus \set x\)





From $(1)$














\(\ds \)

\(=\)







\(\ds \paren{\bigcup_{i = 1}^{m-1} D_i \cup D_m} \setminus \set x\)





Set Difference is Right Distributive over Union














\(\ds \)

\(=\)







\(\ds \paren{\bigcup_{i = 1}^m D_i} \setminus \set x\)










Aiming for a contradiction, suppose:

$\ds \exists i \in \closedint 1 {m-1} : E_i \subseteq \bigcup_{j = 1, j \ne i}^{m - 1} E_j$

We have:














\(\ds E_i\)

\(\subseteq\)







\(\ds \bigcup_{j = 1, j \ne i}^{m - 1} E_j\)




















\(\ds \)

\(\subseteq\)







\(\ds \bigcup_{j = 1, j \ne i}^{m - 1} \paren{D_j \cup D_m} \setminus \set x\)




















\(\ds \)

\(\subseteq\)







\(\ds \bigcup_{j = 1, j \ne i}^{m - 1} \paren{D_j \cup D_m}\)




















\(\ds \)

\(\subseteq\)







\(\ds \bigcup_{j = 1, j \ne i}^{m - 1} D_j\)









Hence:

$\ds d_i \in E_i \subseteq \bigcup_{j = 1, j \ne i}^{m - 1} D_j$
This contradicts the choice of $d_i$.

Hence:

$\ds \forall i = 1, \ldots, m - 1 : E_i \nsubseteq \bigcup_{j = 1, j \ne i}^{m - 1} E_j$

Finally, we have:














\(\ds \bigcup_{i = 1}^{m - 1} E_i\)

\(\subseteq\)







\(\ds \paren{\bigcup_{i = 1}^m D_i} \setminus \set x\)




















\(\ds \)

\(\subseteq\)







\(\ds \paren{Y \setminus X} \setminus \set x\)




















\(\ds \)

\(\subseteq\)







\(\ds Y \setminus \paren{X \cup \set x}\)










The result follows.
$\Box$

In either case, the result follows.
$\blacksquare$





