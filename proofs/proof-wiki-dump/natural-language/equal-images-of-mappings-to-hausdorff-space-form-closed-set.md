# 

Source: https://proofwiki.org/wiki/Equal_Images_of_Mappings_to_Hausdorff_Space_form_Closed_Set

Theorem
Let $T_A = \struct {S_A, \tau_A}$ and $T_B = \struct {S_B, \tau_B}$ be topological spaces.
Let $T_B$ be a Hausdorff space.
Let $f, g: T_A \to T_B$ be continuous mappings.
Let $W$ be the set defined as:

$W = \set {x \in T_A: \map f x = \map g x}$
Then $W$ is closed in $T_A$.


Proof
Consider the set $V = S_A \setminus W$.
Hence:

$V = \set {x \in T_A: \map f x \ne \map g x}$
Let $x \in V$.
Then:

$\map f x \ne \map g x$
and as $T_B$ is Hausdorff:

$\exists U_1, U_2 \in \tau_B: \map f x \in U_1, \map g x \in U_2, U_1 \cap U_2 = \O$
As $f$ and $g$ are continuous mappings:

$f^{-1} \sqbrk {U_1}$ and $g^{-1} \sqbrk {U_2}$ are open in  $T_B$.
Because $f^{-1} \sqbrk {U_1}$ and $g^{-1} \sqbrk {U_2}$ are open in $T_A$, $f^{-1} \sqbrk U_1 \cap g^{-1} \sqbrk U_2$ is also open in $T_A$.
Then we have that:

$x \in f^{-1} \sqbrk {U_1} \cap g^{-1} \sqbrk {U_2}$
such that:

$f^{-1} \sqbrk {U_1} \cap g^{-1} \sqbrk {U_2} \subseteq V$
Hence $V$ is open in $T_A$.
Hence $W = T_A \setminus V$ is closed in $T_A$.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $4$: The Hausdorff condition: Exercise $4.3: 6$




