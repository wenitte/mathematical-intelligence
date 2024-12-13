# 

Source: https://proofwiki.org/wiki/Product_of_Supremum_and_Infimum_in_Lattice-Ordered_Group

Theorem
Let $\struct {G, \odot}$ be a group.
Let $\preccurlyeq$ be a lattice ordering on $G$.
Let $x, y \in G$ such that $x$ commutes with $y$.

Then:

$\sup \set {x, y} \odot \inf \set {x, y} = x \odot y$


Proof
First we show that $x$ commutes with $\sup \set {x, y}$.
Indeed:














\(\ds x \odot \sup \set {x, y}\)

\(=\)







\(\ds \sup \set {x \odot x, x \odot y}\)





Suprema in Ordered Group














\(\ds \)

\(=\)







\(\ds \sup \set {x \odot x, y \odot x}\)





as $x$ and $y$ commute














\(\ds \)

\(=\)







\(\ds \sup \set {x, y} \odot x\)





Suprema in Ordered Group



Similarly:

$y$ commutes with $\sup \set {x, y}$
Then using Infima in Ordered Group in the same way as above:

$x$ commutes with $\inf \set {x, y}$
$y$ commutes with $\inf \set {x, y}$

Then we have:














\(\ds x \odot \paren {\sup \set {x, y} }^{-1} \odot y\)

\(=\)







\(\ds x \odot \inf \set {x^{-1}, y^{-1} } \odot y\)




















\(\ds \)

\(=\)







\(\ds \inf \set {x \odot x^{-1} \odot y, x \odot y^{-1} \odot y}\)





Inverse of Supremum in Ordered Group is Infimum of Inverses














\(\ds \)

\(=\)







\(\ds \inf \set {y, x}\)




















\(\ds \)

\(=\)







\(\ds \inf \set {x, y}\)














\(\ds \leadsto \ \ \)





\(\ds x \odot y \odot \paren {\sup \set {x, y} }^{-1}\)

\(=\)







\(\ds \inf \set {x, y}\)





from the commutativity proved a priori








\(\ds \leadsto \ \ \)





\(\ds x \odot y\)

\(=\)







\(\ds \sup \set {x, y} \odot \inf \set {x, y}\)









$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 15$: Ordered Semigroups: Exercise $15.11$




