# 

Source: https://proofwiki.org/wiki/Inequality_of_Height_of_Proper_Ideal

Theorem
Let $A$ be a commutative ring with unity.
Let $I$ be a proper ideal in $A$.

Then:

$\map {\operatorname {dim_{Krull} } } {A / I} + \map {\operatorname {ht} } I \le \map {\operatorname {dim_{Krull} } } A$
where:

$A/I$ is the quotient ring of $A$ by $I$
$\operatorname {dim_{Krull} }$ denotes the Krull dimension
$\map {\operatorname {ht} } I$ is the height of $I$


Proof
Let:

$n := \map {\operatorname {dim_{Krull} } } {A / I}$
Then there are $\mathfrak q_0, \ldots, \mathfrak q_n \in \Spec {A / I}$ such that:

$\mathfrak q_0 \subsetneqq \cdots \subsetneqq \mathfrak q_n$
Let $\pi : A \to A / I$ be the quotient epimorphism.
Let:

$\tilde {\mathfrak q_i} := \pi^{-1} \sqbrk {\mathfrak q_i}$
for $i=0, \ldots, n$.
Then:

$\tilde {\mathfrak q_0}, \ldots, \tilde {\mathfrak q_n} \in \Spec A$
and:

$(1):\quad I \subseteqq \tilde {\mathfrak q_0} \subsetneqq \cdots \subsetneqq \tilde {\mathfrak q_n}$

Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: More detailsYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.

On the other hand, let:

$m := \map {\operatorname {ht} } {\tilde {\mathfrak q_0} }$
Then there exist $\mathfrak p_0, \ldots, \mathfrak p_m \in \Spec A$ such that:

$(2):\quad \mathfrak p_0 \subsetneqq \cdots \subsetneqq \mathfrak p_m = \tilde {\mathfrak q_0}$

Hence:














\(\ds \map {\operatorname {dim_{Krull} } } {A / I} + \map {\operatorname {ht} } I\)

\(\le\)







\(\ds \map {\operatorname {dim_{Krull} } } {A / I} + \map {\operatorname {ht} } {\tilde {\mathfrak q_0} }\)





as $I \subseteqq \tilde {\mathfrak q_0}$














\(\ds \)

\(=\)







\(\ds n + m\)




















\(\ds \)

\(\le\)







\(\ds \map {\operatorname {dim_{Krull} } } A\)





by $(1)$ and $(2)$




$\blacksquare$

Sources
1980: Hideyuki Matsumura: Commutative Algebra $12:$ Dimension




