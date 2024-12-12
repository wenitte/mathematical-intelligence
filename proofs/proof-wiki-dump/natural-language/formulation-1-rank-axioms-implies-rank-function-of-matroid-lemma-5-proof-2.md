# 

Source: https://proofwiki.org/wiki/Formulation_1_Rank_Axioms_Implies_Rank_Function_of_Matroid/Lemma_5/Proof_2


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
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


Lemma 2
$\forall A \subseteq S: \map \rho A \le \card A$


Proof
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





