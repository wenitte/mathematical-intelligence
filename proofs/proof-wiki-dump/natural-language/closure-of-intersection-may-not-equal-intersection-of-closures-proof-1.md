# 

Source: https://proofwiki.org/wiki/Closure_of_Intersection_may_not_equal_Intersection_of_Closures/Proof_1



Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $H_1$ and $H_2$ be subsets of $S$.
Let ${H_1}^-$ and ${H_2}^-$ denote the closures of $H_1$ and $H_2$ respectively.

Then it is not necessarily the case that:

$\paren {H_1 \cap H_2}^- = {H_1}^- \cap {H_2}^-$


Proof
Outline
From Closure of Intersection is Subset of Intersection of Closures, it is seen that it is always the case that:

$\paren {H_1 \cap H_2}^- \subseteq {H_1}^- \cap {H_2}^-$
It remains to be shown that it does not always happen that:

$\paren {H_1 \cap H_2}^- = {H_1}^- \cap {H_2}^-$
The result is demonstrated by Proof by Counterexample.


Counterexample
Let $\struct {\R, \tau}$ be the real number line under the usual (Euclidean) topology.
Let $\Q$ denote the set of rational numbers.
Let $\R \setminus \Q$ denote the set of irrational numbers.

From Closure of Intersection of Rationals and Irrationals is Empty Set:

$\paren {\Q \cap \paren {\R \setminus \Q} }^- = \O$
From Intersection of Closures of Rationals and Irrationals is Reals:

$\Q^- \cap \paren {\R \setminus \Q}^- = \R$
The result follows.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $30 \text { - } 31$. The Rational and Irrational Numbers: $3$




