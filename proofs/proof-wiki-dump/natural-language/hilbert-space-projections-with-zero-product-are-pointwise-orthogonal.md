# 

Source: https://proofwiki.org/wiki/Hilbert_Space_Projections_with_Zero_Product_are_Pointwise_Orthogonal

Theorem
Let $\struct {\HH, \innerprod \cdot \cdot}$ be a Hilbert space.
Let $P, Q : \HH \to \HH$ be projections (in the Hilbert space sense) such that:

$P Q = 0$

Then:

$\innerprod {Q x} {P y} = 0$ for each $x, y \in \HH$.


Proof
We have, for each $x \in \HH$:

$\map {\paren {P Q} } x = {\mathbf 0}_\HH$
Hence:

$\map P {Q x} = {\mathbf 0}_\HH$
So we have $Q x \in \ker P$.
Since $x \in \HH$ was arbitrary we have $\Rng Q \subseteq \ker P$.
From the definition of a projections (in the Hilbert space sense), we have:

$\ker P = \paren {\Rng Q}^\bot$
Hence:

$\Rng Q \subseteq \paren {\Rng P}^\bot$
Hence for each $x \in \HH$, we have $Q x \in \paren {\Rng Q}^\bot$.
Hence for each $y \in \HH$ we have $Q x \perp P y$ from the definition of orthocomplement.
That is, $\innerprod {Q x} {P y} = 0$. 
$\blacksquare$





