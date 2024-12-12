# 

Source: https://proofwiki.org/wiki/Boolean_Interpretation_is_Well-Defined

Theorem
Let $\LL_0$ be the language of propositional logic.
Let $v: \LL_0 \to \set {\T, \F}$ be a boolean interpretation.

Then $v$ is well-defined.


Proof 1
By Language of Propositional Logic has Unique Parsability, $\LL_0$ is uniquely parsable.
Therefore, the Principle of Definition by Structural Induction can be applied to $\LL_0$.

By inspection, we see that the definition of the boolean interpretation $v$ follows the bottom-up specification of propositional logic.
Hence the Principle of Definition by Structural Induction implies that $v$ is well-defined.
$\blacksquare$


Proof 2
This is to be done by strong induction on the length of WFFs.
By definition of $v$ being a boolean interpretation, $\map v p$ is well-defined for all $p \in \PP_0$, the vocabulary of $\LL_0$.

A WFF of length $1$ has (trivially) a unique parsing sequence.
Consequently, only a single defining rule for $v$ as a boolean interpretation applies.
So the result holds for all WFFs of length $1$.

Now, suppose the result is true for all WFFs of length $k$ or less.
Let $\mathbf A$ be a WFF of length $k+1$.

There are two possibilities:

Suppose $\mathbf A = \neg \mathbf B$ for some WFF $\mathbf B$.
Then $\mathbf B$ is of length $k$, so by the induction hypothesis has a unique value $v (\mathbf B)$ no matter what parsing sequence is used.
So as $\map v {\mathbf A} = \map {f^\neg} {\map v {\mathbf B} }$, it follows that $\mathbf A$ likewise has a unique value.
Hence the result holds for $k + 1$ in this situation.

Suppose $\mathbf A = \paren {\mathbf B * \mathbf C}$ for some WFFs $\mathbf B$ and $\mathbf C$ and some connective $*$.
By Language of Propositional Logic has Unique Parsability, $*$ must be the unique main connective.
So $\mathbf B$ and $\mathbf C$ are both WFFs shorter than $k + 1$ and therefore by the induction hypothesis have unique values $\map v {\mathbf B}$ and $\map v {\mathbf C}$.
Since $\mathbf A = \paren {\mathbf B * \mathbf C}$ for a unique main connective $*$, it follows that:

$\map v {\mathbf A} = \map {f^*} {\map v {\mathbf B}, \map v {\mathbf C} }$
is well-defined.
Hence the result holds for $k + 1$ in this situation.

So the result follows by the Second Principle of Mathematical Induction.
$\blacksquare$





