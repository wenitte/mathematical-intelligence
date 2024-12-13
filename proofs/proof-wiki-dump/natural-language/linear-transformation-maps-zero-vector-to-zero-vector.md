# 

Source: https://proofwiki.org/wiki/Linear_Transformation_Maps_Zero_Vector_to_Zero_Vector



Theorem
Let $\mathbf V$ be a vector space, with zero $\mathbf 0$.
Likewise let $\mathbf V\,'$ be another vector space, with zero $\mathbf 0'$.
Let $T: \mathbf V \to \mathbf V\,'$ be a linear transformation.

Then:

$T: \mathbf 0 \mapsto \mathbf 0'$


Corollary
$\mathbf 0 \in \map \ker T$
where $\map \ker T$ is the kernel of $T$.


Proof 1
From the vector space axioms we have that $\exists \mathbf 0 \in \mathbf V$.
It remains to be proved that $\map T {\mathbf 0} = \mathbf 0'$:














\(\ds \map T {\mathbf 0}\)

\(=\)







\(\ds \map T {\mathbf 0 + \mathbf 0}\)




















\(\ds \)

\(=\)







\(\ds \map T {\mathbf 0} + \map T {\mathbf 0}\)





Definition of Linear Transformation on Vector Space








\(\ds \leadsto \ \ \)





\(\ds \mathbf 0'\)

\(=\)







\(\ds \map T {\mathbf 0}\)





subtracting $\map T {\mathbf 0}$ from both sides



$\blacksquare$


Proof 2
From the vector space axioms we have that $\exists \mathbf 0 \in \mathbf V$.
What remains is to prove that $\map T {\mathbf 0} = \mathbf 0'$:














\(\ds \map T {\mathbf 0}\)

\(=\)







\(\ds \map T {0 \, \mathbf 0}\)





Zero Vector Scaled is Zero Vector














\(\ds \)

\(=\)







\(\ds 0 \, \map T {\mathbf 0}\)





Definition of Linear Transformation on Vector Space














\(\ds \)

\(=\)







\(\ds \mathbf 0'\)





Vector Scaled by Zero is Zero Vector



$\blacksquare$





