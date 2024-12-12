# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Sigma-Ring



Theorem
The following definitions of the concept of $\sigma$-ring are equivalent:

Definition 1
A $\sigma$-ring is a ring of sets which is closed under countable unions.

That is, a ring of sets $\Sigma$ is a $\sigma$-ring if and only if:

$\ds A_1, A_2, \ldots \in \Sigma \implies \bigcup_{n \mathop = 1}^\infty A_n \in \Sigma$
Definition 2
Let $\Sigma$ be a system of sets.

$\Sigma$ is a $\sigma$-ring if and only if $\Sigma$ satisfies the $\sigma$-ring axioms:




\((\text {SR} 1)\)  

$:$  



Empty Set:   



\(\ds \O \in \Sigma \)   







  


\((\text {SR} 2)\)  

$:$  



Closure under Set Difference:   

  \(\ds \forall A, B \in \Sigma:\)

\(\ds A \setminus B \in \Sigma \)   







  


\((\text {SR} 3)\)  

$:$  



Closure under Countable Unions:   

  \(\ds \forall A_n \in \Sigma: n = 1, 2, \ldots:\)

\(\ds \bigcup_{n \mathop = 1}^\infty A_n \in \Sigma \)   







  



Definition 3
Let $\Sigma$ be a system of sets.

$\Sigma$ is a $\sigma$-ring if and only if $\Sigma$ satisfies the $\sigma$-ring axioms:




\((\text {SR} 1')\)  

$:$  



Empty Set:   



\(\ds \O \in \Sigma \)   







  


\((\text {SR} 2')\)  

$:$  



Closure under Set Difference:   

  \(\ds \forall A, B \in \Sigma:\)

\(\ds A \setminus B \in \Sigma \)   







  


\((\text {SR} 3')\)  

$:$  



Closure under Countable Disjoint Unions:   

  \(\ds \forall A_n \in \Sigma: n = 1, 2, \ldots:\)

\(\ds \bigsqcup_{n \mathop = 1}^\infty A_n \in \Sigma \)   







  



Proof
Definition 1 implies Definition 2
Let $\text {SR}$ be a ring of sets which is closed under countable unions.
We have:




\((\text {RS} 1_2)\)  

$:$  



Empty Set:   



\(\ds \O \in \text {SR} \)   







  


\((\text {RS} 2_2)\)  

$:$  



Closure under Set Difference:   

  \(\ds \forall A, B \in \text {SR}:\)

\(\ds A \setminus B \in \text {SR} \)   







  

which are exactly $\text {SR} 1$ and $\text {SR} 2$.
Then as $\text {SR}$ is closed under countable unions:

$\ds A_1, A_2, \ldots \in \text {SR} \implies \bigcup_{n \mathop = 1}^\infty A_n \in \text {SR}$
and so $\text {SR} 3$ is fulfilled.
$\Box$


Definition 2 implies Definition 1
Let $\text {SR}$ be a system of sets such that:




\((\text {SR} 1)\)  

$:$  







\(\ds \O \in \text {SR} \)   







  


\((\text {SR} 2)\)  

$:$  





  \(\ds \forall A, B \in \text {SR}:\)

\(\ds A \setminus B \in \text {SR} \)   







  


\((\text {SR} 3)\)  

$:$  





  \(\ds \forall A_n \in \text {SR}: n = 1, 2, \ldots:\)

\(\ds \bigcup_{n \mathop = 1}^\infty A_n \in \text {SR} \)   







  


As noted above, $\text {SR} 1$ and $\text {SR} 2$ are exactly $\text {RS} 1_2$ and $\text {RS} 2_2$.
Let $A, B \in \text {SR}$.
Let $A_1 = A, A_2 = B$ and $A_n = \O$ for all $n = 3, 4, \ldots$
Then:

$\ds \forall A_n \in \text {SR}: n = 1, 2, \ldots: \bigcup_{n \mathop = 1}^\infty A_n = A \cup B \in \text {SR}$
Thus criterion $(\text {RS} 3_2)$ is fulfilled.
So $\text {SR}$ is a ring of sets which is closed under countable unions.
$\Box$


Definition 2 implies Definition 3
$\text {SR} 1$ is exactly $\text {SR} 1'$ and $\text {SR} 2$ is exactly $\text {SR} 2'$.
$\text {SR} 3$ allows arbitrary countable unions, and therefore a fortiori implies $\text {SR} 3'$.
$\Box$


Definition 3 implies Definition 2
As noted above, $\text {SR} 1$ and $\text {SR} 2$ are exactly $\text {SR} 1'$ and $\text {SR} 2'$.
Let $A_1, A_2, \ldots \in \Sigma$.
We have to show that $\ds \bigcup_{n \mathop = 1}^\infty A_n \in \Sigma$.
Let $B_n = A_n \setminus \ds\bigcup_{i \mathop = 1}^{n-1}A_i$ for all $n\in\N$.
Because:

$B_n = \paren {\cdots \paren {\paren {A_n \setminus A_{n - 1} } \setminus A_{n - 2} } \setminus \cdots \setminus A_1}$
and $\text {SR} 2'$, we have:

$\forall n \in \N: B_n \in \Sigma$
As $B_n \subseteq A_n$ for all $n \in \N$, it follows that:

$\ds \bigcup_{n \mathop = 1}^\infty B_n \subseteq \bigcup_{n \mathop = 1}^\infty A_n$
Let:

$x \in \ds\bigcup_{n \mathop = 1}^\infty A_n$
and:

$k = \min \set {n \in \N: x \in A_n}$
Then:

$x \in B_k$
Therefore:

$x \in \ds \bigcup_{n \mathop = 1}^\infty B_n$
Hence:

$\ds \bigcup_{n \mathop = 1}^\infty A_n \subseteq \bigcup_{n \mathop = 1}^\infty B_n$
Together with

$\ds \bigcup_{n \mathop = 1}^\infty B_n \subseteq \bigcup_{n \mathop = 1}^\infty A_n$
it follows that:

$\ds \bigcup_{n \mathop = 1}^\infty B_n = \bigcup_{n \mathop = 1}^\infty A_n$
Let $i, j \in \N, i < j$.
Then:

$B_i \cap B_j \subseteq A_i \cap B_j = A_i \cap \paren {A_j \setminus \ds \bigcup_{k \mathop = 1}^{j - 1} A_k} = \O$
So $B_1, B_2, \ldots$ is pairwise disjoint.
Hence $\ds\bigcup_{n \mathop = 1}^\infty A_n = \ds \bigsqcup_{n \mathop = 1}^\infty B_n \in \Sigma$, as $B_n \in \Sigma$ for all $n \in \N$ and $\text {SR} 3'$.
$\blacksquare$


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Sources
1970: Avner Friedman: Foundations of Modern Analysis ... (previous) ... (next): $\S 1.1$: Rings and Algebras: Theorem $1.1.1$




