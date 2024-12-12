# 

Source: https://proofwiki.org/wiki/Cantor%27s_Theorem_(Strong_Version)/Proof_1

Theorem
Let $S$ be a set.
Let $\map {\PP^n} S$ be defined recursively by:

$\map {\PP^n} S = \begin{cases}
S & : n = 0 \\
\powerset {\map {\PP^{n - 1} } S} & : n > 0
\end{cases}$
where $\powerset S$ denotes the power set of $S$.

Then $S$ is not equivalent to $\map {\PP^n} S$ for any $n > 0$.


Proof
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


Sources
1964: Steven A. Gaal: Point Set Topology ... (previous) ... (next): Introduction to Set Theory: $2$. Set Theoretical Equivalence and Denumerability




