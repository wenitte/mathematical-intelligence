# 

Source: https://proofwiki.org/wiki/Kernel_of_Character_on_Unital_Commutative_Banach_Algebra_is_Maximal_Ideal/Proof_2

Theorem
Let $\struct {A, \norm {\, \cdot \,} }$ be a unital commutative Banach algebra over $\C$. 
Let $\phi : A \to \C$ be a character on $A$. 

Then $\ker \phi$ is a maximal ideal of $A$.


Proof
Let $I$ be an ideal of $A$ such that:

$\ker \phi \subsetneq I$
We need to show $I = A$.
That is, we need to show:

${\mathbf 1}_A \in I$

Let:

$x \in I \setminus \ker \phi$
Then:

$\map \phi x \ne 0$
Thus we can define:

$\ds \tilde x := {\map \phi x}^{-1} x$
Then:














\(\ds \map \phi { {\mathbf 1}_A - \tilde x}\)

\(=\)







\(\ds \map \phi { {\mathbf 1}_A } - \map \phi {\tilde x}\)




















\(\ds \)

\(=\)







\(\ds 1 - \map \phi {\tilde x}\)





Definition of Unital Algebra Homomorphism














\(\ds \)

\(=\)







\(\ds 1 - \map \phi { {\map \phi x}^{-1} x}\)




















\(\ds \)

\(=\)







\(\ds 1 - {\map \phi x}^{-1} \map \phi x\)




















\(\ds \)

\(=\)







\(\ds 0\)









Thus:

${\mathbf 1}_A = \underbrace{ {\mathbf 1}_A - \tilde x}_{\in \ker \phi} + \underbrace{\paren { {\map \phi x}^{-1} {\mathbf 1}_A} }_{\in A} \underbrace{x}_{\in I} \in I$
$\blacksquare$





