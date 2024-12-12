# 

Source: https://proofwiki.org/wiki/Adjoint_of_Densely-Defined_Linear_Operator_is_Closed

Theorem
Let $\struct {\HH, \innerprod \cdot \cdot}$ be a Hilbert space over $\C$.
Let $\tuple {\map D T, T}$ be a densely-defined linear operator.
Let $\tuple {\map D {T^\ast}, T^\ast}$ be the adjoint of $\tuple {\map D T, T}$.

Then $\tuple {\map D {T^\ast}, T^\ast}$ is closed.


Proof
Let $\struct {\HH \times \HH, \innerprod \cdot \cdot_{\HH \times \HH} }$ be the Hilbert space direct sum of $\HH$ with itself.
From Equivalent Norms on Direct Product of Normed Vector Spaces, the inner product norm on $\struct {\HH \times \HH, \innerprod \cdot \cdot_{\HH \times \HH} }$ is equivalent to the direct product norm on $\HH \times \HH$.
Hence from Open Sets in Vector Spaces with Equivalent Norms Coincide it is enough to show that $\map \GG {T^\ast}$ is closed in $\struct {\HH \times \HH, \innerprod \cdot \cdot_{\HH \times \HH} }$.
Define $V : \HH \times \HH \to \HH \times \HH$ by:

$\map V {x, y} = \tuple {-y, x}$
for each $\tuple {x, y} \in \HH \times \HH$.
From Graph of Adjoint of Densely-Defined Linear Operator, we have:

$\map \GG {T^\ast} = \paren {V \sqbrk {\map \GG T} }^\bot$
where orthocomplementation is considered in the Hilbert space direct sum $\struct {\HH \times \HH, \innerprod \cdot \cdot_{\HH \times \HH} }$.
From Orthocomplement is Closed Linear Subspace, $\paren {V \sqbrk {\map \GG T} }^\bot$ is closed in $\struct {\HH \times \HH, \innerprod \cdot \cdot_{\HH \times \HH} }$.
Hence $\map \GG {T^\ast}$ is closed in $\struct {\HH \times \HH, \innerprod \cdot \cdot_{\HH \times \HH} }$.
So $\tuple {\map D {T^\ast}, T^\ast}$ is closed.
$\blacksquare$


Sources
1991: Walter Rudin: Functional Analysis (2nd ed.) ... (previous) ... (next): $13.7$: Graphs




