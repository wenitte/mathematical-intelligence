# 

Source: https://proofwiki.org/wiki/Matroid_Bases_Satisfy_Formulation_7_of_Matroid_Base_Axiom


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $M = \struct{S, \mathscr I}$ be a matroid.
Let $\mathscr B$ be the set of bases of the matroid $M$.

Then $\mathscr B$ satisfies formulation $7$ of base axiom:




\((\text B 7)\)  

$:$  





  \(\ds \forall B_1, B_2 \in \mathscr B:\)







\(\ds  \exists \text{ a bijection } \pi : B_1 \to B_2 : \forall x \in B_1 : \paren {B_2 \setminus \set {\map \pi x} } \cup \set x \in \mathscr B \)   

  



Proof
Let $\mathscr C$ denote the set of circuits of $M$.
From Circuits of Matroid iff Matroid Circuit Axioms, $\mathscr C$ satisifies:





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

  



Lemma 1
Let $n \in \N_{>0}$.
Let $C_1, C_2, \ldots, C_n \in \mathscr C$ satisfy:

$\forall 0 \le k \le n : C_k \nsubseteq \ds \bigcup_{i \ne k} C_i$
Let:

$A \subseteq S : \size A < n$
Let $r = \size A$.

Then:

$\ds \exists D_1, \ldots, D_{n - r} \in \mathscr C : \bigcup_{i = 1}^{n - r} D_i \subseteq \paren{\bigcup_{i = 1}^{n} C_i} \setminus A$
$\Box$

Let $B_1, B_2 \in \mathscr B$.
From Matroid Base Union External Element has Fundamental Circuit:

for each $x \in B_1 \setminus B_2$ let $C_x$ denote the fundamental circuit of $x$ in $B_2$

By definition of the fundamental circuit of $x$ in $B_2$:

$\forall y \in B_1 \setminus B_2 : y \ne x: x \notin C_y$
It follows that:

$\forall x \in B_1 \setminus B_2: C_x \nsubseteq \ds \bigcup_{y \ne x} C_y$
Hence lemma 1 can be applied to $\set{C_x : x \in B_1 \setminus B_2}$

For each $x \in B_1 \setminus B_2$ let:

$(1): \quad C^\prime_x = C_x \cap \paren{B_2 \setminus B_1}$
From Subset Intersection Set Difference is Empty Iff Subset of Second Set:

$C^\prime_x = \O \iff C_x \subseteq B_1$
From Subset of Set Difference iff Disjoint Set:

$C^\prime_x \ne \O$
From Matroid Base Substitution From Fundamental Circuit:

$(2): \quad \forall y \in C^\prime_x: \paren{B_2 \setminus \set y} \cup \set x \in \mathscr B$

Consider the set of sets:

$\set{C^\prime_x : x \in B_1 \setminus B_2}$
Aiming for a contradiction, suppose $\set{x_1, \ldots, x_n}$ is a finite subset of $B_1 \setminus B_2$ of cardinality $n$ such that:

$\size{C^\prime_{x_1} \cup \ldots \cup C^\prime_{x_1}} < n$

Let $D = C^\prime_{x_1} \cup \ldots \cup C^\prime_{x_1}$.
Applying lemma 1 to $\set{C_x : x \in B_1 \setminus B_2}$ and $D$:

$\exists C \in \mathscr C : C \subseteq \ds \paren{\bigcup_{k =1}^n C_{x_k}} \setminus D$

Note that:










\(\ds \forall x \in B_1: \, \)



\(\ds B_2 \setminus B_1\)

\(=\)







\(\ds B_2 \setminus \paren{B_1 \cup \set x}\)





Union with Superset is Superset














\(\ds \)

\(=\)







\(\ds \paren{B_2 \cup \set x} \setminus \paren{B_1 \cup \set x}\)





Set Difference with Union




\(\text {(3)}: \quad\)









\(\ds \)

\(=\)







\(\ds \paren{B_2 \cup \set x} \setminus B_1\)





Union with Superset is Superset




We have:














\(\ds \paren{\bigcup_{k =1}^n C_{x_k} } \setminus D\)

\(=\)







\(\ds \paren{\bigcup_{k =1}^n C_{x_k} } \setminus \paren{\bigcup_{k =1}^n C^\prime_{x_k} }\)





Definition of $D$














\(\ds \)

\(=\)







\(\ds \paren{\bigcup_{k =1}^n C_{x_k} } \setminus \paren{\bigcup_{k =1}^n C_{x_k} \cap \paren{B_2 \setminus B_1 } }\)





Definition of $C^\prime_{x_k}$














\(\ds \)

\(=\)







\(\ds \paren{\bigcup_{k =1}^n C_{x_k} } \setminus \paren{\bigcup_{k =1}^n C_{x_k} \cap \paren{\paren{B_2 \cup \set x} \setminus B_1 } }\)





from $(3)$














\(\ds \)

\(=\)







\(\ds \paren{\bigcup_{k =1}^n C_{x_k} } \setminus \paren{\bigcup_{k =1}^n \paren{C_{x_k} \cap \paren{B_2 \cup \set x} } \setminus B_1 }\)





Intersection with Set Difference is Set Difference with Intersection














\(\ds \)

\(=\)







\(\ds \paren{\bigcup_{k =1}^n C_{x_k} } \setminus \paren{\bigcup_{k =1}^n C_{x_k} \setminus B_1 }\)





Intersection with Subset is Subset














\(\ds \)

\(=\)







\(\ds \paren{\bigcup_{k =1}^n C_{x_k} } \setminus \paren{\paren{\bigcup_{k =1}^n C_{x_k} } \setminus B_1 }\)





Set Difference is Right Distributive over Union














\(\ds \)

\(=\)







\(\ds \paren{\bigcup_{k =1}^n C_{x_k} } \cap B_1\)





Set Difference with Set Difference














\(\ds \)

\(\subseteq\)







\(\ds B_1\)





Intersection is Subset




From Subset Relation is Transitive:

$C \subseteq B_1$
This contradicts Matroid Base Contains No Circuit.

Hence for all finite $F \subseteq B_1 \setminus B_2$:

$\size F \le \size{\ds \bigcup_{x \in F} C^\prime_x}$
That is, the indexed family of finite sets $\set{C^\prime_x : x \in B_1 \setminus B_2}$ satisfies the marriage condition.

From Hall's Marriage Theorem:

there exists an injection $\pi : B_1 \setminus B_2 \to \ds \bigcup_{x \in F} C^\prime_x$ such that:
$\forall x \in B_1 \setminus B_2: \map \pi x \in C^\prime_x$
From $(1)$ and $(2)$:

$\forall x \in B_1 \setminus B_2 : \map \pi x \in B_2 \setminus B_1 : \paren{B_2 \setminus \set {\map \pi x}} \cup \set x \in \mathscr B$

We have:














\(\ds \size{\pi \sqbrk {B_1 \setminus B_2} }\)

\(=\)







\(\ds \size{B_1 \setminus B_2}\)





Cardinality of Image of Injection














\(\ds \)

\(=\)







\(\ds \size{B_1 \setminus \paren{B_1 \cap B_2} }\)





Set Difference with Intersection is Difference














\(\ds \)

\(=\)







\(\ds \size{B_1} - \size{B_1 \cap B_2}\)





Cardinality of Set Difference with Subset














\(\ds \)

\(=\)







\(\ds \size{B_2} - \size{B_1 \cap B_2}\)





All Bases of Matroid have same Cardinality














\(\ds \)

\(=\)







\(\ds \size{B_2 \setminus \paren{B_1 \cap B_2} }\)





Cardinality of Set Difference with Subset














\(\ds \)

\(=\)







\(\ds \size{B_2 \setminus B_1 }\)





Set Difference with Intersection is Difference




From the contrapositive statement of Cardinality of Proper Subset of Finite Set:

$\pi \sqbrk {B_1 \setminus B_2} = B_2 \setminus B_1$
Hence:

$\pi$ is a bijection, $\pi : B_1 \setminus B_2 \to B_2 \setminus B_1$:
$\forall x \in B_1 \setminus B_2 : \map \pi x \in B_2 \setminus B_1 : \paren{B_2 \setminus \set {\map \pi x}} \cup \set x \in \mathscr B$

Let $\pi^\prime : B_1 \to B_2$ be defined by:

$\forall x \in B_1 : \map {\pi^\prime} x = \begin{cases}
\map \pi x & : x \in B_1 \setminus B_2\\
x & : x \in B_1 \cap B_2 
\end{cases}$

From Set Difference Union Intersection:

$B_1 = \paren{B_1 \setminus B_2} \cup \paren{B_1 \cap B_2}$
From Set Difference and Intersection are Disjoint:

$\paren{B_1 \setminus B_2} \cap \paren{B_1 \cap B_2} = \O$
Hence:

$\pi^\prime : B_1 \to B_2$ is well-defined

From Set Difference and Intersection are Disjoint:

$\paren{B_2 \setminus B_1} \cap \paren{B_1 \cap B_2} = \O$
From Union of Bijections with Disjoint Domains and Codomains is Bijection:

$\pi^\prime$ is a bijection

Furthermore:

$\forall x \in B_1 : \paren{B_2 \setminus \set {\map {\pi^\prime} x} } \cup \set x = \begin{cases}
\paren{B_2 \setminus \set {\map \pi x} } \cup \set x \in \mathscr B & : x \in B_1 \setminus B_2\\
\paren{B_2 \setminus \set x} \cup \set x = B_2 \in \mathscr B& : x \in B_1 \cap B_2 
\end{cases}$

It follows that $\mathscr B$ satisfies formulation $7$ of base axiom:




\((\text B 7)\)  

$:$  





  \(\ds \forall B_1, B_2 \in \mathscr B:\)







\(\ds  \exists \text{ a bijection } \pi : B_1 \to B_2 : \forall x \in B_1 : \paren {B_2 \setminus \set {\map \pi x} } \cup \set x \in \mathscr B \)   

  

$\blacksquare$


Sources
1966: David S. Asche: Minimal dependent sets (Journal of the Australian Mathematical Society Vol. 6, no. 3: pp. 259 – 262)
1969: Richard A. Brualdi: Comments on bases in dependence structures (Bulletin of the Australian Mathematical Society Vol. 1, no. 2: pp. 161 – 167)
h94 (https://math.stackexchange.com/users/305691/h94), Given bases $A$, $B$ of a matroid there is a one-to-one mapping $\omega$ from $A$ to $B$ such that $(A - {a}) \cup {\omega(a)}$ is independent, URL (version: 2018-02-09): https://math.stackexchange.com/q/2642822




