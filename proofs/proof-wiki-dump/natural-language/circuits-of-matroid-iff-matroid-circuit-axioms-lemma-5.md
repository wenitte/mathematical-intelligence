# 

Source: https://proofwiki.org/wiki/Circuits_of_Matroid_iff_Matroid_Circuit_Axioms/Lemma_5


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $S$ be a finite set.
Let $\mathscr C$ be a non-empty set of subsets of $S$ that satisfies the circuit axioms:




\((\text C 1)\)  

$:$  













\(\ds  \O \notin \mathscr C \)   

  


\((\text C 2)\)  

$:$  





  \(\ds \forall C_1, C_2 \in \mathscr C:\)







\(\ds  C_1 \ne C_2 \implies C_1 \nsubseteq C_2 \)   

  


\((\text C 4)\)  

$:$  





  \(\ds \forall C_1, C_2 \in \mathscr C:\)







\(\ds  C_1 \ne C_2 \land z \in C_1 \cap C_2 \land w \in C_1 \setminus C_2 \implies \exists C_3 \in \mathscr C : w \in C_3 \subseteq \paren {C_1 \cup C_2} \setminus \set z \)   

  


For any ordered tuple $\tuple{x_1, \ldots, x_q}$ of elements of $S$, let $\map \theta {x_1, \ldots, x_q}$ be the ordered tuple defined by:

$\forall i \in \set{1, \ldots, q} : \map \theta {x_1, \ldots, x_q}_i = \begin{cases} 0 & : \exists C \in \mathscr C : x_i \in C \subseteq \set{x_1, \ldots, x_i}\\ 1 & : \text {otherwise}  \end{cases}$

Let $t$ be the mapping from the set of ordered tuple of $S$ defined  by:

$\map t {x_1, \ldots, x_q} = \ds \sum_{i = 1}^q \map \theta {x_1, \ldots, x_q}_i$

Let $\rho : \powerset S \to \Z$ be the mapping satisfying the matroid rank axioms defined by:

$\forall A \subseteq S$:
$\map \rho A = \begin{cases} 0 & : \text{if } A = \O \\ \map t {x_1, \ldots, x_q } & : \text{if } A = \set{x_1, \ldots, x_q} \end{cases}$

Let $M = \struct{S, \mathscr I}$ be the matroid corresponding to the rank function $\rho$.
Let $\mathscr C_M$ be the set of circuits of $M$

Then:

$\forall C \in \mathscr C : \exists C' \in \mathscr C_M : C' \subseteq C$


Proof
Let $C \in \mathscr C$.
From circuit axiom $(\text C 1)$:

$\exists y \in C$
We have:

$C \subseteq C = \paren{C \setminus \set y} \cup \set y$
Lemma 2
Let $X \subseteq S$ and $y \in S \setminus X$.

Then:

$\map \rho {X \cup \set y} = \map \rho X$ if and only if $\exists C \in \mathscr C : y \in C \subseteq X \cup \set y$
$\Box$

We have:














\(\ds \map \rho C\)

\(=\)







\(\ds \map \rho {C \setminus \set y}\)





Lemma 2














\(\ds \)

\(\le\)







\(\ds \card{C \setminus \set y}\)





Bounds for Rank of Subset














\(\ds \)

\(<\)







\(\ds \card C\)





As $y \in C$



From Rank of Independent Subset Equals Cardinality:

$C \notin \mathscr I$
That is, $C$ is dependent.
From Dependent Subset Contains a Circuit:

$\exists C' \in \mathscr C_M$ such that $C' \subseteq C$
$\blacksquare$





