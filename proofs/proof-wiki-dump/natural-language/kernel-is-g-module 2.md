# 

Source: https://proofwiki.org/wiki/Kernel_is_G-Module

Theorem
Let $\struct {G, \cdot}$ be a group.
Let $f: \struct {V, \phi} \to \struct {V', \mu}$ be a homomorphism of $G$-modules.

Then its kernel $\map \ker f$ is a $G$-submodule of $V$.


Proof
From G-Submodule Test it suffices to prove that $\phi \sqbrk {\struct {G, \map \ker f} } \subseteq \map \ker f$. 
That is, it is to be shown that, if $g \in G$ and $v \in \map \ker f$, then $\map \phi {g, v} \in \map \ker f$.

Assume that $g \in G$ and $v \in \map \ker f$.














\(\ds \map f {\map \phi {g, v} }\)

\(=\)







\(\ds \map \mu {g, \map f v}\)





$f$ is a $G$-module homomorphism














\(\ds \)

\(=\)







\(\ds \map \mu {g, 0}\)





$v \in \map \ker f$














\(\ds \)

\(=\)







\(\ds 0\)





$\mu$ is a linear action



Thus $\map \phi {g, v} \in \map \ker f$.
Hence $\map \ker f$ is a $G$-submodule of $V$.
$\blacksquare$





