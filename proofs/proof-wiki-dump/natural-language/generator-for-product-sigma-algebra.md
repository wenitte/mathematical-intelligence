# 

Source: https://proofwiki.org/wiki/Generator_for_Product_Sigma-Algebra

Theorem
Let $\struct {X, \Sigma_1}$ and $\struct {Y, \Sigma_2}$ be measurable spaces.

Let $\GG_1$ and $\GG_2$ be generators for $\Sigma_1$ and $\Sigma_2$, respectively.

Then $\GG_1 \times \GG_2$ is a generator for the product $\sigma$-algebra $\Sigma_1 \otimes \Sigma_2$.


Proof

This article needs to be linked to other articles.In particular: throughoutYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.

This article contains statements that are justified by handwavery.In particular: Much use of "clearly" in the below.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding precise reasons why such statements hold.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Handwaving}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
We begin by stating that this result is in fact incorrect.
For a simple counter-example, consider $X = Y = \set {1, 2}$ both equipped with the power set sigma algebra, that is, $\Sigma_1 = \Sigma_2 = \set {\O, \set 1, \set 2, \set {1, 2} }$.
Then clearly, we can take $\GG_1 = \GG_2 = \set 1$.


This article, or a section of it, needs explaining.In particular: How is $\set 1$ a generator for $\set {1, 2}$?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
However, note that $\GG_1 \times \GG_2 = \set {\tuple {1, 1} }$ and hence the sigma algebra generated by this set will have exactly four elements.
Clearly, $\Sigma_1 \times \Sigma_2$ contains more than four elements and hence the product sigma algebra, i.e., the sigma algebra generated by the product $\Sigma_1\times\Sigma_2$ will contain more than four elements.
We also state and prove a minor modification of the above stated result in this light.
Theorem
Let $X, Y, \Sigma_1, \Sigma_2, \GG_1, \GG_2$ be as before and let $X \in \GG_1$ and $Y \in \GG_2$.
Then $\Sigma_1 \otimes \Sigma_2$ is generated by $\GG_1 \times \GG_2$.
Proof:
We begin by defining $\Sigma$ as the sigma algebra generated by $G_1 \times G_2$.
It is clear that $\Sigma \subset \Sigma_1 \otimes \Sigma_2$.
For the reverse inclusion, set:

$M_1 := \set {A \subset X: A \times Y \in \Sigma}$
Clearly, $\GG_1 \subset M_1$.
Therefore, $M_1$ is non-empty.
We claim that $M_1$ is a sigma algebra.
Note that $X \in M_1$ obviously.
Also, $A \in M_1$ suffices $\paren {X \setminus A} \times Y = \paren {X \times Y} \setminus \paren {A \times Y} \in \Sigma$, proving closure of $M_1$ under complements.
Also, if $A_n \in M_1$ for $n \in \N$, then:

$\ds \paren {\bigcup_{n \mathop = 1}^\infty A_n} \times Y = \bigcup_{n \mathop = 1}^\infty \paren {A_n \times Y} \in M_1$
proving closure under countable unions and establishing our claim.

Now since $M_1$ is a sigma algebra containing $\GG_1$, $M_1 \supset \Sigma_1$.
Similarly, setting $M_2 := \set {B \subset Y: X \times B \in \Sigma}$ gives us that $M_2 \supset \Sigma_2$.
Now, if $C \in \Sigma_1$ and $D \in \Sigma_2$, then clearly $C \in M_1$ and $D \in M_2$ giving $C \times Y, X \times D \in \Sigma$
Hence:

$C \times D = \paren {C \times Y} \cap \paren {X \times D} \in \Sigma$
proving:

$\Sigma_1 \times \Sigma_2 \subset \Sigma$
and hence giving:

$\Sigma_1 \otimes \Sigma_2 \subset \Sigma$
establishing the result.
$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $13.3$



