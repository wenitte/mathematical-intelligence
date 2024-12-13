# 

Source: https://proofwiki.org/wiki/Quotient_Topological_Vector_Space_is_Hausdorff_iff_Linear_Subspace_is_Closed/Proof_1



Theorem
Let $\GF \in \set {\R, \C}$.
Let $\struct {X, \tau}$ be a topological vector space over $\GF$.
Let $N$ be a linear subspace of $X$.
Let $X/N$ be the quotient vector space of $X$ modulo $N$.
Let $\tau_N$ be the quotient topology on $X/N$.

Then $\struct {X/N, \tau_N}$ is Hausdorff if and only if:

$N$ is a closed linear subspace.


Proof
Let $\pi : X \to X/N$ be the quotient mapping.

Necessary Condition
Suppose that $\struct {X/N, \tau_N}$ is Hausdorff.
From Characterization of Hausdorff Topological Vector Space, $\set { {\mathbf 0}_{X/N} }$ is closed in $\struct {X/N, \tau_N}$.
From the definition of the quotient topology, $\pi$ is continuous.
Hence $\pi^{-1} \sqbrk {\set { {\mathbf 0}_{X/N} } }$ is closed in $\struct {X, \tau}$.
From Kernel of Quotient Mapping, we have $\pi^{-1} \sqbrk {\set { {\mathbf 0}_{X/N} } } = N$.
Hence $N$ is closed in $\struct {X, \tau}$.
$\Box$

Sufficient Condition
Suppose that $N$ is closed in $\struct {X, \tau}$.
Then $X \setminus N$ is open in $\struct {X, \tau}$.
From Quotient Mapping on Quotient Topological Vector Space is Open Mapping, $\pi$ is an open mapping.
Hence $\pi \sqbrk {X \setminus N}$ is open in $\struct {X/N, \tau_N}$.
Since $\pi$ is surjective by construction and $\pi^{-1} \sqbrk {\set { {\mathbf 0}_{X/N} } } = N$, we have:

$\pi \sqbrk {X \setminus N} = \paren {X/N} \setminus \set { {\mathbf 0}_{X/N} }$
So $\paren {X/N} \setminus \set { {\mathbf 0}_{X/N} }$ is open in $\struct {X/N, \tau_N}$.
So $\set { {\mathbf 0}_{X/N} }$ is closed in $\struct {X/N, \tau_N}$.
From Characterization of Hausdorff Topological Vector Space, we have that $\struct {X/N, \tau_N}$ is Hausdorff.
$\blacksquare$





