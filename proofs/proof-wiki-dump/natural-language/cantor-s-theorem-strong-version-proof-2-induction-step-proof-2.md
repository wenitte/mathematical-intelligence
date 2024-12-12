# 

Source: https://proofwiki.org/wiki/Cantor%27s_Theorem_(Strong_Version)/Proof_2/Induction_Step/Proof_2

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
By Power Set is Nonempty, $\powerset {\map {\PP^k} S}$ is non-empty.
By definition: 

$\map {\PP^{k + 1} } S = \powerset {\map {\PP^k} S}$
Then:

$\map {\PP^{k + 1} } S \ne \O$

By Law of Excluded Middle, there are two choices:

$S = \O$
or:

$S \ne \O$

Suppose that $S = \O$.
By Image of Empty Set is Empty Set: Corollary 2, there is no surjection from $S$ onto $\map {\PP^{k + 1} } S$.

Suppose that $S \ne \O$.
By the induction hypothesis $\map P k$ is true.
Aiming for a contradiction, suppose that $f: S \to \map {\PP^{k + 1} } S$ is a surjection.
By Injection from Set to Power Set, there is an injection:

$g: \map {\PP^k} S \to \powerset {\map {\PP^k} S}$
By Injection has Surjective Left Inverse Mapping, there exists a surjection:

$h: \powerset {\map {\PP^k} S} \to \map {\PP^k} S$
By definition of $\powerset {\map {\PP^k} S}$, this is a surjection:

$h: \map {\PP^{k + 1} } S \to \map {\PP^k} S$
By Composite of Surjections is Surjection, we have a surjection:

$h \circ f: S \to \map {\PP^k} S$
But this contradicts the induction hypothesis.
Thus we conclude that the theorem holds for all $n$.
$\blacksquare$





