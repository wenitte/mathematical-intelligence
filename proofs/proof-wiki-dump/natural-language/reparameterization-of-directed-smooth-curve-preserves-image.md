# 

Source: https://proofwiki.org/wiki/Reparameterization_of_Directed_Smooth_Curve_Preserves_Image

Theorem
Let $\closedint a b$ and $\closedint c d$ be closed real intervals.
Let $\gamma : \closedint a b \to \C$ be a smooth path.
Let $C$ be a directed smooth curve with parameterization $\gamma$.

Suppose that $\sigma : \closedint c d \to \C$ is a reparameterization of $C$.

Then $\Img \gamma = \Img \sigma$, where $\Img \gamma$ denotes the image of $\gamma$.


Proof
By definition of directed smooth curve, there exists a bijective differentiable strictly increasing function $\phi: \closedint c d \to \closedint a b$ such that $\sigma = \gamma \circ \phi$.
From Surjection by Restriction of Codomain, it follows that there exists a function $\tilde \gamma: \closedint a b \to \Img \gamma$ that is the surjective restriction of $\gamma$ to $\Img \gamma$.
Put $\tilde \sigma := \tilde \gamma \circ \phi : \closedint c d \to \Img \gamma$.
From Composite of Surjections is Surjection, it follows that $\tilde \sigma$ is surjective.
Then:

$\Img {\tilde \sigma} = \Img \gamma$
Now:

$\map \sigma t = \map {\tilde \sigma} t$ for all $t \in \closedint c d = \Dom \sigma = \Dom {\tilde \sigma}$
where $\Dom \sigma$ denotes the domain of $\sigma$.
It follows that:

$\Img \sigma = \Img {\tilde \sigma}$
Hence:

$\Img {\tilde \gamma} = \Img \sigma$
$\blacksquare$


Sources
2001: Christian Berg: Kompleks funktionsteori $\S 2.2$




