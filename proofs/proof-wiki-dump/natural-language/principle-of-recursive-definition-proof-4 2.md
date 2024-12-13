# 

Source: https://proofwiki.org/wiki/Principle_of_Recursive_Definition/Proof_4

Theorem
Let $\N$ be the natural numbers.
Let $T$ be a class (which may be a set).
Let $a \in T$.
Let $g: T \to T$ be a mapping.

Then there exists exactly one mapping $f: \N \to T$ such that:

$\forall x \in \N: \map f x = \begin{cases}
a & : x = 0 \\
\map g {\map f n} & : x = n + 1
\end{cases}$


Proof
From the Principle of Recursive Definition: Strong Version:
Let $\omega$ denote the natural numbers as defined by the von Neumann construction.
Let $A$ be a class.
Let $c \in A$.
Let $g: \omega \times A \to A$ be a mapping.

Then there exists exactly one mapping $f: \omega \to A$ such that:

$\forall x \in \omega: \map f x = \begin{cases}
c & : x = \O \\
\map g {n, \map f n} & : x = n^+
\end{cases}$

Let $h: A \to A$ be defined as:

$\forall x \in A: \map h x := \map g {a, x}$ for arbitrary $a \in \omega$
That is:

$\forall y \in \omega: \map g {y, x} = \map h x$

Then a priori there exists exactly one mapping $f: \omega \to A$ such that:

$\forall x \in \omega: \map f x = \begin {cases}
c & : x = \O \\
\map h {\map f n} & : x = n^+
\end {cases}$

The result follows on identifying $\omega$ with $\N$, $c$ with $a$, $A$ with $T$, $\O$ with $0$ and $n^+$ with $n + 1$.
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $3$: The Natural Numbers: $\S 8$ Definition by finite recursion: Exercise $8.3$




