# 

Source: https://proofwiki.org/wiki/Graph_of_Adjoint_of_Densely-Defined_Linear_Operator

Theorem
Let $\struct {\HH, \innerprod \cdot \cdot}$ be a Hilbert space over $\C$.
Let $\tuple {\map D T, T}$ be a densely-defined linear operator.
Let $\tuple {\map D {T^\ast}, T^\ast}$ be the adjoint of $\tuple {\map D T, T}$.
Let $\struct {\HH \times \HH, \innerprod \cdot \cdot_{\HH \times \HH} }$ be the Hilbert space direct sum of $\HH$ with itself.
Define $V : \HH \times \HH \to \HH \times \HH$ by:

$\map V {x, y} = \tuple {-y, x}$
for each $\tuple {x, y} \in \HH \times \HH$.

Then:

$\map G {T^\ast} = \paren {V \sqbrk {\map \GG T} }^\bot$
where $\bot$ denotes orthocomplementation in $\struct {\HH \times \HH, \innerprod \cdot \cdot_{\HH \times \HH} }$.


Proof
Let $y, z \in \HH$. 
By the definition of the adjoint, we have $\tuple {y, z} \in \map \GG {T^\ast}$ if and only if:

$\innerprod {T x} y = \innerprod x z$ for each $x \in \map D T$.
This is equivalent to:

$\innerprod {-T x} y + \innerprod x z = 0$
That is:

$\innerprod {\tuple {-T x, x} } {\tuple {y, z} }_{\HH \times \HH} = 0$ for each $x \in \map D T$.
Note that $\tuple {-T x, x} = \map V {x, T x} \in V \sqbrk {\map \GG T}$ and conversely any element of $V \sqbrk {\map \GG T}$ has this form.
So we have $\tuple {y, z} \in \map \GG {T^\ast}$ if and only if $\tuple {y, z} \in \paren {V \sqbrk {\map \GG T} }^\bot$. 
Hence we obtain:

$\map G {T^\ast} = \paren {V \sqbrk {\map \GG T} }^\bot$
$\blacksquare$


Sources
1991: Walter Rudin: Functional Analysis (2nd ed.) ... (previous) ... (next): $13.7$: Graphs




