# 

Source: https://proofwiki.org/wiki/Interior_of_Union_is_not_necessarily_Union_of_Interiors



Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $H_1$ and $H_2$ be subsets of $S$.
Let ${H_1}^\circ$ and ${H_2}^\circ$ denote the interiors of $H_1$ and $H_2$ respectively.

Then it is not necessarily the case that:

$\left({H_1 \cup H_2}\right)^\circ = {H_1}^\circ \cup {H_2}^\circ$


Proof
From Union of Interiors is Subset of Interior of Union:

$\paren {H_1 \cup H_2}^\circ \supseteq {H_1}^\circ \cup {H_2}^\circ$
It remains to be shown that it is not necessarily the case that:

$\paren {H_1 \cup H_2}^\circ = {H_1}^\circ \cup {H_2}^\circ$

Proof by Counterexample:
Let $\struct {\R, \tau_d}$ be the real number line under the usual (Euclidean) topology.
Let $H_1 = \closedint 0 {\dfrac 1 2}$ and $H_2 = \closedint {\dfrac 1 2} 1$.
Then:














\(\ds \paren {H_1 \cup H_2}^\circ\)

\(=\)







\(\ds \paren {\closedint 0 {\dfrac 1 2} \cup \closedint {\dfrac 1 2} 1}^\circ\)




















\(\ds \)

\(=\)







\(\ds \closedint 0 1^\circ\)





by definition














\(\ds \)

\(=\)







\(\ds \openint 0 1\)





Interior of Closed Real Interval is Open Real Interval




and:














\(\ds {H_1}^\circ \cup {H_2}^\circ\)

\(=\)







\(\ds \closedint 0 {\dfrac 1 2}^\circ \cup \closedint {\dfrac 1 2} 1^\circ\)




















\(\ds \)

\(=\)







\(\ds \openint 0 {\dfrac 1 2} \cup \openint {\dfrac 1 2} 1\)





Interior of Closed Real Interval is Open Real Interval














\(\ds \)

\(\ne\)







\(\ds \openint 0 1\)





as $\dfrac 1 2$ is in one but not the other



Hence the result.
$\blacksquare$


Also see
Closure of Intersection may not equal Intersection of Closures


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $32$. Special Subsets of the Real Line: $6$




