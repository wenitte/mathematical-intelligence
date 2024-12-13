# 

Source: https://proofwiki.org/wiki/Meet_Irreducible_Induced_by_Completely_Prime_Filter_Induced_by_Meet_Irreducible


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $\struct{L, \vee, \wedge, \preceq}$ be a frame.
Let $\top$ denote the greatest element of $L$.

For every meet-irreducible element $b$ of $L$ not equal to $\top$, let:

$p_b = \set{a \in L : a \npreceq b}$
where

$p_b$ is a completely prime filter of $L$.

For every completely prime filter $p$ of $L$, let:

$b_p = \bigvee \set{a \in L : a \notin p}$
where:

$\bigvee \set{a \in L : a \notin p}$ denotes the supremum of the set $\set{a \in L : a \notin p}$
which is a meet irreducible element not equal to $\top$

Let $b$ be a meet-irreducible element of $L$ not equal to $\top$.

Then:

$b_{p_b} = b$


Proof
We have:














\(\ds b_{p_b}\)

\(=\)







\(\ds \bigvee \set{a \in L : a \notin p_b}\)





Definition of $b_{p_b}$














\(\ds \)

\(=\)







\(\ds \bigvee \set{a \in L : a \notin \set{x \in L : x \npreceq b} }\)





Definition of $p_b$














\(\ds \)

\(=\)







\(\ds \bigvee \set{a \in L : a \in \set{x \in L : x \preceq b} }\)





Definition of Relative Complement














\(\ds \)

\(=\)







\(\ds \bigvee \set{a \in L : a \preceq b}\)




















\(\ds \)

\(=\)







\(\ds b\)





Supremum of Lower Closure of Element



$\blacksquare$





