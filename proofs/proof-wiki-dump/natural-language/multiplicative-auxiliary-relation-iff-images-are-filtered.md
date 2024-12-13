# 

Source: https://proofwiki.org/wiki/Multiplicative_Auxiliary_Relation_iff_Images_are_Filtered



Theorem
Let $L = \struct {S, \vee, \wedge, \preceq}$ be a bounded below lattice.
Let $\RR$ be an auxiliary relation on $S$.

Then $\RR$ is multiplicative if and only if:

for all $x \in S$: $\map \RR x$ is filtered
where $\map \RR x$ denotes the $\RR$-image of $x$.


Proof
Sufficient Condition
Let $\RR$ be multiplicative.
Let $x \in S$.
Let $a, b \in \map \RR x$.
By definition of $\RR$-image of element:

$\tuple {x, a}, \tuple {x, b} \in \RR$
By definition of multiplicative relation:

$\tuple {x, a \wedge b} \in \RR$
By definition of $\RR$-image of element:

$a \wedge b \in \map \RR x$
By Meet Precedes Operands:

$a \wedge b \preceq a$ and $a \wedge b \preceq b$
Thus

$\exists c \in \map \RR x: c \preceq a \land c \preceq b$
Hence $\map \RR x$ is filtered.
$\Box$


Necessary Condition
Suppose that:

for all $x \in S$: $\map \RR x$ is filtered
Let $a, x, y \in S$ such that:

$\tuple {a, x}, \tuple {a, y} \in \RR$
By definition of $\RR$-image of element:

$x, y \in \map \RR a$
By Auxiliary Relation Image of Element is Upper Section:

$\map \RR a$ is an upper section.
By assumption:

$\map \RR a$ is filtered.
By Filtered in Meet Semilattice:

$x \wedge y \in \map \RR a$
Thus by definition of $\RR$-image of element:

$\tuple {a, x \wedge y} \in \RR$
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_7:40




