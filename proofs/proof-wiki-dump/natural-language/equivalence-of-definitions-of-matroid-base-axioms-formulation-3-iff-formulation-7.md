# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Matroid_Base_Axioms/Formulation_3_Iff_Formulation_7


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $S$ be a finite set.
Let $\mathscr B$ be a non-empty set of subsets of $S$.

Then:

$\mathscr B$ satisfies formulation $3$ of base axiom:



\((\text B 3)\)  

$:$  





  \(\ds \forall B_1, B_2 \in \mathscr B:\)







\(\ds  \exists \text{ a bijection } \pi : B_1 \to B_2 : \forall x \in B_1 : \paren {B_1 \setminus \set x } \cup \set {\map \pi x} \in \mathscr B \)   

  


if and only if

$\mathscr B$ satisfies formulation $7$ of base axiom:



\((\text B 7)\)  

$:$  





  \(\ds \forall B_1, B_2 \in \mathscr B:\)







\(\ds  \exists \text{ a bijection } \pi : B_1 \to B_2 : \forall x \in B_1 : \paren {B_2 \setminus \set {\map \pi x} } \cup \set x \in \mathscr B \)   

  



Proof
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

  


$\blacksquare$





