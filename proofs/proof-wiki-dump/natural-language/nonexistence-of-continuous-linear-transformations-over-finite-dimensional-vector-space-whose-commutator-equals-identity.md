# 

Source: https://proofwiki.org/wiki/Nonexistence_of_Continuous_Linear_Transformations_over_Finite_Dimensional_Vector_Space_whose_Commutator_equals_Identity



Theorem
Let $\struct {X, \norm {\, \cdot \,}}$ be a normed vector space.
Let $\map {CL} X := \map {CL} {X, X}$ be the space of continuous linear transformations.
Let $A, B \in \map {CL} {X, X}$ be continuous linear transformations.
Let $I$ be the identity operator.

Then there is no $A, B$ such that $A \circ B - B \circ A = I$

Proof
Aiming for a contradiction, suppose there is $A, B$ such that $A \circ B - B \circ A = I$.

Lemma
$\forall n \in \N_{> 0} : A \circ B^n - B^n \circ A = n B^{n - 1}$
where

$B^n = \underbrace{B \circ B \circ \ldots \circ B}_{n \text{ times} }$
and $B^0 = I$.

Proof
This will be a proof by mathematical induction.


Basis for the Induction
Let $n = 1$
Then:














\(\ds A \circ B^1 - B^1 \circ A\)

\(=\)







\(\ds 1 \cdot B^{1 - 1}\)














\(\ds \leadsto \ \ \)





\(\ds A \circ B - B \circ A\)

\(=\)







\(\ds I\)











Induction Hypothesis
This is the induction hypothesis:

$A \circ B^n - B^n \circ A = n B^{n - 1}$
It is to be demonstrated that it follows that:

$A \circ B^{n + 1} - B^{n + 1} \circ A = \paren {n + 1} B^n$


Induction Step













\(\ds A \circ B^{n + 1} - B^{n + 1} \circ A\)

\(=\)







\(\ds A \circ B^n \circ B - B^n \circ B \circ A\)




















\(\ds \)

\(=\)







\(\ds \paren {n B^{n - 1} + B^n \circ A} \circ B - B^n \circ B \circ A\)




















\(\ds \)

\(=\)







\(\ds n B^n + B^n \circ A \circ B - B^n \circ B \circ A\)




















\(\ds \)

\(=\)







\(\ds n B^n + B^n \circ \paren {A \circ B - B \circ A}\)




















\(\ds \)

\(=\)







\(\ds n B^n + B^n \circ I\)




















\(\ds \)

\(=\)







\(\ds n B^n + B^n\)




















\(\ds \)

\(=\)







\(\ds \paren {n + 1} B^{\paren {n + 1} - 1}\)









$\Box$

Take the supremum operator norm of $A \circ B^n - B^n \circ A = n B^{n - 1}$:














\(\ds \norm {n \paren {B^{n - 1} } }\)

\(=\)







\(\ds n \norm {B^{n - 1} }\)





Norm Axiom $\text N 2$: Positive Homogeneity














\(\ds \)

\(=\)







\(\ds \norm {A \circ B^{n - 1} \circ B - B \circ B^{n - 1} \circ A}\)




















\(\ds \)

\(\le\)







\(\ds \norm {A \circ B^{n - 1} \circ B} + \norm {B \circ B^{n - 1} \circ A}\)





Norm Axiom $\text N 3$: Triangle Inequality














\(\ds \)

\(\le\)







\(\ds 2 \norm A \norm B \norm {B^{n - 1} }\)









Lemma
$\forall n \in \N_{> 0} : B^{n - 1} \ne \mathbf 0$
Proof
Aiming for a contradiction, suppose $\exists n \in \N_{> 0} : B^{n - 1} = \mathbf 0$
For $n = 1$ we have $B^0 = I \ne \mathbf 0$.
Hence, $n \ne 1$.
Suppose:

$\exists n \in \N_{> 0} : B^{n - 1} \ne \mathbf 0$
If $B^n = \mathbf 0$ then:














\(\ds \mathbf 0\)

\(=\)







\(\ds A \circ \mathbf 0 - \mathbf 0 \circ A\)




















\(\ds \)

\(=\)







\(\ds A \circ B^n - B^n \circ A\)




















\(\ds \)

\(=\)







\(\ds n B^{n - 1}\)




















\(\ds \)

\(\ne\)







\(\ds \mathbf 0\)









Altogether:

$\forall n \in \N_{> 0} : \paren {B^{n - 1} \ne \mathbf 0} \implies \paren {B^n \ne \mathbf 0}$
This is a contradiction.

$\Box$
Hence: 

$\forall n \in \N_{> 0} : \norm {B^{n - 1} } > 0$.
Thus: 

$\forall n \in \N_{> 0} : n \le 2 \norm A \norm B$
This holds only if $\norm A \norm B = \infty$.


This page needs the help of a knowledgeable authority.In particular: "Finite Dimensional Vector Space" in the title added to dodge questions about derivatives as continuous linear transformations. In this proof finiteness is not used explicitely, but is probably hidden behind the finite operator norm. The connection between finite/infinite and bounded/unbounded aspects needs clarification to give a proper name for this entire theoremIf you are knowledgeable in this area, then you can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by resolving the issues.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Help}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
However, the image of $\norm {\, \cdot \,}$ is a subset of $\R$:

$\Img {\norm {\, \cdot \,}} \subseteq \R$
and does not contain the infinity.
This is a contradiction.
$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 2.4$: Composition of continuous linear transformations




