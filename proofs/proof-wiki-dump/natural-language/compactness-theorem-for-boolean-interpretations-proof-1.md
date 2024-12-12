# 

Source: https://proofwiki.org/wiki/Compactness_Theorem_for_Boolean_Interpretations/Proof_1

Theorem
Let $\mathbf H$ be a countable set of WFFs of propositional logic.
Suppose $\mathbf H$ is finitely satisfiable for boolean interpretations.
That is, suppose that every finite subset $\mathbf H' \subseteq \mathbf H$ is satisfiable for boolean interpretations.

Then $\mathbf H$ has a model.


Proof
Suppose $\mathbf H$ does not have a model.
By the Main Lemma of Propositional Tableaux, $\mathbf H$ has a tableau confutation $T$.
By Tableau Confutation contains Finite Tableau Confutation, $T$ may be assumed to be finite.
Hence the set $\mathbf H'$ of all WFFs in $\mathbf H$ used somewhere in $T$ is finite.
Now, let $T'$ be the labeled tree which is the same as $T$ but with root $\mathbf H'$ instead of $\mathbf H$.
Then $T'$ is a tableau confutation of $\mathbf H'$.
By the Tableau Confutation implies Unsatisfiable, $\mathbf H'$ has no models.
But this contradicts the assumption that all finite subsets of $\mathbf H$ have models.
Hence the result.
$\blacksquare$


Sources
1996: H. Jerome Keisler and Joel Robbin: Mathematical Logic and Computability ... (previous) ... (next): $\S 1.11$: Compactness: Theorem $1.11.5$




