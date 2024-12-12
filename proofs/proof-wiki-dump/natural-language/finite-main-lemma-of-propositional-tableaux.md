# 

Source: https://proofwiki.org/wiki/Finite_Main_Lemma_of_Propositional_Tableaux


It has been suggested that this page or section be merged into Main Lemma of Propositional Tableaux.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mergeto}} from the code.


Lemma
Let $\mathbf H$ be a finite set of WFFs of propositional logic.
Either $\mathbf H$ has a tableau confutation or $\mathbf H$ has a model.


Proof
Let $\mathbf H$ be a finite set of WFFs of propositional logic which does not have a tableau confutation.
By the Tableau Extension Lemma, the tableau which consists only of a root node with hypothesis set $\mathbf H$ can be extended into a finite finished tableau $T$.
The tableau $T$ still has root $\mathbf H$.
Since $T$ is not a confutation, it has a finished branch $\Gamma$.
By Finished Branch Lemma: Corollary, $\Gamma$ has a model, $\MM$, say.
In particular, $\MM$ is a model of $\mathbf H$ as required.
$\blacksquare$


Comment
From Tableau Confutation implies Unsatisfiable, we already know that $\mathbf H$ can not have both a tableau confutation and a model.
This result gives us that $\mathbf H$ has a tableau confutation if and only if $\mathbf H$ does not have a model.


Sources
1996: H. Jerome Keisler and Joel Robbin: Mathematical Logic and Computability ... (previous) ... (next): $\S 1.10$: Completeness: Lemma $1.10.1$




