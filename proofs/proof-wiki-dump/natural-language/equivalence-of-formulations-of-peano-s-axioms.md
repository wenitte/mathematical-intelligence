# 

Source: https://proofwiki.org/wiki/Equivalence_of_Formulations_of_Peano%27s_Axioms



Theorem
Let $P$ be a set.
Let $s: P \to P$ be a mapping.
Let $0 \in P$ be a distinguished element.
The following definitions of the concept of Peano's Axioms are equivalent:

Formulation 1



\((\text P 3)\)  

$:$  





  \(\ds \forall m, n \in P:\)

\(\ds \map s m = \map s n \implies m = n \)   





$s$ is injective   

  


\((\text P 4)\)  

$:$  





  \(\ds \forall n \in P:\)

\(\ds \map s n \ne 0 \)   





$0$ is not in the image of $s$   

  


\((\text P 5)\)  

$:$  





  \(\ds \forall A \subseteq P:\)

\(\ds \paren {0 \in A \land \paren {\forall z \in A: \map s z \in A} } \implies A = P \)   





Principle of Mathematical Induction:   

  


















Any subset $A$ of $P$, containing $0$ and   

  


















closed under $s$, is equal to $P$   

  

Formulation 2



\((\text P 3)\)  

$:$  





  \(\ds \forall m, n \in P:\)

\(\ds \map s m = \map s n \implies m = n \)   





$s$ is injective   

  


\((\text P 4)\)  

$:$  







\(\ds \Img s \ne P \)   





$s$ is not surjective   

  


\((\text P 5)\)  

$:$  





  \(\ds \forall A \subseteq P:\)

\(\ds \paren {\paren {\exists x \in A: \neg \exists y \in P: x = \map s y} \land \paren {\forall z \in A: \map s z \in A} } \)   





Principle of Mathematical Induction:   

  












\(\ds \implies A = P \)   





Any subset $A$ of $P$, containing an element not   

  


















in the image of $s$ and closed under $s$,   

  


















is equal to $P$   

  



Proof
Formulation 1 implies Formulation 2
For $(\text P 3)$, there is nothing to prove.

Next, axiom $(\text P 4)$ of Formulation 2.
Recall the definition of the image of a mapping as applicable to $s$:

$\Img s = \set {n \in P: \exists m \in P: \map s m = n}$
From this definition, it follows that $0 \notin \Img s$, and hence:

$\Img s \ne P$

Lastly, axiom $(\text P 5)$ of Formulation 2.
By Non-Successor Element of Peano Structure is Unique, we know that there is exactly one element of $P$ that is not in the image of $s$.
By axiom $(\text P 3)$ of Formulation 1, we know this element is $0$.
Therefore, the premises:

$0 \in A$
and:

$\exists x \in A: \neg \exists y \in P: x = \map s y$
are logically equivalent, and hence so are both forms of axiom $(\text P 5)$.
$\Box$


Formulation 2 implies Formulation 1
By Non-Successor Element of Peano Structure is Unique, we know that there is exactly one element of $P$ that is not in the image of $s$.
We will identify this element with the distinguished element $0$.
This implies that axioms $(\text P 3)$ and $(\text P 4)$ of Formulation 1 are satisfied.

Lastly, axiom $(\text P 5)$ of Formulation 1.
Since $0$ satisfies the premise:

$\neg \exists y \in P: 0 = \map s y$
we conclude that axiom $(\text P 5)$ of Formulation 1 follows a fortiori from axiom $(\text P 5)$ of Formulation 2.
$\blacksquare$


Sources

This page may be the result of a refactoring operation.As such, the following source works, along with any process flow, will need to be reviewed.When this has been completed, the citation of that source work (if it is appropriate that it stay on this page) is to be placed above this message, into the usual chronological ordering.In particular: Check where this result appears in the flowIf you have access to any of these works, then you are invited to review this list, and make any necessary corrections.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{SourceReview}} from the code.


1951: Nathan Jacobson: Lectures in Abstract Algebra: Volume $\text { I }$: Basic Concepts: Introduction $\S 4$ (implicit)




