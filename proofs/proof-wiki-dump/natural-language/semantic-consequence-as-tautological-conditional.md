# 

Source: https://proofwiki.org/wiki/Semantic_Consequence_as_Tautological_Conditional



Theorem
Let $\FF$ be a finite set of WFFs of propositional logic.
Let $\mathbf A$ be another WFF.

Then the following are equivalent:














\(\ds \FF\)

\(\models_{\mathrm {BI} }\)







\(\ds \mathbf A\)




















\(\ds \)

\(\models_{\mathrm {BI} }\)







\(\ds \bigwedge \FF \implies \mathbf A\)









that is, $\mathbf A$ is a semantic consequence of $\FF$ if and only if $\ds \bigwedge \FF \implies \mathbf A$ is a tautology.
Here, $\ds \bigwedge \FF$ is the conjunction of $\FF$.


Proof
Necessary Condition
let:

$\FF \models_{\mathrm {BI} } \mathbf A$
Aiming for a contradiction, suppose $\ds \bigwedge \FF \implies \mathbf A$ were not a tautology.
Then there exists a boolean interpretation $v$ such that:

$\map v {\ds \bigwedge \FF} = \T$
$\map v {\mathbf A} = \F$
by definition of the boolean interpretation of $\implies$.

It now follows from the boolean interpretation of conjunction that:

$\map v {\mathbf B} = \T$
for every $\mathbf B \in \FF$.
Hence, by definition of model:

$v \models_{\mathrm {BI} } \FF$
It now follows from our assumption that:

$\map v {\mathbf A} = \T$
This is a contradiction, hence $\ds \bigwedge \FF \implies \mathbf A$ is a tautology.
$\Box$


Sufficient Condition
Let $\ds \bigwedge \FF \implies \mathbf A$ be a tautology.
Let $v$ be an arbitrary model of $\FF$.
Then:

$\map v {\mathbf B} = \T$
for every $\mathbf B \in \FF$, whence by the boolean interpretation of conjunction:

$\map v \FF = \T$
Since $\ds \bigwedge \FF \implies \mathbf A$ is a tautology, it must be the case that:

$\map v {\mathbf A} = \T$

Hence, since $v$ was arbitrary:

$\FF \models_{\mathrm {BI} } \mathbf A$
$\blacksquare$


Sources
2012: M. Ben-Ari: Mathematical Logic for Computer Science (3rd ed.) ... (previous) ... (next): $\S 2.5.3$: Theorem $2.50$
2012: M. Ben-Ari: Mathematical Logic for Computer Science (3rd ed.) ... (previous) ... (next): $\S 2.10$: Exercise $2.16$




