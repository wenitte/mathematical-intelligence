# 

Source: https://proofwiki.org/wiki/Image_of_Interior_of_Set_under_Homeomorphism_is_Interior_of_Image

Theorem
Let $X$ and $Y$ be topological spaces.
Let $f : X \to Y$ be a homeomorphism.
Let $A \subseteq X$.

Then:

$\paren {f \sqbrk A}^\circ = f \sqbrk {A^\circ}$
where:

$A^\circ$ is the interior of $A$ in $X$
$\paren {f \sqbrk A}^\circ$ is the interior of $f \sqbrk A$ in $Y$.


Proof
First, we show that $f \sqbrk {A^\circ} \subseteq \paren {f \sqbrk A}^\circ$. 
Let $y \in f \sqbrk {A^\circ}$.
Then there exists $x \in A^\circ$ such that $y = \map f x$.
Since $x \in A^\circ$, there exists an open set $U \subseteq A$ in $X$ such that $x \in U$.
Then $y = \map f x \in f \sqbrk U \subseteq f \sqbrk A$.
By definition of a homeomorphism, $f$ is an open map.
So $f \sqbrk U$ is an open set in $Y$ contained in $f \sqbrk A$ and containing $y$.
So from the definition of interior, we have $y \in \paren {f \sqbrk A}^\circ$. 
Hence $y \in f \sqbrk {A^\circ}$ implies that $y \in \paren {f \sqbrk A}^\circ$.
So $f \sqbrk {A^\circ} \subseteq \paren {f \sqbrk A}^\circ$.
$\Box$

Now we show that $\paren {f \sqbrk A}^\circ \subseteq f \sqbrk {A^\circ}$. 
Let $y \in \paren {f \sqbrk A}^\circ$.
Then there exists an open set $V \subseteq f \sqbrk A$ in $Y$ such that $y \in V$.
We then have $\map {f^{-1} } y \in f^{-1} \sqbrk V$.
Further, from Preimage of Image of Subset under Injection equals Subset and Image of Subset under Mapping is Subset of Image, we have $f^{-1} \sqbrk V \subseteq A$. 
Since $f$ is continuous, $f^{-1} \sqbrk V$ is open in $X$, is contained in $A$ and contains $\map {f^{-1} } y$.
So we have $\map {f^{-1} } y \in A^\circ$.
Since $y = \map f {\map {f^{-1} } y}$, we obtain $y \in f \sqbrk {A^\circ}$.
Hence $y \in \paren {f \sqbrk A}^\circ$ implies $y \in f \sqbrk {A^\circ}$.
So $\paren {f \sqbrk A}^\circ \subseteq f \sqbrk {A^\circ}$. 
Hence we obtain $\paren {f \sqbrk A}^\circ = f \sqbrk {A^\circ}$.
$\blacksquare$





