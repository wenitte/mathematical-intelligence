# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Matroid_Base_Axioms


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $S$ be a finite set.
Let $\mathscr B$ be a non-empty set of subsets of $S$.

The following definitions for the matroid base axiom are equivalent:

Formulation 1
$\mathscr B$ is said to satisfy the base axiom if and only if:




\((\text B 1)\)  

$:$  





  \(\ds \forall B_1, B_2 \in \mathscr B:\)







\(\ds  x \in B_1 \setminus B_2 \implies \exists y \in B_2 \setminus B_1 : \paren {B_1 \setminus \set x} \cup \set y \in \mathscr B \)   

  



Formulation 2
$\mathscr B$ is said to satisfy the base axiom if and only if:




\((\text B 2)\)  

$:$  





  \(\ds \forall B_1, B_2 \in \mathscr B:\)







\(\ds  x \in B_1 \setminus B_2 \implies \exists y \in B_2 \setminus B_1 : \paren {B_1 \cup \set y} \setminus \set x \in \mathscr B \)   

  



Formulation 3
$\mathscr B$ is said to satisfy the base axiom if and only if:




\((\text B 3)\)  

$:$  





  \(\ds \forall B_1, B_2 \in \mathscr B:\)







\(\ds  \exists \text{ a bijection } \pi : B_1 \to B_2 : \forall x \in B_1 : \paren {B_1 \setminus \set x } \cup \set {\map \pi x} \in \mathscr B \)   

  



Formulation 4
$\mathscr B$ is said to satisfy the base axiom if and only if:




\((\text B 4)\)  

$:$  





  \(\ds \forall B_1, B_2 \in \mathscr B:\)







\(\ds  x \in B_1 \setminus B_2 \implies \exists y \in B_2 \setminus B_1 : \paren {B_1 \setminus \set x} \cup \set y, \paren {B_2 \setminus \set y} \cup \set x \in \mathscr B \)   

  



Formulation 5
$\mathscr B$ is said to satisfy the base axiom if and only if:




\((\text B 5)\)  

$:$  





  \(\ds \forall B_1, B_2 \in \mathscr B:\)







\(\ds  x \in B_1 \setminus B_2 \implies \exists y \in B_2 \setminus B_1 : \paren {B_2 \setminus \set y}  \cup \set x \in \mathscr B \)   

  



Formulation 6
$\mathscr B$ is said to satisfy the base axiom if and only if:




\((\text B 6)\)  

$:$  





  \(\ds \forall B_1, B_2 \in \mathscr B:\)







\(\ds  x \in B_1 \setminus B_2 \implies \exists y \in B_2 \setminus B_1 : \paren {B_2 \cup \set x} \setminus \set y \in \mathscr B \)   

  



Formulation 7
$\mathscr B$ is said to satisfy the base axiom if and only if:




\((\text B 7)\)  

$:$  





  \(\ds \forall B_1, B_2 \in \mathscr B:\)







\(\ds  \exists \text{ a bijection } \pi : B_1 \to B_2 : \forall x \in B_1 : \paren {B_2 \setminus \set {\map \pi x} } \cup \set x \in \mathscr B \)   

  



Proof
Formulation $1$ iff Formulation $2$
Formulation $1$ holds if and only if formulation $2$ holds follows immediately from the Corollary of Set Difference Then Union Equals Union Then Set Difference.
$\Box$

Formulation $1$ iff Formulation $4$
Necessary Condition
Follows immediately from:

Matroid Bases Iff Satisfies Formulation 1 of Matroid Base Axiom
Matroid Bases Satisfy Formulation 4 Base Axiom
$\Box$

Sufficient Condition
Follows immediately from formulation $4$ and formulation $1$.
$\Box$

Formulation $1$ iff Formulation $5$
Necessary Condition
From:

Matroid Bases Iff Satisfies Formulation 1 of Matroid Base Axiom
Matroid Bases Satisfy Formulation 4 Base Axiom
formulation $4$ follows from formulation $1$.

We have formulation $5$ follows from formulation $4$.
$\Box$


Sufficient Condition
Let $\mathscr B$ satisfy formulation $5$ base axiom.

Let $\mathscr B^* = \set{S \setminus B : B \in \mathscr B}$.
From Subsets Satisfy Formulation 5 Matroid Base Axiom Iff Complements Satisfy Formulation 1:

$\mathscr B^*$ satisfies formulation 1 base axiom.
From Matroid Bases Iff Satisfies Formulation 1 of Matroid Base Axiom:

there exists a matroid $M^* = \struct{S, \mathscr I^*}$ whose bases is the set:
$\mathscr B^* = \set{S \setminus B : B \in \mathscr B}$.

From Matroid Bases Satisfy Formulation 4 Base Axiom:

$\mathscr B^*$ satisfies formulation $4$ base axiom
By formulation $5$ base axiom:

$\mathscr B^*$ satisfies formulation $5$ base axiom

From Subsets Satisfy Formulation 1 Matroid Base Axiom Iff Complements Satisfy Formulation 5:

$\mathscr B$ satisfies formulation 1 base axiom.
$\Box$

Formulation $1$ iff Formulation $7$
Necessary Condition
Follows immediately from:

Matroid Bases Iff Satisfies Formulation 1 of Matroid Base Axiom
Matroid Bases Satisfy Formulation 7 of Matroid Base Axiom
$\Box$

Sufficient Condition
From Formulation 3 Iff Formulation 7:

$\mathscr B$ satisfies formulation $7$ of base axiom:



\((\text B 7)\)  

$:$  





  \(\ds \forall B_1, B_2 \in \mathscr B:\)







\(\ds  \exists \text{ a bijection } \pi : B_1 \to B_2 : \forall x \in B_1 : \paren {B_2 \setminus \set {\map \pi x} } \cup \set x \in \mathscr B \)   

  

if and only if

$\mathscr B$ satisfies formulation $3$ of base axiom:



\((\text B 3)\)  

$:$  





  \(\ds \forall B_1, B_2 \in \mathscr B:\)







\(\ds  \exists \text{ a bijection } \pi : B_1 \to B_2 : \forall x \in B_1 : \paren {B_1 \setminus \set x } \cup \set {\map \pi x} \in \mathscr B \)   

  


By choosing $y = \map \pi x$ in formulation $3$, formulation $1$ follows immediately. 
$\Box$

Formulation $3$ iff Formulation $7$
Necessary Condition
Let $\mathscr B$ satisfy formulation $3$ of base axiom:




\((\text B 3)\)  

$:$  





  \(\ds \forall B_1, B_2 \in \mathscr B:\)







\(\ds  \exists \text{ a bijection } \pi : B_1 \to B_2 : \forall x \in B_1 : \paren {B_1 \setminus \set x } \cup \set {\map \pi x} \in \mathscr B \)   

  


Let $B_1, B_2 \in \mathscr B$.
From $(\text B 3)$:

$\exists \text{ a bijection } \pi : B_2 \to B_1 : \forall y \in B_2: \paren {B_2 \setminus \set y } \cup \set {\map \pi y} \in \mathscr B$

Let $\pi^{-1} : B_1 \to B_2$ denote the inverse mapping of $\pi$.
From Inverse of Bijection is Bijection, $\pi^{-1}$ is a bijection.
From Inverse Element of Bijection:

$\forall x \in B_1: \map {\pi^{-1}} x = y \iff \map \pi y = x$
Hence:

$\forall x \in B_1: \paren {B_2 \setminus \set{\map {\pi^{-1}} x} } \cup \set x  = \paren {B_2 \setminus \set y} \cup \set {\map \pi y} \in \mathscr B$

It follows that $\mathscr B$ satisfies formulation $7$ of base axiom:




\((\text B 7)\)  

$:$  





  \(\ds \forall B_1, B_2 \in \mathscr B:\)







\(\ds  \exists \text{ a bijection } \pi : B_1 \to B_2 : \forall x \in B_1 : \paren {B_2 \setminus \set {\map \pi x} } \cup \set x \in \mathscr B \)   

  



Sufficient Condition
Let $\mathscr B$ satisfy formulation $7$ of base axiom:




\((\text B 7)\)  

$:$  





  \(\ds \forall B_1, B_2 \in \mathscr B:\)







\(\ds  \exists \text{ a bijection } \pi : B_1 \to B_2 : \forall x \in B_1 : \paren {B_2 \setminus \set {\map \pi x} } \cup \set x \in \mathscr B \)   

  


Let $B_1, B_2 \in \mathscr B$.
From $(\text B 7)$:

$\exists \text{ a bijection } \pi : B_2 \to B_1 : \forall y \in B_2 : \paren {B_1 \setminus \set {\map \pi y} } \cup \set y \in \mathscr B$

Let $\pi^{-1} : B_1 \to B_2$ denote the inyverse mapping of $\pi$.
From Inverse of Bijection is Bijection, $\pi^{-1}$ is a bijection.
From Inverse Element of Bijection:

$\forall x \in B_1 : \map {\pi^{-1}} x = y \iff \map \pi y = x$
Hence:

$\forall x \in B_1 : \paren {B_1 \setminus \set x } \cup \set{\map {\pi^{-1}} x} = \paren {B_1 \setminus \set {\map \pi y} } \cup \set y \in \mathscr B$

It follows that $\mathscr B$ satisfy formulation $3$ of base axiom:




\((\text B 3)\)  

$:$  





  \(\ds \forall B_1, B_2 \in \mathscr B:\)







\(\ds  \exists \text{ a bijection } \pi : B_1 \to B_2 : \forall x \in B_1 : \paren {B_1 \setminus \set x } \cup \set {\map \pi x} \in \mathscr B \)   

  


$\Box$

Formulation $5$ iff Formulation $6$
Formulation $5$ holds if and only if formulation $6$ holds follows immediately from the Corollary of Set Difference Then Union Equals Union Then Set Difference.
$\blacksquare$





