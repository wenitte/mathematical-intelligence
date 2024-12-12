# 

Source: https://proofwiki.org/wiki/Formulation_1_Rank_Axioms_Implies_Rank_Function_of_Matroid/Proof_2


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

  


Then $\rho$ is the rank function of a matroid on $S$.

Lemma 1
$\forall A, B \subseteq S: A \subseteq B \implies \map \rho A \le \map \rho B$


Lemma 2
$\forall A \subseteq S: \map \rho A \le \card A$


Lemma 3
Let:

$A \subseteq S : \map \rho A = \card A$
Let:

$B \subseteq S : \forall b \in B \setminus A : \map \rho {A \cup \set b} \ne \card{A \cup \set b}$

Then:

$\map \rho {A \cup B} = \map \rho A$


Proof
Let:

$\mathscr I = \set{X \subseteq S : \map \rho X = \card X}$
It is to be shown that:

$\quad \mathscr I$ satisfies the matroid axioms
and

$\quad \rho$ is the rank function of the matroid $M = \struct{S, \mathscr I}$


Matroid Axioms
Matroid Axiom $(\text I 1)$
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

Then $M$ satisfies matroid axiom $(\text I 2)$.
$\Box$


Matroid Axiom $(\text I 2)$
We prove the contrapositive statement:

$\forall X, Y \subseteq S: Y \notin \mathscr I \land Y \subseteq X \implies X \notin \mathscr I$

Let $X, Y \subseteq S : Y \notin \mathscr I$ and $Y \subseteq X$.

Case 1: $Y = X$
Let $Y = X$.
Then $X \notin \mathscr I$.
$\Box$

Case 2: $Y \subset X$
Let $Y \subset X$.

By definition of $\mathscr I$:

$\map \rho Y \neq \size Y$
From Lemma 2:

$\map \rho Y < \size Y$

Let:

$X \setminus Y = \set{z_1, z_2, \ldots , z_k}$

We have:














\(\ds \map \rho X\)

\(=\)







\(\ds \map \rho {Y \cup \set{z_1, z_2, \ldots, z_k} }\)




















\(\ds \)

\(\le\)







\(\ds \map \rho Y + k\)





Repeated application of rank axiom $(\text R 2)$














\(\ds \)

\(<\)







\(\ds \size Y + k\)





Lemma 2














\(\ds \)

\(=\)







\(\ds \size Y + \size {\set {z_1, z_2, \ldots, z_k} }\)





Definition of Cardinality of Finite Set














\(\ds \)

\(=\)







\(\ds \size {Y \cup \set {z_1, z_2, \ldots, z_k} }\)





Corollary of Cardinality of Set Union














\(\ds \)

\(=\)







\(\ds \size X\)









It follows that $X \notin \mathscr I$.
$\Box$

In either case we have:

$X \notin \mathscr I$

This proves the contrapositive statement:

$\forall X, Y \subseteq S: Y \notin \mathscr I \land Y \subseteq X \implies X \notin \mathscr I$

It follows that $\mathscr I$ satisfies matroid Axiom $(\text I 2)$.
$\Box$


Matroid Axiom $(\text I 4)$
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
$\Box$

We have proven that $\mathscr I$ satisifies the matroid axioms.
It follows that $M = \struct{S, \mathscr I}$ is a matroid by definition.


$\rho$ is Rank Function
Let $\rho_M$ be the rank function of the matroid $M = \struct{S, \mathscr I}$.

Let $X \subseteq S$.

By definition of the rank function:

$\map {\rho_M} X = \max \set{\card Y : Y \subseteq X, Y \in \mathscr I}$
Let $Y_0 \subseteq X$:

$\card {Y_0} = \max \set{\card Y : Y \subseteq X, Y \in \mathscr I}$
Then:














\(\ds \map {\rho_M} X\)

\(=\)







\(\ds \card {Y_0}\)





By choice of $Y_0$














\(\ds \)

\(=\)







\(\ds \map \rho {Y_0}\)





As $Y_0 \in \mathscr I$




So it remains  to show:

$\map \rho {Y_0} = \map \rho X$


Case 1 : $Y_0 = X$
Let $Y_0 = X$.
Then:

$\map \rho {Y_0} = \map \rho X$
$\Box$


Case 2 : $Y_0 \ne X$
Let $Y_0 \ne X$.
Then:

$Y_0 \subsetneq X$
From Set Difference with Proper Subset:

$X \setminus Y_0 \ne \O$
By choice of $Y_0$:

$\forall y \in X \setminus Y_0 : Y_0 \cup \set y \notin \mathscr I$
That is:

$\forall y \in X \setminus Y_0 : \map \rho {Y_0 \cup \set y} \ne \card {Y_0 \cup \set y}$
From Lemma 3:

$\map \rho {Y_0} = \map \rho {Y_0 \cup X} = \map \rho X$
$\Box$

In either case:

$\map \rho {Y_0} = \map \rho X$
It follows that:

$\forall X \subseteq S : \map {\rho_M} X = \map \rho X$
Hence $\rho$ is the rank function of the matroid $M = \struct{S, \mathscr I}$.
$\blacksquare$

Sources
1976: Dominic Welsh: Matroid Theory ... (previous) ... (next) Chapter $1.$ $\S 6.$ Properties of the rank function, Proof of Theorem $2.2$




