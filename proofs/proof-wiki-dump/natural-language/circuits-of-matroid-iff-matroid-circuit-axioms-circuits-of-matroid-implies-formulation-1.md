# 

Source: https://proofwiki.org/wiki/Circuits_of_Matroid_iff_Matroid_Circuit_Axioms/Circuits_of_Matroid_implies_Formulation_1


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $S$ be a finite set.
Let $\mathscr C$ be a non-empty set of subsets of $S$.

Let $\mathscr C$ be the set of circuits of a matroid $M = \struct{S, \mathscr I}$ on $S$

Then:

$\mathscr C$ satisfies the circuit axioms:



\((\text C 1)\)  

$:$  













\(\ds  \O \notin \mathscr C \)   

  


\((\text C 2)\)  

$:$  





  \(\ds \forall C_1, C_2 \in \mathscr C:\)







\(\ds  C_1 \ne C_2 \implies C_1 \nsubseteq C_2 \)   

  


\((\text C 3)\)  

$:$  





  \(\ds \forall C_1, C_2 \in \mathscr C:\)







\(\ds  C_1 \ne C_2 \land z \in C_1 \cap C_2 \implies \exists C_3 \in \mathscr C : C_3 \subseteq \paren {C_1 \cup C_2} \setminus \set z \)   

  



Proof
$\mathscr C$ satisfies $(\text C 1)$
By definition of circuit of a matroid:

for all $C \in \mathscr C: C$ is a dependent subset
By definition of a dependent subset:

for all $C \in \mathscr C$, $C \notin \mathscr I$
By definition of a matroid:

$\O \in \mathscr I$
Hence:

$\O \notin \mathscr C$
It follows that $\mathscr C$ satisfies circuit axiom $(\text C 1)$.
$\Box$

$\mathscr C$ satisfies $(\text C 2)$
Let $C_1, C_2 \in \mathscr C : C_1 \neq C_2$.
By definition of circuit of a matroid:

$C_2$ is a dependent subset of $S$ which is a minimal dependent subset
and

$C_1$ is a dependent subset
Hence:

$C_1 \nsubseteq C_2$
It follows that $\mathscr C$ satisfies circuit axiom $(\text C 2)$.
$\Box$

$\mathscr C$ satisfies $(\text C 3)$
Let $\rho$ denote the rank function of the matroid $M$.

Aiming for a contradiction, suppose $C_1, C_2 \in \mathscr C:$

$C_1 \neq C_2$
and

$\exists z \in C_1 \cap C_2 : \nexists C_3 \in \mathscr C : C_3 \subseteq \paren{C_1 \cup C_2} \setminus \set z$

From Proper Subset of Matroid Circuit is Independent:

$\paren{C_1 \cup C_2} \setminus \set z$ is an independent subset.
Similarly:

$\paren{C_1 \cap C_2}$ is an independent subset.

We have:














\(\ds \map \rho {C_1 \cup C_2}\)

\(\le\)







\(\ds \map \rho {C_1} + \map \rho {C_2} - \map \rho {C_1 \cap C_2}\)





Rank axiom $(\text R 6)$














\(\ds \)

\(=\)







\(\ds \paren{\size {C_1} - 1} + \paren{\size {C_2} - 1} - \map \rho {C_1 \cap C_2}\)





Rank of Matroid Circuit is One Less Than Cardinality














\(\ds \)

\(=\)







\(\ds \size {C_1} + \size {C_2} - 2 - \map \rho {C_1 \cap C_2}\)





Rank of Matroid Circuit is One Less Than Cardinality














\(\ds \)

\(=\)







\(\ds \size {C_1 \cup C_2} + \size {C_1 \cap C_2} - 2 - \map \rho {C_1 \cap C_2}\)





Cardinality of Set Union














\(\ds \)

\(=\)







\(\ds \size {C_1 \cup C_2} + \size {C_1 \cap C_2} - 2 - \size {C_1 \cap C_2}\)





Rank of Independent Subset Equals Cardinality














\(\ds \)

\(=\)







\(\ds \size {C_1 \cup C_2} - 2\)





Cancelling terms














\(\ds \)

\(=\)







\(\ds \size {C_1 \cup C_2} - \size { \set z} - 1\)





Cardinality of Singleton














\(\ds \)

\(=\)







\(\ds \size {\paren{C_1 \cup C_2} \setminus \set z} - 1\)





Cardinality of Set Difference with Subset














\(\ds \)

\(=\)







\(\ds \map \rho {\paren{C_1 \cup C_2} \setminus \set z} - 1\)





Rank of Independent Subset Equals Cardinality














\(\ds \)

\(\le\)







\(\ds \map \rho {\paren{C_1 \cup C_2} } - 1\)





Rank Function is Increasing



This is a contradiction.
It follows that $\mathscr C$ satisfies circuit axiom $(\text C 3)$.
$\blacksquare$

Sources
1976: Dominic Welsh: Matroid Theory ... (previous) ... (next) Chapter $1.$ $\S 9.$ Circuits




