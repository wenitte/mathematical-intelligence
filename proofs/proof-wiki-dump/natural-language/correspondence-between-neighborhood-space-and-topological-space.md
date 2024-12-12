# 

Source: https://proofwiki.org/wiki/Correspondence_between_Neighborhood_Space_and_Topological_Space

Theorem
Let $S$ be a set.
Let $\struct {S, \tau}$ be a topological space.
Let $\struct {S, \NN}$ be the neighborhood space induced by $\tau$ on $S$.
Let $\phi: \struct {S, \tau} \to \struct {S, \NN}$ be the mapping defined as:

$\forall x \in S: \map \phi x = x$
$\forall U \in \tau: \phi \sqbrk U = U \in \NN$

Let $\struct {T, \NN'}$ be a neighborhood space.
Let $\struct {T, \tau'}$ be the topological space induced by $\NN$ on $S$.
Let $\psi: \struct {T, \NN'} \to \struct {T, \tau'}$ be the mapping defined as:

$\forall y \in T: \map \psi y = y$
$\forall V \in \NN': \psi \sqbrk V = V \in \tau'$

Then:

$(1): \quad \phi^{-1} \sqbrk {\phi \sqbrk {\struct {S, \tau} } } = \struct {S, \tau}$
$(2): \quad \psi^{-1} \sqbrk {\psi \sqbrk {\struct {T, \NN'} } } = \struct {T, \NN'}$


Proof
From the construction of:

the neighborhood space induced by $\tau$ on $S$
the topological space induced by $\NN$ on $S$
the mappings $\phi$ and $\psi$ are well-defined mappings.

From Topological Space induced by Neighborhood Space induced by Topological Space, $\phi$ is a bijection.
From Neighborhood Space induced by Topological Space induced by Neighborhood Space, $\psi$ is a bijection.
Hence the result.
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $3$: Topological Spaces: $\S 3$: Neighborhoods and Neighborhood Spaces: Theorem $3.8$




