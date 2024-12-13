# 

Source: https://proofwiki.org/wiki/Meet-Continuous_iff_Meet_of_Suprema_equals_Supremum_of_Meet_of_Ideals



Theorem
Let $\mathscr S = \struct {S, \vee, \wedge, \preceq}$ be an up-complete lattice.
Then

$\mathscr S$ is meet-continuous if and only if
for every ideals $I, J$ in $\mathscr S$: $\paren {\sup I} \wedge \paren {\sup J} = \sup \set {i \wedge j: i \in I, j \in J}$


Proof
Sufficient Condition
Let $\mathscr S$ be meet-continuous.
Define $\II$, the set of all ideals in $\mathscr S$
Define a mapping $f: \II \to S$ such that

$\forall I \in \II: \map f I = \sup I$
By Meet-Continuous iff Ideal Supremum is Meet Preserving:

$f$ preserves meet.
Let $I, J \in \II$.
By definition of mapping preserves meet:

$f$ preserves the infimum of $\set {I, J}$
Thus














\(\ds \paren {\sup I} \wedge \paren {\sup J}\)

\(=\)







\(\ds \map f I \wedge \map f J\)





Definition of $f$














\(\ds \)

\(=\)







\(\ds \inf \set {\map f I, \map f J}\)





Definition of Meet (Order Theory)














\(\ds \)

\(=\)







\(\ds \map \inf {\map {f^\to} {\set {I, J} } }\)





Definition of Image of Subset under Mapping














\(\ds \)

\(=\)







\(\ds \map f {\inf \set {I, J} }\)





Definition of Mapping Preserves Infimum














\(\ds \)

\(=\)







\(\ds \map f {I \wedge J}\)





Definition of Meet (Order Theory)














\(\ds \)

\(=\)







\(\ds \map \sup {I \wedge J}\)





Definition of $f$














\(\ds \)

\(=\)







\(\ds \sup \set {i \wedge j: i \in I, j \in J}\)





Meet in Set of Ideals



$\Box$


Necessary Condition
Assume that for every ideals $I, J$ in $\mathscr S$:

$\paren {\sup I} \wedge \paren {\sup J} = \sup \set {i \wedge j: i \in I, j \in J}$
By Meet of Suprema equals Supremum of Meet of Ideals implies Ideal Supremum is Meet Preserving:

$f$ preserves meet.
Thus by Meet-Continuous iff Ideal Supremum is Meet Preserving:

$\mathscr S$ is meet-continuous.
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_2:50




