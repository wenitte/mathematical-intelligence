# 

Source: https://proofwiki.org/wiki/Prefix_of_WFF_of_PropLog_is_not_WFF



Theorem
Let $\mathbf A$ be a WFF of propositional logic.
Let $\mathbf S$ be a prefix of $\mathbf A$.

Then $\mathbf S$ is not a WFF of propositional logic.


Proof
The proof proceeds by strong induction on the length of a WFF of propositional logic.

Let $\map l {\mathbf Q}$ denote the length of a string $\mathbf Q$.

For all $n \in \N_{> 0}$, let $\map P n$ be the proposition:

A prefix of $\mathbf A$ such that $\map l {\mathbf A} = n$ is not a WFF of propositional logic.

By definition, $\mathbf S$ is a prefix of $\mathbf A$ if and only if $\mathbf A = \mathbf {S T}$ for some non-null string $\mathbf T$.
Thus we note that $\map l {\mathbf S} < \map l {\mathbf A}$.


Basis for the Induction
Let $\mathbf A$ be a WFF such that $\map l {\mathbf A} = 1$.
Then for a prefix $\mathbf S$:

$\map l {\mathbf S} < 1 = 0$
That is, $\mathbf S$ must be the null string, which is not a WFF.
So the result holds for WFFs of length $1$.
That is, $\map P 1$ is true.

This is our basis for the induction.


Induction Hypothesis
Now we need to show that for $k \ge 1$, if $\map P j$ is true for all $j \le k$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

A prefix of $\mathbf A$ such that $\map l {\mathbf A} = k$ is not a WFF of propositional logic.

Then we need to show:

A prefix of $\mathbf A$ such that $\map l {\mathbf A} = k + 1$ is not a WFF of propositional logic.


Induction Step
This is our induction step:

Let $\mathbf A$ be a WFF such that $\map l {\mathbf A} = k + 1$.
Suppose $\mathbf D$ is a prefix of $\mathbf A$ which happens to be a WFF.
That is, $\mathbf A = \mathbf {D T}$ where:

$\mathbf D$ is a WFF
$\mathbf T$ is non-null.

There are two cases:

$(1): \quad \mathbf A = \neg \mathbf B$
where $\mathbf B$ is a WFF of length $k$.
Thus $\mathbf D$ is a WFF starting with $\neg$.
So:

$\mathbf D = \neg \mathbf E$
where $\mathbf E$ is also a WFF.
We remove the initial $\neg$ from $\mathbf A = \mathbf {D T}$ to get:

$\mathbf B = \mathbf {E T}$
But then $\mathbf B$ is a WFF of length $k$ which has $\mathbf E$ as a prefix which is itself a WFF.
This contradicts the induction hypothesis.
Therefore no prefix of $\mathbf A = \neg \mathbf B$ can be a WFF.
$\Box$

$(2): \quad \mathbf A = \paren {\mathbf B \circ \mathbf C}$
where $\circ$ is one of the binary connectives.
In this case, $\mathbf D$ is a WFF starting with $($, so:

$\mathbf D = \paren {\mathbf E * \mathbf F}$
for some binary connectives $*$ and some WFFs $\mathbf E$ and $\mathbf F$.
Thus:

$\mathbf B \circ \mathbf C) = \mathbf E * \mathbf F) \mathbf T$.
Both $\mathbf B$ and $\mathbf E$ are WFFs of length less than $k + 1$.
Therefore, by the induction hypothesis, neither $\mathbf B$ nor $\mathbf E$ can be a prefix of the other.
But since both $\mathbf B$ and $\mathbf E$ start at the same place in $\mathbf A$, they must be the same:

$\mathbf B = \mathbf E$
Therefore:

$\mathbf B \circ \mathbf C) = \mathbf B * \mathbf F) \mathbf T$
So $\circ = *$ and:

$\mathbf C) = \mathbf F) \mathbf T$
But then the WFF $\mathbf F$ is a prefix of the WFF $\mathbf C$ of length less than $k + 1$.
This contradicts our induction hypothesis.
Therefore no prefix of $\mathbf A = \paren {\mathbf B \circ \mathbf C}$ can be a WFF.
$\Box$

As $\mathbf A$ is arbitrary, it follows that no prefix of any WFF of length $k + 1$ can be a WFF.
So $\map P k \implies \map P {k + 1}$ and the result follows by strong induction.

Therefore, for all $n \in \N_{> 0}$, the prefix of $\mathbf A$ such that $\map l {\mathbf A} = n$ is not a WFF of propositional logic.
Hence the result.
$\blacksquare$


Sources
1996: H. Jerome Keisler and Joel Robbin: Mathematical Logic and Computability ... (previous) ... (next): $\S 1.3$: Induction on Length of Wffs: Proposition $1.3.2$




