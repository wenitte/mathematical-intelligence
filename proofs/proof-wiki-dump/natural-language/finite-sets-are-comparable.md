# 

Source: https://proofwiki.org/wiki/Finite_Sets_are_Comparable

Theorem
Let $S$ and $T$ be finite sets.
Then $S$ and $T$ are comparable by size.


Proof
By definition of finite set, there exist $m, n \in \N$ such that:

$S \sim \N_{<n}$
$T \sim \N_{<m}$
That is, there are bijections $f, g$:

$f: S \to \N_{<n}$
$g: T \to \N_{<m}$
Without loss of generality, suppose that $m \le n$.
Then $\N_{<m} \subseteq \N_{<n}$, and so we can define:

$h: T \to S, \map h t = \map {f^{-1}} { \map g t }$
where $f^{-1}: \N_{<n} \to S$ is the inverse of $f$.

By Inverse of Bijection is Bijection and Composite of Injections is Injection, it follows that $h$ is injective.
By Injection to Image is Bijection, $h$ is a bijection to $\Img h$.
Since $\Img h \subseteq S$, it follows that $T$ is comparable to $S$.
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $1$: General Background: $\S 4$ Larger and smaller




