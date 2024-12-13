# 

Source: https://proofwiki.org/wiki/Image_is_G-Module

Theorem
Let $\struct {G, \cdot}$ be a group.
Let $f: \struct {V, \phi} \to \struct {V', \mu}$ be a $G$-Module Homomorphism.

Then $\Img f$ is a $G$-Submodule of $V'$.


Proof
From $G$-Submodule Test it suffices to prove that $\map \mu {G, \Img f} \subseteq \Img f$.
In other words: for any $g \in G$ and $w \in \Img f$, it is to be shown that $\map \mu {g, w} \in \Img f$.

Assume that $g \in G$ and $w \in \Img f$.
Then:

$\exists v \in V: \map f v = w$
By definition of homomorphism:

$\map \mu {g, w} = \map \mu {g, \map f v} = \map f {\map \phi {g, v} }$

Hence:

$\forall g \in G: \forall w \in \Img f: \map \mu {g, w} \in \Img f$
By $G$-Submodule Test, it follows that $\Img f$ is a $G$-Submodule of $V'$.
$\blacksquare$





