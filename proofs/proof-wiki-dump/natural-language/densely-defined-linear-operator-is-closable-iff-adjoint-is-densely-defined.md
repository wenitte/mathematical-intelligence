# 

Source: https://proofwiki.org/wiki/Densely-Defined_Linear_Operator_is_Closable_iff_Adjoint_is_Densely-Defined



Theorem
Let $\struct {\HH, \innerprod \cdot \cdot}$ be a Hilbert space over $\C$.
Let $\tuple {\map D T, T}$ be a densely-defined linear operator.
Let $\tuple {\map D {T^\ast}, T^\ast}$ be the adjoint of $\tuple {\map D T, T}$.

Then $\tuple {\map D T, T}$ is closable if and only if $\tuple {\map D {T^\ast}, T^\ast}$ is densely-defined. 
If $T$ is closable then the closure $\overline T$ satisfies $\overline T = T^{\ast \ast} = \paren {T^\ast}^\ast$. 


Proof
Let $\struct {\HH \times \HH, \innerprod \cdot \cdot_{\HH \times \HH} }$ be the Hilbert space direct sum of $\HH$ with itself.
From Equivalent Norms on Direct Product of Normed Vector Spaces, the inner product norm on $\struct {\HH \times \HH, \innerprod \cdot \cdot_{\HH \times \HH} }$ is equivalent to the direct product norm on $\HH \times \HH$.
Hence from Open Sets in Vector Spaces with Equivalent Norms Coincide, we work in $\struct {\HH \times \HH, \innerprod \cdot \cdot_{\HH \times \HH} }$ without concern.
Define $V : \HH \times \HH \to \HH \times \HH$ by:

$\map V {x, y} = \tuple {-y, x}$
for each $\tuple {x, y} \in \HH \times \HH$.
From Square of V Operator on Hilbert Space, we have $V^2 = -I$.
Hence $V^2 M = -M = M$ for any vector subspace $M$ in $\HH$.


Sufficient Condition, in which case $\overline T = \paren {T^\ast}^\ast$
Suppose that $\tuple {\map D {T^\ast}, T^\ast}$ is densely-defined.
Then the adjoint $\tuple {\map D {T^{\ast \ast} }, T^{\ast \ast} } = \tuple {\map D {\paren {T^\ast}^\ast}, \paren {T^\ast}^\ast}$ is well-defined.
We have:














\(\ds \map \cl {\map \GG T}\)

\(=\)







\(\ds \map \GG T^{\bot \bot}\)





Double Orthocomplement is Closed Linear Span














\(\ds \)

\(=\)







\(\ds \paren {V V \sqbrk {\map \GG T^\bot} }^\bot\)




















\(\ds \)

\(=\)







\(\ds \paren {V \sqbrk {\paren {V \sqbrk {\map \GG T} }^\bot} }^\bot\)





Hilbert Space Isomorphism preserves Orthocomplements














\(\ds \)

\(=\)







\(\ds \paren {V \sqbrk {\map \GG {T^\ast} } }^\bot\)





Graph of Adjoint of Densely-Defined Linear Operator














\(\ds \)

\(=\)







\(\ds \map \GG {T^{\ast \ast} }\)





Graph of Adjoint of Densely-Defined Linear Operator



Hence $\map \GG {T^{\ast \ast} }$ is closed with $\map \GG T \subseteq \map \GG {T^{\ast \ast} }$. 
So $T^{\ast \ast}$ is a closed extension of $T$.
Hence $T$ is closable.
Hence the closure $\overline T$ is well-defined.
Further from Closable Densely-Defined Linear Operator has Smallest Closed Extension, we have:

$\map \GG {\overline T} = \map \cl {\map \GG T} = \map \GG {T^{\ast \ast} }$
Hence $\overline T = T^{\ast \ast}$ in this case. 
$\Box$


Necessary Condition
Suppose that $\tuple {\map D T, T}$ is closable.
From Linear Subspace Dense iff Zero Orthocomplement, it is enough to show that $\map D {T^\ast}^\bot = \set { {\mathbf 0}_\HH}$.
Let $\phi \in \map D {T^\ast}^\bot$. 
Then for each $\psi \in \map D {T^\ast}$ we have:

$\innerprod \phi \psi = 0$
Hence:

$\innerprod \phi \psi + \innerprod { {\mathbf 0}_\HH} {T^\ast \psi} = 0$
That is:

$\innerprod {\tuple {\phi, {\mathbf 0}_\HH} } {\tuple {\psi, T^\ast \psi} }_{\HH \times \HH} = 0$ for all $\psi \in \map D {T^\ast}$.
Hence:

$\tuple {\phi, {\mathbf 0}_\HH} \in \map \GG {T^\ast}^\bot$.
Hence:

$\tuple { {\mathbf 0}_\HH, \phi} \in V \sqbrk {\map \GG {T^\ast}^\bot}$
From Hilbert Space Isomorphism preserves Orthocomplements we have:

$\tuple { {\mathbf 0}_\HH, \phi} \in \paren {V \sqbrk {\map \GG {T^\ast} } }^\bot$
It was shown in the proof of the sufficient condition that:

$\map \cl {\map \GG T} = \paren {V \sqbrk {\map \GG {T^\ast} } }^\bot$
So $\tuple { {\mathbf 0}_\HH, \phi} \in \map \cl {\map \GG T}$.
From Characterization of Closable Densely-Defined Linear Operators in terms of Closure of Graph, we therefore have $\phi = {\mathbf 0}_\HH$.
Hence $\map D {T^\ast}^\bot = \set { {\mathbf 0}_\HH}$.
Hence $\map D {T^\ast}$ is everywhere dense in $\HH$.
$\blacksquare$


Sources
1981: Michael Reed and Barry Simon: Methods of Modern Mathematical Physics I: Functional Analysis (Revised ed.) ... (previous) ... (next): $\text {VIII}.1$: Domains, graphs, adjoints and spectrum




