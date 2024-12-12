# 

Source: https://proofwiki.org/wiki/Condition_for_Complex_Root_of_Unity_to_be_Primitive



Theorem
Let $n, k \in \N$.
Then $\alpha_k = \map \exp {\dfrac {2 \pi i k} n}$ is a primitive $n$th root of unity if and only if $\gcd \set {n, k} = 1$.


Proof
Let $U_n = \set {\map \exp {\dfrac {2 \pi i k} n}: 0 \le k \le n - 1}$.
Let $V = \set {1, \dotsc, {\alpha_k}^{n - 1} }$.
By Complex Roots of Unity in Exponential Form it is sufficient to show that $U_n = V$ if and only if $\gcd \set {n, k} = 1$.

Let $\gcd \set {n, k} = d > 1$.
Then there are $n', k' \in \N$ such that:

$n' = d n$
and:

$k' = d k$
Then we have:

$\alpha_k = \map \exp {\dfrac {2 \pi i k'} {n'} }$
and:

$\alpha_k^{n'} = \map \exp {2 \pi i k'} = 1$
Therefore:

$V = \set {1, \dotsc, \alpha^{n' - 1} }$
such that $n' < n$.
So:

$\cmod V = n' < n = \cmod {U_n}$
and $U_n \ne V$.

Let $\gcd \set {n, k} = 1$.
Let:

$\map \exp {\dfrac {2 \pi i k} n}^d = \map \exp {\dfrac {2 \pi i k} n} = 1$
Then it must be the case that $\dfrac {k d} n \in \Z$.
Since $\gcd \set {n, k}\ = 1$ it follows that:

$n \divides d$
and so:

$d \ge n$
Therefore $\set {1, \dotsc, \alpha^{n - 1} }$ are distinct
Hence $\card V = \card {U_n}$.
Moreover each element of $V$ can be written in the form:

$\map \exp {\dfrac {2 \pi i k} n}$
with $0 \le k \le n - 1$.
It follows that $V = U_n$.
$\blacksquare$


Also see
Complex Roots of Unity in Exponential Form


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Subgroups and Cosets: $\S 44$




