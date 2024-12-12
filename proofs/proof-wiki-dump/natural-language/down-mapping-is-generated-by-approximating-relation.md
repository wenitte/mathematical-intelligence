# 

Source: https://proofwiki.org/wiki/Down_Mapping_is_Generated_by_Approximating_Relation

Theorem
Let $L = \struct {S, \wedge, \preceq}$ be a bounded below meet-continuous meet semilattice.
Let $\map {\operatorname{Ids} } L$ be the set of all ideals in $L$.
Let $I$ be an ideal in $L$.
Let $f: S \to \map {\operatorname{Ids} } L$ be a mapping such that:

$\forall x \in S: x \preceq \sup I \implies \map f x = \set {x \wedge i: i \in I}$
and

$\forall x \in S: x \npreceq \sup I \implies \map f x = x^\preceq$
where $x^\preceq$ denotes the lower closure of $x$.

Then

there exists an auxiliary approximating relation $\RR$ on $S$ such that
$\forall s \in S: \map f s = s^\RR$
where $s^\RR$ denotes the $\RR$-segment of $s$.


Proof
Define relation $\RR$ on $S$:

$\forall x, y \in S: \tuple {x, y} \in \RR \iff x \in \map f y$
By definition of $\RR$-segment:

$\forall x \in S: \map f x = x^\RR$
We will prove that:

$\RR$ is an approximating relation.
Let $x \in S$.
Suppose the case holds that:

$x \preceq \sup I$
Thus:














\(\ds \map \sup {x^\RR}\)

\(=\)







\(\ds \sup \map f x\)




















\(\ds \)

\(=\)







\(\ds \sup \set {x \wedge d: d \in I}\)





Definition of $f$














\(\ds \)

\(=\)







\(\ds x \wedge \sup I\)





Definition of Meet-Continuous Lattice














\(\ds \)

\(=\)







\(\ds x\)





Preceding iff Meet equals Less Operand




Suppose the case holds that

$x \npreceq \sup I$
Thus














\(\ds \map \sup {x^\RR}\)

\(=\)







\(\ds \sup \map f x\)




















\(\ds \)

\(=\)







\(\ds \map \sup {x^\preceq}\)





Definition of $f$














\(\ds \)

\(=\)







\(\ds x\)





Supremum of Lower Closure of Element



$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_4:37




