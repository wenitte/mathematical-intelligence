# 

Source: https://proofwiki.org/wiki/Meet-Continuous_iff_Ideal_Supremum_is_Meet_Preserving



Theorem
Let $\mathscr S = \struct {S, \vee, \wedge, \preceq}$ be an up-complete lattice.
Let $f: \map {\it Ids} {\mathscr S} \to S$ be a mapping such that:

$\forall I \in \map {\it Ids} {\mathscr S}: \map f I = \sup_{\mathscr S} I$
where 

$\map {\it Ids} {\mathscr S}$ denotes the set of all ideals in $\mathscr S$

Then

$\mathscr S$ is meet-continuous
if and only if

$f$ preserves meet as a mapping from $\struct {\map {\it Ids} {\mathscr S}, \subseteq}$ into $\mathscr S$


Proof
Sufficient Condition
Let $\mathscr S$ be meet-continuous.
We will prove that:

for every directed subsets $D_1, D_2$ of $S$: $\paren {\sup D_1} \wedge \paren {\sup D_2} = \sup \set {d_1 \wedge d_2: d_1 \in D_1, d_2 \in D_2}$
Let $D_1, D_2$ be directed subsets of $S$.
we will prove as sublemma that:

for every an element $x$ of $S$, a directed subset $D$ of $S$ if $x \preceq \sup D$, then $x = \sup \set {x \wedge d: d \in D}$
Let $x \in S$, $D$ be a directed subset of $S$ such that:

$x \preceq \sup D$
Thus:














\(\ds x\)

\(=\)







\(\ds x \wedge \sup D\)





Preceding iff Meet equals Less Operand














\(\ds \)

\(=\)







\(\ds \sup \set {x \wedge d: d \in D}\)





Definition of Meet-Continuous Lattice




By definition of reflexivity:

for every element $x$ of $S$, a directed subset $D$ of $S$ if $x \preceq \sup D$, then $x \preceq \sup \set {x \wedge d: d \in D}$
Define a mapping $g: S \times S \to S$:

$\forall \tuple {s, t} \in S \times S: \map g {s, t} = s \wedge t$
By Meet is Directed Suprema Preserving:

$g$ preserves directed suprema as a mapping from the simple order product $\struct {S \times S, \precsim}$ of $\mathscr S$ and $\mathscr S$ into $\mathscr S$.
Thus by Meet is Directed Suprema Preserving implies Meet of Suprema equals Supremum of Meet of Directed Subsets: 

$\paren {\sup D_1} \wedge \paren {\sup D_2} = \sup \set {d_1 \wedge d_2: d_1 \in D_1, d_2 \in D_2}$

By exemplification:

for every ideals $I_1, I_2$ of $S$: $\paren {\sup I_1} \wedge \paren {\sup I_2} = \sup \set {d_1 \wedge d_2: d_1 \in I_1, d_2 \in I_2}$
Thus by Meet of Suprema equals Supremum of Meet of Ideals implies Ideal Supremum is Meet Preserving:

$f$ preserves meet.
$\Box$


Necessary Condition
Let $f$ be such that it preserves meet.
Thus:

$\mathscr S$ is up-complete
We will prove that:

for every ideals $I_1, I_2$ in $\mathscr S$: $\paren {\sup I_1} \wedge \paren {\sup I_2} = \sup \set {i_1 \wedge i_2: i_1 \in I_1, i_2 \in I_2}$
Let $I_1, I_2$ be ideals in $\mathscr S$.
Thus:














\(\ds \paren {\sup I_1} \wedge \paren {\sup I_2}\)

\(=\)







\(\ds \map f {I_1} \wedge \map f {I_2}\)





Definition of $f$














\(\ds \)

\(=\)







\(\ds \map f {I_1 \wedge I_2}\)





Definition of Mapping Preserves Infimum














\(\ds \)

\(=\)







\(\ds \map \sup {I_1 \wedge I_2}\)





Definition of $f$














\(\ds \)

\(=\)







\(\ds \sup \set {i_1 \wedge i_2: i_1 \in I_1, i_2 \in I_2}\)





Meet in Set of Ideals



We will prove that:

for every directed subsets $D_1, D_2$ of $S$: $\paren {\sup D_1} \wedge \paren {\sup D_2} = \sup \set {d_1 \wedge d_2: d_1 \in D_1, d_2 \in D_2}$
Let $D_1, D_2$ be directed subsets of $S$.
By definition of up-complete:

$D_1$ and $D_2$ admit suprema
By Supremum of Lower Closure of Set:

$D_1^\preceq$ and $D_2^\preceq$ admit suprema
Thus:














\(\ds \paren {\sup D_1} \wedge \paren {\sup D_2}\)

\(=\)







\(\ds \paren {\sup D_1^\preceq} \wedge \paren {\sup D_2^\preceq}\)





Supremum of Lower Closure of Set














\(\ds \)

\(=\)







\(\ds \sup \set {i_1 \wedge i_2: i_1 \in D_1^\preceq, i_2 \in D_2^\preceq}\)





$D_1^\preceq$ is ideal in $\mathscr S$














\(\ds \)

\(=\)







\(\ds \sup \set {i_1 \wedge i_2: i_1 \in D_1^\preceq, i_2 \in D_2^\preceq}^\preceq\)





Supremum of Lower Closure of Set














\(\ds \)

\(=\)







\(\ds \sup \set {i_1 \wedge i_2: i_1 \in D_1, i_2 \in D_2}^\preceq\)





Lower Closure of Meet of Lower Closures














\(\ds \)

\(=\)







\(\ds \sup \set {i_1 \wedge i_2: i_1 \in D_1, i_2 \in D_2}\)





Supremum of Lower Closure of Set



It remains to prove (MC) of definition of meet-continuous.
Let $x$ be an element of $S$.
Let $D$ be a directed subset of $S$.
By Singleton is Directed and Filtered Subset:

$\set x$ is directed.
Thus:














\(\ds x \wedge \sup D\)

\(=\)







\(\ds \paren {\sup \set x} \wedge \sup D\)





Supremum of Singleton














\(\ds \)

\(=\)







\(\ds \sup \set {d_1 \wedge d_2: d_1 \in \set x, d_2 \in D}\)




















\(\ds \)

\(=\)







\(\ds \sup \set {x \wedge d: d \in D}\)





Definition of Singleton



$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_2:49




