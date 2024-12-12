# 

Source: https://proofwiki.org/wiki/Completely_Irreducible_Element_equals_Infimum_of_Subset_implies_Element_Belongs_to_Subset

Theorem
Let $L = \struct {S, \vee, \wedge, \preceq}$ be a complete lattice.
Let $X \subseteq S$, $p \in S$ such that

$p$ is completely irreducible and $p = \inf X$

Then $p \in X$


Proof
Aiming for a contradiction, suppose

$p \notin X$
By Completely Irreducible Element iff Exists Element that Strictly Succeeds First Element:

$\exists q \in S: p \prec q \land \left({\forall s \in S: p \prec s \implies q \preceq s}\right) \land p^\succeq = \left\{ {p}\right\} \cup q^\succeq$
where $p^\succeq$ denotes the upper closure of $p$.
We will prove that

$q$ is lower bound for $X$
Let $x \in X$.
By definitions of infimum and lower bound

$p \preceq x$
By assumption:

$x \ne p$
By definition of strictly precede:

$p \prec x$
Thus by step condition:

$q \preceq x$
$\Box$
By definition of strictly precede:

$p \preceq q$
We will prove that

$\forall b \in S: b$ is lower bound for $X \implies b \preceq q$
Let $b \in S$ such that

$b$ is lower bound for $X$.
By definition of infimum:

$b \preceq p$
Thus by definition of transitivity:

$b \preceq q$
$\Box$
By definition of infimum:

$q = \inf X = p$
Thus this contradicts $p \ne q$ by definition of strictly precede.
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL16:34




