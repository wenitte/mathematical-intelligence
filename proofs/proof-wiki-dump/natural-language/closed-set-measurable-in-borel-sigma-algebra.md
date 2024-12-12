# 

Source: https://proofwiki.org/wiki/Closed_Set_Measurable_in_Borel_Sigma-Algebra

Theorem
Let $\struct {S, \tau}$ be a topological space.
Let $\map \BB \tau$ be the associated Borel $\sigma$-algebra.
Let $C$ be a closed set in $\struct {S, \tau}$.

Then $C$ is $\map \BB \tau$-measurable.


Proof
Since $C$ is closed, $S \setminus C$ is open.
By definition of Borel $\sigma$-algebra, $S \setminus C \in \map \BB \tau$.

By axiom $(2)$ for $\sigma$-algebras:

$S \setminus \paren {S \setminus C} \in \map \BB \tau$
and this set equals $C$ by Set Difference with Set Difference since $C \subseteq S$.

The result follows by definition of measurable set.
$\blacksquare$





