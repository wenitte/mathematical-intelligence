# 

Source: https://proofwiki.org/wiki/Formulation_1_Rank_Axioms_Implies_Rank_Function_of_Matroid/Proof_1


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
We have:














\(\ds \map \rho \O\)

\(=\)







\(\ds 0\)





Rank axiom $(\text R 1)$














\(\ds \)

\(=\)







\(\ds \card \O\)





Cardinality of Empty Set



So:

$\O \in \mathscr I$
Hence:

$M$ satisfies matroid axiom $(\text I 1)$.
$\Box$


Matroid Axiom $(\text I 2)$
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
$\Box$


Matroid Axiom $(\text I 3)$
Let

$U \in \mathscr I$
$V \subseteq S$
$\card U < \card V$

We prove the contrapositive statement:

$\paren{\forall x \in V \setminus U : U \cup \set x \notin \mathscr I} \implies V \notin \mathscr I$

Let:

$\forall x \in V \setminus U: U \cup \set x \notin \mathscr I$
That is, by definition of $\mathscr I$:

$\forall x \in V \setminus U : \map \rho {U \cup \set x} \ne \card {U \cup \set x}$

We have:














\(\ds \card V\)

\(>\)







\(\ds \card U\)





by hypothesis














\(\ds \)

\(=\)







\(\ds \map \rho U\)





As $U \in \mathscr I$














\(\ds \)

\(=\)







\(\ds \map \rho {U \cup V}\)





Lemma 3














\(\ds \)

\(\ge\)







\(\ds \map \rho V\)





Lemma 1



Hence:

$V \notin \mathscr I$

It follows:

$M$ satisfies matroid axiom $(\text I 3)$.
$\Box$


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





