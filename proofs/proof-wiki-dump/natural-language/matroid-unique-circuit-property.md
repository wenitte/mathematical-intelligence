# 

Source: https://proofwiki.org/wiki/Matroid_Unique_Circuit_Property


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $M = \struct {S, \mathscr I}$ be a matroid.
Let $X \subseteq S$ be an independent subset of $M$.
Let $x \in S$ such that:

$X \cup \set x$ is a dependent subset of $M$.

Then there exists a unique circuit $C$ such that:

$x \in C \subseteq X \cup \set x$


Corollary
Let $B$ be a base of $M$.
Let $x \in S \setminus B$.

Then there exists a unique circuit $C$ such that:

$x \in C \subseteq B \cup \set x$

That is, $C$ is the fundamental circuit of $x$ in $B$.


Proof 1
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

Proof 2
From Dependent Subset Contains a Circuit:

there exists a circuit $C$ such that $C \subseteq X \cup \set x$
From Dependent Subset of Independent Set Union Singleton Contains Singleton:

$x \in C$

Aiming for a contradiction, suppose $C'$ is circuit of $M$ such that:

$C' \ne C$
$C' \subseteq X \cup \set x$

From Dependent Subset of Independent Set Union Singleton Contains Singleton:

$x \in C'$

By the definition of minimal dependent subset:

$C \nsubseteq C'$
By the definition of a subset:

$\exists y \in C \setminus C'$
By the definition of minimal dependent subset:

$C \setminus \set y \in \mathscr I$

From Independent Subset is Contained in Maximal Independent Subset:

$\exists Y \in \mathscr I : C \setminus \set y \subseteq Y \subseteq X \cup \set x : Y$ is a maximal independent subset of $X \cup \set x$
By assumption:

$X$ is a maximal independent subset of $X \cup \set x$
By matroid axiom $(\text I 6)$:

$\card Y = \card X$

As $x \in C'$ and $y \notin C'$ then:

$x \ne y$
Hence:

$x \in C \setminus \set y$

By matroid axiom $(\text I 2)$:

$C \setminus \set y \cup \set y = C \nsubseteq Y$
Hence:

$y \notin Y$
Hence:

$Y \subseteq \paren {X \cup \set x} \setminus \set y$

From Cardinality of Subset of Finite Set:

$\card Y \le \card {\paren {X \cup \set x} \setminus \set y}$
We have:














\(\ds \card {\paren {X \cup \set x} \setminus \set y}\)

\(=\)







\(\ds \card {\paren {X \cup \set x} } - \card {\set y}\)




















\(\ds \)

\(=\)







\(\ds \card X + \card {\set x} - \card {\set y}\)




















\(\ds \)

\(=\)







\(\ds \card X + 1 - 1\)




















\(\ds \)

\(=\)







\(\ds \card X\)




















\(\ds \)

\(=\)







\(\ds \card Y\)









From Cardinality of Proper Subset of Finite Set:

$Y = \paren {X \cup \set x} \setminus \set y$
Hence:

$\paren {X \cup \set x} \setminus \set y \in \mathscr I$

As $y \notin C'$ and $C' \subseteq X \cup \set x$ then:

$C' \subseteq \paren {X \cup \set x} \setminus \set y$
From Superset of Dependent Set is Dependent:

$\paren {X \cup \set x} \setminus \set y \notin \mathscr I$
This contradicts the previous statement that 

$\paren {X \cup \set x} \setminus \set y \in \mathscr I$

It follows that $C$ is the unique circuit such that:

$C \subseteq X \cup \set x$
$\blacksquare$





