# 

Source: https://proofwiki.org/wiki/Cantor-Bernstein-Schr%C3%B6der_Theorem/Proof_2

Theorem
Let $S$ and $T$ be sets, such that:

$S \preccurlyeq T$, that is: $T$ dominates $S$
$T \preccurlyeq S$, that is: $S$ dominates $T$.

Then:

$S \sim T$
that is, $S$ is equivalent to $T$.


Proof
Suppose $S \preccurlyeq T$ and $T \preccurlyeq S$.
By definition, we have that there exist injections $f: S \to T$ and $g: T \to S$.
We are going to try to build a sequence $t_1, s_1, t_2, s_2, t_3 \ldots$ as follows.

Consider any $t_1 \in T$.
By Law of Excluded Middle there are two choices:










\(\ds \exists s_1 \in S: \, \)



\(\ds \map f {s_1}\)

\(=\)







\(\ds t_1\)
















\(\ds \nexists s_1 \in S: \, \)



\(\ds \map f {s_1}\)

\(=\)







\(\ds t_1\)










Suppose $\exists s_1 \in S: \map f {s_1} = t_1$.
Because $f$ is injective, such an $s_1$ is unique.
So we can choose $s_1 = \map{f^{-1} } {t_1}$.

Again, by Law of Excluded Middle there are two further choices:










\(\ds \exists t_2 \in T: \, \)



\(\ds \map g {t_2}\)

\(=\)







\(\ds s_1\)
















\(\ds \nexists t_2 \in T: \, \)



\(\ds \map g {t_2}\)

\(=\)







\(\ds s_1\)










Suppose $\exists t_2 \in T: \map g {t_2} = s_1$.
Because $f$ is injective, such an $t_2$ is unique.

Similarly, we choose $s_2 = \map {f^{-1} } {t_2}$, if it exists.

This process goes on until one of the following happens:

We reach some $s_n \in S$ such that $\nexists t \in T: \map g t = s_n$. This may be possible because $g$ may not be a surjection.
We reach some $t_n \in T$ such that $\nexists s \in S: \map f s = t_n$.This may be possible because $f$ may not be a surjection.
The process goes on for ever.

For each $t \in T$, then, there is a well-defined process which turns out in one of the above three ways.
We partition $T$ up into three subsets that are mutually disjoint:

Let $T_A = \set {\text {all $t \in T$ such that the process ends with some $s_n$} }$
Let $T_B = \set {\text {all $t \in T$ such that the process ends with some $t_n$} }$
Let $T_C = \set {\text {all $t \in T$ such that the process goes on for ever} }$

We can do exactly the same thing with the elements of $S$:

Let $S_A = \set {\text {all $s \in S$ such that the process ends with some $s_n$} }$
Let $S_B = \set {\text {all $s \in S$ such that the process ends with some $t_n$} }$
Let $S_C = \set {\text {all $s \in S$ such that the process goes on for ever} }$

What we need to do is show that $S \sim T$.
We do this by showing that $S_A \sim T_A$, $S_B \sim T_B$ and $S_C \sim T_C$.

The restriction of $f$ to $S_A$ is a bijection from $S_A$ to $T_A$.
To do this we need to show that:

$(1): \quad s \in S_A \implies \map f s \in T_A$;
$(2): \quad \forall t \in T_A: \exists s \in S_A: \map f s = t$.

Let $s \in S_A$.
Then the process applied to $s$ ends in $S$.

Now consider the process applied to $\map f s$.
Its first step leads us back to $s$.
Then it continues the process, applied to $s$, and ends up in $S$.
Thus $\map f s \in T_A$.
Thus $s \in S_A \implies \map f s \in T_A$.

Now suppose $t \in T_A$.
Then the process applied to $t$ ends in $S$.
In particular, it must have a first stage, otherwise it would end in $T$ with $t$ itself.
Hence $t = \map f s$ for some $s$.
But the process applied to this $s$ is the same as the continuation of the process applied to $t$, and therefore it ends in $S$.
Thus $s \in S_A$ as required.

Hence the restriction of $f$ to $S_A$ is a bijection from $S_A$ to $T_A$.

We can use the same argument to show that $g: T_B \to S_B$ is also a bijection.
Hence $g^{-1}: S_B \to T_B$ is a bijection.

Finally, suppose $t \in T_C$.
Because $f$ is an injection, $t = \map f s$ for some $s$, and the process applied to $t$ must start.
This $s$ must belong to $S_C$, because the process starting from $s$ is the same as the process starting from $t$ after the first step.
This never ends, as $t \in T_C$.

Now we can define a bijection $h: S \to T$ as follows:

$\map h x = \begin {cases}
\map f s: x \in S_A \\
\map f s: x \in S_C \\
\map {g^{-1} } x: x \in S_B \end {cases}$
The fact that $h$ is a bijection follows from the facts that:

$(1): \quad S_A$, $S_B$ and $S_C$ are mutually disjoint
$(2): \quad T_A$, $T_B$ and $T_C$ are mutually disjoint
$(3): \quad f$, $f$ and $g^{-1}$ are the bijections which respectively do the mappings between them.
$\blacksquare$


Source of Name
This entry was named for Georg Cantor, Felix Bernstein and Friedrich Wilhelm Karl Ernst Schröder.





