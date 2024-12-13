# 

Source: https://proofwiki.org/wiki/Local_Basis_Generated_from_Neighborhood_Basis

Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $x$ be an element of $S$.
Let $\BB$ be a neighborhood basis of $x$.
For any subset $A \subseteq S$, let $A^\circ$ denote the interior of $A$.

Then the set:

$\BB' = \set {H^\circ: H \in \BB}$
is a local basis of $x$. 


Proof
First it must be shown that $\BB'$ is a set of open neighborhoods of $x$.
From the definition of the interior of a subset, $\BB'$ is a set of open sets.
Let $H \in \BB$. 
By assumption, $H$ is a neighborhood of $x$.
From the definition of a neighborhood:

$\exists U \in \tau : x \in U \subseteq H$
From the definition of the interior of a subset:

$U \subseteq H^\circ$
Hence $x \in H^\circ$.
It follows that $\BB'$ is a set of open neighborhoods of $x$.

It remains to show that $\BB'$ is a neighborhood basis.
Let $N$ be a neighborhood of $x$.
Since $\BB$ is a neighborhood basis of $x$ then:

$\exists H \in \BB : H \subseteq N$
By definition of the interior, $H^\circ \subseteq H$.
From Subset Relation is Transitive $H^\circ \subseteq N$.
Hence $\BB'$ is a neighborhood basis.
The result follows.
$\blacksquare$





