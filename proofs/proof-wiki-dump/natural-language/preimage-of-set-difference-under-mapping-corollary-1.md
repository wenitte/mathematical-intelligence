# 

Source: https://proofwiki.org/wiki/Preimage_of_Set_Difference_under_Mapping/Corollary_1

Theorem
Let $f: S \to T$ be a mapping.
Let $T_1 \subseteq T_2 \subseteq T$.

Then:

$\relcomp {f^{-1} \sqbrk {T_2} } {f^{-1} \sqbrk {T_1} } = f^{-1} \sqbrk {\relcomp {T_2} {T_1} }$
where:

$\complement$ (in this context) denotes relative complement
$f^{-1} \sqbrk {T_1}$ denotes preimage.


Proof
From One-to-Many Image of Set Difference: Corollary 1 we have:

$\relcomp {\RR \sqbrk {T_2} } {\RR \sqbrk {T_1} } = \RR \sqbrk {\relcomp {T_2} {T_1} }$
where $\RR \subseteq T \times S$ is a one-to-many relation on $T \times S$.

Hence as $f^{-1}: T \to S$ is a one-to-many relation:

$\relcomp {f^{-1} \sqbrk {T_2} } {f^{-1} \sqbrk {T_1} } = f^{-1} \sqbrk {\relcomp {T_2} {T_1} }$
$\blacksquare$





