# 

Source: https://proofwiki.org/wiki/Cantor-Bernstein-Schr%C3%B6der_Theorem/Proof_1



Theorem
If a subset of one set is equivalent to the other, and a subset of the other is equivalent to the first, then the two sets are themselves equivalent:

$\forall S, T: T \sim S_1 \subseteq S \land S \sim T_1 \subseteq T \implies S \sim T$


Proof
From the facts that $T \sim S_1$ and $S \sim T_1$, we can set up the two bijections:

$f: S \to T_1$
$g: T \to S_1$

Let:

$S_2 = g \sqbrk {f \sqbrk S} = g \sqbrk {T_1} \subseteq S_1$
and:

$T_2 = f \sqbrk {g \sqbrk T} = f \sqbrk {S_1} \subseteq T_1$

So $S_2 \subseteq S_1$ and $S_2 \sim S$, while $T_2 \subseteq T_1$, and $T_2 \sim T$.
For each natural number $k$, let $S_{k + 2} \subseteq S$ be the image of $S_k$ under the mapping $g \circ f$.


This article, or a section of it, needs explaining.In particular: Why do these superset relations hold?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Then:

$S \supseteq S_1 \supseteq S_2 \supseteq \ldots \supseteq S_k \supseteq S_{k + 1} \ldots$

Let $\ds D = \bigcap_{k \mathop = 1}^\infty S_k$.


This article, or a section of it, needs explaining.In particular: Why can we represent it so?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Now we can represent $S$ as:




\(\text {(1)}: \quad\)









\(\ds S\)

\(=\)







\(\ds \paren {S \setminus S_1} \cup \paren {S_1 \setminus S_2} \cup \ldots \cup \paren {S_k \setminus S_{k + 1} } \cup \ldots \cup D\)









where $S \setminus S_1$ denotes set difference.



This article, or a section of it, needs explaining.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Similarly, we can represent $S_1$ as:




\(\text {(2)}: \quad\)









\(\ds S_1\)

\(=\)







\(\ds \paren {S_1 \setminus S_2} \cup \paren {S_2 \setminus S_3} \cup \ldots \cup \paren {S_k \setminus S_{k + 1} } \cup \ldots \cup D\)










Now let:














\(\ds M\)

\(=\)







\(\ds \paren {S_1 \setminus S_2} \cup \paren {S_3 \setminus S_4} \cup \paren {S_5 \setminus S_6} \cup \ldots\)




















\(\ds N\)

\(=\)







\(\ds \paren {S \setminus S_1} \cup \paren {S_2 \setminus S_3} \cup \paren {S_4 \setminus S_5} \cup \ldots\)




















\(\ds N_1\)

\(=\)







\(\ds \paren {S_2 \setminus S_3} \cup \paren {S_4 \setminus S_5} \cup \paren {S_6 \setminus S_7} \cup \ldots\)










and rewrite $(1)$ and $(2)$ as:




\(\text {(3)}: \quad\)









\(\ds S\)

\(=\)







\(\ds D \cup M \cup N\)










\(\text {(4)}: \quad\)









\(\ds S_1\)

\(=\)







\(\ds D \cup M \cup N_1\)










Now:














\(\ds g \circ f \sqbrk {S \setminus S_1} = \paren {S_2 \setminus S_3}\)

\(\leadsto\)







\(\ds \paren {S \setminus S_1} \sim \paren {S_2 \setminus S_3}\)




















\(\ds g \circ f \sqbrk {S_2 \setminus S_3} = \paren {S_4 \setminus S_5}\)

\(\leadsto\)







\(\ds \paren {S_2 \setminus S_3} \sim \paren {S_4 \setminus S_5}\)










This article contains statements that are justified by handwavery.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding precise reasons why such statements hold.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Handwaving}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
and so on.
So $N \sim N_1$.

It follows from $(3)$ and $(4)$ that a bijection can be set up between $S$ and $S_1$.
But $S_1 \sim T$.
Therefore $S \sim T$.
$\blacksquare$


Source of Name
This entry was named for Georg Cantor, Felix Bernstein and Friedrich Wilhelm Karl Ernst Schröder.


Sources
1968: A.N. Kolmogorov and S.V. Fomin: Introductory Real Analysis ... (previous) ... (next): $\S 2.6$: The Cantor-Bernstein theorem: Theorem $7$




