# 

Source: https://proofwiki.org/wiki/Cantor%27s_Theorem_(Strong_Version)/Proof_2/Induction_Step/Proof_1

Theorem
Let $S$ be a set.
Let $\map {\PP^n} S$ be defined recursively by:

$\map {\PP^n} S = \begin{cases}
S & : n = 0 \\
\powerset {\map {\PP^{n - 1} } S} & : n > 0
\end{cases}$
where $\powerset S$ denotes the power set of $S$.

Then $S$ is not equivalent to $\map {\PP^n} S$ for any $n > 0$.


Induction Step
This is our induction hypothesis:

There is no surjection from $S$ onto $\map {\PP^k} S$.

We are to show:

There is no surjection from $S$ onto $\map {\PP^{k + 1} } S$.


Proof
It is assumed that $\map P k$ is true.

Aiming for a contradiction, suppose that $f: S \to \map {\PP^{k + 1} } S$ is a surjection.

Define the mapping $g: S \to \map {\PP^k} S$ as:

$\ds \map g x = \bigcup \map f x$
This is actually a mapping into $\map {\PP^k} S$, as follows:

$\map f x \in \map {\PP^{k + 1} } S = \powerset {\map {\PP^k} S}$
By the definition of power set:

$\map f x \subseteq \map {\PP^k} S$
Thus each element of $\map f x$ is a subset of $\map {\PP^{k - 1} } S$.
Thus by Union of Subsets is Subset:

$\ds \bigcup \map f x \subseteq \map {\PP^{k - 1} } S$
Therefore:

$\ds \bigcup \map f x \in \map {\PP^k} S$
That is, $\map g x$ is a mapping into $\map {\PP^k} S$.

Next we have that:

$\forall y \in \map {\PP^k} S: \set y \in \map {\PP^{n + 1} } S$
But by hypothesis $f$ is surjective, and so:

$\exists x \in S: \map f x = \set y$
Then:

$\ds \map g x = \bigcup \set y = y$
As this holds for all such $y$, $g$ is surjective.
But this contradicts the induction hypothesis.
Thus we conclude that the theorem holds for all $n$.
$\blacksquare$





