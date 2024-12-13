# 

Source: https://proofwiki.org/wiki/Preimage_of_Image_of_Linear_Transformation

Theorem
Let $K$ be a field.
Let $X$ and $Y$ be vector spaces over $K$.
Let $T : X \to Y$ be a linear transformation.
Let $A \subseteq X$ be a non-empty set.

Then $T^{-1} \sqbrk {T \sqbrk A} = \ker T + A$


Proof
Let $x \in T^{-1} \sqbrk {T \sqbrk A}$.
Then $T x \in T \sqbrk A$.
Then there exists $y \in A$ such that $T x = T y$. 
Hence we have $\map T {x - y} = 0$.
Hence $x - y \in \ker T$.
So $x \in y + \ker T$.
We have $y + \ker T \subseteq A + \ker T$, so we obtain:

if $x \in \in T^{-1} \sqbrk {T \sqbrk A}$ then $x \in \ker T + A$
so that:

$T^{-1} \sqbrk {T \sqbrk A} \subseteq \ker T + A$

Now let $x \in \ker T + A$.
Then there exists $v \in \ker T$ and $y \in A$ such that $x = v + y$.
From linearity, we have $T x = \map T {v + y} = T v + T y$.
Since $v \in \ker T$, we have $T x = T y$.
Since $T y \in T \sqbrk A$, we have $T x \in T \sqbrk A$.
So $x \in T^{-1} \sqbrk {T \sqbrk A}$.
$\blacksquare$





