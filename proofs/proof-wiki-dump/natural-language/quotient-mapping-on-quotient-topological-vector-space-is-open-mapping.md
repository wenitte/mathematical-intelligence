# 

Source: https://proofwiki.org/wiki/Quotient_Mapping_on_Quotient_Topological_Vector_Space_is_Open_Mapping

Theorem
Let $K$ be a topological field.
Let $\struct {X, \tau}$ be a topological vector space over $K$.
Let $N$ be a closed linear subspace of $X$.
Let $\struct {X/N, \tau_N}$ be the quotient topological vector space of $X$ modulo $N$.
Let $\pi : \struct {X, \tau} \to \struct {X/N, \tau_N}$ be the quotient mapping.

Then $\pi$ is an open mapping.


Proof
Let $V \in \tau$.
From Quotient Mapping is Linear Transformation, $\pi$ is a linear transformation.
From Preimage of Image of Linear Transformation, we have:

$\pi^{-1} \sqbrk {\pi \sqbrk V} = \ker \pi + V$
From Kernel of Quotient Mapping, we have $\ker \pi = N$ and so:

$\pi^{-1} \sqbrk {\pi \sqbrk V} = N + V$
From Sum of Set and Open Set in Topological Vector Space is Open, $N + V \in \tau$.
So $\pi^{-1} \sqbrk {\pi \sqbrk V} = N + V$ is open in $\struct {X, \tau}$.
From the definition of the quotient topology, it follows that $\pi \sqbrk V$ is open in $\struct {X/N, \tau_N}$.
$\blacksquare$


Sources
1991: Walter Rudin: Functional Analysis (2nd ed.) ... (previous) ... (next): $1.41$: Theorem




