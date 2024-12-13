# 

Source: https://proofwiki.org/wiki/Matroid_Bases_Iff_Satisfies_Formulation_1_of_Matroid_Base_Axiom/Sufficient_Condition


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $S$ be a finite set.
Let $\mathscr B$ be a non-empty set of subsets of $S$ satisfying formulation $1$ of base axiom:




\((\text B 1)\)  

$:$  





  \(\ds \forall B_1, B_2 \in \mathscr B:\)







\(\ds  x \in B_1 \setminus B_2 \implies \exists y \in B_2 \setminus B_1 : \paren {B_1 \setminus \set x} \cup \set y \in \mathscr B \)   

  


Then $\mathscr B$ is the set of bases of a matroid on $S$.

Proof
Let $\mathscr I = \set{X \subseteq S : \exists B \in \mathscr B : X \subseteq B}$
It is to be shown that:

$\quad \mathscr I$ satisfies the matroid axioms
and

$\quad \mathscr B$ is the set of bases of the matroid $M = \struct{S, \mathscr I}$

From Independence System Induced from Set of Subsets:

$\mathscr I$ is an independence system
Matroid Axiom $(\text I 3)$
Let $U, V \in \mathscr I$ such that:

$\card V < \card U$
By definition of $\mathscr I$:

$\exists B_1, B_2 \in \mathscr B : U \subseteq B_1, V \subseteq B_2$
From Max Operation Equals an Operand:

$\exists B_1, B_2 \in \mathscr B : U \subseteq B_1, V \subseteq B_2 : \card{B_1 \cap B_2} = \max \set{\card{C_1 \cap C_2} : U \subseteq C_1, V \subseteq C_2 \text{ and } C_1, C_2 \in \mathscr B}$

Aiming for a contradiction, suppose:

$B_2 \cap \paren{U \setminus V} = \O$
Lemma 1
$\exists B_3 \in \mathscr B$:
$V \subseteq B_3$
$\card{B_1 \cap B_3} > \card{B_1 \cap B_2}$
$\Box$

This contradicts the choice of $B_1, B_2$ such that:

$\card{B_1 \cap B_2} = \max \set{\card{C_1 \cap C_2} : U \subseteq C_1, V \subseteq C_2 \text{ and } C_1, C_2 \in \mathscr B}$
Hence:

$B_2 \cap \paren{U \setminus V} \ne \O$

Let $x \in B_2 \cap \paren{U \setminus V}$.
From Union of Subsets is Subset:

$V \cup \set x \subseteq B_2$
By definition of $\mathscr I$:

$V \cup \set x \in \mathscr I$
It follows that $\mathscr I$ satisfies the matroid axiom $(\text I 3)$ by definition.
$\Box$
This completes the proof that $M = \struct{S, \mathscr I}$ forms a matroid. 
$\Box$

$\mathscr B$ is Set of Bases
Let $B \in \mathscr B$.
From Set is Subset of Itself:

$B \in \mathscr I$
Let $U \in \mathscr I$ such that:

$B \subseteq U$
By definition of $\mathscr I$:

$\exists B' \in \mathscr B : I \subseteq B'$
From Subset Relation is Transitive:

$B \subseteq B'$
Lemma 2
$\forall B_1, B_2 \in \mathscr B : \card{B_1} = \card{B_2}$
where $\card{B_1}$ and $\card{B_2}$ denote the cardinality of the sets $B_1$ and $B_2$ respectively.
$\Box$
From Lemma 2:

$\card B = \card {B'}$
From Cardinality of Proper Subset of Finite Set:

$B = B'$
By definition of set equality:

$U = B$

It has been shown that $B$ is a maximal subset of the ordered set $\struct{\mathscr I, \subseteq}$.
It follows that $\mathscr B$ is the set of bases of the matroid $M = \struct{S, I}$ by definition.
$\blacksquare$





