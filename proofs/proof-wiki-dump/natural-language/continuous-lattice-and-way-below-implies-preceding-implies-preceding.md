# 

Source: https://proofwiki.org/wiki/Continuous_Lattice_and_Way_Below_implies_Preceding_implies_Preceding

Theorem
Let $L = \struct {S, \vee, \wedge, \preceq}$ be a continuous complete lattice.
Let $a, b \in S$.
Let:

$\forall c \in S: c \ll a \implies c \preceq b$

Then $a \preceq b$


Proof
By definition of way below closure:

$\forall c \in a^\ll: c \preceq b$
By definition:

$b$ is an upper bound for $a^\ll$
By definition of supremum:

$\map \sup {a^\ll} \preceq b$
By definition of continuous:

$L$ satisfies the axiom of approximation.
Thus by the axiom of approximation:

$a = \map \sup {a^\ll} \preceq b$
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_5:17




