# 

Source: https://proofwiki.org/wiki/Closure_of_Intersection_may_not_equal_Intersection_of_Closures/Proof_2



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


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $32$. Special Subsets of the Real Line: $5 \ \text{(d)}$




