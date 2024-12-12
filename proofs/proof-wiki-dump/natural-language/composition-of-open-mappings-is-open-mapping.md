# 

Source: https://proofwiki.org/wiki/Composition_of_Open_Mappings_is_Open_Mapping

Theorem
Let $\struct {X, \tau_X}$, $\struct {Y, \tau_Y}$ and $\struct {Z, \tau_Z}$ be topological spaces.
Let $f : X \to Y$ and $g : Y \to Z$ be open mappings.

Then $g \circ f : X \to Z$ is an open mapping.


Proof
Let $U$ be an open set in $\struct {X, \tau_X}$.
Since $f : X \to Y$ is open, we have $f \sqbrk U \in \tau_Y$.
Since $g : Y \to Z$ is open, we have $g \sqbrk {f \sqbrk U} \in \tau_Z$.
That is, whenever $U \in \tau_X$, we have $\paren {g \circ f} \sqbrk U \in \tau_Z$.
So $g \circ f : X \to Z$ is an open mapping.
$\blacksquare$





