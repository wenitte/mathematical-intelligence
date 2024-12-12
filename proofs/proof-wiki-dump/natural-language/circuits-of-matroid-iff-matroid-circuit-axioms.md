# 

Source: https://proofwiki.org/wiki/Circuits_of_Matroid_iff_Matroid_Circuit_Axioms


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $S$ be a finite set.
Let $\mathscr C$ be a non-empty set of subsets of $S$.

Then:

$\mathscr C$ is the set of circuits of a matroid on $S$
if and only if

$\mathscr C$ satisfies the circuit axioms


Proof
From Equivalence of Definitions of Matroid Circuit Axioms it is sufficient to show:

$(\text a)\quad$if $\mathscr C$ is the set of circuits of a matroid then $\mathscr C$ satisfies circuit axioms (formulation 1)
and

$(\text b)\quad$if $\mathscr C$ satisfies circuit axioms (formulation 2) then $\mathscr C$ is the set of circuits of a matroid


Circuits of Matroids implies Formulation 1
Let $\mathscr C$ be the set of circuits of a matroid $M = \struct{S, \mathscr I}$ on $S$
It is shown that $\mathscr C$ satisfies the circuit axioms (formulation 1):




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
$\Box$

Formulation 2 implies Circuits of Matroid
Let $\mathscr C$ be a non-empty set of subsets of $S$ that satisfies the circuit axioms (formulation 2):




\((\text C 1)\)  

$:$  













\(\ds  \O \notin \mathscr C \)   

  


\((\text C 2)\)  

$:$  





  \(\ds \forall C_1, C_2 \in \mathscr C:\)







\(\ds  C_1 \ne C_2 \implies C_1 \nsubseteq C_2 \)   

  


\((\text C 4)\)  

$:$  





  \(\ds \forall C_1, C_2 \in \mathscr C:\)







\(\ds  C_1 \ne C_2 \land z \in C_1 \cap C_2 \land w \in C_1 \setminus C_2 \implies \exists C_3 \in \mathscr C : w \in C_3 \subseteq \paren {C_1 \cup C_2} \setminus \set z \)   

  



We will define a mapping $\rho$ associated with $\mathscr C$.
It will be shown that $\rho$ is the rank function of a matroid $M$ which has $\mathscr C$ as the set of circuits.

For any ordered tuple $\tuple{x_1, \ldots, x_q}$ of elements of $S$, let $\map \theta {x_1, \ldots, x_q}$ be the ordered tuple defined by:

$\forall i \in \set{1, \ldots, q} : \map \theta {x_1, \ldots, x_q}_i = \begin{cases} 0 & : \exists C \in \mathscr C : x_i \in C \subseteq \set{x_1, \ldots, x_i}\\ 1 & : \text {otherwise}  \end{cases}$

Let $t$ be the mapping from the set of ordered tuple of $S$ defined  by:

$\map t {x_1, \ldots, x_q} = \ds \sum_{i = 1}^q \map \theta {x_1, \ldots, x_q}_i$
Lemma 1
Let $\tuple{x_1, \ldots, x_q}$ be any ordered tuple of elements of $S$.
Let $\pi$ be any permutation of $\tuple{x_1, \ldots, x_q}$.

Then:

$\map t {x_1, \ldots, x_q} = \map t {x_{\map \pi 1}, \ldots, x_{\map \pi q}}$
$\Box$

Let $\rho : \powerset S \to \Z$ be the mapping defined by:

$\forall A \subseteq S$:
$\map \rho A = \begin{cases} 0 & : \text{if } A = \O \\ \map t {x_1, \ldots, x_q } & : \text{if } A = \set{x_1, \ldots, x_q} \end{cases}$

From Lemma 1:

$\rho$ is well-defined

We now show that $\rho$ satisfies the rank function axioms:




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

  



$\rho$ satisfies $(\text R 1)$
Follows from the definition of $\rho$.
$\Box$

$\rho$ satisfies $(\text R 2)$
Let:

$X = \set{x_1, \ldots, x_q} \subseteq S$ and $y \in S$

We have:














\(\ds \map \rho {X \cup \set y} - \map \rho X\)

\(=\)







\(\ds \map t {\tuple{x_1, \dots, x_q, y} } - \map t {\tuple{x_1, \dots, x_q} }\)





Definition of $\rho$














\(\ds \)

\(=\)







\(\ds \map \theta {\tuple{x_1, \dots, x_q, y} }_{q+1}\)





Definition of $t$














\(\ds \)

\(=\)







\(\ds \begin{cases} 0 & : \exists C \in \mathscr C : y \in C \subseteq \set{x_1, \ldots, x_q, y}\\ 1 & : \text {otherwise} \end{cases}\)





Definition of $\theta$








\(\ds \leadstoandfrom \ \ \)





\(\ds 0\)

\(\le\)







\(\ds \map \rho {X \cup \set y} - \map \rho X \le 1\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \map \rho X\)

\(\le\)







\(\ds \map \rho {X \cup \set y} \le \map \rho X + 1\)





Adding $\map \rho X$ to all terms



$\Box$


Lemma 2
Let $X \subseteq S$ and $y \in S \setminus X$.

Then:

$\map \rho {X \cup \set y} = \map \rho X$ if and only if $\exists C \in \mathscr C : y \in C \subseteq X \cup \set y$
$\Box$


$\rho$ satisfies $(\text R 3)$
Let:

$X \subseteq S$ and $y, z \in S$
Let:

$\map \rho {X \cup \set y} = \map \rho {X \cup \set z} = \map \rho X$
Case 1 : $z \in X$
Let $z \in X$.
Then:

$\map \rho {X \cup \set {y,z}} = \map \rho {X \cup \set y}$
Since $\map \rho {X \cup \set y} = \map \rho X$, then:

$\map \rho {X \cup \set {y,z}} = \map \rho X$
$\Box$

Case 2 : $z = y$
Let $z = y$.
Then

$\map \rho {X \cup \set {y,z}} = \map \rho {X \cup \set y}$
Since $\map \rho {X \cup \set y} = \map \rho X$, then:

$\map \rho {X \cup \set {y,z}} = \map \rho X$
$\Box$

Case 3 : $z \neq y$ and $z \notin X$
Let $z \neq y$ and $z \notin X$.
Then $z \notin X \cup \set y$.
From Lemma 2:

$\exists C_z \in \mathscr C : z \in C_z \subseteq X \cup \set{z} \subseteq X \cup \set{y,z}$
From Lemma 2:

$\map \rho {X \cup \set{y, z}} = \map \rho {X \cup \set y} = \map \rho X$
$\Box$

From Matroid Rank Function Iff Matroid Rank Axioms:

$\rho$ is the rank function of a matroid $M = \struct{S, \mathscr I}$ on $S$
Lemma 3
$\mathscr C$ is the set of circuits of $M$.
$\blacksquare$


Also see
Equivalence of Definitions of Matroid Circuit Axioms




