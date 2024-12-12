# 

Source: https://proofwiki.org/wiki/Column_Equivalence_is_Equivalence_Relation



Theorem
Column equivalence is an equivalence relation.


Proof
In the following, $\mathbf A$, $\mathbf B$ and $\mathbf C$ denote arbitrary matrices in a given matrix space $\map \MM {m, n}$ for $m, n \in \Z{>0}$.

We check in turn each of the conditions for equivalence:


Reflexive
Let $\kappa_i$ denote an arbitrary column of $\mathbf A$.
Let $e$ denote the elementary column operation $\kappa_i \to 1 \kappa_i$ applied to $\mathbf A$.

Then trivially:

$\map e {\mathbf A} = \mathbf A$
and so $\mathbf A$ is trivially column equivalent to itself.
So column equivalence has been shown to be reflexive.
$\Box$


Symmetric
Let $\mathbf A$ be column equivalent to $\mathbf B$.
Let $\Gamma$ be the column operation that transforms $\mathbf A$ into $\mathbf B$.
From Column Operation has Inverse there exists a column operation $\Gamma'$ which transforms $\mathbf B$ into $\mathbf A$.
Thus $\mathbf B$ is column equivalent to $\mathbf A$.
So column equivalence has been shown to be symmetric.
$\Box$


Transitive
Let $\mathbf A$ be column equivalent to $\mathbf B$, and let $\mathbf B$ be column equivalent to $\mathbf C$.
Let $\Gamma_1$ be the column operation that transforms $\mathbf A$ into $\mathbf B$.
Let $\Gamma_2$ be the column operation that transforms $\mathbf B$ into $\mathbf C$.
From Sequence of Column Operations is Column Operation, the application of $\mathbf C$ is column equivalent to $\mathbf A$.
So column equivalence has been shown to be transitive.
$\Box$

Column equivalence has been shown to be reflexive, symmetric and transitive.
Hence by definition it is an equivalence relation.
$\blacksquare$


Also see
Row Equivalence is Equivalence Relation




