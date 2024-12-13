# 

Source: https://proofwiki.org/wiki/Kleene_Closure_is_Monoid

Theorem
Let $S$ be a set, and let $S^*$ be its Kleene closure.
Let $*$ denote concatenation of ordered tuples.

Then $\struct {S^*, *}$ is a monoid.


Proof
First, to prove that $\struct {S^*, *}$ is a semigroup.
That is, to prove $*$ is associative.
Let $s, s', s \in S^*$ be sequences of lengths $n, n', n$, respectively.
Then:














\(\ds \map {s * \paren {s' * s} } i\)

\(=\)







\(\ds \begin {cases} \map s i & \text {if } 1 \le i \le n \\ \map {s' * s} {i - n} & \text {if } n < i \le n + n' + n \end {cases}\)




















\(\ds \)

\(=\)







\(\ds \begin {cases} \map s i & \text {if } 1 \le i \le n \\ \map {s'} {i - n} & \text {if } n < i \le n + n' \\ \map {s} {i - n - n'} & \text {if } n + n' < i \le n + n' + n \end {cases}\)




















\(\ds \map {\paren {s * s'} * s} i\)

\(=\)







\(\ds \begin {cases} \map {s * s'} i & \text {if } 1 \le i \le n + n' \\ \map {s} {i - n - n'} & \text {if } n + n' < i \le n + n' + n \end {cases}\)




















\(\ds \)

\(=\)







\(\ds \begin {cases} \map s i & \text {if } 1 \le i \le n \\ \map {s'} {i - n} & \text {if } n < i \le n + n' \\ \map {s} {i - n - n'} & \text {if } n + n' < i \le n + n' + n \end {cases}\)










Hence, by Equality of Mappings:

$s * \paren {s' * s} = \paren {s * s'} * s$
that is, $*$ is associative.

Now, to prove $\struct {S^*, *}$ has an identity $e$.
It follows immediately from the length of a concatenation that $e$ must have length $0$.
That is, the only choice for $e$ is the empty sequence.
Now, for any $s \in S^*$:

$\map {e * s} i = \begin {cases} \map e i & \text {if } 1 \le i \le 0 \\ \map s i & \text {if } 0 < i < 0 + n \end {cases}$
from which we see that $e * s = s$.
Also:

$\map {s * e} i = \begin {cases} \map s i & \text {if } 1 \le i \le n \\ \map e i & \text {if } n < i < n + 0 \end {cases}$
which shows $s * e = s$.
So indeed the empty sequence is an identity element of $\struct {S^*, *}$.

Hence $\struct {S^*, *}$ is a monoid.
$\blacksquare$


Sources
2010: Steve Awodey: Category Theory (2nd ed.) ... (previous) ... (next): $\S 1.7$




