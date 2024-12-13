# 

Source: https://proofwiki.org/wiki/Real_Numbers_are_Uncountably_Infinite/Cantor%27s_Diagonal_Argument


This article has been identified as a candidate for Featured Proof status.If you do not believe that this proof is worthy of being a Featured Proof, please state your reasons on the talk page.To discuss this page in more detail, feel free to use the talk page.

This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
The set of real numbers $\R$ is uncountably infinite.


Proof
We show that the unit interval $\hointr 0 1$ is uncountable, from which uncountability of $\R$ follows immediately.

Aiming for a contradiction, suppose that $\hointr 0 1$ is countable.

First we note that $\hointr 0 1$ is not finite because $\dfrac 1 n \in \hointr 0 1$ are distinct for all $n \in \N$.
Therefore an injection $\hointr 0 1 \hookrightarrow \N$ enumerates $\hointr 0 1$ with a subset of the natural numbers.
By renaming, we can associate each $x \in \hointr 0 1$ to exactly one natural number to obtain a bijection.
(We have by hypothesis that such a mapping can be constructed).
Let $g$ be such a correspondence:














\(\ds 1\)

\(\leftrightarrow\)







\(\ds 0.d_{11} d_{12} d_{13} \ldots\)




















\(\ds 2\)

\(\leftrightarrow\)







\(\ds 0.d_{21} d_{22} d_{23} \ldots\)




















\(\ds \)

\(\vdots\)







\(\ds \)




















\(\ds n\)

\(\leftrightarrow\)







\(\ds 0.d_{n1} d_{n2} d_{n3} \ldots\)




















\(\ds \)

\(\vdots\)







\(\ds \)









where juxtaposition of digits describes the decimal expansion of a number.
By Existence of Base-$N$ Representation, any decimal expansion of a real number exists and is unique, or else has exactly two representative strings.
In this case, if there are exactly two representations, one will have an infinite trail of $9$s, and one will terminate.


This article needs to be linked to other articles.In particular: this is proven somewhere, find itYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Restrict $g$ such that there exists no infinite strings of $9$s in the decimal expansions in the question, that is, to the set:

$S := \set {f: \N \to \set {0, 1, 2, \ldots, 9} \middle\vert \, \forall M \in \N: \exists m \ge M: \map f m \ne 9}$

Work In ProgressIn particular: There is a better $\LaTeX$ construct for the aboveYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by completing it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{WIP}} from the code.
of sequences in $\set {0, 1, 2, \ldots, 9}$ not ending in infinitely many $9$s.

Define $g'$ as the restriction of $g$ to $S$:

$g' := g \restriction S$
That is, construct $g'$ such that there exist no infinite strings of $9$s in the decimal expansions in question.
From Injection to Image is Bijection, $g'$ is a bijection
Hence, a fortiori, $g'$ is a surjection.
For every $k \in \N$, define $f_k = d_{k k} + 1$ taken modulo $10$. 
That is, $f: 0 \mapsto 1, 1 \mapsto 2, \dots, 8 \mapsto 9, 9 \mapsto 0$.
Let $y$ be defined by the decimal expansion:

$y = 0.f_1 f_2 f_3 \ldots$

Now:

$y$ differs from $\map {g'} 1$ in the first digit of the decimal expansion
$y$ differs from $\map {g'} 2$ the second digit of the decimal expansion
and generally the $n$th digit of the decimal expansion of $\map {g'} n$ and $y$ is different.
So $y$ can be none of the numbers $\map {g'} n$ for $n \in \N$.
But this contradicts our $g'$ is a surjection.
From this contradiction it is deduced that $\hointr 0 1$ is not countable.


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
$\blacksquare$


Historical Note
This proof was first demonstrated by Georg Cantor in $1891$.


Sources
1968: A.N. Kolmogorov and S.V. Fomin: Introductory Real Analysis ... (previous) ... (next): $\S 2.4$: Uncountability of the real numbers: Theorem $5$
1979: John E. Hopcroft and Jeffrey D. Ullman: Introduction to Automata Theory, Languages, and Computation ... (previous) ... (next): Chapter $1$: Preliminaries: $1.4$ Set Notation: Infinite sets
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): diagonal argument
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $2.8$
2008: Paul Halmos and Steven Givant: Introduction to Boolean Algebras ... (previous) ... (next): Appendix $\text{A}$: Set Theory: The Continuum
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): diagonal argument
2012: M. Ben-Ari: Mathematical Logic for Computer Science (3rd ed.) ... (previous) ... (next): Appendix $\text{A}.5$: Theorem $\text{A}.27$




