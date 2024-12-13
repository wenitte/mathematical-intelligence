# 

Source: https://proofwiki.org/wiki/Principle_of_Recursive_Definition/Fallacious_Proof



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
Consider $\N$, defined as a naturally ordered semigroup $\struct {S, \circ, \preceq}$.

Let the mapping $f$ be defined as:

$\map f x = \begin{cases}
a & : x = 0 \\
\map s {\map f n} & : x = n \circ 1 \end{cases}$
if $\map f n$ is defined.
Let $S' = \set {n \in S: \map f n \text{ is defined} }$.
Then:

$0 \in S'$
and:

$n + 1 \in S'$
so by Principle of Mathematical Induction for Naturally Ordered Semigroup:

$S' = S$
Thus the domain of $f$ is $S$.
Consequently, $f$ is a mapping from $S$ into $T$ which satisfies:

$\map f 0 = a$
and:

$\map f {n \circ 1} = \map s {\map f n}$
for all $n \in S$.
$\blacksquare$


Objections
$(1):$
In the above argument, $S'$ is not precisely defined.
In order for a set to be defined, that definition should be able to be expressed solely in terms of logic and definitions from set theory.
In this case, the expression "is defined" does not meet that criterion.

$(2):$
The mapping $f$ is not defined properly.
A mapping needs to be defined as a set of ordered pairs which needs to satisfy a condition.
In the above, it is indeed specified that

$\tuple {0, a} \in f$
and:

$\tuple {n \circ 1, \map s x} \in f$ whenever $\tuple {n, x} \in f$
Thus it appears either that:

$f$ itself is used to define $f$
or else that:

$f$ itself changes during the process in which it is being defined.
Neither of these possibilities can be accepted.

$(3):$
The only property of $\struct {S, \circ, \preceq}$ used in the argument is that it satisfies Principle of Mathematical Induction for Naturally Ordered Semigroup.
However, consider the commutative semigroup $\struct {D, +}$ which has elements $0$ and $1$, such that:

$D$ is the only subset of $D$:
containing $0$
and
containing $x + 1$ whenever it contains $x$.
Then:

for any set $T$
any mapping $g: T \to T$
any element $a \in T$
there exists a mapping $f: D \to T$ such that:

$\map f y = \begin{cases}
a & : y = 0 \\
\map s {\map f x} & : y = x + 1 \end{cases}$
But consider the additive group of integers modulo $2$:

$\struct {\Z_2, +_2}$
which is indeed a commutative semigroup containing $0$ and $1$ which satisfies the hypothesis.
But if $g: \N \to \N$ is the mapping defined as:

$\map g n = n + 1$
there is no mapping $f: \Z_2 \to \N$ which satisfies:

$\map f y = \begin{cases}
0 & : y = 0 \\
\map s {\map f x} & : y = x +_2 1 \end{cases}$
for all $x \in \Z_2$.
Hence the argument is invalid.


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 16$: The Natural Numbers
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $3$: The Natural Numbers: $\S 8$ Definition by finite recursion




