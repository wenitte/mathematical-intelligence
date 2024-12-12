# 

Source: https://proofwiki.org/wiki/Character_on_Unital_Banach_Algebra_is_Uniquely_Identified_by_Kernel

Theorem
Let $\struct {A, \norm {\, \cdot \,} }$ be a unital Banach algebra over $\C$. 
Let $\phi, \psi : A \to \C$ be characters on $A$ such that:

$\ker \phi = \ker \psi$

Then $\phi = \psi$.


Proof
From Character on Unital Banach Algebra is Unital Algebra Homomorphism, we have $\map \phi { {\mathbf 1}_A} = 1$ and $\map \psi { {\mathbf 1}_A} = 1$. 
Let $x \in A$.
We have:














\(\ds \map \phi {x - \map \phi x {\mathbf 1}_A}\)

\(=\)







\(\ds \map \phi x - \map \phi {\map \phi x {\mathbf 1}_A}\)




















\(\ds \)

\(=\)







\(\ds \map \phi x - \map \phi x \map \phi { {\mathbf 1}_A}\)




















\(\ds \)

\(=\)







\(\ds \map \phi x - \map \phi x\)




















\(\ds \)

\(=\)







\(\ds 0\)









So we have $x - \map \phi x {\mathbf 1}_A \in \ker \phi$.
Since $\ker \phi = \ker \psi$, we have $x - \map \phi x {\mathbf 1}_A \in \ker \psi$.
So, we have:

$\map \psi {x - \map \phi x {\mathbf 1}_A} = 0$
We therefore obtain that:














\(\ds 0\)

\(=\)







\(\ds \map \psi {x - \map \phi x {\mathbf 1}_A}\)




















\(\ds \)

\(=\)







\(\ds \map \psi x - \map \psi {\map \phi x {\mathbf 1}_A}\)




















\(\ds \)

\(=\)







\(\ds \map \psi x - \map \phi x \map \psi { {\mathbf 1}_A}\)




















\(\ds \)

\(=\)







\(\ds \map \psi x - \map \phi x\)









So we have $\map \phi x = \map \psi x$.
Since $x \in A$ was arbitrary, we obtain $\phi = \psi$.
$\blacksquare$





