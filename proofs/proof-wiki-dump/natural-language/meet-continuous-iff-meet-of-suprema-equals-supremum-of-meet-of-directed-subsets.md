# 

Source: https://proofwiki.org/wiki/Meet-Continuous_iff_Meet_of_Suprema_equals_Supremum_of_Meet_of_Directed_Subsets



Theorem
Let $\mathscr S = \struct {S, \vee, \wedge, \preceq}$ be an up-complete lattice.
Then:

$\mathscr S$ is meet-continuous
if and only if:

for every directed subsets $D_1, D_2$ of $S$: $\paren {\sup D_1} \wedge \paren {\sup D_2} = \sup \set {d_1 \wedge d_2: d_1 \in D_1, d_2 \in D_2}$


Proof
Sufficient Condition
Let $\mathscr S$ be meet-continuous.
By Meet-Continuous iff Meet of Suprema equals Supremum of Meet of Ideals:

for every ideals $I, J$ in $\mathscr S$: $\paren {\sup I} \wedge \paren {\sup J} = \sup \set {i \wedge j: i \in I, j \in J}$
Let $D_1, D_2$ directed subsets of $S$.
By definition of up-complete:

$D_1$ and $D_2$ admit suprema
By Supremum of Lower Closure of Set:

$D_1^\preceq$ and $D_2^\preceq$ admit suprema
where

$D_1^\preceq$ denotes the lower closure of $D_1$.
Thus














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



$\Box$


Necessary Condition
Assume that

for every directed subsets $D_1, D_2$ of $S$: $\paren {\sup D_1} \wedge \paren {\sup D_2} = \sup \set {d_1 \wedge d_2: d_1 \in D_1, d_2 \in D_2}$
By exemplification:

for every ideals $I_1, I_2$ of $S$: $\paren {\sup I_1} \wedge \paren {\sup I_2} = \sup \set {d_1 \wedge d_2: d_1 \in I_1, d_2 \in I_2}$
Thus by Meet-Continuous iff Meet of Suprema equals Supremum of Meet of Ideals:

$\mathscr S$ is meet-continuous.
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_2:51




