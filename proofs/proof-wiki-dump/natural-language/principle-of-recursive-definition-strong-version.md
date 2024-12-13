# 

Source: https://proofwiki.org/wiki/Principle_of_Recursive_Definition/Strong_Version



Theorem
Let $\omega$ denote the natural numbers as defined by the von Neumann construction.
Let $A$ be a class.
Let $c \in A$.
Let $g: \omega \times A \to A$ be a mapping.

Then there exists exactly one mapping $f: \omega \to A$ such that:

$\forall x \in \omega: \map f x = \begin{cases}
c & : x = \O \\
\map g {n, \map f n} & : x = n^+
\end{cases}$


Proof
From Von Neumann Construction of Natural Numbers is Minimally Inductive, $\omega$ is a minimally inductive class under the successor mapping.

First an admissible mapping is defined.
Let $n \in \omega$.
The mapping $h: n \to A$ is defined as an admissible mapping for $n$ if and only if:

$\forall r \subseteq n: \map h r = \begin{cases}
c & : r = 0 \\
\map g {y, \map h y} & : r = y^+
\end{cases}$

Define:

$S = \set {x \in \omega: x \text { has exactly one admissible mapping} }$
We now use the Principle of Finite Induction for Peano Structure to prove that $S = \omega$.


Basis for the Induction
Consider the empty set $\O$.
Let the mapping $h_0: \O \to A$ be defined as:

$\map {h_0} \O = c$
By definition, $h_0$ is the unique admissible mapping for $\O$.
Thus $\O \in S$.
This is the basis for the induction.


Induction Hypothesis
This is the induction hypothesis.
Let $n \in S$.
That is, there exists a unique admissible mapping for $n$.


Induction Step
It is now to be shown that:

$n^+ \in S$

From the induction hypothesis:

There exists a unique admissible mapping $h_n$ for $n$.

Let us define a mapping $\phi: n^+ \to A$ by:

$\forall r \subseteq n^+: \map \phi r = \begin{cases}
\map {h_n} r & : r \subseteq n \\
\map g {n, \map {h_n} n} & : r = n^+
\end{cases}$
By definition, $\phi$ is an admissible mapping for $n^+$.

Let $\phi'$ be an admissible mapping for $n^+$.
Uniqueness of $\phi$ is then proved by showing that $\phi' = \phi$, as follows.

The restriction of $\phi'$ to $n$ is an admissible mapping for $n$
Thus by the induction hypothesis:

$\phi' {\restriction_n} = \phi {\restriction_n}$

It follows that:














\(\ds \map {\phi'} {n^+}\)

\(=\)







\(\ds \map g {n, \map {\phi'} n}\)




















\(\ds \)

\(=\)







\(\ds \map g {n, \map h n}\)




















\(\ds \)

\(=\)







\(\ds \map \phi {n^+}\)









Thus as:

$\phi' {\restriction_n} = \phi {\restriction_n}$
and:

$\map {\phi'} {n^+} = \map \phi {n^+}$
it follows by Equality of Mappings that:

$\phi' = \phi$
Thus:

$n^+ \in S$
Thus by the Principle of Finite Induction for Peano Structure it follows that:

$S = \omega$
$\Box$

For all $n \in \omega$, let $h_n$ be the unique admissible mapping for $n$.
Let $n \in \omega$.
The restriction of $h_{n^+}$ to $n$ is an admissible mapping for $n$.
Therefore:

$h_{n^+} {\restriction_n} = h_n$
So:

$\forall r \subseteq n: \map {h_{n^+} } r = \map {h_n} r$
and in particular:

$\map {h_{n^+} } n = \map {h_n} n$

Let $f: \omega \to T$ be the mapping defined as:

$\forall n \in \omega: \map f n = \map {h_n} n$
Then:

$\map f \O = \map {h_0} \O = c$
and, for all $n \in \omega$:














\(\ds \map f {n^+}\)

\(=\)







\(\ds \map {h_{n^+} } {n^+}\)




















\(\ds \)

\(=\)







\(\ds \map g {n, \map {h_{n^+} } n}\)




















\(\ds \)

\(=\)







\(\ds \map g {n, \map {h_n} n}\)




















\(\ds \)

\(=\)







\(\ds \map g {n, \map f n}\)









Thus $f: \omega \to A$ is a mapping with the desired properties.
$\Box$

Let $f'$ be any mapping satisfying the desired properties. 
It remains to be proved that:

$f' = f$
that is, that $f$ is the only mapping with the desired properties.

By the foregoing, for all $n \in \omega$, the restriction of $f'$ to $n$ is an admissible mapping for $n$.
Therefore:

$f' = h_n$
So:

$\forall n \in \omega: \map {f'} n = \map {h_n} n = \map f n$
and the proof is complete.
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $3$: The Natural Numbers: $\S 8$ Definition by finite recursion: Exercise $8.3$




