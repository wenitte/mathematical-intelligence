# 

Source: https://proofwiki.org/wiki/Extended_Completeness_Theorem_for_Propositional_Tableaux_and_Boolean_Interpretations


It has been suggested that this page be renamed.To discuss this page in more detail, feel free to use the talk page.


Theorem
Tableau proofs (in terms of propositional tableaux) are a strongly complete proof system for boolean interpretations.
More precisely, for every countable collection $\mathbf H$ of WFFs of propositional logic and every WFF $\mathbf A$:

$\mathbf H \models_{\mathrm{BI} } \mathbf A$ implies $\mathbf H \vdash_{\mathrm{PT} } \mathbf A$


Proof
Let $\mathbf A$ be a semantic consequence of $\mathbf H$ for boolean interpretations.
That is, if $v \models_{\mathrm{BI} } \mathbf H$, also $v \models_{\mathrm{BI} } \mathbf A$.
By the truth function for $\neg$, it follows that for such $v$:

$v \not\models_{\mathrm{BI}} \neg \mathbf A$
Therefore, $\mathbf H' := \mathbf H \cup \set {\mathbf A}$ is unsatisfiable for boolean interpretations.

Since $\mathbf H'$ is countable, it follows from the Compactness Theorem for Boolean Interpretations that:

Some finite $\mathbf H' ' \subseteq \mathbf H'$ is unsatisfiable.

By the Tableau Extension Lemma, there exists a finite finished tableau $T$ for $\mathbf H$.
By definition of finished tableau, every branch of $T$ is finished or contradictory.
From the Corollary to the Finished Branch Lemma, $\Phi \sqbrk \Gamma$ is satisfiable for any finished branch $\Gamma$.
But since $\mathbf H' ' \subseteq \Phi \sqbrk \Gamma$, this would imply $\mathbf H' '$ is also satisfiable, which is a contradiction.
It follows that every branch of $T$ is contradictory.
Since $\mathbf H' ' \subseteq \mathbf H'$, replacing the hypothesis set $\mathbf H'$ of $T$ with $\mathbf H' '$ yields another propositional tableau $T'$.

Since every branch of $T'$ is contradictory, $T'$ is a tableau confutation of $\mathbf H'$.
Recalling that $\mathbf H' = \mathbf H \cup \set {\neg \mathbf A}$, we conclude that $T'$ is a tableau proof of $\mathbf A$ from $\mathbf H$:

$\mathbf H \vdash_{\mathrm{PT} } \mathbf A$
$\blacksquare$


Also see
The Extended Soundness Theorem for Propositional Tableaux and Boolean Interpretations in which is proved:

If $\mathbf H \vdash \mathbf A$, then $\mathbf H \models \mathbf A$.


Sources
1996: H. Jerome Keisler and Joel Robbin: Mathematical Logic and Computability ... (previous) ... (next): $\S 1.10$: Completeness: Theorem $1.10.3$




