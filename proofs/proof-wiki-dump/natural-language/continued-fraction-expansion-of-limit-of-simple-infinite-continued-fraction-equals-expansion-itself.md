# 

Source: https://proofwiki.org/wiki/Continued_Fraction_Expansion_of_Limit_of_Simple_Infinite_Continued_Fraction_equals_Expansion_Itself


This article needs to be tidied.Please fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.

This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $\sequence {a_n}_{n \mathop \ge 0}$ be a simple infinite continued fractions in $\R$.

Then $\sequence {a_n}_{n \mathop \ge 0}$ converges to an irrational number, whose continued fraction expansion is $\sequence {a_n}_{n \mathop \ge 0}$.


Proof
By Simple Infinite Continued Fraction Converges to Irrational Number, the value of $\sequence {a_n}_{n \mathop \ge 0}$ exists and is irrational.
Let $\sequence {b_n}_{n \mathop \ge 0}$ be its continued fraction expansion.
By Continued Fraction Expansion of Irrational Number Converges to Number Itself, $\sequence {a_n}_{n \mathop \ge 0}$ and $\sequence {b_n}_{n \mathop \ge 0}$ have the same value.
The result will be achieved by the Second Principle of Mathematical Induction.
First we note that if $\sqbrk {a_0, a_1, a_2, \ldots} = \sqbrk {b_0, b_1, b_2, \ldots}$ then $a_0 = b_0$ since both are equal to the integer part of the common value.


This article, or a section of it, needs explaining.In particular: a result proving the aboveYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
This is our basis for the induction.

Now suppose that for some $k \ge 1$, we have:

$a_0 = b_0, a_1 = b_1, \ldots, a_k = b_k$.
Then all need to do is show that $a_{k + 1} = b_{k + 1}$.

Now:

$\sqbrk {a_0, a_1, a_2, \ldots} = \sqbrk {a_0, a_1, \ldots, a_k, \sqbrk {a_{k + 1}, a_{k + 2}, \ldots} }$
and similarly:

$\sqbrk {b_0, b_1, b_2, \ldots} = \sqbrk {b_0, b_1, \ldots, b_k, \sqbrk {b_{k + 1}, b_{k + 2}, \ldots} }$

This article, or a section of it, needs explaining.In particular: this needs to be provedYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
As these have the same value and have the same first $k$ partial denominators, it follows that:

$\sqbrk {a_{k + 1}, a_{k + 2}, \ldots} = \sqbrk {b_{k + 1}, b_{k + 2}, \ldots}$
But now $a_{k + 1} = b_{k + 1}$ as each is equal to the integer part of the value of this simple infinite continued fraction.
Hence the result.
$\blacksquare$


Also see
Simple Infinite Continued Fraction is Uniquely Determined by Limit




