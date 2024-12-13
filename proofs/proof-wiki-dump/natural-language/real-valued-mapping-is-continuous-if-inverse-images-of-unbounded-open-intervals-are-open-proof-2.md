# 

Source: https://proofwiki.org/wiki/Real-Valued_Mapping_is_Continuous_if_Inverse_Images_of_Unbounded_Open_Intervals_are_Open/Proof_2

Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let the real number line $\R$ be considered as a topology under the usual (Euclidean) topology.
Let $f: T \to \R$ be a real-valued function on $T$.

Then:

$f$ is continuous
if and only if

for all $a \in \R$: $f^{-1} \openint \gets a$ and $f^{-1} \openint a \to$ are open in $T$.


Proof
From Sub-Basis for Real Number Line:

$\set {\openint \gets a, \openint b \to: a, b \in \R}$ is a sub-basis for $\R$.

The result follows from Continuity Test using Sub-Basis.
$\blacksquare$





