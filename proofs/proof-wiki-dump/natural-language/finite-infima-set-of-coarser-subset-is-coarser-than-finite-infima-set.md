# 

Source: https://proofwiki.org/wiki/Finite_Infima_Set_of_Coarser_Subset_is_Coarser_than_Finite_Infima_Set

Theorem
Let $L = \struct {S, \wedge, \preceq}$ be a meet semilattice.
Let $A, B$ be subsets of $S$ such that

$A$ is coarser than $B$.

Then $\map {\operatorname{fininfs} } A$ is coarser than $\map {\operatorname{fininfs} } B$
where $\map {\operatorname{fininfs} } B$ denotes the finite infima set of $B$.


Proof
Let $x \in \map {\operatorname{fininfs} } A$
By definition of finite infima set:

$\exists Y \in \map {\operatorname {Fin} } A: x = \inf Y$ and $Y$ admits an infimum,
where $\map {\operatorname {Fin} } A$ denotes the set of all finite subsets of $A$.
By definition of coarser subset:

$\forall y \in Y: \exists z \in B: z \preceq y$
By Axiom of Choice:

$\exists f: Y \to B: \forall y \in Y: \map f y \preceq y$
We will prove that

$f \sqbrk Y$ admits an infimum.
In the case when $Y = \O$:
By Image of Empty Set is Empty Set: Corollary 1:

$f \sqbrk Y = \O$
Thus

$f \sqbrk Y$ admits an infimum.
In the case when $Y \ne \O$
By definition of non-empty set:

$\exists y: y \in Y$
By definition of image of set:

$\map f y \in f \sqbrk Y$
By Image of Mapping from Finite Set is Finite:

$f \sqbrk Y$ is a finite set.
Thus by Existence of Non-Empty Finite Infima in Meet Semilattice:

$f \sqbrk Y$ admits an infimum.
$\Box$

We will prove that:

$\inf f \sqbrk Y$ is lower bound for $Y$.
Let $y \in Y$.
By definition of $f$:

$\map f y \preceq y$
By definition of image of set:

$\map f y \in f \sqbrk Y$
By definitions of infimum and lower bound:

$\inf f \sqbrk Y \preceq \map f y$
Thus by definition of transitivity:

$\inf f \sqbrk Y \preceq y$
$\Box$

By definition of infimum:

$\inf f \sqbrk Y \preceq x$
By definition of finite infima set:

$\inf f \sqbrk Y \in \map {\operatorname{fininfs} } B$
Thus

$\exists y \in \map {\operatorname{fininfs} } B: y \preceq x$
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL11:29




