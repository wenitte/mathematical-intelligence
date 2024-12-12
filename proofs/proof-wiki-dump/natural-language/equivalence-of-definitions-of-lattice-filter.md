# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Lattice_Filter



Theorem
Let $\struct {S, \vee, \wedge, \preceq}$ be a lattice.
Let $F \subseteq S$ be a non-empty subset of $S$.

The following definitions of the concept of Lattice Filter are equivalent:

Definition 1
$F$ is a lattice filter of $S$ if and only if $F$ satisifes the lattice filter axioms:




\((\text {LF 1})\)  

$:$  



$F$ is a sublattice of $S$:   

  \(\ds \forall x, y \in F:\)

\(\ds x \wedge y, x \vee y \in F \)   







  


\((\text {LF 2})\)  

$:$  





  \(\ds \forall x \in F: \forall a \in S:\)

\(\ds x \vee a \in F \)   







  



Definition 2
$F$ is a lattice filter of $S$ if and only if $F$ is a meet semilattice filter.


Proof
Definition 1 implies Definition 2
Let $F$ satisify the lattice filter axioms.
To show that $F$ is a meet semilattice filter it is sufficient to show:










$F$ is a upper section of $S$:   

  \(\ds \forall x \in F: \forall y \in S:\)

\(\ds x \preceq y \implies y \in F \)   







  


Let $x \in F, y \in S : x \preceq y$.
By the lattice filter axioms, $F$ is a sublattice of $\struct {S, \vee, \wedge, \preceq}$, so:

$x \vee y \in F$
From Preceding iff Join equals Larger Operand:

$y = x \vee y$
Hence:

$y \in F$
The result follows.
$\Box$


Definition 2 implies Definition 1
Let $F$ be a meet semilattice filter of $\struct {S, \wedge, \preceq}$.
To show that $F$ is a lattice filter of $\struct {S, \vee, \wedge, \preceq}$ it is sufficient to show:

$\forall x \in F, a \in S: x \vee a \in F$

Let $x \in F, a \in S$.
By definition of join:

$x \preceq x \vee a$
By definition of meet semilattice filter, $F$ is an upper section, so:

$x \vee a \in F$
The result follows.
$\blacksquare$





