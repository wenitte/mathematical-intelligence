# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Sigma-Algebra


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
The following definitions of the concept of Sigma-Algebra are equivalent:

Definition 1
Let $X$ be a set.
Let $\Sigma$ be a system of subsets of $X$.

$\Sigma$ is a $\sigma$-algebra over $X$ if and only if $\Sigma$ satisfies the sigma-algebra axioms:




\((\text {SA 1})\)  

$:$  



Unit:   



\(\ds X \in \Sigma \)   







  


\((\text {SA 2})\)  

$:$  



Closure under Complement:   

  \(\ds \forall A \in \Sigma:\)

\(\ds \relcomp X A \in \Sigma \)   







  


\((\text {SA 3})\)  

$:$  



Closure under Countable Unions:   

  \(\ds \forall A_n \in \Sigma: n = 1, 2, \ldots:\)

\(\ds \bigcup_{n \mathop = 1}^\infty A_n \in \Sigma \)   







  



Definition 2
Let $X$ be a set.
Let $\Sigma$ be a system of subsets of $X$.

$\Sigma$ is a $\sigma$-algebra over $X$ if and only if $\Sigma$ satisfies the sigma-algebra axioms:




\((\text {SA 1}')\)  

$:$  



Unit:   



\(\ds X \in \Sigma \)   







  


\((\text {SA 2}')\)  

$:$  



Closure under Set Difference:   

  \(\ds \forall A, B \in \Sigma:\)

\(\ds A \setminus B \in \Sigma \)   







  


\((\text {SA 3}')\)  

$:$  



Closure under Countable Disjoint Unions:   

  \(\ds \forall A_n \in \Sigma: n = 1, 2, \ldots:\)

\(\ds \bigsqcup_{n \mathop = 1}^\infty A_n \in \Sigma \)   







  



Definition 3
A $\sigma$-algebra $\Sigma$ is a $\sigma$-ring with a unit.

Definition 4
Let $X$ be a set.
A $\sigma$-algebra $\Sigma$ over $X$ is an algebra of sets which is closed under countable unions.


Proof
Definition 1 implies Definition 3
Let $\Sigma$ be a system of sets on a set $X$ such that:

$(1): \quad X \in \Sigma$
$(2): \quad \forall A, B \in \Sigma: \relcomp X A \in \Sigma$
$(3): \quad \ds \forall A_n \in \Sigma: n = 1, 2, \ldots: \bigcup_{n \mathop = 1}^\infty A_n \in \Sigma$

Let $A, B \in \Sigma$.
From the definition:

$\forall A \in \Sigma: A \subseteq X$.
Hence from Intersection with Subset is Subset:

$\forall A \in \Sigma: A \cap X = A$
Hence $X$ is the unit of $\Sigma$.
So by definition 2 of $\sigma$-ring it follows that $\Sigma$ is a $\sigma$-ring with a unit.
Thus $\Sigma$ is a $\sigma$-algebra by definition 3.
$\Box$


Definition 3 implies Definition 1
Let $\Sigma$ be a $\sigma$-ring with a unit $X$.
By definition, $X \in \Sigma$.
From definition 2 of $\sigma$-ring, $\Sigma$ is:

$(1) \quad$ closed under set difference.
$(2) \quad$ closed under countable union
From Unit of System of Sets is Unique, we have that:

$\forall A \in \Sigma: A \subseteq X$
from which we have that $X \setminus A = \relcomp X A$.

So $\Sigma$ is a $\sigma$-algebra by definition 1.
$\Box$


Definition 1 implies Definition 2
First, $(\text {SA} 1')$ is the same as $(\text {SA} 1)$.
Secondly, $(\text {SA} 3')$ is a special case of $(\text {SA} 3)$.
It remains to show $(\text {SA} 2')$.
Let $A, B \in \Sigma$ be arbitrary.
Observe:














\(\ds A \setminus B\)

\(=\)







\(\ds A \cap \relcomp X B\)





Set Difference as Intersection with Relative Complement














\(\ds \)

\(=\)







\(\ds \relcomp X {\relcomp X A} \cap \relcomp X B\)





Relative Complement of Relative Complement














\(\ds \)

\(=\)







\(\ds \relcomp X {\relcomp X A \cup B}\)





De Morgan's Law



By $(\text {SA} 2)$:

$\relcomp X A \in \Sigma$
Furthermore by $(\text {SA} 3)$:

$\relcomp X A \cup B \in \Sigma$
Finally, by $(\text {SA} 2)$:

$A \setminus B = \relcomp X {\relcomp X A \cup B} \in \Sigma$
Hence $(\text {SA} 2')$ is verified.
$\Box$


Definition 2 implies Definition 1
First, $(\text {SA} 1)$ is the same as $(\text {SA} 1')$.
Secondly, $(\text {SA} 2)$ is a special case of $(\text {SA} 2')$, since for all $A \subseteq X$:

$\relcomp X A = X \setminus A$
by definition of relative complement.

It remains to show $(\text {SA} 3)$.
Let $A_n \in \Sigma$ be arbitrary for $n = 1, 2, \ldots$.
Let $F_1 := A_1$.
For all $n \ge 2$, let recursively:

$F_n := A_n \setminus \paren {F_1 \sqcup \cdots \sqcup F_{n - 1} }$


Sublemma
For all $n = 1, 2, \ldots$ we have:

$F_n \in \Sigma$
and:

$A_1 \cup \cdots \cup A_n = F_1 \sqcup \cdots \sqcup F_n$


Proof of Sublemma
We shall prove by induction.
For $n = 1$ the claim is trivial, as $F_1 = A_1$.
Suppose that the claim is true for $n = k - 1$.
In particular:

$F_1 \sqcup \cdots \sqcup F_{k - 1} \in \Sigma$
Therefore by $(\text {SA} 2')$:

$F_k = A_k \setminus \paren {F_1 \sqcup \cdots \sqcup F_{k - 1} } \in\Sigma$
Furthermore:














\(\ds A_1 \cup \cdots \cup A_k\)

\(=\)







\(\ds \paren {A_1 \cup \cdots \cup A_{k - 1} } \cup A_k\)




















\(\ds \)

\(=\)







\(\ds \paren {F_1 \sqcup \cdots \sqcup F_{k - 1} } \cup A_k\)





induction assumption














\(\ds \)

\(=\)







\(\ds \paren {F_1 \sqcup \cdots \sqcup F_{k - 1} } \sqcup \paren {A_k \setminus \paren {F_1 \sqcup \cdots \sqcup F_{k - 1} } }\)




















\(\ds \)

\(=\)







\(\ds \paren {F_1 \sqcup \cdots \sqcup F_{k - 1} } \sqcup F_k\)









$\Box$


This page has been identified as a candidate for refactoring of basic complexity.In particular: Proof of sublemma should be added more details on a separate page.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.

Therefore:

$\ds \bigcup_{n \mathop = 1}^\infty A_n = \bigsqcup_{n \mathop = 1}^\infty F_n$
where the right hand side belongs to $\Sigma$ by $(\text {SA} 3')$.
Hence $(\text {SA} 3)$ is verified.
$\Box$


Definition 1 implies Definition 4
Immediate from the definition of algebra along with the added condition of closure under countable unions.
$\Box$


Definition 4 implies Definition 1
By definition $1$ of algebra of sets, an algebra has the properties:




\((\text {AS} 1)\)  

$:$  



Unit:   



\(\ds X \in \Sigma \)   







  


\((\text {AS} 2)\)  

$:$  



Closure under Union:   

  \(\ds \forall A, B \in \Sigma:\)

\(\ds A \cup B \in \Sigma \)   







  


\((\text {AS} 3)\)  

$:$  



Closure under Complement Relative to $X$:   

  \(\ds \forall A \in \Sigma:\)

\(\ds \relcomp X A \in \Sigma \)   







  

Replacing $(\text {AS} 2)$ with closure under countable unions immediately yields the first definition.
$\blacksquare$


Sources
1970: Avner Friedman: Foundations of Modern Analysis ... (previous) ... (next): $\S 1.1$: Rings and Algebras
1970: Avner Friedman: Foundations of Modern Analysis ... (previous) ... (next): $\S 1.1$: Rings and Algebras: Theorem $1.1.1$
1984: Gerald B. Folland: Real Analysis: Modern Techniques and their Applications : $\S 1.2$




