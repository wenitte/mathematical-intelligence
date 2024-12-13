# 

Source: https://proofwiki.org/wiki/Preimage_of_Vertical_Section_of_Function_is_Vertical_Section_of_Preimage

Theorem
Let $X$ and $Y$ be sets.
Let $f : X \times Y \to \overline \R$ be an extended real-valued function. 
Let $x \in X$.
Let $D \subseteq \R$. 

Then: 

$\paren {f_x}^{-1} \sqbrk D = \paren {f^{-1} \sqbrk D}_x$
where:

$f_x$ is the $x$-vertical section of $f$
$\paren {f^{-1} \sqbrk D}_x$ is the $x$-vertical section of $f^{-1} \sqbrk D$.


Proof
Note that:

$y \in \paren {f_x}^{-1} \sqbrk D$
if and only if: 

$\map {f_x} y \in D$
from the definition of preimage.
That is, by the definition of the $x$-vertical section: 

$\map f {x, y} \in D$
From the definition of preimage, this is equivalent to: 

$\paren {x, y} \in f^{-1} \sqbrk D$
Which in turn is equivalent to: 

$y \in \paren {f^{-1} \sqbrk D}_x$
from the definition of the $x$-vertical section.
So:

$y \in \paren {f_x}^{-1} \sqbrk D$ if and only if $y \in \paren {f^{-1} \sqbrk D}_x$.
giving:

$\paren {f_x}^{-1} \sqbrk D = \paren {f^{-1} \sqbrk D}_x$
$\blacksquare$





