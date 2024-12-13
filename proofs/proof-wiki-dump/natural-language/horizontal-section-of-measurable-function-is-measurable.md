# 

Source: https://proofwiki.org/wiki/Horizontal_Section_of_Measurable_Function_is_Measurable

Theorem
Let $\struct {X, \Sigma_X}$ and $\struct {Y, \Sigma_Y}$ be measurable spaces.
Let $f : X \times Y \to \overline \R$ be a $\Sigma_X \otimes \Sigma_Y$-measurable function where $\Sigma_X \otimes \Sigma_Y$ is the product $\sigma$-algebra of $\Sigma_X$ and $\Sigma_Y$. 
Let $y \in Y$.

Then: 

$f^y$ is $\Sigma_X$-measurable
where $f^y$ is the $y$-horizontal section of $f$.


Proof
By the definition of a $\Sigma_X$-measurable function, we have that: 

$f^{-1} \sqbrk D \in \Sigma_X \otimes \Sigma_Y$ for each Borel set $D \subseteq \R$.
We aim to show that: 

$\paren {f^y}^{-1} \sqbrk D \in \Sigma_X$ for each Borel set $D \subseteq \R$.
Let $D \subseteq \R$ be a Borel set. 
From Preimage of Horizontal Section of Function is Horizontal Section of Preimage, we have: 

$\paren {f^y}^{-1} \sqbrk D = \paren {f^{-1} \sqbrk D}^y$
From Horizontal Section of Measurable Set is Measurable, we have: 

$\paren {f^{-1} \sqbrk D}^y \in \Sigma_X$
so:

$\paren {f^y}^{-1} \sqbrk D \in \Sigma_X$
So:

$\paren {f^y}^{-1} \sqbrk D \in \Sigma_X$ for each Borel set $D \subseteq \R$.
so:

$f^y$ is $\Sigma_X$-measurable.
$\blacksquare$





