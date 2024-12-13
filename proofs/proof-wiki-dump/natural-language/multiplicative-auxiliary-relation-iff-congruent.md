# 

Source: https://proofwiki.org/wiki/Multiplicative_Auxiliary_Relation_iff_Congruent



Theorem
Let $L = \struct {S, \vee, \wedge, \preceq}$ be a bounded below lattice.
Let $\RR$ be an auxiliary relation on $S$.

Then $\RR$ is multiplicative if and only if:

$\forall a, b, x, y \in S: \tuple {a, x}, \tuple {b, y} \in \RR \implies \tuple {a \wedge b, x \wedge y} \in \RR$
That is if and only if $\RR$ is a congruence relation for $\wedge$.


Proof
Sufficient Condition
Let $\RR$ be multiplicative.
Let $a, b, x, y \in S$ such that

$\tuple {a, x}, \tuple {b, y} \in \RR$
By Meet Precedes Operands:

$a \wedge b \preceq a$ and $a \wedge b \preceq b$
By definition of reflexivity:

$x \preceq x$ and $y \preceq y$
By definition of auxiliary relation:

$\tuple {a \wedge b, x}, \tuple {a \wedge b, y} \in \RR$
Thus by definition of multiplicative relation:

$\tuple {a \wedge b, x \wedge y} \in \RR$
$\Box$


Necessary Condition
Suppose:

$\forall a, b, x, y \in S: \tuple {a, x}, \tuple {b, y} \in \RR \implies \tuple {a \wedge b, x \wedge y} \in \RR$
Let $a, x, y \in S$ such that

$\tuple {a, x}, \tuple {a, y} \in \RR$
By Meet is Idempotent:

$a \wedge a = a$
Thus by hypothesis:

$\tuple {a, x \wedge y} \in \RR$
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_7:41




