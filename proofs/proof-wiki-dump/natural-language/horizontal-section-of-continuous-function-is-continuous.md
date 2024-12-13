# 

Source: https://proofwiki.org/wiki/Horizontal_Section_of_Continuous_Function_is_Continuous

Theorem
Let $X$, $Y$ and $T$ be topological spaces.
Equip the Cartesian product $X \times Y$ with the product topology.
Let $f : X \times Y \to T$ be a continuous mapping. 
Let $y \in Y$.

Then the $y$-horizontal section $f^y : X \to T$ is continuous.


Proof
From the definition of the $y$-horizontal section, we have: 

$\map {f^y} x = \map f {x, y}$
for each $x \in X$. 
Define the map $p^y : X \to X \times Y$ by: 

$\map {p^y} x = \tuple {x, y}$
for each $x \in X$. 
We have that: 

$f^y = f \circ p^y$
From Composite of Continuous Mappings is Continuous, since $f$ is continuous, it suffices to show that $p^y$ is continuous.
From Box Topology on Finite Product Space is Product Topology, the product topology on $X \times Y$ is also the box topology. 
From Continuity Test using Basis, it then suffices to check that: 

$\paren {p^y}^{-1} \sqbrk {U \times V}$ is open whenever $U$ is open in $X$ and $V$ is open in $Y$.
Let $U$ be open in $X$ and $V$ be open in $Y$.
Note that: 

$x \in \paren {p^y}^{-1} \sqbrk {U \times V}$
if and only if:

$\tuple {x, y} \in U \times V$
which is equivalent to: 

$x \in U$ and $y \in V$.
Clearly then if $y \not \in V$, we have $\paren {p^y}^{-1} \sqbrk {U \times V} = \O$.
We can also read off from this equivalence that if $y \in V$, we have $\paren {p^y}^{-1} \sqbrk {U \times V} = U$.
From Empty Set is Element of Topology, $\O$ is open in $Y$.
Since $U$ is open in $X$ by hypothesis, we therefore have that $p^y$ is continuous from Continuity Test using Basis.
Hence the result.
$\blacksquare$





