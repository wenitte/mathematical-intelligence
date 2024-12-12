# 

Source: https://proofwiki.org/wiki/Circuits_of_Matroid_iff_Matroid_Circuit_Axioms/Lemma_3


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

Then:

$\mathscr C$ is the set of circuits of $M$.


Proof
Let $\mathscr C_M$ be the set of circuit of the matroid $M$.

Lemma 4
$\forall C \in \mathscr C_M : \exists C' \in \mathscr C : C' \subseteq C$
$\Box$

Lemma 5
$\forall C \in \mathscr C : \exists C' \in \mathscr C_M : C' \subseteq C$
$\Box$

$\mathscr C_M$ is a subset of $\mathscr C$
Let $C \in \mathscr C_M$.
From Lemma 4:

$\exists C_1 \in \mathscr C : C_1 \subseteq C$
From Lemma 5:

$\exists C' \in \mathscr C_M : C' \subseteq C_1$
From Subset Relation is Transitive:

$C' \subseteq C$
By the minimality of a circuit:

$C' = C$
By definition of set equality:

$C = C_1$
Hence:

$C \in \mathscr C$

It follows that $\mathscr C_M \subseteq \mathscr C$.
$\Box$

$\mathscr C$ is a subset of $\mathscr C_M$
Let $C \in \mathscr C$.
From Lemma 5:

$\exists C_1 \in \mathscr C_M : C_1 \subseteq C$
From Lemma 4:

$\exists C' \in \mathscr C : C' \subseteq C_1$
From Subset Relation is Transitive:

$C' \subseteq C$
By circuit axiom $(\text C 2)$:

$C' = C$
By definition of set equality:

$C = C_1$
Hence:

$C \in \mathscr C_M$.

It follows that $\mathscr C \subseteq \mathscr C_M$.
$\Box$

By definition of set equality:

$\mathscr C = \mathscr C_M$
$\blacksquare$





