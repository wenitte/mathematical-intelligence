# 

Source: https://proofwiki.org/wiki/Circuits_of_Matroid_iff_Matroid_Circuit_Axioms/Lemma_1


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $S$ be a finite set.
Let $\mathscr C$ be a non-empty set of subsets of $S$ that satisfies the circuit axioms:




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

  


For any ordered tuple $\tuple{x_1, \ldots, x_q}$ of elements of $S$, let $\map \theta {x_1, \ldots, x_q}$ be the ordered tuple defined by:

$\forall i \in \set{1, \ldots, q} : \map \theta {x_1, \ldots, x_q}_i = \begin{cases} 0 & : \exists C \in \mathscr C : x_i \in C \subseteq \set{x_1, \ldots, x_i}\\ 1 & : \text {otherwise}  \end{cases}$

Let $t$ be the mapping from the set of ordered tuple of $S$ defined  by:

$\map t {x_1, \ldots, x_q} = \ds \sum_{i = 1}^q \map \theta {x_1, \ldots, x_q}_i$

Let $\tuple{x_1, \ldots, x_q}$ be any ordered tuple of elements of $S$.
Let $\pi$ be any permutation of $\tuple{x_1, \ldots, x_q}$.

Then:

$\map t {x_1, \ldots, x_q} = \map t {x_{\map \pi 1}, \ldots, x_{\map \pi q}}$


Proof
It is sufficient to show that:

$\forall 1 \le i \le q-1 : \map t {x_1, \ldots, x_i, x_{i + 1}, \ldots, x_q} = \map t {x_1, \ldots, x_{i + 1}, x_i, \ldots, x_q}$

By definition of $t$, we have:

$\map t {x_1, \ldots, x_i, x_{i + 1}, \ldots, x_q} = \sum_{j = 1}^{i - 1} \map \theta {x_1, \ldots, x_q}_j + \map \theta {x_1, \ldots, x_q}_i + \map \theta {x_1, \ldots, x_q}_{i + 1} + \sum_{j = {i + 2} }^q \map \theta {x_i + 2, \ldots, x_q}_j$
Similarly:

$\map t {x_1, \ldots, x_{i + 1}, x_i, \ldots, x_q} = \sum_{j = 1}^{i - 1} \map \theta {x_1, \ldots, x_q}_j + \map \theta {x_1, \ldots, x_q}_{i + 1} + \map \theta {x_1, \ldots, x_q}_i + \sum_{j = {i + 2} }^q \map \theta {x_i + 2, \ldots, x_q}_j$
By definition of $\theta$:

$\sum_{j = {i + 2} }^q \map \theta {x_i + 2, \ldots, x_q}_j$ is independent of the order of the tuple $\tuple{x_1, \ldots, x_{i - 1}, x_i, x_{i + 1}}$
So it is sufficient to show that:

$\forall 1 \le i \le q-1 : \map t {x_1, \ldots, x_i, x_{i + 1}} = \map t {x_1, \ldots, x_{i + 1}, x_i}$

Let:

$a = \map t {x_1, \ldots, x_{i - 1}}$
$a_1 = \map t {x_1, \ldots, x_{i - 1}, x_i} = a + \map \theta {x_1, \ldots, x_{i - 1}, x_i}_i$
$a_2 = \map t {x_1, \ldots, x_{i - 1}, x_{i + 1}} = a + \map \theta {x_1, \ldots, x_{i - 1}, x_{i + 1}}_i$
$a_{12} = \map t {x_1, \ldots, x_{i - 1}, x_i, x_{i + 1}} = a_1 + \map \theta {x_1, \ldots, x_{i - 1}, x_i, x_{i + 1}}_{i+1}$
$a_{21} = \map t {x_1, \ldots, x_{i - 1}, x_{i + 1}, x_i} = a_2 + \map \theta {x_1, \ldots, x_{i - 1}, x_{i + 1}, x_i}_{i+1}$

We consider the following cases:

$\begin{array}{c|cccc}
\text{Case} & \map \theta {x_1, \ldots, x_{i - 1}, x_i}_i & \map \theta {x_1, \ldots, x_{i - 1}, x_{i + 1}}_i & \map \theta {x_1, \ldots, x_{i - 1}, x_i, x_{i + 1}}_{i+1} \\
\hline
\text{Case } 1 & 1 & 1 & 1 \\
\text{Case } 2 & 1 & 1 & 0 \\
\text{Case } 3 & 1 & 0 & 1 \\
\text{Case } 4 & 1 & 0 & 0 \\
\text{Case } 5 & 0 & 1 & 1 \\
\text{Case } 6 & 0 & 1 & 0 \\
\text{Case } 7 & 0 & 0 & 1 \\
\text{Case } 8 & 0 & 0 & 0 \\
\end{array}$
Case 1
Let:

$\map \theta {x_1, \ldots, x_{i - 1}, x_i}_i = 1$
$\map \theta {x_1, \ldots, x_{i - 1}, x_{i + 1}}_i = 1$
$\map \theta {x_1, \ldots, x_{i - 1}, x_i, x_{i + 1}}_{i+1} = 1$
We have:
$a_1 = a + 1 = a_2$

Aiming for a contradiction, suppose:

$\map \theta {x_1, \ldots, x_{i - 1}, x_{i + 1}, x_i}_{i+1} = 0$

By definition of $\theta$:

$\exists C \in \mathscr C : x_i \in C \subseteq \set{x_1, \ldots, x_{i - 1}, x_{i + 1}, x_i}$
and

$\nexists C \in \mathscr C : x_i \in C \subseteq \set{x_1, \ldots, x_{i - 1}, x_i}$
Hence:
$x_{i + 1} \in C$

It follows that:

$\exists C \in \mathscr C : x_{i + 1} \in C \subseteq \set{x_1, \ldots, x_{i - 1}, x_i, x_{i + 1}}$
This contradicts the assumption that:

$\map \theta {x_1, \ldots, x_{i - 1}, x_i, x_{i + 1}}_{i+1} = 1$

Hence:
$\map \theta {x_1, \ldots, x_{i - 1}, x_{i + 1}, x_i}_{i+1} = 1$
It follows that:

$a_{12} = a_1 + 1 = a_2 + 1 = a_{21}$
$\Box$

Case 2
Let:

$\map \theta {x_1, \ldots, x_{i - 1}, x_i}_i = 1$
$\map \theta {x_1, \ldots, x_{i - 1}, x_{i + 1}}_i = 1$
$\map \theta {x_1, \ldots, x_{i - 1}, x_i, x_{i + 1}}_{i+1} = 0$
$\Box$
We have:
$a_1 = a + 1 = a_2$

By definition of $\theta$:

$\exists C \in \mathscr C : x_i \in C \subseteq \set{x_1, \ldots, x_{i - 1}, x_{i + 1}, x_i}$
and

$\nexists C \in \mathscr C : x_i \in C \subseteq \set{x_1, \ldots, x_{i - 1}, x_i}$
Hence:
$x_{i + 1} \in C$

It follows that:

$\exists C \in \mathscr C : x_{i + 1} \in C \subseteq \set{x_1, \ldots, x_{i - 1}, x_i, x_{i + 1}}$

Hence:
$\map \theta {x_1, \ldots, x_{i - 1}, x_{i + 1}, x_i}_{i+1} = 0$
It follows that:

$a_{12} = a_1 = a_2 = a_{21}$
$\Box$

Cases 3 and 7
Common to cases 3 and 7 are the conditions $\map \theta {x_1, \ldots, x_{i - 1}, x_{i + 1}}_i = 0$ and $\map \theta {x_1, \ldots, x_{i - 1}, x_i, x_{i + 1}}_{i+1} = 1$.

Let:

$\map \theta {x_1, \ldots, x_{i - 1}, x_{i + 1}}_i = 0$
$\map \theta {x_1, \ldots, x_{i - 1}, x_i, x_{i + 1}}_{i+1} = 1$

By definition of $\theta$:

$\exists C \in \mathscr C : x_i \in C_1 \subseteq \set{x_1, \ldots, x_{i - 1}, x_{i+1}}$
From Subset Relation is Transitive:

$\exists C \in \mathscr C : x_i \in C \subseteq \set{x_1, \ldots, x_{i - 1}, x_i, x_{i + 1}}_{i+1}$
By definition of $\theta$:

$\map \theta {x_1, \ldots, x_{i - 1}, x_i, x_{i + 1}}_{i+1} = 0$
This contradicts the assumption that:

$\map \theta {x_1, \ldots, x_{i - 1}, x_i, x_{i + 1}}_{i+1} = 1$
Hence these cases can't occur.
$\Box$

Case 4
Let:

$\map \theta {x_1, \ldots, x_{i - 1}, x_i}_i = 0$
$\map \theta {x_1, \ldots, x_{i - 1}, x_{i + 1}}_i = 1$
$\map \theta {x_1, \ldots, x_{i - 1}, x_i, x_{i + 1}}_{i+1} = 0$
We have:

$a_1 = a$ and $a_2 = a + 1$

By definition of $\theta$:

$\exists C_1 \in \mathscr C : x_{i+1} \in C_1 \subseteq \set{x_1, \ldots, x_{i - 1}, x_i, x_{i+1}}$
and

$\nexists C \in \mathscr C : x_{i+1} \in C \subseteq \set{x_1, \ldots, x_{i - 1}, x_{i+1}}$
Hence:

$x_i \in C_1$

By definition of $\theta$:

$\exists C_2 \in \mathscr C : x_i \in C_2 \subseteq \set{x_1, \ldots, x_{i - 1}, x_i}$
Hence:

$x_i \in C_1 \cap C_2$
and

$x_{i+1} \in C_2 \setminus C_1$
By matroid circuit axiom $(\text C 4)$:

$\exists C_3 \in \mathscr C : x_{i+1} \in C_3 \subseteq \paren{C_1 \cup C_2} \setminus \set {x_i}$
From Union of Subsets is Subset:

$C_1 \cup C_2 \subseteq \set{x_1, \ldots, x_{i - 1}, x_i, x_{i+1}}$
From Set Difference over Subset:

$\paren{C_1 \cup C_2} \setminus \set {x_i} \subseteq \set{x_1, \ldots, x_{i - 1}, x_i, x_{i+1}} \setminus \set {x_i} = \set{x_1, \ldots, x_{i - 1}, x_{i+1}}$
From Subset Relation is Transitive:

$\exists C_3 \in \mathscr C : x_{i+1} \in C_3 \subseteq \set{x_1, \ldots, x_{i - 1}, x_{i+1}}$
By definition of $\theta$:

$\map \theta {x_1, \ldots, x_{i - 1}, x_{i + 1}}_i = 0$

This contradicts the assumption that:

$\map \theta {x_1, \ldots, x_{i - 1}, x_{i + 1}}_i = 1$
Hence this case can't occur.
$\Box$

Case 5
Let:

$\map \theta {x_1, \ldots, x_{i - 1}, x_i}_i = 0$
$\map \theta {x_1, \ldots, x_{i - 1}, x_{i + 1}}_i = 1$
$\map \theta {x_1, \ldots, x_{i - 1}, x_i, x_{i + 1}}_{i+1} = 1$
We have:

$a_1 = a$ and $a_2 = a + 1$

By definition of $\theta$:

$\exists C \in \mathscr C : x_i \in C \subseteq \set{x_1, \ldots, x_{i - 1}, x_i}$
From Subset Relation is Transitive:

$\exists C \in \mathscr C : x_i \in C \subseteq \set{x_1, \ldots, x_{i - 1},  x_{i+1}, x_i}$
By definition of $\theta$:

$\map \theta {x_1, \ldots, x_{i - 1}, x_{i + 1}, x_i}_{i+1} = 0$
It follows that:

$a_{12} = a_1 + 1 = a + 1 = a_2 + 1 = a_{21}$
$\Box$

Case 6
Let:

$\map \theta {x_1, \ldots, x_{i - 1}, x_i}_i = 1$
$\map \theta {x_1, \ldots, x_{i - 1}, x_{i + 1}}_i = 0$
$\map \theta {x_1, \ldots, x_{i - 1}, x_i, x_{i + 1}}_{i+1} = 0$
We have:

$a_1 = a + 1$ and $a_2 = a$

Aiming for a contradiction, suppose $\map \theta {x_1, \ldots, x_{i - 1}, x_{i+1}, x_i}_{i+1} = 0$.
By definition of $\theta$:

$\exists C_1 \in \mathscr C : x_i \in C_1 \subseteq \set{x_1, \ldots, x_{i - 1}, x_{i+1}, x_i}$
and

$\nexists C \in \mathscr C : x_i \in C \subseteq \set{x_1, \ldots, x_{i - 1}, x_i}$
Hence:
$x_{i+1} \in C_1$

By definition of $\theta$:

$\exists C_2 \in \mathscr C : x_{i+1} \in C_2 \subseteq \set{x_1, \ldots, x_{i - 1}, x_{i+1}}$
Hence:

$x_{i+1} \in C_1 \cap C_2$
and

$x_i \in C_1 \setminus C_2$
By matroid circuit axiom $(\text C 4)$:

$\exists C_3 \in \mathscr C : x_i \in C_3 \subseteq \paren{C_1 \cup C_2} \setminus \set {x_{i+1}}$
From Union of Subsets is Subset:

$C_1 \cup C_2 \subseteq \set{x_1, \ldots, x_{i - 1}, x_i, x_{i+1}}$
From Set Difference over Subset:

$\paren{C_1 \cup C_2} \setminus \set {x_{i+1}} \subseteq \set{x_1, \ldots, x_{i - 1}, x_i, x_{i+1}} \setminus \set {x_{i+1}} = \set{x_1, \ldots, x_{i - 1}, x_i}$
From Subset Relation is Transitive:

$\exists C_3 \in \mathscr C : x_i \in C_3 \subseteq \set{x_1, \ldots, x_{i - 1}, x_i}$
By definition of $\theta$:

$\map \theta {x_1, \ldots, x_{i - 1}, x_i}_i = 0$

This contradicts the assumption that:

$\map \theta {x_1, \ldots, x_{i - 1}, x_{i + 1}}_i = 1$
Hence:

$\map \theta {x_1, \ldots, x_{i - 1}, x_{i+1}, x_i}_{i+1} = 1$

We have:

$a_{12} = a_1 + 0 = a + 1 = a_2 + 1 = a_{21}$
$\Box$

Case 8
Let:

$\map \theta {x_1, \ldots, x_{i - 1}, x_i}_i = 0$
$\map \theta {x_1, \ldots, x_{i - 1}, x_{i + 1}}_i = 0$
$\map \theta {x_1, \ldots, x_{i - 1}, x_i, x_{i + 1}}_{i+1} = 0$
We have:

$a_1 = a = a_2$

By definition of $\theta$:

$\exists C \in \mathscr C : x_i \in C \subseteq \set{x_1, \ldots, x_{i - 1}, x_i}$
From Subset Relation is Transitive:

$\exists C \in \mathscr C : x_i \in C \subseteq \set{x_1, \ldots, x_{i - 1},  x_{i+1}, x_i}$
By definition of $\theta$:

$\map \theta {x_1, \ldots, x_{i - 1}, x_{i + 1}, x_i}_{i+1} = 0$

We have:

$a_{12} = a_1 = a = a_2 = a_{21}$
$\Box$

The cases are exhaustive and in all possible cases:

$a_{12} = a_{21}$
That is:

$\map t {x_1, \ldots, x_{i - 1}, x_i, x_{i + 1}} = \map t {x_1, \ldots, x_{i - 1}, x_{i + 1}, x_i}$

The result follows.
$\blacksquare$





