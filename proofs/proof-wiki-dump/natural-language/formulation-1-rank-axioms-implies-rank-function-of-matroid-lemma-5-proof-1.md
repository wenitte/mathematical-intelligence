# 

Source: https://proofwiki.org/wiki/Formulation_1_Rank_Axioms_Implies_Rank_Function_of_Matroid/Lemma_5/Proof_1


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


Sources
2018: Bernhard H. Korte and Jens Vygen: Combinatorial Optimization: Theory and Algorithms (6th ed.) Chapter $13$ Matroids $\S 13.2$ Other Matroid Axioms, Theorem $13.10$




