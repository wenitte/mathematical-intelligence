# 

Source: https://proofwiki.org/wiki/Quotient_Theorem_for_Group_Homomorphisms/Corollary_1



Theorem
Let $\struct {G, \odot}$ and $\struct {H, *}$ be groups whose identities are $e_G$ and $e_H$ respectively.
Let $\phi: G \to H$ be a group homomorphism.
Let $K$ be the kernel of $\phi$.
Let $N$ be a normal subgroup of $G$.
Let $q_N: G \to \dfrac G N$ denote the quotient epimorphism from $G$ to the quotient group $\dfrac G N$.

Then:

$N \subseteq K$
if and only if:

there exists a group homomorphism $\psi: \dfrac G N \to H$ such that $\phi = \psi \circ q_N$

This can be illustrated by means of the following commutative diagram:


$\begin{xy}\xymatrix@L+2mu@+1em{
 G \ar[dr]^*{\phi}
     \ar[d]_*{q}
&
\\ 
 G / N \ar@{-->}[r]_*{\psi}
&
 H 
}\end{xy}$


Proof
Necessary Condition
Suppose $\psi$ exists as defined.
Then:

$K = \phi^{-1} \sqbrk {\set {e_H} } = q^{-1} \sqbrk {\psi^{-1} \sqbrk {\set {e_H} } }$
That is: $\psi^{-1} \sqbrk {\set {e_H} }$ is the kernel of $\psi$.
So by Kernel is Normal Subgroup of Domain, $\psi^{-1} \sqbrk {\set {e_H} }$ is a normal subgroup of $G / N$.
This corresponds via $q^{-1}$ to $K$, which must then be a normal subgroup of $G$ which contains $N$.
$\Box$


Sufficient Condition
Suppose $N \subseteq K$.
Let $\psi: G / N \to H$ be defined as:

$\forall g \odot N \in G / N: \map \psi {g \odot N} = \map \phi g \in H$
We have that:

$n \in g \odot N \implies n^{-1} \odot g \in N \subseteq K$
So:

$\map \phi {n^{-1} \odot g} = \map \phi n^{-1} * \map \phi g = e_H$
and so $\map \phi n = \map \phi g$.
Thus $\psi$ is well-defined.
Hence $\psi$ is the required group homomorphism.
$\blacksquare$


Sources
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{II}$: Groups: Factoring Morphisms: Corollary




