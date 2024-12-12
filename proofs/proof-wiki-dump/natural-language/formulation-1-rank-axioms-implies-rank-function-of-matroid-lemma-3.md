# 

Source: https://proofwiki.org/wiki/Formulation_1_Rank_Axioms_Implies_Rank_Function_of_Matroid/Lemma_3


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $S$ be a finite set.
Let $\rho : \powerset S \to \Z$ be a mapping from the power set of $S$ to the integers.

Let $\rho$ satisfy formulation 1 of the rank axioms:




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

  



Let:

$A \subseteq S : \map \rho A = \card A$
Let:

$B \subseteq S : \forall b \in B \setminus A : \map \rho {A \cup \set b} \ne \card{A \cup \set b}$

Then:

$\map \rho {A \cup B} = \map \rho A$


Lemma 1
$\forall A, B \subseteq S: A \subseteq B \implies \map \rho A \le \map \rho B$


Lemma 2
$\forall A \subseteq S: \map \rho A \le \card A$


Proof
Case 1 : $B \setminus A = \O$
Let $B \setminus A = \O$.
From Set Difference with Superset is Empty Set:

$B \subseteq A$
From Union with Superset is Superset:

$A \cup B = A$
It follows that:

$\map \rho {A \cup B} = \map \rho A$
$\Box$


Case 2 : $B \setminus A \ne \O$
Let:

$B \setminus A = \set{b_1, b_2, \dots, b_k}$

For each $i \in \closedint 1 k$, let:

$B_i = \begin{cases}
A & : i = 1 \\
A \cup \set{x_1, x_2, \dots, x_{i-1}} & : i \in \closedint 2 k
\end{cases}$

$\mathscr B_i = \set{B_i \cup \set y : y \in B \setminus B_i}$

We note that:














\(\ds \mathscr B_k\)

\(=\)







\(\ds \set{B_k \cup \set{b_k} }\)




















\(\ds \)

\(=\)







\(\ds \set{A \cup \set{b_1, b_2, \dots, b_{k-1} } \cup \set{b_k} }\)




















\(\ds \)

\(=\)







\(\ds \set{A \cup \set{b_1, b_2, \dots, b_k} }\)




















\(\ds \)

\(=\)







\(\ds \set{A \cup B \setminus B}\)




















\(\ds \)

\(=\)







\(\ds \set{A \cup B}\)





Set Difference Union Second Set is Union



$\Box$

We prove by induction:

$\forall i \in \closedint 1 k : \forall Y \in \mathscr B_i : \map \rho Y = \map \rho A$
For all $i \in \closedint 1 k$, let $\map P i$ be the proposition:

$\forall Y \in \mathscr B_i : \map \rho Y = \map \rho A$


Basis for the Induction
We have:

$\mathscr B_1 = \set{A \cup \set y : y \in \set{b_1, b_2, \dots, b_k}}$
$\map P 1$ is the case:

$\forall j \in \closedint 1 k : \map \rho {A \cup \set{b_j}} = \map \rho A$
Let $j \in \closedint 1 k$.
We have:














\(\ds \map \rho {A \cup \set {b_j} }\)

\(<\)







\(\ds \card {A \cup \set {b_j} }\)





As $\map \rho {A \cup \set {b_j} }$ and from Lemma 2














\(\ds \)

\(=\)







\(\ds \card A + 1\)




















\(\ds \)

\(=\)







\(\ds \map \rho A + 1\)





As $A \cup \set {b_j} \in \mathscr I$



By rank axiom $(\text R 2)$:

$\map \rho A = \map \rho {A \cup \set {b_j}}$
This establishes our base case.
$\Box$


Induction Hypothesis
Now we need to show that, if $\map P i$ is true, where $i \ge 1$, then it logically follows that $\map P {i + 1}$ is true.

So this is our induction hypothesis:

$\forall Y \in \mathscr B_i : \map \rho Y = \map \rho A$
Then we need to show:

$\forall Y \in \mathscr B_{i+1} : \map \rho Y = \map \rho A$
$\Box$


Induction Step
This is our induction step.

Let $Y \in \mathscr B_{i+1}$.
Then:

$Y = A \cup \set{b_1, b_2, \dots, b_i, y}$
where $y \in {b_{i+1}, \dots, b_k}$

We note that:

$A \cup \set{b_1, b_2, \dots, b_{i-1}, b_i} \in \mathscr B_i$
$A \cup \set{b_1, b_2, \dots, b_{i-1}, y} \in \mathscr B_i$

We have:














\(\ds \map \rho {A \cup \set{b_1, b_2, \dots, b_{i-1} } }\)

\(\le\)







\(\ds \map \rho {A \cup \set{b_1, b_2, \dots, b_{i-1}, b_i } }\)





Rank axiom $(\text R 2)$














\(\ds \)

\(=\)







\(\ds \map \rho A\)





Induction Hypothesis














\(\ds \)

\(\le\)







\(\ds \map \rho {A \cup \set{b_1, b_2, \dots, b_{i-1} } }\)





Lemma 1




Hence:

$\map \rho {A \cup \set{b_1, b_2, \dots, b_{i-1}, b_i } } = \map \rho {A \cup \set{b_1, b_2, \dots, b_{i-1} } }$
and

$\map \rho {A \cup \set{b_1, b_2, \dots, b_{i-1} } } = \map \rho A$
Similarly:

$\map \rho {A \cup \set{b_1, b_2, \dots, b_{i-1}, y } } = \map \rho {A \cup \set{b_1, b_2, \dots, b_{i-1} } }$

By Rank axiom $(\text R 3)$:

$\map \rho {A \cup \set{b_1, b_2, \dots, b_{i-1}, b_i, y } } = \map \rho {A \cup \set{b_1, b_2, \dots, b_{i-1} } } = \map \rho A$

It follows that:

$\forall Y \in \mathscr B_{i+1} : \map \rho Y = \map \rho A$
This establishes our induction step.
$\Box$

Hence by induction:

$\forall i \in \closedint 1 k : \forall Y \in \mathscr B_i : \map \rho Y = \map \rho A$

We have:














\(\ds \map \rho A\)

\(=\)







\(\ds \map \rho {A \cup \set{b_1, b_2, \dots, b_k} }\)





As $A \cup \set{b_1, b_2, \dots, b_k} \in \mathscr B_k$














\(\ds \)

\(=\)







\(\ds \map \rho {A \cup B \setminus A}\)




















\(\ds \)

\(=\)







\(\ds \map \rho {A \cup B}\)





Set Difference Union Second Set is Union



$\Box$
In either case:

$\map \rho {A \cup B} = \map \rho A$
$\blacksquare$





