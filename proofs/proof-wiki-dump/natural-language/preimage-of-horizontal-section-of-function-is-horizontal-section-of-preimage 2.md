# 

Source: https://proofwiki.org/wiki/Preimage_of_Horizontal_Section_of_Function_is_Horizontal_Section_of_Preimage

Definition
Let $X$ and $Y$ be sets.
Let $f : X \times Y \to \overline \R$ be an extended real-valued function. 
Let $y \in Y$.
Let $D \subseteq \R$. 

Then: 

$\paren {f^y}^{-1} \sqbrk D = \paren {f^{-1} \sqbrk D}^y$
where:

$f^y$ is the $y$-horizontal section of $f$
$\paren {f^{-1} \sqbrk D}^y$ is the $y$-horizontal section of $f^{-1} \sqbrk D$.


Proof
Note that:

$x \in \paren {f^y}^{-1} \sqbrk D$
if and only if: 

$\map {f^y} x \in D$
from the definition of preimage.
That is, by the definition of the $y$-horizontal section: 

$\map f {x, y} \in D$
From the definition of preimage, this is equivalent to: 

$\tuple {x, y} \in f^{-1} \sqbrk D$
Which in turn is equivalent to: 

$x \in \paren {f^{-1} \sqbrk D}^y$
from the definition of the $y$-horizontal section.
So:

$x \in \paren {f^y}^{-1} \sqbrk D$ if and only if $x \in \paren {f^{-1} \sqbrk D}^y$.
giving:

$\paren {f^y}^{-1} \sqbrk D = \paren {f^{-1} \sqbrk D}^y$
$\blacksquare$





