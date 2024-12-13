# 

Source: https://proofwiki.org/wiki/Second_Principle_of_Recursive_Definition



Theorem
Let $\N$ be the natural numbers.
Let $T$ be a set.
Let $a \in T$.
For each $n \in \N_{>0}$, let $G_n: T^n \to T$ be a mapping.

Then there exists exactly one mapping $f: \N \to T$ such that:

$\forall x \in \N: \map f x = \begin{cases}
a & : x = 0 \\
\map {G_n} {\map f 0, \ldots, \map f n} & : x = n + 1
\end{cases}$


Proof
Define $T^*$ to be the Kleene closure of $T$:

$T^* := \ds \bigcup_{i \mathop = 1}^\infty T^i$
Note that, for convenience, the empty sequence is excluded from $T^*$.
Now define a mapping $\GG: T^* \to T^*$ by:

$\map \GG {t_1, \ldots, t_n} = \tuple {t_1, \ldots, t_n, \map {G_n} {t_1, \ldots, t_n} }$
that is, extending each finite sequence $\tuple {t_1, \ldots, t_n}$ with the element $\map {G_n} {t_1, \ldots, t_n} \in T$.
By the Principle of Recursive Definition applied to $\GG$ and the finite sequence $\sequence a$, we obtain a unique mapping:

$\FF: \N \to T^*: \map \FF x = \begin{cases} \sequence a & : x = 0 \\ \map \GG {\map \FF n} & : x = n + 1 \end {cases}$
Next define $f: \N \to T$ by:

$\map f n = \text {the last element of $\map \FF n$}$
We claim that this $f$ has the sought properties, which will be proven by the Principle of Mathematical Induction.
We prove the following assertions by induction:

$\map \FF n = \tuple {\map f 0, \map f 1, \ldots, \map f {n - 1}, \map {G_n} {\map f 0, \ldots, \map f {n - 1} } }$
$\map f n = \map {G_n} {\map f 0, \ldots, \map f {n - 1} }$
For $n = 0$, these statements do not make sense, however it is immediate that $\map f 0 = \map {\operatorname {last} } {\sequence a} = a$.

For the base case, $n = 1$, we have:














\(\ds \map \FF 1\)

\(=\)







\(\ds \map \GG {\sequence a}\)




















\(\ds \)

\(=\)







\(\ds \tuple {a, \map {G_1} a}\)














\(\ds \leadsto \ \ \)





\(\ds \map f 1\)

\(=\)







\(\ds \map {G_1} a\)










Now assume that we have that:

$\map \FF n = \tuple {\map f 0, \map f 1, \ldots, \map f {n - 1}, \map {G_n} {\map f 0, \ldots, \map f {n - 1} } }$
$\map f n = \map {G_n} {\map f 0, \ldots, \map f {n - 1} }$
Then:














\(\ds \map \FF {n + 1}\)

\(=\)







\(\ds \map \GG {\map \FF n}\)




















\(\ds \)

\(=\)







\(\ds \map \GG {\map f 0, \ldots, \map f {n - 1}, \map {G_{n - 1} } {\map f 0,\ldots, \map f {n - 1} } }\)





Induction hypothesis on $\FF$














\(\ds \)

\(=\)







\(\ds \map \GG {\map f 0, \ldots, \map f {n - 1}, \map f n}\)





Induction hypothesis on $f$














\(\ds \)

\(=\)







\(\ds \tuple {\map f 0, \ldots, \map f n, \map {G_n} {\map f 0, \ldots, \map f n} }\)





Definition of $\GG$








\(\ds \leadsto \ \ \)





\(\ds \map f {n + 1}\)

\(=\)







\(\ds \map {\operatorname {last} } {\map \FF {n + 1} }\)




















\(\ds \)

\(=\)







\(\ds \map {G_n} {\map f 0, \ldots, \map f n}\)









The result follows by the Principle of Mathematical Induction.
$\blacksquare$


Also known as
Some authors go through considerable effort to define the sequence $\sequence {G_n}_n$ as a single mapping $G$.
The domain of such a mapping is then for example given as one of the following:

$\Dom G := \set {f: \N_{<n} \to T \mid n \in \N_{>0} } = \ds \bigcup_{n \mathop\in \N} \paren {\N_{<n} \to T}$
$\Dom G := \ds \bigcup_{n \mathop\in \N_{>0} } T^n$
At $\mathsf{Pr} \infty \mathsf{fWiki}$ we deem the presentation with separate $G_n$ to be more enlightening.


Also see
Principle of Recursive Definition
Transfinite Recursion Theorem


Sources
2000: James R. Munkres: Topology (2nd ed.) ... (previous) ... (next): $1$: Set Theory and Logic: $\S 7$: Countable and Uncountable Sets




