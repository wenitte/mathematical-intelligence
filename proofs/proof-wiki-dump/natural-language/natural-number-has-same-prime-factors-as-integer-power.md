# 

Source: https://proofwiki.org/wiki/Natural_Number_has_Same_Prime_Factors_as_Integer_Power


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Let $x$ be a natural number such that $x > 1$.
Let $n \ge 1$ be a (strictly) positive integer.

The $n$th power of $x$ has the same prime factors as $x$.


Proof

This article contains statements that are justified by handwavery.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding precise reasons why such statements hold.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Handwaving}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Let $p$ a prime number such that $p$ divides $x^n$.
This is possible because $x > 1$, so $x^n > 1$, hence $x^n$ has prime divisors due to Fundamental Theorem of Arithmetic.
To prove the statement, we need to show $p$ divides $x$.
We will prove this statement by the Principle of Mathematical Induction on $n$.


Basis of the Induction
We have $n = 1$
Clearly, since $p$ divides $x^1 = x$, then $p$ divides $x$.
$\Box$


Inductive Step
Suppose that for a given $n$, if $p$ divides $x^n$ then $p$ divides $x$. 
Then, if $p$ divides $x^{n+1}$, by definition of prime number, either $p$ divides $x^n$ or $p$ divides $x$.
If $p$ divides $x^n$, we get from induction hypothesis that $p$ divides $x$.
The other case trivially leads to our conclusion.
$\Box$

Hence the result, by Principle of Mathematical Induction.
$\blacksquare$

Conversely, let $p$ a prime number such that it divides $x$. Then, $p$ divides $x * x^{n-1} = x^n$, as required.
$\blacksquare$





