# 

Source: https://proofwiki.org/wiki/Finished_Set_Lemma/Corollary

Corollary to Finished Set Lemma
Let $\Delta$ be a finished set of WFFs of propositional logic.

Then $\Delta$ has a model.


Proof
Note that the set of basic WFFs in $\Delta$ has at least one model.
Let $v$ be the boolean interpretation defined as follows:
$\quad \map v p = \begin{cases}
\T & : p \in \Delta \\
\F & : p \notin \Delta
\end{cases}$
Because $\Delta$ is finished, it is not contradictory, and hence $\map v p = \F$ if $\neg p \in \Delta$.
Thus $v$ is a model of the basic WFFs of $\Delta$.
The result follows by the Finished Set Lemma.
$\blacksquare$


Sources
1996: H. Jerome Keisler and Joel Robbin: Mathematical Logic and Computability ... (previous) ... (next): $\S 1.9$: Finished Sets: Lemma $1.9.1$




