# 

Source: https://proofwiki.org/wiki/Finite_Union_of_Countable_Sets_is_Countable

Theorem
The union of a finite number of countable sets is countable.


Proof
Let $S_0, \ldots, S_{n - 1}$ be countable sets.
For $i \in \set {0, \ldots, n - 1}$, let $f_i: \N \to S_i$ be a surjection.
These exist by Surjection from Natural Numbers iff Countable.

Now define $f: \N \to \ds \bigcup_{i \mathop = 0}^{n - 1} S_i$ by:

$\map f m := \map {f_i} {\floor {\dfrac m n} }$
where:

$i$ is the unique element of $\set {0, \ldots, n - 1}$ such that $m \equiv i \pmod n$
$\floor x$ denotes the floor of $x$.

Now let $x \in \ds \bigcup_{i \mathop = 0}^{n - 1} S_i$ be arbitrary.
Let $k$ be the smallest natural number such that $x \in S_k$.
Let $l$ be the smallest natural number such that $\map {f_k} l = x$.
These are guaranteed to exist by definition of set union and surjectivity of $f_k$, respectively.

Then we have:

$\map f {l n + k} = \map {f_k} {\floor {\dfrac {l n + k} n} } = \map {f_k} l = x$
since $k < n$.
Since $x$ was arbitrary, $f$ is a surjection.

Hence by Surjection from Natural Numbers iff Countable, $\ds \bigcup_{i \mathop = 0}^{n - 1} S_i$ is countable
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 18$: Induced $N$-ary Operations: Exercise $18.17$




