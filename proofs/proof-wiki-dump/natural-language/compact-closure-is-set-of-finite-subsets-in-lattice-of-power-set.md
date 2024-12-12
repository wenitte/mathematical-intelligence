# 

Source: https://proofwiki.org/wiki/Compact_Closure_is_Set_of_Finite_Subsets_in_Lattice_of_Power_Set



Theorem
Let $X$ be a set.
Let $L = \struct {\powerset X, \cup, \cap, \preceq}$ be the lattice of power set of $X$ where $\mathord\preceq = \mathord\subseteq \cap \powerset X \times \powerset X$
Let $x \in \powerset X$.

Then $x^{\mathrm{compact} } = \map {\operatorname{Fin} } x$
where $\map {\operatorname{Fin} } x$ denotes the set of all finite subsets of $x$.


Proof
$\subseteq$
Let $y \in x^{\mathrm{compact} }$.
By definition of compact closure:

$y \preceq x$ and $y$ is compact.
By definition of $\preceq$:

$y \subseteq x$
By Element is Finite iff Element is Compact in Lattice of Power Set:
"$y$ is a finite set.
Thus by definition of $\operatorname{Fin}$:

$y \in \map {\operatorname{Fin} } x$
$\Box$

$\supseteq$
Let $y \in \map {\operatorname{Fin} } x$.
By definition of $\operatorname{Fin}$:

$y \subseteq x$ and $y$ is finite.
By definition of $\preceq$:

$y \preceq x$
By Element is Finite iff Element is Compact in Lattice of Power Set:

$y$ is compact.
Thus by definition of compact closure:

$y \in x^{\mathrm{compact} }$
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_8:29




