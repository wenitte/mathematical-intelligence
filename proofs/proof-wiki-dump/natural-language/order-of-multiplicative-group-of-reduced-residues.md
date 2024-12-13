# 

Source: https://proofwiki.org/wiki/Order_of_Multiplicative_Group_of_Reduced_Residues

Theorem
Let $\struct {\Z'_m, \times_m}$ denote the multiplicative group of reduced residues modulo $m$.
The order of $\struct {\Z'_m, \times_m}$ is $\map \phi m$, where $\phi$ denotes the Euler $\phi$ function.


Proof
By definition, the order of a group is the cardinality of its underlying set.
By definition, the underlying set of $\struct {\Z'_m, \times_m}$ is the reduced residue system  $\Z'_m$:

$\Z'_m = \set {\eqclass {a_1} m, \eqclass {a_2} m, \ldots, \eqclass {a_{\map \phi m} } m}$
where:

$\forall k: a_k \perp m$

From Cardinality of Reduced Residue System, $\Z'_m$ has $\map \phi m$ elements.
Hence the result.
$\blacksquare$


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Subgroups and Cosets: $\S 38$




