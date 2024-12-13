# 

Source: https://proofwiki.org/wiki/Meet-Continuous_iff_Meet_Preserves_Directed_Suprema



Theorem
Let $\mathscr S = \struct {S, \vee, \wedge, \preceq}$ be an up-complete lattice.
Let $\struct {S \times S, \precsim}$ be the simple order product of $\mathscr S$ and $\mathscr S$.
Let $f: S \times S \to S$ be a mapping such that

$\forall x, y \in S: \map f {x, y} = x \wedge y$

Then:

$\mathscr S$ is meet-continuous
if and only if:

$f$ preserves directed suprema


Proof
Sufficient Condition
Assume that:

$\mathscr S$ is meet-continuous.
We will prove that:

for every element $x$ of $S$, a directed subset $D$ of $S$ if $x \preceq \sup D$, then $x = \sup \set {x \wedge d: d \in D}$
Let $x \in S$, $D$ be a directed subset of $S$ such that:

$x \preceq \sup D$
Thus














\(\ds x\)

\(=\)







\(\ds x \wedge \sup D\)





Preceding iff Meet equals Less Operand














\(\ds \)

\(=\)







\(\ds \sup \set {x \wedge d: d \in D}\)





Definition of Meet-Continuous Lattice



$\Box$
By definition of reflexivity:

for every an element $x$ of $S$, a directed subset $D$ of $S$ if $x \preceq \sup D$, then $x \preceq \sup \set {x \wedge d: d \in D}$
By Meet is Directed Suprema Preserving:

$f$ preserves directed suprema.
$\Box$


Necessary Condition
Assume that:

$f$ preserves directed suprema.
By Meet is Directed Suprema Preserving implies Meet of Suprema equals Supremum of Meet of Directed Subsets: 

$\paren {\sup D_1} \wedge \paren {\sup D_2} = \sup \set {d_1 \wedge d_2: d_1 \in D_1, d_2 \in D_2}$
Thus by Meet-Continuous iff Meet of Suprema equals Supremum of Meet of Directed Subsets:

$\mathscr S$ is meet-continuous.
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_2:53




