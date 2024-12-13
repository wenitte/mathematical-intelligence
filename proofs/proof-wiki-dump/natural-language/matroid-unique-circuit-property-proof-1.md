# 

Source: https://proofwiki.org/wiki/Matroid_Unique_Circuit_Property/Proof_1


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $M = \struct {S, \mathscr I}$ be a matroid.
Let $X \subseteq S$ be an independent subset of $M$.
Let $x \in S$ such that:

$X \cup \set x$ is a dependent subset of $M$.

Then there exists a unique circuit $C$ such that:

$x \in C \subseteq X \cup \set x$


Proof
From Dependent Subset Contains a Circuit:

there exists a circuit $C$ such that $C \subseteq X \cup \set x$
From Dependent Subset of Independent Set Union Singleton Contains Singleton:

$x \in C$

Aiming for a contradiction, suppose $C'$ is circuit of $M$ such that:

$C' \ne C$
$C' \subseteq X \cup \set x$

From Dependent Subset of Independent Set Union Singleton Contains Singleton:

$x \in C'$
Hence:

$x \in C \cap C'$

From Circuits of Matroid iff Matroid Circuit Axioms, the set $\mathscr C$ of all circuits satisfies the matroid circuit axiom $(\text C 3)$:




\((\text C 3)\)  

$:$  





  \(\ds \forall C_1, C_2 \in \mathscr C:\)







\(\ds  C_1 \ne C_2 \land z \in C_1 \cap C_2 \implies \exists C_3 \in \mathscr C : C_3 \subseteq \paren {C_1 \cup C_2} \setminus \set z \)   

  

Hence there exists a circuit $C_3$ of $M$:

$C_3 \subseteq \paren{C \cup C'} \setminus \set x \subseteq X$
This contradicts the independence of $X$.

The result follows.
$\blacksquare$

Sources
1976: Dominic Welsh: Matroid Theory ... (previous) ... (next) Chapter $1.$ $\S 9.$ Circuits




