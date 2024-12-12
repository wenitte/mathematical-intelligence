# 

Source: https://proofwiki.org/wiki/Chinese_Remainder_Theorem_(Commutative_Algebra)/Proof_2


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $A$ be a commutative and unitary ring.


This article, or a section of it, needs explaining.In particular: Can this condition be weakened?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Let $I_1, \ldots, I_n$ for some $n \ge 1$ be ideals of $A$.
Then the ring homomorphism $\phi: A \to A / I_1 \times \cdots \times A / I_n$ defined as:

$\map \phi x = \tuple {x + I_1, \ldots, x + I_n}$
has the kernel $\ds I := \bigcap_{i \mathop = 1}^n I_i$, and is surjective if and only if the ideals are pairwise coprime, that is:

$\forall i \ne j: I_i + I_j = A$
Hence in that case, it induces an ring isomorphism:

$A / I \to A / I_1 \times \cdots \times A / I_n$
through the First Isomorphism Theorem.


Proof
Consider $\pi$ only as a homomorphism of groups.
Then Chinese Remainder Theorem (Groups) is applicable as Subgroup of Abelian Group is Normal. 
It remains to demonstrate that the condition $I_i + I_j = R$ for all $i \ne j$ assumed here is equivalent to:

$\ds \forall k \le n - 1: I_{k + 1} + \bigcap_{i \mathop = 1}^k I_i = R$
The implication from the latter condition is immediate.
For the converse, let $i$ be arbitrary.
The result follows from:














\(\ds R\)

\(=\)







\(\ds \prod_{j \mathop \ne i} \paren {I_i + I_j}\)





$R$ has a unit and $I_i + I_j = R$ for $j \ne i$














\(\ds \)

\(\subseteq\)







\(\ds I_i + \prod_{j \mathop \ne i} I_j\)





Ring Axiom $\text D$: Distributivity of Product over Addition, Definition of Ideal of Ring














\(\ds \)

\(\subseteq\)







\(\ds I_i + \bigcap_{j \mathop \ne i}^n I_j\)





Intersection of Ideals of Ring contains Product



$\blacksquare$


Sources

This page may be the result of a refactoring operation.As such, the following source works, along with any process flow, will need to be reviewed.When this has been completed, the citation of that source work (if it is appropriate that it stay on this page) is to be placed above this message, into the usual chronological ordering.In particular: Establish exactly which, if either, proof is documented in these sourcesIf you have access to any of these works, then you are invited to review this list, and make any necessary corrections.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{SourceReview}} from the code.
1990: Kenneth Ireland and Michael Rosen: A Classical Introduction to Modern Number Theory (2nd ed.): Chapter $12$ Algebraic Number Theory: $\S 3$ Ramification and Degree: Proposition $12.3.1$
2005: Serge Lang: Undergraduate Algebra (3rd ed.): Chapter $\text {III}$, $\S 3$ Exercises: Problem $7$
2012: Ambar N. Sengupta: Representing Finite Groups: A Semisimple Introduction: Proposition $12.4.1$




