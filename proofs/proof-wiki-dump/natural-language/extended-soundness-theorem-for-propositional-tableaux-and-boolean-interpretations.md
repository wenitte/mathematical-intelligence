# 

Source: https://proofwiki.org/wiki/Extended_Soundness_Theorem_for_Propositional_Tableaux_and_Boolean_Interpretations



Theorem
Tableau proofs (in terms of propositional tableaux) are a strongly sound proof system for boolean interpretations.
That is, for every collection $\mathbf H$ of WFFs of propositional logic and every WFF $\mathbf A$:

$\mathbf H \vdash_{\mathrm{PT}} \mathbf A$ implies $\mathbf H \models_{\mathrm{BI}} \mathbf A$


Proof
By definition of tableau proof, $\mathbf H \vdash_{\mathrm{PT}} \mathbf A$ means:

There exists a tableau confutation of $\mathbf H \cup \set {\neg\mathbf A}$.
By Tableau Confutation implies Unsatisfiable, it follows that $\mathbf H \cup \set {\neg\mathbf A}$ is unsatisfiable for boolean interpretations.

Therefore, if some boolean interpretation $v$ models $\mathbf H$:

$v \models_{\mathrm{BI}} \mathbf H$
then since $\mathbf H \cup \set {\neg\mathbf A}$ is unsatisfiable:

$v \not\models_{\mathrm{BI}} \neg\mathbf H$
Now by definition of the relation $\models_{\mathrm{BI}}$, it must be that:

$\map v {\neg \mathbf A} = F$
By the truth table for $\neg$, this implies:

$\map v {\mathbf A} = T$
which is to say $v \models_{\mathrm{BI}} \mathbf A$.

Hence:

$v \models_{\mathrm{BI}} \mathbf H$ implies $v \models_{\mathrm{BI}} \mathbf A$
that is, $\mathbf A$ is a $\mathrm{BI}$-semantic consequence of $\mathbf H$:

$\mathbf H \models_{\mathrm{BI}} \mathbf A$
which was to be shown.
$\blacksquare$


Also see
Extended Completeness Theorem for Propositional Tableaux and Boolean Interpretations, which proves:
If $\mathbf H \models \mathbf A$, then $\mathbf H \vdash \mathbf A$.


Sources
1996: H. Jerome Keisler and Joel Robbin: Mathematical Logic and Computability ... (previous) ... (next): $\S 1.8$: Soundness: Theorem $1.8.3$




