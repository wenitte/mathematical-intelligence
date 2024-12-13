# 

Source: https://proofwiki.org/wiki/Independent_Sets_of_Dual_Matroid


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $M = \struct {S, \mathscr I}$ be a matroid.
Let $\mathscr B$ be the set of bases of the matroid $M$.

Then the independent subsets of the dual $M^*$ of $M$ is:

$\mathscr I^* = \set{X \subseteq S : \exists B \in \mathscr B : X \subseteq \paren{S \setminus B}}$


Proof
By definition of the dual matroid the set of bases $\mathscr B^*$ of the dual $M^*$ of $M$:

$\mathscr B^* = \set{S \setminus B : B \in \mathscr B}$
From Characterization of Matroid Independent Sets in Terms of Bases:

$\mathscr I^* = \set{X \subseteq S : \exists B \in \mathscr B : X \subseteq \paren{S \setminus B}}$
$\blacksquare$





