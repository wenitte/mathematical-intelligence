# 

Source: https://proofwiki.org/wiki/Cardinality_of_Set_of_Injections



Theorem
Let $S$ and $T$ be finite sets.

The number of injections from $S$ to $T$, where $\card S = m, \card T = n$ is often denoted ${}^m P_n$, and is:

${}^m P_n = \begin {cases} \dfrac {n!} {\paren {n - m}!} & : m \le n \\ 0 & : m > n \end {cases}$


Corollary
Let $S$ and $T$ be sets.
Let $f: S \to T$ be a mapping.
Then $f$ cannot be an injection if:

$\card S > \card T$
where $\card S$ denotes the cardinality of $S$.


Informal Proof
This is the same question as determining how many permutations there are of $m$ objects out of $n$.
Informally, the thinking goes like this.

We pick the elements of $S$ in any arbitrary order, and assign them in turn to an element of $T$.
The first element of $S$ can be mapped to any element of $T$, so there are $n$ options for the first element.
The second element of $S$, once we've mapped the first, can be mapped to any of the remaining $n-1$ elements of $T$, so there are $n-1$ options for that one.
And so on, to the $m$th element of $S$, which has $n - \paren {m - 1}$ possible elements in $T$ that it can be mapped to.
Each mapping is independent of the choices made for all the other mappings, so the total number of mappings from $S$ to $T$ is:

$n \paren {n - 1} \paren {n - 2} \cdots \paren {n - m + 1} = \dfrac {n!} {\paren {n - m}!}$
$\blacksquare$


Formal Proof
Let $m > n$.
By the Pigeonhole Principle, there can be no injection from $S$ to $T$ when $\card S > \card T$.
Once $\card T$ elements of $S$ have been used up, there is no element of $T$ left for the remaining elements of $S$ to be mapped to such that they all still map to different elements of $T$.

Let $m = 0$.
The only injection from $\O \to T$ is $\O \times T$ which is $\O$.
So if $m = 0$ there is $1 = n! / n!$ injection.

Let $0 < m \le n$.
As in the proof of Cardinality of Set of All Mappings, we can assume that $S = \N_m$ and $T = \N_n$.
For each $k \in \closedint 1 n$, let $\map {\mathbb H} {k, n}$ be the set of all injections from $\N_k$ to $\N_n$.

The proof now proceeds by induction.
Let:

$\ds \mathbb S = \set {k \in \closedint 1 n: \card {\map {\mathbb H} {k, n} } = \frac {n!} {\paren {n - k}!} }$


Basis for the Induction
Let $k = 1$.
From Cardinality of Set of All Mappings, there are $n^1 = n$ different mappings from $S$ to $T$.
From Mapping from Singleton is Injection, each one of these $n$ mappings is an injection.
Thus:

$\ds \card {\map {\mathbb H} {1, n} } = n = \frac {n!} {\paren {n - 1}!}$
and so it follows that:

$1 \in \mathbb S$.
This is the basis for the induction.


Induction Hypothesis
We suppose that:

$\ds \card {\map {\mathbb H} {k, n} } = \frac {n!} {\paren {n - k}!}$.
This is the induction hypothesis.
We need to show that:

$\ds \card {\map {\mathbb H} {k + 1, n} } = \frac {n!} {\paren {n - \paren {k + 1} }!}$.


Induction Step
This is the induction step:
Let $k \in \mathbb S$ such that $k < n$.
Let $\rho: \map {\mathbb H} {k + 1, n} \to \map {\mathbb H} {k, n}$ be the mapping defined by:

$\forall f \in \map {\mathbb H} {k + 1, n}: \map \rho f =$ the restriction of $f$ to $\N_k$
Given that $g \in \map {\mathbb H} {k, n}$ and $a \in \N_n - \map g {\N_k}$, let $g_a: \N_{k + 1} \to \N_n$ be the mapping defined as:

$\map {g_a} x = \begin {cases} \map g x & : x \in \N_k \\ a & : x = k \end {cases}$
Now $g$ is an injection as $g \in \map {\mathbb H} {k, n}$, and as $\map {g_a} a \notin \map g {\N_k}$ it follows that $g_a$ is also an injection.
Hence:

$g_a \in \map {\mathbb H} {k + 1, n}$

It follows from the definition of $\rho$ that:

$\map {\rho^{-1} } {\set g} = \set {g_a: a \in \N_n - \map g {\N_k} }$

Since $g$ is an injection, $\map g {\N_k}$ has $k$ elements.
Therefore $\N_n - \map g {\N_k}$ has $n - k$ elements by Cardinality of Complement.
As $G: a \to g_a$ is clearly a bijection from $\N_n - \map g {\N_k}$ onto $\map {\rho^{-1} } {\set g}$, that set has $n - k$ elements.

Clearly:

$\set {\map {\rho^{-1} } {\set g}: g \in \map {\mathbb H} {k, n} }$
is a partition of $\map {\mathbb H} {k + 1, n}$.
Therefore by Number of Elements in Partition:

$\card {\map {\mathbb H} {k + 1, n} } = \paren {n - k} \dfrac {n!} {\paren {n - k}!} = \dfrac {n!} {\paren {\paren {n - k} - 1}!}$
as $k \in \mathbb S$.
But:

$\paren {n - k} - 1 = n - \paren {k + 1}$
So:

$k + 1 \in \mathbb S$

By induction:

$\mathbb S = \closedint 1 n$
and in particular:

$m \in \mathbb S$
$\blacksquare$


Examples
Set of Cardinality $2$ to Set of Cardinality $3$
Let $A = \set {a, b}$.
Let $B = \set {1, 2, 3}$.
Then the set of injections from $A$ to $B$, expressed in two-row notation, is:

$\set {\dbinom {a \ b} {1 \ 2}, \dbinom {a \ b} {1 \ 3}, \dbinom {a \ b} {2 \ 1}, \dbinom {a \ b} {2 \ 3}, \dbinom {a \ b} {3 \ 1}, \dbinom {a \ b} {3 \ 2} }$
thus demonstrating that there are $\dfrac {3!} {\paren {3 - 2}!} = \dfrac {3!} {1!} = \dfrac 6 1 = 6$ injections from $A$ to $B$.


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): Chapter $3$. Mappings: Exercise $1$
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 5$: Composites and Inverses of Functions: Exercise $5.5$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $4$: Mappings: Exercise $4 \ \text{(ii) (a)}$




