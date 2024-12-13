# 

Source: https://proofwiki.org/wiki/Matroid_Bases_Iff_Satisfies_Formulation_1_of_Matroid_Base_Axiom/Lemma_1


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $S$ be a finite set.
Let $\mathscr B$ be a non-empty set of subsets of $S$ satisfying formulation $1$ of base axiom:




\((\text B 1)\)  

$:$  





  \(\ds \forall B_1, B_2 \in \mathscr B:\)







\(\ds  x \in B_1 \setminus B_2 \implies \exists y \in B_2 \setminus B_1 : \paren {B_1 \setminus \set x} \cup \set y \in \mathscr B \)   

  


Let $B_1, B_2 \in \mathscr B$.
Let $U \subseteq B_1$ and $V \subseteq B_2$ such that:

$\card V < \card U$
Let $B_2 \cap \paren{U \setminus V} = \O$.

Then:

$\exists B_3 \in \mathscr B$:
$V \subseteq B_3$
$\card{B_1 \cap B_3} > \card{B_1 \cap B_2}$


Proof
Lemma 2
$\forall B_1, B_2 \in \mathscr B : \card{B_1} = \card{B_2}$
where $\card{B_1}$ and $\card{B_2}$ denote the cardinality of the sets $B_1$ and $B_2$ respectively.
$\Box$

From Larger Set has Larger Set Difference:

$(1):\quad \card {V \setminus U} < \card {U \setminus V}$

We have:














\(\ds \card {B_1}\)

\(=\)







\(\ds \card{ \paren{B_1 \cap B_2} \cup \paren{B_1 \setminus B_2} }\)





Set Difference Union Intersection




\(\text {(2)}: \quad\)









\(\ds \)

\(=\)







\(\ds \card{B_1 \cap B_2} + \card{B_1 \setminus B_2}\)





Set Difference and Intersection are Disjoint and Corollary to Cardinality of Set Union



and














\(\ds \card {B_2}\)

\(=\)







\(\ds \card{ \paren{B_2 \cap B_1} \cup \paren{B_2 \setminus B_1} }\)





Set Difference Union Intersection














\(\ds \)

\(=\)







\(\ds \card{B_2 \cap B_1} + \card{B_2 \setminus B_1}\)





Set Difference and Intersection are Disjoint and Corollary to Cardinality of Set Union














\(\ds \)

\(=\)







\(\ds \card{B_2 \cap B_1} + \card{\paren{\paren{B_2 \setminus B_1} \cap V} \cup \paren{\paren{B_2 \setminus B_1} \setminus V} }\)





Set Difference Union Intersection














\(\ds \)

\(=\)







\(\ds \card{B_2 \cap B_1} + \card{\paren{B_2 \setminus B_1} \cap V} + \card{\paren{B_2 \setminus B_1} \setminus V}\)





Set Difference and Intersection are Disjoint and Corollary to Cardinality of Set Union




\(\text {(3)}: \quad\)









\(\ds \)

\(=\)







\(\ds \card{B_2 \cap B_1} + \card{V \setminus B_1} + \card{\paren{B_2 \setminus B_1} \setminus V}\)





Intersection with Set Difference is Set Difference with Intersection



and














\(\ds U \setminus V\)

\(\subseteq\)







\(\ds U\)




















\(\ds \)

\(\subseteq\)







\(\ds B_1\)














\(\ds \leadsto \ \ \)





\(\ds U \setminus V\)

\(\subseteq\)







\(\ds B_1 \setminus B_2\)





Subset of Set Difference iff Disjoint Set and $B_2 \cap \paren{U \setminus V} = \O$




\(\text {(4)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \card{U \setminus V}\)

\(\le\)







\(\ds \card{B_1 \setminus B_2}\)





Cardinality of Subset of Finite Set




We have:














\(\ds 0\)

\(=\)







\(\ds \card{B_2} - \card{B_1}\)





Lemma 2














\(\ds \)

\(=\)







\(\ds \card{B_2 \cap B_1} + \card{V \setminus B_1} + \card{\paren{B_2 \setminus B_1} \setminus V}  - \card{B_1 \cap B_2} - \card{B_1 \setminus B_2}\)





from $(2)$ and $(3)$














\(\ds \)

\(=\)







\(\ds \card{V \setminus B_1} + \card{\paren{B_2 \setminus B_1} \setminus V} - \card{B_1 \setminus B_2}\)





Canceling terms














\(\ds \)

\(\le\)







\(\ds \card{V \setminus B_1} + \card{\paren{B_2 \setminus B_1} \setminus V} - \card{U \setminus V}\)





from $(4)$














\(\ds \)

\(<\)







\(\ds \card{V \setminus B_1} + \card{\paren{B_2 \setminus B_1} \setminus V} - \card{V \setminus U}\)





from $(1)$














\(\ds \)

\(\le\)







\(\ds \card{V \setminus B_1} + \card{\paren{B_2 \setminus B_1} \setminus V} - \card{V \setminus B_1}\)





As $U \subseteq B_1$














\(\ds \)

\(=\)







\(\ds \card{\paren{B_2 \setminus B_1} \setminus V}\)





Canceling terms




From the contrapositive statement of Cardinality of Empty Set:

$\paren{B_2 \setminus B_1} \setminus V \ne \O$
Hence:

$\exists y \in \paren{B_2 \setminus B_1} \setminus V$
From $(\text B 1)$:

$\exists z \in B_1 \setminus B_2 : \paren{B_2 \setminus \set y} \cup \set z \in \mathscr B$

Let:

$B_3 = \paren{B_2 \setminus \set y} \cup \set z$

We have:















\(\ds V\)

\(\subseteq\)







\(\ds B_2 \setminus \set y\)





As $y \notin V$ and $V \subseteq B_2$














\(\ds \)

\(\subseteq\)







\(\ds \paren{B_2 \setminus \set y} \cup \set z\)





Set is Subset of Union














\(\ds \)

\(=\)







\(\ds B_3\)










From Finite Set Formed by Substitution has Larger Intersection:

$\card{B_1 \cap B_3} = \card{B_1 \cap B_2} + 1$

Hence:

$\card{B_1 \cap B_3} > \card{B_1 \cap B_2}$
$\blacksquare$





