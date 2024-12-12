# 

Source: https://proofwiki.org/wiki/Dual_Distributive_Lattice_is_Distributive



Theorem
Let $L = \struct {S, \vee, \wedge, \preceq}$ be a lattice.
Then

$L$ is a distributive lattice
if and only if

$L^{-1}$ is a distributive lattice
where $L^{-1} = \struct {S, \succeq}$ denotes the dual of $L$.


Proof
Sufficient Condition
Let $L$ be a distributive lattice.
By Dual of Lattice Ordering is Lattice Ordering:

$L^{-1}$ is lattice.
Let $x, y, z \in S$.
$\vee'$ and $\wedge'$ denotes join and meet in $L^{-1}$.
Thus














\(\ds x \wedge' \paren {y \vee' z}\)

\(=\)







\(\ds x \wedge' \paren {y \wedge z}\)





Join is Dual to Meet














\(\ds \)

\(=\)







\(\ds x \vee \paren {y \wedge z}\)





Join is Dual to Meet














\(\ds \)

\(=\)







\(\ds \paren {x \vee y} \wedge \paren {x \vee z}\)





Definition of Distributive Lattice














\(\ds \)

\(=\)







\(\ds \paren {x \wedge' y} \wedge \paren {x \wedge' z}\)





Join is Dual to Meet














\(\ds \)

\(=\)







\(\ds \paren {x \wedge' y} \vee' \paren {x \wedge' z}\)





Join is Dual to Meet



$\Box$


Necessary Condition
This follows by mutatis mutandis.
$\blacksquare$


Sources
Mizar article YELLOW_7:25




