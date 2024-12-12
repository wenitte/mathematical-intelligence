# 

Source: https://proofwiki.org/wiki/Cartesian_Product_of_Bijections_is_Bijection/General_Result

Theorem
Let $I$ be an indexing set.
Let $\family {S_i}_{i \mathop \in I}$ and $\family {T_i}_{i \mathop \in I}$ be families of sets indexed by $I$.
Let $\ds \SS := \prod_{i \mathop \in I} S_i$ and $\ds \TT := \prod_{i \mathop \in I} T_i$ be the Cartesian products of $\family {S_i}_{i \mathop \in I}$ and $\family {T_i}_{i \mathop \in I}$ respectively.

For all $i \in I$, let $f_i: S_i \to T_i$ be a bijection.

Let $\ds \FF: \SS \to \TT := \prod_{i \mathop \in I} \paren {f_i: S_i \to T_i}$ be the Cartesian product of $\family {f_i}_{i \mathop \in I}$ defined as:

$\ds \forall \mathbf s \in \SS: \map \FF {\mathbf s} := \prod_{i \mathop \in I} \paren {\map {f_i} {s_i} }$
where $\mathbf s := \family {S_i}_{i \mathop \in I}$ is an arbitrary element of $\family {S_i}_{i \mathop \in I}$.

Then $\FF$ is a bijection.


Proof
Because $f_i$ are bijections, it follows by definition that they are surjections.
Let $\mathbf t := \family {t_i}_{i \mathop \in I} \in \TT$.
Then as $f_i$ is a surjection:

$\forall i \in I: \exists s_i \in S_i: \map {f_i} {s_i} = t_i$
Thus:

$\exists \mathbf s \in \SS: \map \FF {\mathbf s} = \mathbf t$
So $\FF$ is a surjection.

Because $f_i$ are bijections, it follows by definition that they are injections.
Let:

$\mathbf t_1 := \family {t_{i 1} }_{i \mathop \in I} \in \TT$
$\mathbf t_2 := \family {t_{i 2} }_{i \mathop \in I} \in \TT$
Let:

$\map \FF {\mathbf s_1} = \paren {\mathbf t_1}, \map \FF {\mathbf s_2} = \mathbf t_2$
for some $\mathbf s_1, \mathbf s_2 \in \SS$ where:

$\mathbf s_1 := \family {s_{i 1} }_{i \mathop \in I}$
$\mathbf s_2 := \family {s_{i 2} }_{i \mathop \in I}$

Suppose $\mathbf t_1 = \mathbf t_2$.
Then:

$\forall i \in I: t_{i 1} = t_{i 2}$
By definition of $\FF$:

$\forall i \in I: \map {f_i} {s_{i 1} } = t_{i 1}$
$\forall i \in I: \map {f_i} {s_{i 2} } = t_{i 2}$
As $f_i$ is an injection for all $i \in I$:

$\forall i \in I: t_{i 1} = t_{i 2} \implies s_{i 1} = s_{i 2}$
Thus it follows that:

$\mathbf t_1 = \mathbf t_2 \implies \mathbf s_1 = \mathbf s_2$
and so $\FF$ is an injection.

So $\FF$ is a surjection and also an injection.
Hence by definition, $\FF$ is a bijection.
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $1$: Theory of Sets: $\S 10$: Arbitrary Products: Exercise $2$




