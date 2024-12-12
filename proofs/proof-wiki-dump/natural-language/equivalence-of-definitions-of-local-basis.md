# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Local_Basis



Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $x$ be an element of $S$.

The following definitions of the concept of Local Basis are equivalent:

Local Basis for Open Sets
A local basis at $x$ is a set $\BB$ of open neighborhoods of $x$ such that:

$\forall U \in \tau: x \in U \implies \exists H \in \BB: H \subseteq U$
That is, such that every open neighborhood of $x$ also contains some set in $\BB$.

Neighborhood Basis of Open Sets
A local basis at $x$ is a set $\BB$ of open neighborhoods of $x$ such that every neighborhood of $x$ contains a set in $\BB$.
That is, a local basis at $x$ is a neighborhood basis of $x$ consisting of open sets.


Proof
Local Basis for Open Sets Implies Neighborhood Basis of Open Sets
Let $\BB$ be a set of open neighborhoods of $x$ such that:

$\forall U \in \tau: x \in U \implies \exists H \in \BB: H \subseteq U$
Let $N$ be a neighborhood of $x$.
Then there exists $U \in \tau$ such that $x \in U$ and $U \subseteq N$ by definition.
By assumption, there exists $H \in \BB$ such that $H \subseteq U$.
From Subset Relation is Transitive, $H \subseteq N$.
The result follows.
$\Box$


Neighborhood Basis of Open Sets Implies Local Basis for Open Sets
Let $\BB$ be a set of open neighborhoods of $x$ such that:

every neighborhood of $x$ contains a set in $\BB$.
Let $U \in \tau$ such that $x \in U$.
From Set is Open iff Neighborhood of all its Points then $U$ is a neighborhood of $x$.
By assumption, there exists $H \in \BB$ such that $H \subseteq U$.
The result follows.
$\blacksquare$





