# 

Source: https://proofwiki.org/wiki/Quotient_Topological_Vector_Space_is_Hausdorff_iff_Linear_Subspace_is_Closed



Theorem
Let $\GF \in \set {\R, \C}$.
Let $\struct {X, \tau}$ be a topological vector space over $\GF$.
Let $N$ be a linear subspace of $X$.
Let $X/N$ be the quotient vector space of $X$ modulo $N$.
Let $\tau_N$ be the quotient topology on $X/N$.

Then $\struct {X/N, \tau_N}$ is Hausdorff if and only if:

$N$ is a closed linear subspace.


Proof 1
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


Proof 2
Let $\pi : X \to X/N$ be the quotient mapping.
Let $\VV$ be the set of open neighborhoods of ${\mathbf 0}_X$.
Let $\VV_N$ be the set of open neighborhoods of ${\mathbf 0}_{X/N}$.
Then, we have, from Expression for Closure of Set in Topological Vector Space: 

$\ds N = \bigcap_{V \mathop \in \VV} \paren {N + V}$
From Preimage of Image of Linear Transformation, we have $\pi^{-1} \sqbrk {\pi \sqbrk V} = \ker \pi + V$. 
From Kernel of Quotient Mapping, we then obtain $\pi^{-1} \sqbrk {\pi \sqbrk V} = N + V$.
Hence, we have:

$\ds N^- = \bigcap_{V \mathop \in \VV} \pi^{-1} \sqbrk {\pi \sqbrk V}$
From Preimage of Intersection under Mapping: Family of Sets, we obtain:

$\ds N^- = \pi^{-1} \sqbrk {\bigcap_{V \mathop \in \VV} \pi \sqbrk V}$
Since $\pi$ is surjective, we obtain:

$\ds \pi \sqbrk {N^-} = \pi \sqbrk {\pi^{-1} \sqbrk {\bigcap_{V \mathop \in \VV} \pi \sqbrk V} } = \bigcap_{V \mathop \in \VV} \pi \sqbrk V$
From Open Set in Quotient Topological Vector Space, we have:

$\VV_N = \set {\pi \sqbrk U : U \in \VV}$
Hence, we have:

$\ds \pi \sqbrk {N^-} = \bigcap_{U \in \VV_N} U$
We argue that $\pi \sqbrk {N^-} = \set { {\mathbf 0}_{X/N} }$ if and only if $N^- = N$.
If $N^- = N$, then we immediately have $\pi \sqbrk {N^-} = \pi \sqbrk N = \set { {\mathbf 0}_{X/N} }$. 
If $N^- \ne N$, then there exists $x_0 \in N^- \setminus N$.
From Kernel of Quotient Mapping, we then have $\map \pi {x_0} \ne {\mathbf 0}_{X/N}$ and hence $\pi \sqbrk {N^-} \ne \set { {\mathbf 0}_{X/N} }$. 
Hence we have $\pi \sqbrk {N^-} = \set { {\mathbf 0}_{X/N} }$ if and only if $N^- = N$.
From Set is Closed iff Equals Topological Closure, we therefore have that $\pi \sqbrk {N^-} = \set { {\mathbf 0}_{X/N} }$ if and only if $N$ is closed.
That is, $N$ is closed if and only if:

$\ds \bigcap_{U \in \VV_N} U = \set { {\mathbf 0}_{X/N} }$
From Characterization of Hausdorff Topological Vector Space, we conclude that $N$ is closed if and only if $X/N$ is Hausdorff.
$\blacksquare$





