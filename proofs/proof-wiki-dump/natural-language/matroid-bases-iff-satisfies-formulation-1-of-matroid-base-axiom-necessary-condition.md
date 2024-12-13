# 

Source: https://proofwiki.org/wiki/Matroid_Bases_Iff_Satisfies_Formulation_1_of_Matroid_Base_Axiom/Necessary_Condition


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $M = \struct {S, \mathscr I}$ be a matroid.
Let $\mathscr B$ be the set of bases of the matroid $M$.

Then $\mathscr B$ satisfies formulation $1$ of base axiom:




\((\text B 1)\)  

$:$  





  \(\ds \forall B_1, B_2 \in \mathscr B:\)







\(\ds  x \in B_1 \setminus B_2 \implies \exists y \in B_2 \setminus B_1 : \paren {B_1 \setminus \set x} \cup \set y \in \mathscr B \)   

  



Proof
Let $B_1, B_2 \in \mathscr B$.
Let $x \in B_1 \setminus B_2$.

We have:














\(\ds \size {B_1 \setminus \set x}\)

\(=\)







\(\ds \size {B_1} - \size {\set x}\)





Cardinality of Set Difference with Subset














\(\ds \)

\(=\)







\(\ds \size {B_2} - \size {\set x}\)





All Bases of Matroid have same Cardinality














\(\ds \)

\(=\)







\(\ds \size {B_2} - 1\)





Cardinality of Singleton














\(\ds \)

\(<\)







\(\ds \size {B_2}\)









By matroid axiom $(\text I 3)$:

$\exists y \in B_2 \setminus \paren{B_1 \setminus \set x} : \paren{ B_1 \setminus \set x} \cup \set y \in \mathscr I$

We have:














\(\ds B_2 \setminus \paren{B_1 \setminus \set x}\)

\(=\)







\(\ds \paren{B_2 \setminus B_1} \cup \paren{B_2 \cap \set x}\)





Set Difference with Set Difference is Union of Set Difference with Intersection














\(\ds \)

\(=\)







\(\ds \paren{B_2 \setminus B_1} \cup \O\)





Intersection With Singleton is Disjoint if Not Element














\(\ds \)

\(=\)







\(\ds B_2 \setminus B_1\)





Union with Empty Set



Then:

$\exists y \in B_2 \setminus B_1 : \paren{ B_1 \setminus \set x} \cup \set y \in \mathscr I$

We have:














\(\ds \size{\paren { B_1 \setminus \set x} \cup \set y}\)

\(=\)







\(\ds \size{B_1 \setminus \set x} + \size{\set y}\)





Corollary to Cardinality of Set Union














\(\ds \)

\(=\)







\(\ds \size{B_1} - \size{\set x} + \size{\set y}\)





Cardinality of Set Difference with Subset














\(\ds \)

\(=\)







\(\ds \size{B_1} - 1 + 1\)





Cardinality of Singleton














\(\ds \)

\(=\)







\(\ds \size{B_1}\)









From Independent Subset is Base if Cardinality Equals Cardinality of Base:

$\paren { B_1 \setminus \set x} \cup \set y \in \mathscr B$

Since $x$, $B_1$ and $B_2$ were arbitrary then the result follows.
$\blacksquare$





