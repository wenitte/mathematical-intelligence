# 

Source: https://proofwiki.org/wiki/Characterization_of_Neighborhood_by_Basis

Theorem
Let $\struct {S, \tau}$ be a topological space.
Let $\BB$ be an analytic basis for $\tau$.
Let $N \subseteq S$.
Let $x \in N$.

Then $N$ is a neighborhood at $x$ if and only if:

$\exists B \in \BB : x \in B : B \subseteq N$


Proof
From Basis induces Local Basis:

$\BB_x = \set {B \in \BB: x \in B}$ is a local basis at $x$
By definition of local basis, $N$ is a neighborhood at $x$ if and only if:

$\exists B \in \BB_x : B \subseteq N$
By definition of $\BB_x$,  $N$ is a neighborhood at $x$ if and only if:

$\exists B \in \BB : x \in B : B \subseteq N$
$\blacksquare$





