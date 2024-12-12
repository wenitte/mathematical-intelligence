# 

Source: https://proofwiki.org/wiki/G-Submodule_Test



Theorem
Let $\struct {V, \phi}$ be a $G$-module over a field $k$.
Let $W$ be a vector subspace of $V$.
Let $\phi_W: G \times W \to V$ denote the restriction of $\phi$ to $G \times W$.

Then:

$\struct {W, \phi_W}$ is a $G$-submodule of $V$
if and only if:

$\map \phi {G, W} \subseteq W$


Proof
Necessary Condition
Let $W$ be a $G$-submodule of $V$.
Hence by definition $\phi_W: G \times W \to W$ is a linear action on $W$.
Also by definition:

$\map {\phi_W} {G, W} = \map \phi {G, W} \subseteq W$
$\Box$


Sufficient Condition
Let:

$\map \phi {G, W} = \map {\phi_W} {G, W} \subseteq W$
We have that $\phi_W: G \times W \to W$ is a well-defined mapping.
We need to check if $\phi_W$ is a linear action on $W$:
Assume $a, b \in W$ and $g \in G$.
In particular:

$a, b \in V$
and so:














\(\ds \map {\phi_W} {g, a + b}\)

\(=\)







\(\ds \map \phi {g, a + b}\)





Definition of $\phi_W$














\(\ds \)

\(=\)







\(\ds \map \phi {g, a} + \map \phi {g, b}\)





$\phi$ is a linear action on $V$














\(\ds \)

\(=\)







\(\ds \map {\phi_W} {g, a} + \map {\phi_W} {g, b}\)





Definition of $\phi_W$



Further, let $\lambda \in k$ and $g \in G$.
Then:














\(\ds \map {\phi_W} {g, \lambda b}\)

\(=\)







\(\ds \map \phi {g, \lambda b}\)





Definition of $\phi_W$














\(\ds \)

\(=\)







\(\ds \lambda \map \phi {g, b}\)





$\phi$ is a linear action on $V$














\(\ds \)

\(=\)







\(\ds \lambda \map {\phi_W} {g, b}\)





Definition of $\phi_W$



Thus $W$ is a $G$-submodule of $V$.
$\blacksquare$





