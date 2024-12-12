# 

Source: https://proofwiki.org/wiki/Countable_Hypothesis_Set_has_Finished_Tableau

Lemma
Let $\mathbf H$ be a countable set of WFFs of propositional logic.
Then there exists a finished tableau whose root node is $\mathbf H$.


Proof
The Tableau Extension Lemma shows that each finite hypothesis set $\mathbf H$ is the root of some finished tableau.
It remains, then, to show that the result still applies when $\mathbf H = \set {\mathbf A_1, \ldots, \mathbf A_n, \ldots}$ is countably infinite.

Let $\mathbf H_n = \set {\mathbf A_1, \ldots, \mathbf A_n} \subset \mathbf H$.
We will say that a finite tableau $T_n$ with root $\mathbf H$ is finished for $\mathbf H_n$ if the tableau $T'_n$ is finished where:

$T'_n$ is the same as $T_n$ except:
$T'_n$ has the root $\mathbf H_n$ instead of $\mathbf H$.
We can use the Tableau Extension Lemma countably many times, and get a sequence of finite tableaux $T_0, T_1, \ldots, T_n, \ldots$ such that:

$T_0$ has only a root node;
For each $n > 0$, $T_n$ is an extension of $T_{n-1}$ such that $T_n$ is finished for $\mathbf H_n$;
For each $n > 0$, $T_n$ has the property that no contradictory branch $\Gamma$ of $T_{n-1}$ gets extended when forming $T_n$.
Now, let $T$ be the union $\ds T = \bigcup_{k \mathop = 0}^\infty T_k$.
Let $\Gamma$ be a branch of $T$.
Suppose $\Gamma$ is contradictory, with complementary pair $\mathbf A, \neg \mathbf A$.
Then $\exists n \in \N$ such that both $\mathbf A$ and $\neg \mathbf A$ are in $T_n$.
Then $\Gamma \cap T_n$ is already a contradictory branch of $T_n$.
So, by our method of construction of $T$, this branch $\Gamma \cap T_n$ is never extended past stage $n$, so $\Gamma = \Gamma \cap T_n$ and $\Gamma$ is finite.

On the other hand, suppose $\Gamma$ is not contradictory.
Then the construction ensures that $\Gamma$ is a finished branch.

So $T$ is a finished tableau whose root node is $\mathbf H$.
$\blacksquare$


Sources
1996: H. Jerome Keisler and Joel Robbin: Mathematical Logic and Computability ... (previous) ... (next): $\S 1.11$: Compactness: Lemma $1.11.2$




