# 

Source: https://proofwiki.org/wiki/Meet_of_Suprema_equals_Supremum_of_Meet_of_Ideals_implies_Ideal_Supremum_is_Meet_Preserving

Theorem
Let $\mathscr S = \struct {S, \wedge, \preceq}$ be an up-complete meet semilattice.
Let $f: \map {\it Ids} {\mathscr S} \to S$ be a mapping such that:

$\forall I \in \map {\it Ids} {\mathscr S}: \map f I = \sup_{\mathscr S} I$
where 

$\map {\it Ids} {\mathscr S}$ denotes the set of all ideals in $\mathscr S$
Let

$\forall I_1, I_2 \in \map {\it Ids} {\mathscr S}: \paren {\sup I_1} \wedge \paren {\sup I_2} = \sup \set {i \wedge j: i \in I_1, j \in I_2}$

Then:
$f$ preserves meet as a mapping from $\struct {\map {\it Ids} {\mathscr S}, \subseteq}$ into $\mathscr S$


Proof
Let $I, J \in \map {\it Ids} {\mathscr S}$ such that

$\set {I, J}$ admits an infimum in $\struct {\map {\it Ids} {\mathscr S}, \subseteq}$.
By definition of image of set:

$\map {f^\to} {\set {I, J} } = \set {\map f I, \map f J}$
Thus by definition of meet semilattice:

$\map {f^\to} {\set {I, J} }$ admits an infimum in $\mathscr S$.
Thus:














\(\ds \map \inf {\map {f^\to} {\set {I, J} } }\)

\(=\)







\(\ds \map f I \wedge \map f J\)





Definition of Meet (Order Theory)














\(\ds \)

\(=\)







\(\ds \paren {\sup I} \wedge \paren {\sup J}\)





Definition of $f$














\(\ds \)

\(=\)







\(\ds \sup \set {x \wedge y: x \in I, y \in J}\)





Assumption














\(\ds \)

\(=\)







\(\ds \map \sup {I \wedge J}\)





Meet in Set of Ideals














\(\ds \)

\(=\)







\(\ds \map f {I \wedge J}\)





definition of $f$














\(\ds \)

\(=\)







\(\ds \map f {\inf \set {I, J} }\)





Definition of Meet (Order Theory)



$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_2:39




