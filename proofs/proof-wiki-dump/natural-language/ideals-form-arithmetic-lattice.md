# 

Source: https://proofwiki.org/wiki/Ideals_form_Arithmetic_Lattice

Theorem
Let $L = \struct {S, \vee, \wedge, \preceq}$ be a bounded below lattice.
Let $I = \struct {\map {\mathit {Ids} } L, \precsim}$ be an inclusion ordered set, where:

$\map {\mathit {Ids} } L$ denotes the set of all ideals in $L$
$\mathord \precsim = \mathord \subseteq \cap \paren {\map {\mathit {Ids} } L \times \map {\mathit {Ids} } L}$

Then $I$ is an arithmetic lattice.


Proof
We will prove that:

$\forall x, y \in \map K I: \exists z \in \map K I: z \precsim x \land z \precsim y \land \forall v \in \map K I: v \precsim x \land v \precsim y \implies v \precsim z$
Let $x, y \in \map K I$.
By definition of compact subset:

$x$ and $y$ are compact elements in $I$.
By Compact Element iff Principal Ideal and definition of principal ideal:

$\exists a \in S: x = a^\preceq$
and

$\exists b \in S: y = b^\preceq$
By Intersection of Semilattice Ideals is Ideal:

$x \cap y \in \map {\mathit {Ids} } L$
Define $z = x \cap y$.
By Meet in Set of Ideals:

$z = x \wedge_I y$
We will prove that

$\paren {a \wedge b}^\preceq \subseteq z$
Let $c \in \paren {a \wedge b}^\preceq$
By definition of lower closure of element:

$c \preceq a \wedge b$
By Meet Precedes Operands:

$a \wedge b \preceq a$ and $a \wedge b \preceq b$
By definition of transitivity:

$c \preceq a$ and $c \preceq b$
By definition of lower closure of element:

$c \in x$ and $c \in y$
Thus by definition of intersection:

$c \in z$
$\Box$

We will prove that:

$z \subseteq \paren {a \wedge b}^\preceq$
Let $c \in z$.
By definition of intersection:

$c \in x$ and $c \in y$
By definition of lower closure of element:

$c \preceq a$ and $c \preceq b$
By definitions of infimum and lower bound:

$c \preceq a \wedge b$
Thus by definition of lower closure of element:

$c \in \paren {a \wedge b}^\preceq$
$\Box$

By definition of set equality:

$z = \paren {a \wedge b}^\preceq$
By definition:

$z$ is a principal ideal.
By Compact Element iff Principal Ideal:

$z$ is a compact element in $I$.
Thus by definition of compact subset:

$z \in \map K I$
Thus by Meet Precedes Operands:

$z \precsim x$ and $z \precsim y$
Let $v \in \map K I$ such that

$v \precsim x$ and $v \precsim y$
By definition of $\precsim$:

$v \subseteq x$ and $v \subseteq y$
By Intersection is Largest Subset:

$v \subseteq z$
Thus by definition of $\precsim$:

$v \precsim z$
$\Box$

By definition:

$\map K I$ forms a meet semilattice.
By Compact Subset is Join Subsemilattice:

$\map K I$ forms a join semilattice.
By definition:

$\map K I$ forms a lattice.
By Ideals form Algebraic Lattice:

$I$ is an algebraic lattice.
Thus by Arithmetic iff Compact Subset form Lattice in Algebraic Lattice:

$I$ is an arithmetic lattice.
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL13:14




