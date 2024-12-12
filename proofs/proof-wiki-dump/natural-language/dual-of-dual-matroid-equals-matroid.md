# 

Source: https://proofwiki.org/wiki/Dual_of_Dual_Matroid_Equals_Matroid


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $M = \struct {S, \mathscr I}$ be a matroid.
Let $M^*$ denote the dual of $M$.

Then:

$\paren{M^*}^* = M$

That is, the dual $\paren{M^*}^*$ of $M^*$ is $M$.


Proof
Let $\mathscr B$ denote the set of bases of $M$.
Let $\paren{\mathscr B^*}^*$ denote the set of bases of $\paren{M^*}^*$.

By definition of dual matroid:


We have:














\(\ds \paren{\mathscr B^*}^*\)

\(=\)







\(\ds \set{S \setminus \paren{S \setminus B} : B \in \mathscr B}\)





Definition of Dual Matroid














\(\ds \)

\(=\)







\(\ds \set{B : B \in \mathscr B}\)





Complement of Complement














\(\ds \)

\(=\)







\(\ds \mathscr B\)










Let $\paren{\mathscr I^*}^*$ denote the independent subsets of $\paren{M^*}^*$.

We have:














\(\ds \paren{\mathscr I^*}^*\)

\(=\)







\(\ds \set{X \subseteq S : \exists B \in \mathscr B : X \subseteq B}\)





Characterization of Matroid Independent Sets in Terms of Bases














\(\ds \)

\(=\)







\(\ds \mathscr I\)





Characterization of Matroid Independent Sets in Terms of Bases




By definition of matroid:

$\paren{M^*}^* = M$
$\blacksquare$


Sources
1976: Dominic Welsh: Matroid Theory Chapter $2.$ $\S 1.$ The Dual Matroid, Theorem $1$
2011: James Oxley: Matroid Theory (2nd ed.) Chapter $2.$ Duality, $\S 2.1.$ The definition and basic properties, Theorem $2.1.3$




