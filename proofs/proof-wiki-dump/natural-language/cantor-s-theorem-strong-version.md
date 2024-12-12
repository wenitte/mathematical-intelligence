# 

Source: https://proofwiki.org/wiki/Cantor%27s_Theorem_(Strong_Version)



Theorem
Let $S$ be a set.
Let $\map {\PP^n} S$ be defined recursively by:

$\map {\PP^n} S = \begin{cases}
S & : n = 0 \\
\powerset {\map {\PP^{n - 1} } S} & : n > 0
\end{cases}$
where $\powerset S$ denotes the power set of $S$.

Then $S$ is not equivalent to $\map {\PP^n} S$ for any $n > 0$.


Proof 1
We temporarily introduce the notation:

$a^n = \begin{cases}
a : & n = 0 \\
\set {a^{n - 1} } : & n > 0
\end{cases}$
where $a \in S$.
Thus $a^n$ consists of a single element $a^{n - 1} \in \map {\PP^{n - 1} } S$.
Let there be a bijection $f: S \to \QQ^n$ where $\QQ^n \subseteq \map {\PP^n} S$.
Then define:

$\AA^{n - 1} = \set {s^{n - 1} \in \map {\PP^{n - 1} } S: s^{n - 1} \ne \map f s}$
Each $\QQ^{n - 1} \in \QQ^n$ is the image of some element of $S$ under $f$.
Let $\QQ^{n - 1} = \map f x$ for some $x \in S$.

Let $x^{n - 1} \in \QQ^{n - 1} = \map f x$.
Then $x^{n - 1} \notin \AA^{n - 1}$, and so $\AA^{n - 1} \notin \QQ^{n - 1}$.
On the other hand, let $x^{n - 1} \notin \QQ^{n - 1} = \map f x$.
Then $x^{n - 1} \in \AA^{n - 1}$, and so again $ A^{n - 1} \notin \QQ^{n - 1}$.
Thus $\AA^{n - 1} \notin Q^n$.
Therefore $Q^n$ is a proper subset of $\map {\PP^n} S$.
Hence the result.
$\blacksquare$


Proof 2
The proof proceeds by induction.
For all $n \in \N_{> 0}$, let $\map P n$ be the proposition:

There is no surjection from $S$ onto $\map {\PP^n} S$.


Basis for the Induction
$\map P 1$ is Cantor's Theorem.
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

There is no surjection from $S$ onto $\map {\PP^k} S$.

Then we need to show:

There is no surjection from $S$ onto $\map {\PP^{k + 1} } S$.


Induction Step
Proof 1
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


Proof 2
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


Also see
Cantor's Theorem


Source of Name
This entry was named for Georg Cantor.


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $1$: General Background: $\S 4$ Larger and smaller




