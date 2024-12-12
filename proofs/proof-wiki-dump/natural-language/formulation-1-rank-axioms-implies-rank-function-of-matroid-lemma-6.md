# 

Source: https://proofwiki.org/wiki/Formulation_1_Rank_Axioms_Implies_Rank_Function_of_Matroid/Lemma_6


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

Then $M$ satisfies matroid axiom $(\text I 3)$.


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
$\blacksquare$





