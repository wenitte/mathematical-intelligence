# 

Source: https://proofwiki.org/wiki/Satisfiable_iff_Negation_is_Falsifiable



Theorem
Let $\mathbf A$ be a WFF of propositional logic.

Then $\mathbf A$ is satisfiable if and only if its negation $\neg \mathbf A$ is falsifiable.


Proof
Necessary Condition
Let $\mathbf A$ be satisfiable.
Then there exists a boolean interpretation $v$ of $\mathbf A$ such that:

$\map v {\mathbf A} = \T$
Hence, by definition of the boolean interpretation of negation:

$\map v {\neg \mathbf A} = \F$
It follows that $\neg \mathbf A$ is falsifiable.
$\Box$


Sufficient Condition
Let $\neg \mathbf A$ be falsifiable.
Then there exists a boolean interpretation $v$ of $\neg \mathbf A$ such that:

$\map v {\neg \mathbf A} = \F$
Hence, by definition of the boolean interpretation of negation:

$\map v {\mathbf A} = \T$
It follows that $\mathbf A$ is satisfiable.
$\blacksquare$


Sources
2012: M. Ben-Ari: Mathematical Logic for Computer Science (3rd ed.) ... (previous) ... (next): $\S 2.5$: Theorem $2.39$




