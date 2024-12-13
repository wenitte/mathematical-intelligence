# 

Source: https://proofwiki.org/wiki/Matroid_is_Uniquely_Defined_by_Bases


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $M = \struct {S, \mathscr I}$ be a matroid.
Let $\mathscr B$ be the set of bases of the matroid $M$.

Then:

$M$ is the only matroid on $S$ whose set of bases is $\mathscr B$.
Proof
Let $M^\prime = \struct {S, \mathscr I^\prime}$ whose set of bases is $\mathscr B$.

From Characterization of Matroid Independent Sets in Terms of Bases:

$\mathscr I^\prime = \set{X \subseteq S : \exists B \in \mathscr B : X \subseteq B}$
Similarly:

$\mathscr I = \set{X \subseteq S : \exists B \in \mathscr B : X \subseteq B}$

Hence:

$\mathscr I^\prime = \mathscr I$
and so:

$M^\prime = M$
$\blacksquare$





