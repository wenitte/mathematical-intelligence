# 

Source: https://proofwiki.org/wiki/Cartesian_Product_of_Bijections_is_Bijection

Theorem
Let $S_1 \times S_2$ be the Cartesian product of two sets $S_1$ and $S_2$.
Let $T_1 \times T_2$ be the Cartesian product of two sets $T_1$ and $T_2$.
Let $f_1: S_1 \to T_1$ and $f_2: S_2 \to T_2$ be bijections.

Let $f_1 \times f_2: S_1 \times S_2 \to T_1 \times T_2$ be the Cartesian product of $f_1$ and $f_2$ defined as:

$\forall \left({s_1, s_2}\right) \in S_1 \times S_2: f_1 \times f_2 \left({s_1, s_2}\right) := \left({f_1 \left({s_1}\right), f_2 \left({s_2}\right)}\right)$
Then $f_1 \times f_2$ is a bijection.


General Result
Let $I$ be an indexing set.
Let $\family {S_i}_{i \mathop \in I}$ and $\family {T_i}_{i \mathop \in I}$ be families of sets indexed by $I$.
Let $\ds \SS := \prod_{i \mathop \in I} S_i$ and $\ds \TT := \prod_{i \mathop \in I} T_i$ be the Cartesian products of $\family {S_i}_{i \mathop \in I}$ and $\family {T_i}_{i \mathop \in I}$ respectively.

For all $i \in I$, let $f_i: S_i \to T_i$ be a bijection.

Let $\ds \FF: \SS \to \TT := \prod_{i \mathop \in I} \paren {f_i: S_i \to T_i}$ be the Cartesian product of $\family {f_i}_{i \mathop \in I}$ defined as:

$\ds \forall \mathbf s \in \SS: \map \FF {\mathbf s} := \prod_{i \mathop \in I} \paren {\map {f_i} {s_i} }$
where $\mathbf s := \family {S_i}_{i \mathop \in I}$ is an arbitrary element of $\family {S_i}_{i \mathop \in I}$.

Then $\FF$ is a bijection.


Proof
Because $f_1$ and $f_2$ are both bijections, it follows by definition that they are both surjections.
Let $\left({t_1, t_2}\right) \in T_1 \times T_2$.
Then:

as $f_1$ is a surjection, $\exists s_1 \in S_1: f_1 \left({s_1}\right) = t_1$
as $f_2$ is a surjection, $\exists s_2 \in S_2: f_2 \left({s_2}\right) = t_2$
Thus:

$\exists \left({s_1, s_2}\right) \in S_1 \times S_2: f_1 \times f_2 \left({s_1, s_2}\right) = \left({t_1, t_2}\right)$
So $f_1 \times f_2$ is a surjection.

Because $f_1$ and $f_2$ are both bijections, it follows by definition that they are both injections.
Let:

$f_1 \times f_2 \left({a_1, a_2}\right) = \left({c_1, c_2}\right), f_1 \times f_2 \left({b_1, b_2}\right) = \left({d_1, d_2}\right)$
for some $\left({a_1, a_2}\right), \left({b_1, b_2}\right) \in S_1 \times S_2$.
Suppose $\left({c_1, c_2}\right) = \left({d_1, d_2}\right)$.
Then by Equality of Ordered Pairs:

$c_1 = d_1$
$c_2 = d_2$
By definition of $f_1 \times f_2$:

$f_1 \left({a_1}\right) = c_1$
$f_1 \left({b_1}\right) = d_1$
and:

$f_2 \left({a_2}\right) = c_2$
$f_2 \left({b_2}\right) = d_2$
As $f_1$ is an injection:

$c_1 = d_1 \implies a_1 = b_1$
and as $f_2$ is an injection:

$c_2 = d_2 \implies a_2 = b_2$
Thus it follows that:

$\left({c_1, c_2}\right) = \left({d_1, d_2}\right) \implies \left({a_1, a_2}\right) = \left({b_1, b_2}\right)$
and so $f_1 \times f_2$ is an injection.

So $f_1 \times f_2$ is a surjection and also an injection.
Hence by definition, $f_1 \times f_2$ is a bijection.
$\blacksquare$





