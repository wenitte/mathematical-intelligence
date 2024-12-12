# 

Source: https://proofwiki.org/wiki/Characterization_of_Pseudoprime_Element_when_Way_Below_Relation_is_Multiplicative



Theorem
Let $L = \struct {S, \vee, \wedge, \preceq}$ be a bounded below continuous lattice such that

$\ll$ is multiplicative relation
where $\ll$ denotes the way below relation of $L$.
Let $p \in S$.

Then $p$ is pseudoprime element if and only if

$\forall a, b \in S: a \wedge b \ll p \implies a \preceq p \lor b \preceq p$


Proof
Sufficient Condition
Let $p$ be pseudoprime element.
Let $a, b \in S$ such that

$a \wedge b \ll p$
By definition of meet:

$\inf \left\{ {a, b}\right\} \ll p$
By Characterization of Pseudoprime Element by Finite Infima:

$\exists c \in \left\{ {a, b}\right\}: c \preceq p$
Thus

$a \preceq p$ or $b \preceq p$
$\Box$


Necessary Condition
Suppose

$\forall a, b \in S: a \wedge b \ll p \implies a \preceq p \lor b \preceq p$
Aiming for a contradiction, suppose:

$p$ is not a pseudoprime element.
By Prime is Pseudoprime (Order Theory):

$p$ is not a prime element.
By definition of prime element:

$\exists x, y \in S: x \wedge y \preceq p$ and $x \npreceq p$ and $y \npreceq p$
By definition of continuous:

$\forall z \in S: z^\ll$ is directed.
and

$L$ satisfies axiom of approximation.
By Axiom of Approximation in Up-Complete Semilattice:

$\exists u \in S: u \ll x \land u \npreceq p$
and

$\exists v \in S: v \ll y \land v \npreceq p$
By Way Below Relation is Auxiliary Relation:

$\ll$ is auxiliary relation.
By Multiplicative Auxiliary Relation iff Congruent:

$u \wedge v \ll x \wedge y$
By definition of transitivity:

$u \wedge v \ll p$
By assumption:

$u \preceq p$ or $v \preceq p$
This contradicts $u \npreceq p$ and $v \npreceq p$.
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_7:44




