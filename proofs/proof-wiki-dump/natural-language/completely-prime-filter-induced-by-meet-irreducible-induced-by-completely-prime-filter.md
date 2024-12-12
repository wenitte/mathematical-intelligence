# 

Source: https://proofwiki.org/wiki/Completely_Prime_Filter_Induced_by_Meet_Irreducible_Induced_by_Completely_Prime_Filter


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $\struct{L, \vee, \wedge, \preceq}$ be a frame.
Let $\top$ denote the greatest element of $L$.

For every completely prime filter $p$ of $L$, let:

$b_p = \bigvee \set{a \in L : a \notin p}$
where:

$\bigvee \set{a \in L : a \notin p}$ denotes the supremum of the set $\set{a \in L : a \notin p}$
which is a meet irreducible element not equal to $\top$

For every meet-irreducible element $b$ of $L$  not equal to $\top$, let:

$p_b = \set{a \in L : a \npreceq b}$
where

$p_b$ is a completely prime filter of $L$.

Let $p$ be a completely prime filter $p$ of $L$.

Then:

$p_{b_p} = p$


Proof
We have:














\(\ds p_{b_p}\)

\(=\)







\(\ds \set{a \in L : a \npreceq b_p}\)





Definition of $p_{b_p}$














\(\ds \)

\(=\)







\(\ds \set{a \in L : a \npreceq \bigvee \set{a' \in L : a' \notin p} }\)





Definition of $b_p$














\(\ds \)

\(=\)







\(\ds \set{a \in L : a \npreceq \bigvee \paren{L \setminus p} }\)





Definition of Set Difference














\(\ds \)

\(=\)







\(\ds \set{a \in L : a \in p}\)





Element of Completely Prime Filter iff Does not Precede Supremum of Relative Complement














\(\ds \)

\(=\)







\(\ds p\)





Definition of Subset



$\blacksquare$





