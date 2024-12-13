# 

Source: https://proofwiki.org/wiki/Not_Preceding_implies_Exists_Completely_Irreducible_Element_in_Algebraic_Lattice

Theorem
Let $L = \struct {S, \vee, \wedge, \preceq}$ be a bounded below algebraic lattice.
Let $x, y \in S$ such that

$y \npreceq x$

Then

$\exists p \in S: p$ is completely irreducible $\mathop \land x \preceq p \land y \npreceq p$


Proof
By definition of algebraic:

$\forall z \in S: z^\ll$ is directed
and

$L$ satisfies the axiom of approximation.
By Axiom of Approximation in Up-Complete Semilattice:

$\exists k \in S: k \ll y \land k \npreceq x$
By Algebraic iff Continuous and For Every Way Below Exists Compact Between:

$\exists z \in \map K L: k \preceq z \preceq y$
By definition of transitivity:

$z \npreceq x$
By definition of upper closure of element:

$x \notin z^\succeq$
By definition of difference:

$x \in S \setminus z^\succeq$
By definition of relative complement:

$x \in \relcomp S {z^\succeq}$
By definition of compact subset:

$z$ is a compact element.
By Upper Closure of Element is Way Below Open Filter iff Element is Compact:

$z^\succeq$ is a way below open filter on $L$.
By Upper Way Below Open Subset Complement is Non Empty implies There Exists Maximal Element of Complement:

$\exists p \in S: x \preceq p \land p = \max \relcomp S {z^\succeq}$
Thus by Maximal implies Completely Irreducible:

$p$ is completely irreducible.
Thus:

$x \preceq p$

Aiming for a contradiction, suppose:

$y \preceq p$
By definition of transitivity:

$z \preceq p$
By definition of maximum element:

$p \in \relcomp S {z^\succeq}$
By definition of relative complement:

$p \notin z^\succeq$
Thus this contradicts $z \preceq p$ by definition of upper closure of element.
$\blacksquare$


Sources
Mizar article WAYBEL16:31




