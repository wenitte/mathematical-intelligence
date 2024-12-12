# 

Source: https://proofwiki.org/wiki/Fixed_Point_Set_of_Continuous_Self-Map_on_Hausdorff_Space_is_Closed

Theorem
Let $T = \struct {S, \tau}$ be a Hausdorff space.
Let $f: T \to T$ be a continuous mapping on $T$.
Let $W$ be the set defined as:

$W = \set {x \in T: \map f x = x}$
Then $W$ is closed in $T$.


Proof
Let $g: T \to T$ be the identity mapping on $T$:

$\forall x \in T: \map g x = x$
From Identity Mapping is Continuous, $g$ is a continuous mapping on $T$.
From Equal Images of Mappings to Hausdorff Space form Closed Set:

$\set {x \in T: \map f x = \map g x}$ is closed in $T$.
and the result follows.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $4$: The Hausdorff condition: Exercise $4.3: 6$




