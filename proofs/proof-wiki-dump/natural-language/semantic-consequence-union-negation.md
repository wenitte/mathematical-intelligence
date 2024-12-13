# 

Source: https://proofwiki.org/wiki/Semantic_Consequence_Union_Negation


It has been suggested that this page be renamed.To discuss this page in more detail, feel free to use the talk page.


Theorem
Let $U$ be a set of propositional formulas.
Let $P$ be a propositional formula.
Let $U \models P$ denote that $U$ is a semantic consequence $P$.

Then:

$U \models P$
iff:

$U \cup \set {\neg P}$ has no models.


Proof
Sufficient Condition
Aiming for a contradiction, suppose $U \models P$.

Let $\MM$ be a model such that:

$\MM \models U \cup \set {\neg P}$
Then by definition of $\MM$ being a model, we have that:

$\MM \models U$
and by definition of semantic consequence:

$\MM \models P$
So we have that $\MM \models P$ and $\MM \models \neg P$
By definition of contradiction, it follows that there can be no such model.

So $U \models P$ is a sufficient condition for $U \cup \set {\neg P}$ to have no models.
$\Box$


Necessary Condition
Suppose that $U \cup \set {\neg P}$ has no models.

There are the following possibilities:
$(1): \quad \neg P$ has no models, in which case it is itself a contradiction.
Hence from Tautology and Contradiction, $P$ is a tautology.
Hence $P$ is true under every model.
Hence whatever $U$ may be, every model of $U$ is also a model of $P$:

$U \models P$

$(2): \quad U$ has no models, in which case every model of $U$ is also a model of $P$ vacuously, and so:

$U \models P$

$(3): \quad$ There exists at least one model of $U$, but each one does not model $\neg P$.
Let $\MM$ be such a model.
We have that:

$\MM \not \models \neg P$
so by definition of negation:

$\MM \models P$
Thus $\MM \models U$ implies that $\MM \models P$.
Hence by definition:

$U \models P$

In all cases $U \models P$.

So $U \models P$ is a necessary condition for $U \cup \set {\neg P}$ to have no models.
$\blacksquare$


Sources

This page may be the result of a refactoring operation.As such, the following source works, along with any process flow, will need to be reviewed.When this has been completed, the citation of that source work (if it is appropriate that it stay on this page) is to be placed above this message, into the usual chronological ordering.In particular: Work out where this goes in the flowIf you have access to any of these works, then you are invited to review this list, and make any necessary corrections.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{SourceReview}} from the code.
1996: H. Jerome Keisler and Joel Robbin: Mathematical Logic and Computability: $\S 1.7$:
Evidently $\mathbf A$ is a semantic consequence of $\mathbf H$ if and only if the set $\mathbf H \cup \set {\neg \mathbf A}$ has no models.




