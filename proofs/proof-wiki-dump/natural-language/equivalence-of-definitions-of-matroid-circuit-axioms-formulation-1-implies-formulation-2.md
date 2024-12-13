# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Matroid_Circuit_Axioms/Formulation_1_Implies_Formulation_2


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $S$ be a finite set.
Let $\mathscr C$ be a non-empty set of subsets of $S$.

Let $\mathscr C$ satisfy the circuit axioms  (formulation 1):




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

  


Then:

$\mathscr C$ satisfies the circuit axioms (formulation 2):



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

  



Proof
Let $\mathscr C$ satisfy the circuit axioms $(\text C 1)$, $(\text C 2)$ and $(\text C 3)$.
It has only to be shown that circuit axiom $(\text C 4)$ is satisfied by $\mathscr C$.

Let:














\(\ds F = \leftset{\tuple{C, D, x, y} }\)

\(:\)







\(\ds C, D \in \mathscr C \land C \neq D\)




















\(\ds \)

\(\land\)







\(\ds x \in C \cap D \land y \in C \setminus D\)




















\(\ds \)

\(\land\)







\(\ds \nexists C' \in \mathscr C : y \in C' \subseteq \paren{C \cup D} \setminus \set x \mathop {\rightset {} }\)









To show that $\mathscr C$ satisfies circuit axiom $(\text C 4)$, it needs to be shown that $F = \O$.

Aiming for a contradiction, suppose :

$F \neq \O$
Let $\tuple{C_1, C_2, z, w} \in F$ :

$\size{C_1 \cup C_2} = \min \set{\size{C \cup D} : \tuple{C, D, x, y} \in F}$

By circuit axiom $(\text C 3)$:

$\exists C_3 \in \mathscr C : C_3 \subseteq \paren{C_1 \cup C_2} \setminus \set z$
By assumptiom:

$w \notin C_3$

Consider $C_3 \cap \paren{C_2 \setminus C_1}$.
By circuit axiom $(\text C 2)$:

$C_3 \nsubseteq C_1$
From Set Difference and Intersection form Partition:

$C_3 \cap \paren{C_2 \setminus C_1} \neq \O$
Let $x \in C_3 \cap \paren{C_2 \setminus C_1}$.
We have:

$x \in C_3 \cap C_2$
and

$z \in C_2 \setminus C_3$
and

$w \notin C_2 \cup C_3$

From Set is Subset of Union and Union of Subsets is Subset:

$C_2 \cup C_3 \subseteq \C_1 \cup C_2$
Since $w \notin C_2 \cup C_3$:

$C_2 \cup C_3$ is a proper subset of $C_1 \cup C_2$
By circuit axiom $(\text C 3)$ and the minimality of $C_1 \cup C_2$:

$\exists C_4 \in \mathscr C : z \in C_4 \subseteq \paren{C_2 \cup C_3} \setminus \set{x}$

Now consider $C_1$ and $C_4$, we have:

$z \in C_1 \cap C_4$
Since $w \notin C_2 \cup C_3$ then:

$w \in C_1 \setminus C_4$
We have:

$C_4 \subset C_2 \cup C_3 \subset C_1 \cup C_2$
From Set is Subset of Union and Union of Subsets is Subset:

$C_1 \cup C_4 \subseteq C_1 \cup C_2$
Recall $x \in C_3 \cap \paren{C_2 \setminus C_1}$, then:

$x \in C_2$
and

$x \notin C_1$
Since $C_4 \subseteq \paren{C_2 \cup C_3} \setminus \set{x}$, then:

$x \notin C_4$
It follows that:

$x \notin C_1 \cup C_4$
and

$x \in C_1 \cup C_2$
Hence:

$C_1 \cup C_4$ is a proper subset of $C_1 \cup C_2$
By circuit axiom $(\text C 3)$ and the minimality of $C_1 \cup C_2$:

$\exists C_5 \in \mathscr C : w \in C_5 \subseteq \paren{C_1 \cup C_4} \setminus \set{z}$
Since $C_1 \cup C_4 \subset C_1 \cup C_2$, then we have found $C_5$ such that:

$w \in C_5 \subseteq \paren{C_1 \cup C_2} \setminus \set{z}$
This contradicts the fact that $\tuple{C_1, C_2, z, w} \in F$.

It follows that circuit axiom $(\text C 4)$ is satisfied.
$\blacksquare$

Sources
1976: Dominic Welsh: Matroid Theory ... (previous) ... (next) Chapter $1.$ $\S 9.$ Circuits, Theorem $2$



