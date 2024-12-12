# 

Source: https://proofwiki.org/wiki/Differentiation_of_Real_Power_Series

Theorem
Let $\xi \in \R$ be a real number.
Let $\sequence {a_n}$ be a sequence in $\R$.

Let $\ds \sum_{m \mathop \ge 0} a_m \paren {x - \xi}^m$ be the power series in $x$ about the point $\xi$.

Then within the interval of convergence:

$\ds \frac {\d^n} {\d x^n} \sum_{m \mathop \ge 0} a_m \paren {x - \xi}^m = \sum_{m \mathop \ge n} a_m m^{\underline n} \paren {x - \xi}^{m - n}$
where $m^{\underline n}$ denotes the falling factorial.


Corollary
The value of $\ds \frac {\d^n} {\d x^n} \sum_{m \mathop \ge 0} a_m \paren {x - \xi}^m$ at $x = \xi$ is:

$\ds \valueat {\frac {\d^n} {\d x^n} \sum_{m \mathop \ge 0} a_m \paren {x - \xi}^m} {x \mathop = \xi} = a_n n!$


Proof
First we can make the substitution $z = x - \xi$ and convert the expression into:

$\ds \dfrac {\d^n} {\d x^n} \sum_{m \mathop \ge 0} a_m z^m$

We then use $n$th Derivative of $m$th Power:

$\dfrac {\d^n} {\d z^n} z^m = \begin{cases} m^{\underline n} z^{m - n} & : n \le m \\ 0 & : n > m \end{cases}$
$x$ is by hypothesis within the interval of convergence.
It follows from Abel's Theorem that:

$\ds \frac {\d^n} {\d z^n} \sum_{m \mathop \ge 0} a_m z^m = \sum_{m \mathop \ge n} a_m m^{\underline n} z^{m - n}$
Then from Derivative of Identity Function and others, we have:

$\map {\dfrac \d {\d x} } {x - \xi} = 1$
The result follows from the Chain Rule for Derivatives.
$\blacksquare$


This article contains statements that are justified by handwavery.In particular: An explanation needed for how Abel's Theorem allows term-by-term differentiation of the infinite power series.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding precise reasons why such statements hold.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Handwaving}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.




