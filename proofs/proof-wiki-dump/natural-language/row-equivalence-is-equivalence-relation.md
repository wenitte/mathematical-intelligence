# 

Source: https://proofwiki.org/wiki/Row_Equivalence_is_Equivalence_Relation



Theorem
Row equivalence is an equivalence relation.


Proof
In the following, $\mathbf A$, $\mathbf B$ and $\mathbf C$ denote arbitrary matrices in a given matrix space $\map \MM {m, n}$ for $m, n \in \Z{>0}$.

We check in turn each of the conditions for equivalence:


Reflexive
Let $r_i$ denote an arbitrary row of $\mathbf A$.
Let $e$ denote the elementary row operation $r_i \to 1 r_i$ applied to $\mathbf A$.

Then trivially:

$\map e {\mathbf A} = \mathbf A$
and so $\mathbf A$ is trivially row equivalent to itself.
So row equivalence has been shown to be reflexive.
$\Box$


Symmetric
Let $\mathbf A$ be row equivalent to $\mathbf B$.
Let $\Gamma$ be the row operation that transforms $\mathbf A$ into $\mathbf B$.
From Row Operation has Inverse there exists a row operation $\Gamma'$ which transforms $\mathbf B$ into $\mathbf A$.
Thus $\mathbf B$ is row equivalent to $\mathbf A$.
So row equivalence has been shown to be symmetric.
$\Box$


Transitive
Let $\mathbf A$ be row equivalent to $\mathbf B$, and let $\mathbf B$ be row equivalent to $\mathbf C$.
Let $\Gamma_1$ be the row operation that transforms $\mathbf A$ into $\mathbf B$.
Let $\Gamma_2$ be the row operation that transforms $\mathbf B$ into $\mathbf C$.
From Sequence of Row Operations is Row Operation, $\mathbf C$ is row equivalent to $\mathbf A$.
So row equivalence has been shown to be transitive.
$\Box$

Row equivalence has been shown to be reflexive, symmetric and transitive.
Hence by definition it is an equivalence relation.
$\blacksquare$


Also see
Column Equivalence is Equivalence Relation




