# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Connected_Topological_Space/No_Union_of_Separated_Sets_implies_No_Continuous_Surjection_to_Discrete_Two-Point_Space

Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $T$ be such that there are no two non-empty separated sets whose union is $S$.

Then there exists no continuous surjection from $T$ onto a discrete two-point space.


Proof
Let $T = \struct {S, \tau}$ be a topological space such that there are no two non-empty separated sets whose union is $S$.
Let $D = \struct {\set {0, 1}, \tau}$ be the discrete two-point space on $\set {0, 1}$.
Aiming for a contradiction, suppose $f: T \to \set {0, 1}$ is a continuous surjection.
By definition of continuous mapping:

$\map {f^{-1} } 0$ and $\map {f^{-1} } 1$ are open sets of $T$.

From the definition of a mapping:

$\map {f^{-1} } 0 \cup \map {f^{-1} } 1 = S$
and

$\map {f^{-1} } 0 \cap \map {f^{-1} } 1 = \O$

Then:

$\map {f^{-1} } 0 = S \setminus \map {f^{-1} } 1$
and:

$\map {f^{-1} } 1 = T \setminus \map {f^{-1} } 0$
are clopen.
From Closed Set equals its Closure they are their respective closures.

It follows from the definition that $\map {f^{-1} } 0$ and $\map {f^{-1} } 1$ are separated subsets of $T$ whose union is $S$.
Hence, by hypothesis, one of them must be empty, and the other one must be $S$.
Therefore $f$ is constant, and so is not a surjection.
This contradicts the original hypothesis.

That is, there exists no continuous surjection from $T$ onto a discrete two-point space.
$\blacksquare$





