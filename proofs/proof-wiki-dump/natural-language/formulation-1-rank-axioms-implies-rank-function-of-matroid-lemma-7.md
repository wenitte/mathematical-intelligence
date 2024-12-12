# 

Source: https://proofwiki.org/wiki/Formulation_1_Rank_Axioms_Implies_Rank_Function_of_Matroid/Lemma_7


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $S$ be a finite set.
Let $\rho : \powerset S \to \Z$ be a mapping from the power set of $S$ to the integers.

Let $\rho$ satisfy formulation 1 of the rank axioms:




\((\text R 1)\)  

$:$  













\(\ds  \map \rho \O = 0 \)   

  


\((\text R 2)\)  

$:$  





  \(\ds \forall X \in \powerset S \land y \in S:\)







\(\ds  \map \rho X \le \map \rho {X \cup \set y} \le \map \rho X + 1 \)   

  


\((\text R 3)\)  

$:$  





  \(\ds \forall X \in \powerset S \land y, z \in S:\)







\(\ds  \map \rho {X \cup \set y} = \map \rho {X \cup \set z} = \map \rho X \implies \map \rho {X \cup \set y \cup \set z} = \map \rho X \)   

  


Let $M = \struct{S, \mathscr I}$ where:

$\mathscr I = \set{X \subseteq S : \map \rho X = \card X}$

Then $M$ satisfies matroid axiom $(\text I 4)$.


Lemma 1
$\forall A, B \subseteq S: A \subseteq B \implies \map \rho A \le \map \rho B$


Lemma 3
Let:

$A \subseteq S : \map \rho A = \card A$
Let:

$B \subseteq S : \forall b \in B \setminus A : \map \rho {A \cup \set b} \ne \card{A \cup \set b}$

Then:

$\map \rho {A \cup B} = \map \rho A$


Proof
It is now proved that $\mathscr I$ satisifes the matroid Axiom $(\text I 4)$:




\((\text I 4)\)  

$:$  





  \(\ds \forall U, V \in \mathscr I:\)







\(\ds  \size U = \size V + 1 \implies \exists x \in U \setminus V : V \cup \set x \in \mathscr I \)   

  


Let $X, Y \in \mathscr I$ such that $\size Y = \size X + 1$.

Let:

$X = \set {x_1, x_2, \ldots, x_q, z_{q + 1}, \ldots, z_k}$
and

$Y = \set {x_1, x_2, \ldots, x_q, y_{q + 1}, \ldots, y_k, y_{k + 1}}$
where $\forall i \in \set {q + 1, \ldots, k}$ and $\forall j \in \set {q + 1, \ldots, k + 1}$

$z_i \neq y_j$

Aiming for a contradiction, suppose:

$\forall j \in \set {q + 1, \ldots, k + 1}: X \cup \set{y_j} \notin \mathscr I$

We have:














\(\ds \map \rho {X \cup \set{y_{q + 1}, \ldots, y_{k + 1} } }\)

\(=\)







\(\ds \map \rho X\)





Lemma 3














\(\ds \)

\(=\)







\(\ds \size X\)





as $X \in \mathscr I$














\(\ds \)

\(<\)







\(\ds \size Y\)





by hypothesis




Now:

$Y \subseteq X \cup \set{y_{q + 1}, \ldots, y_{k + 1} }$
From Lemma 1:

$\map \rho Y \le \map \rho {X \cup \set{y_{q + 1}, \ldots, y_{k + 1} } } < \size Y$
This contradicts the assumption that $Y \in \mathscr I$.

Hence:

$\exists j \in \set {q + 1, \ldots, k + 1}: X \cup \set{y_j} \in \mathscr I$

It follows that $\mathscr I$ satisfies matroid Axiom $(\text I 4)$.
$\blacksquare$





