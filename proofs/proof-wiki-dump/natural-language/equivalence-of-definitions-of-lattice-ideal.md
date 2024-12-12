# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Lattice_Ideal



Theorem
Let $\struct {S, \vee, \wedge, \preceq}$ be a lattice.
Let $I \subseteq S$ be a non-empty subset of $S$.

The following definitions of the concept of Lattice Ideal are equivalent:

Definition 1
$I$ is a lattice ideal of $S$ if and only if $I$ satisifes the lattice ideal axioms:




\((\text {LI 1})\)  

$:$  



$I$ is a sublattice of $S$:   

  \(\ds \forall x, y \in I:\)

\(\ds x \wedge y, x \vee y \in I \)   







  


\((\text {LI 2})\)  

$:$  





  \(\ds \forall x \in I: \forall a \in S:\)

\(\ds x \wedge a \in I \)   







  

Definition 2
$I$ is a lattice ideal of $S$ if and only if $I$ is a join semilattice ideal


Proof
Definition 1 implies Definition 2
Let $I$ satisify the lattice ideal axioms.
To show that $I$ is a join semilattice ideal it is sufficient to show:










$I$ is a lower section of $S$:   

  \(\ds \forall x \in F: \forall y \in S:\)

\(\ds y \preceq x \implies y \in I \)   







  


Let $x \in I, y \in S : y \preceq x$.
By the lattice ideal axioms, $F$ is a sublattice of $\struct {S, \vee, \wedge, \preceq}$, so:

$x \wedge y \in I$
From Preceding iff Meet equals Less Operand:

$y = x \wedge y$
Hence:

$y \in I$
The result follows.
$\Box$


Definition 2 implies Definition 1
Let $I$ be a join semilattice ideal of $\struct {S, \vee, \preceq}$.
To show that $I$ is a lattice ideal of $\struct {S, \vee, \wedge, \preceq}$ it is sufficient to show:

$\forall x \in I, a \in S: x \wedge a \in I$

Let $x \in I, a \in S$.
By definition of meet:

$x \wedge a \preceq x$
By definition of join semilattice ideal, $I$ is an lower section, so:

$x \wedge a \in I$
The result follows.
$\blacksquare$





