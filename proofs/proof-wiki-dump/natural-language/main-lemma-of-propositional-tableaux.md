# 

Source: https://proofwiki.org/wiki/Main_Lemma_of_Propositional_Tableaux

Lemma
Let $\mathbf H$ be a countable set of WFFs of propositional logic.
Either $\mathbf H$ has a tableau confutation or $\mathbf H$ has a model.


Proof
If $\mathbf H$ is finite, then the Finite Main Lemma of Propositional Tableaux applies.
So, assume that $\mathbf H$ is countably infinite.

Suppose $\mathbf H$ does not have a tableau confutation.
By Countable Hypothesis Set has Finished Tableau, there is a finished tableau $T$ with hypothesis set $\mathbf H$.
By Finished Propositional Tableau has Finished Branch or is Confutation‎, as $T$ is (by hypothesis) not a confutation, it must have a finished branch; call it $\Gamma$.
By Finished Set Lemma, the set of WFFs of propositional logic on $\Gamma$ has a model $\MM$.
Finally, because all the WFFs in the hypothesis set occur on $\Gamma$, $\MM \models \mathbf H$.
$\blacksquare$


Sources
1996: H. Jerome Keisler and Joel Robbin: Mathematical Logic and Computability ... (previous) ... (next): $\S 1.11$: Compactness: Lemma $1.11.1$




