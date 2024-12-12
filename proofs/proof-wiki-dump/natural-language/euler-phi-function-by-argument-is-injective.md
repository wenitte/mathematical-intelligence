# 

Source: https://proofwiki.org/wiki/Euler_Phi_Function_by_Argument_is_Injective


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.

This article needs to be tidied.Please fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.

It has been suggested that this page be renamed.In particular: Euler Phi Function Multiplied by Argument is InjectiveTo discuss this page in more detail, feel free to use the talk page.
Theorem
Let $f: \N \to \N$ be the arithmetic function defined as:

$\map f n = n \map \phi n$
where $\map \phi n$ is the Euler Phi function (which is not injective).
Then $f$ is injective.


Proof
By Product of Multiplicative Functions is Multiplicative and Euler Phi Function is Multiplicative, $f$ is a multiplicative function.
Suppose that $\map f {n_1} = \map f {n_2}$.

The case $n_1 = 1$ is trivial.

Let $n_1 > 1$.
Let $p$ be the largest prime factor of $n_1$.
By Largest Prime Factor of Euler Phi Function, the largest prime factor of $\map \phi {n_1}$ is less than $p$.
Thus $p$ is the largest prime factor of $\map f {n_1} = n_1 \map \phi {n_1}$.
But:

$\map f {n_1} = \map f {n_2}$
Then $p$ is the largest prime factor of $\map f {n_2}$.
Then $p$ is the largest prime factor of $n_2$.
$\Box$

Let $p^k$ be the largest power of $p$ dividing $n_1$.
Then $p^{k - 1}$ is the largest power of $p$ dividing $\map \phi {n_1}$.
Then $p^{2 k - 1}$ is the largest power of $p$ dividing $\map f {n_1}$.
But:

$\map f {n_1} = \map f {n_2}$
Then $p^{2 k - 1}$ is the largest power of $p$ dividing $\map f {n_2}$.
Then $p^k$ is the largest power of $p$ dividing $n_2$.
$\Box$

Thus, by the multiplicativity of $f$, we also have:

$\map f {\dfrac {n_1} {p^k} } = \map f {\dfrac {n_2} {p^k} }$

This article contains statements that are justified by handwavery.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding precise reasons why such statements hold.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Handwaving}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Continuing, after having eliminated all prime factors of $n_1$, we have:

$\map f 1 = \map f {\dfrac {n_2} {n_1} }$
hence:

$\dfrac {n_2} {n_1} = 1$
and so:

$n_2 = n_1$
$\blacksquare$


Source
Daniel Fischer (https://math.stackexchange.com/users/83702/daniel-fischer), Injectivity of the function $n$ times the Euler Totient of $n$, URL (version: 2013-10-25): https://math.stackexchange.com/q/539599




