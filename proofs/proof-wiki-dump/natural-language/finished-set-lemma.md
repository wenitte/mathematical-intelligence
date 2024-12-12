# 

Source: https://proofwiki.org/wiki/Finished_Set_Lemma



Lemma
Let $\Delta$ be a finished set of WFFs of propositional logic.
Then any model of the set of basic WFFs in $\Delta$ is a model of $\Delta$.


Corollary
Let $\Delta$ be a finished set of WFFs of propositional logic.

Then $\Delta$ has a model.


Proof
Let $\MM$ be a model of the set of basic WFFs in $\Delta$.
We need to show that $\MM \models \Delta$.
That is, that $\MM \models \mathbf C$ for each $\mathbf C \in \Delta$.

Now, let $\map R n$ be a propositional function on the set of natural numbers $\N$ such that:

$\map R n = T$ if and only if:
for every WFF $\mathbf C$, if $\mathbf C \in \Delta$ and $\mathbf C$ has length at most $n$, then $\MM \models \mathbf C$.
It is clear that $\map R 0, \map R 1, \map R 2$ are true because every WFF length 2 or less is basic, and $\MM$ models every basic WFF in $\Delta$.

So, assume $\map R k$ is true for some $k \in \N$.
Suppose $\mathbf C$ has length at most $k + 1$ and belongs to $\Delta$.
By examining each of the cases in the definition of finished set, we see that since $\MM$ models every WFF in $\Delta$ of length at most $k$, then $\MM$ models $\mathbf C$.
Thus $\map R {k + 1}$ is true.
Thus by strong induction, $\map R n$ is true for all $n \in \N$.
Hence the result.
$\blacksquare$


Sources
1996: H. Jerome Keisler and Joel Robbin: Mathematical Logic and Computability ... (previous) ... (next): $\S 1.9$: Finished Sets: Lemma $1.9.1$




