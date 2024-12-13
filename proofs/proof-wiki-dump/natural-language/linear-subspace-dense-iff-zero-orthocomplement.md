# 

Source: https://proofwiki.org/wiki/Linear_Subspace_Dense_iff_Zero_Orthocomplement



Theorem
Let $H$ be a Hilbert space.
Let $K$ be a linear subspace of $H$.

Then $K$ is everywhere dense if and only if $K^\perp = \paren 0$, where $K^\perp$ is the orthocomplement of $K$, and $\paren 0$ denotes the zero subspace.


Proof
Sufficient Condition
Assume that $K$ is everywhere dense.
Let $x \in K^\perp$.
Then:














\(\ds x\)

\(\in\)







\(\ds K^\perp\)














\(\ds \leadsto \ \ \)

\(\ds \forall y \in K: \, \)



\(\ds x\)

\(\perp\)







\(\ds y\)














\(\ds \leadsto \ \ \)

\(\ds \forall y \in H: \, \)



\(\ds x\)

\(\perp\)







\(\ds y\)





as $K$ is everywhere dense, and Inner Product is Continuous








\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds 0\)









$\Box$


Necessary Condition
Assume $K^\perp = 0$.
Then by Double Orthocomplement is Closed Linear Span:

$\vee K = \paren 0^\perp = H$
Hence $K$ is everywhere dense.
$\blacksquare$


Sources
1990: John B. Conway: A Course in Functional Analysis (2nd ed.) ... (previous) ... (next): $\text{I}$ Hilbert Spaces: $\S 2.$ Orthogonality: Corollary $2.11$




