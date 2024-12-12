# 

Source: https://proofwiki.org/wiki/Characterization_of_Matroid_Independent_Sets_in_Terms_of_Bases


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $M = \struct {S, \mathscr I}$ be a matroid.
Let $\mathscr B$ be the set of bases of the matroid $M$.

Then:

$\mathscr I = \set{X \subseteq S : \exists B \in \mathscr B : X \subseteq B}$
Proof
Let $\mathscr I^\prime = \set{X \subseteq S : \exists B \in \mathscr B : X \subseteq B}$

From Independent Subset is Contained in Base:

$\mathscr I \subseteq \mathscr I^\prime$

By definition of matroid base:

$\mathscr B \subseteq \mathscr I$
By matroid axiom $\text I 2$:

$\mathscr I^\prime \subseteq \mathscr I$

By set equality:

$\mathscr I = \mathscr I^\prime$
$\blacksquare$





