# 

Source: https://proofwiki.org/wiki/Formulation_1_Rank_Axioms_Implies_Rank_Function_of_Matroid/Lemma_5


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

Then $M$ satisfies matroid axiom $(\text I 2)$.


Lemma 2
$\forall A \subseteq S: \map \rho A \le \card A$


Proof 1
Let

$X \in \mathscr I$

Aiming for a contradiction, suppose

$\exists Y \subseteq X : Y \notin \mathscr I$
Let:

$Y_0 \subseteq X : \card {Y_0} = \max \set{\card Z : Z \subseteq X \land Z \notin \mathscr I}$

By definition of $\mathscr I$:

$Y_0 \notin \mathscr I \leadsto \map \rho {Y_0} \ne \card {Y_0}$
From Lemma 2:

$\map \rho {Y_0} < \card {Y_0}$

As $X \in \mathscr I$ then:

$Y_0 \ne X$
Hence:

$Y_0$ is a proper subset of $X$
From Set Difference with Proper Subset:

$X \setminus Y_0 \ne \O$

Let $y \in X \setminus Y_0$.

We have:














\(\ds \card {Y_0} + 1\)

\(=\)







\(\ds \card {Y_0 \cup \set y}\)





Corollary of Cardinality of Set Union














\(\ds \)

\(=\)







\(\ds \map \rho {Y_0 \cup \set y}\)





As $\card {Y_0} = \max \set{\card Z : Z \subseteq X \land Z \notin \mathscr I}$














\(\ds \)

\(\le\)







\(\ds \map \rho {Y_0} + 1\)





Rank axiom $(\text R 2)$














\(\ds \)

\(<\)







\(\ds \card {Y_0} + 1\)





As $\map \rho {Y_0} < \card {Y_0}$



This is a contradiction.

So:

$\forall Y \subseteq X : Y \in \mathscr I$
Hence:

$M$ satisfies matroid axiom $(\text I 2)$.
$\blacksquare$

Proof 2
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
$\blacksquare$





