# 

Source: https://proofwiki.org/wiki/Radical_of_Sum_of_Ideals

Theorem
Let $A$ be a commutative ring with unity.
Let $\mathfrak a, \mathfrak b \subseteq A$ be ideals.

Then for the radical of their sum we have:

$\map \Rad {\mathfrak a + \mathfrak b} = \map \Rad {\map \Rad {\mathfrak a} + \map \Rad {\mathfrak b} }$


Proof
From Ideal of Ring is Contained in Radical:

$\mathfrak a \subseteq \map \Rad {\mathfrak a}$
From Sum of Larger Ideals is Larger:

$\mathfrak a + \mathfrak b \subseteq \map \Rad {\mathfrak a} + \map \Rad {\mathfrak b}$
From Radical of Ideal Preserves Inclusion:

$\map \Rad {\mathfrak a + \mathfrak b} \subseteq \map \Rad {\map \Rad {\mathfrak a} + \map \Rad {\mathfrak b} }$
$\Box$

Let $x \in \map \Rad {\map \Rad {\mathfrak a} + \map \Rad {\mathfrak b} }$.
Then there exists $n \in \N$ such that the power $x^n \in \map \Rad {\mathfrak a} + \map \Rad {\mathfrak b}$.
By definition of sum of ideals, there exist $a \in \map \Rad {\mathfrak a}$ and $b \in \map \Rad {\mathfrak b}$ with $x^n = a + b$.
Let $p, q \in \N$ with $a^p \in \mathfrak a$ and $b^q \in \mathfrak b$.
By the Binomial Theorem:

$\paren {a + b}^{p + q - 1} \in \mathfrak a + \mathfrak b$

This article, or a section of it, needs explaining.In particular: a link needed hereYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Thus:

$x^{n \cdot \paren {p + q - 1} } \in \mathfrak a + \mathfrak b$
That is:

$x \in \map \Rad {\mathfrak a + \mathfrak b}$
Hence by definition of subset:

$\map \Rad {\mathfrak a + \mathfrak b} \supseteq \map \Rad {\map \Rad {\mathfrak a} + \map \Rad {\mathfrak b} }$
$\Box$

The result follows by definition of set equality.
$\blacksquare$





