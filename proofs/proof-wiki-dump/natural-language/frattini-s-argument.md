# 

Source: https://proofwiki.org/wiki/Frattini%27s_Argument



Theorem
Let $\struct {G, \circ}$ be a group.
Let $K$ be a finite normal subgroup of $G$, and $p$ a prime which divides the order of $K$.
Let $P$ be a Sylow $p$-subgroup of $K$, and $\map {N_G} P$ the normalizer of $P$ in $G$.

Then:

$G = \map {N_G} P \circ K = K \circ \map {N_G} P$


Proof
Let $g \in G$.
Since $K$ is normal in $G$, and $P \subset K$, the conjugate $g \circ P \circ g^{-1}$ of $P$ is also a subset of $K$.
From Inner Automorphism is Automorphism, $g \circ P \circ g^{-1}$ is a subgroup of $K$ of the same order as $P$.
Thus $g \circ P \circ g^{-1}$ is also a Sylow $p$-subgroup of $K$.
By Second Sylow Theorem:

$\exists k \in K: g \circ P \circ g^{-1} = k \circ P \circ k^{-1}$
Then:

$g^{-1} \circ k \circ P \circ k^{-1} \circ g = P$
and so by definition of normalizer:

$k^{-1} \circ g \in \map {N_G} P$
We can then write $g$ as

$g = k \circ \paren {k^{-1} \circ g} \in K \circ \map {N_G} P$
Since $K$ is normal:

$\map {N_G} P \circ K = K \circ \map {N_G} P$
by Subset Product with Normal Subgroup as Generator.
$\blacksquare$


Source of Name
This entry was named for Giovanni Frattini.


Sources
1996: Derek J.S. Robinson: A Course in the Theory of Groups (2nd ed.): Chapter $5.2$ Theorem $5.2.14$




