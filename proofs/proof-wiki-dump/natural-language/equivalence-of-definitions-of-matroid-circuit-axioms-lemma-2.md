# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Matroid_Circuit_Axioms/Lemma_2


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

$\forall i \in \set{1, \ldots, q} : \map \theta {x_1, \ldots, x_q}_i = \begin{cases} 0 & : \exists C \in \mathscr C : x_i \in C \subseteq \set{x_1, \ldots, x_i}\\ 1 & : \text {otherwise} \end{cases}$

Let $t$ be the mapping from the set of ordered tuple of $S$ defined  by:

$\map t {x_1, \ldots, x_q} = \ds \sum_{i = 1}^q \map \theta {x_1, \ldots, x_q}_i$

Let $\rho : \powerset S \to \Z$ be the mapping defined by:

$\forall A \subseteq S$:
$\map \rho A = \begin{cases} 0 & : \text{if } A = \O \\ \map t {x_1, \ldots, x_q } & : \text{if } A = \set{x_1, \ldots, x_q} \end{cases}$

Let $X \subseteq S$ and $y \in S \setminus X$.

Then:

$\map \rho {X \cup \set y} = \map \rho X$ if and only if $\exists C \in \mathscr C : y \in C \subseteq X \cup \set y$


Proof
Let $X = \set{x_1, \ldots, x_q}$

We have:














\(\ds \map \rho {X \cup \set y}\)

\(=\)







\(\ds \map t {x_1, \ldots, x_q, y}\)





Definition of $\rho$














\(\ds \)

\(=\)







\(\ds \map t {x_1, \ldots, x_q} + \map \theta {x_1, \ldots, x_q, y}_{q+1}\)





Definition of $t$














\(\ds \)

\(=\)







\(\ds \map \rho X + \map \theta {x_1, \ldots, x_q, y}_{q+1}\)





Definition of $t$




Hence:














\(\ds \map \rho {X \cup \set y} = \map \rho X\)

\(\leadstoandfrom\)







\(\ds \map \theta {x_1, \ldots, x_q, y}_{q+1} = 0\)




















\(\ds \)

\(\leadstoandfrom\)







\(\ds \exists C \in \mathscr C : y \in C \subseteq X \cup \set y\)





Definition of $\theta$



$\blacksquare$





