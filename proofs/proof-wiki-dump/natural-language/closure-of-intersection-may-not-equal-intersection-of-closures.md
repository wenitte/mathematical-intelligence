# 

Source: https://proofwiki.org/wiki/Closure_of_Intersection_may_not_equal_Intersection_of_Closures



Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $H_1$ and $H_2$ be subsets of $S$.
Let ${H_1}^-$ and ${H_2}^-$ denote the closures of $H_1$ and $H_2$ respectively.

Then it is not necessarily the case that:

$\paren {H_1 \cap H_2}^- = {H_1}^- \cap {H_2}^-$


Outline of Proof
From Closure of Intersection is Subset of Intersection of Closures, it is seen that it is always the case that:

$\paren {H_1 \cap H_2}^- \subseteq {H_1}^- \cap {H_2}^-$
It remains to be shown that it does not always happen that:

$\paren {H_1 \cap H_2}^- = {H_1}^- \cap {H_2}^-$
The result is demonstrated by Proof by Counterexample.


Proof 1
Let $\struct {\R, \tau}$ be the real number line under the usual (Euclidean) topology.
Let $\Q$ denote the set of rational numbers.
Let $\R \setminus \Q$ denote the set of irrational numbers.

From Closure of Intersection of Rationals and Irrationals is Empty Set:

$\paren {\Q \cap \paren {\R \setminus \Q} }^- = \O$
From Intersection of Closures of Rationals and Irrationals is Reals:

$\Q^- \cap \paren {\R \setminus \Q}^- = \R$
The result follows.
$\blacksquare$


Proof 2
Let $\struct {\R, \tau_d}$ be the real number line under the usual (Euclidean) topology.
Let $H_1 = \openint 0 {\dfrac 1 2}$ and $H_2 = \openint {\dfrac 1 2} 1$.
By inspection it can be seen that:

$H_1 \cap H_2 = \O$
Thus from Closure of Empty Set is Empty Set:

$\paren {H_1 \cap H_2}^- = \O$

From Closure of Open Real Interval is Closed Real Interval:

$H_1 = \closedint 0 {\dfrac 1 2}, H_2 = \closedint {\dfrac 1 2} 1$
Thus:

${H_1}^- \cap {H_2}^- = \set {\dfrac 1 2}$
So $\paren {H_1 \cap H_2}^- \ne {H_1}^- \cap {H_2}^-$
Hence the result.
$\blacksquare$


Examples
Arbitrary Subsets of $\R$
Let $H$ and $K$ be subsets of the set of real numbers $\R$ defined as:














\(\ds H\)

\(=\)







\(\ds \openint 0 2 \cup \openint 3 4\)




















\(\ds K\)

\(=\)







\(\ds \openint 1 3\)










Let $\map \cl H$ denote the closure of $H$.

Then:

$H \cap \map \cl K$
$\map \cl H \cap K$
$\map \cl H \cap \map \cl K$
$\map \cl {H \cap K}$
are all different.


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $3$: Continuity generalized: topological spaces: $3.7$: Definitions: Proposition $3.7.17$
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Problems: Section $1: \ 2$




