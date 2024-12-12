# 

Source: https://proofwiki.org/wiki/Derivative_of_Infinite_Product_of_Analytic_Functions


This article needs to be linked to other articles.In particular: limit, identically zeroYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Let $D \subset \C$ be open.
Let $\sequence {f_n}$ be a sequence of analytic functions $f_n: D \to \C$.
Let the product $\ds \prod_{n \mathop = 1}^\infty f_n$ converge locally uniformly to $f$.

Then:

$\ds f' = \sum_{n \mathop = 1}^\infty f_n' \cdot \prod_{\substack {k \mathop = 1 \\ k \mathop \ne n} }^\infty f_k$
and the series converges locally uniformly in $D$.


This article, or a section of it, needs explaining.In particular: Exactly what is meant by "the series"? Specify it.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.


Outline of Proof
Using Logarithmic Derivative of Infinite Product of Analytic Functions we write $\ds \frac {f'} f = \sum_{n \mathop = 1}^\infty \frac {f_n'} {f_n}$, and we multiply this by $f$.


Proof
By Infinite Product of Analytic Functions is Analytic, $f$ is analytic.
We may suppose none of the $f_n$ is identically zero on any open subset of $D$.
Let $E = D \setminus \set {z \in D: \map f z = 0}$.
By Logarithmic Derivative of Infinite Product of Analytic Functions, $\ds \frac {f'} f = \sum_{n \mathop = 1}^\infty \frac {f_n'} {f_n}$ converges locally uniformly in $E$.
By Linear Combination of Convergent Series:

$\ds f' = \sum_{n \mathop = 1}^\infty f_n' \cdot \prod_{\substack {k \mathop = 1 \\ k \mathop \ne n}}^\infty f_k$ on $E$
By Uniformly Convergent Sequence Multiplied with Function, the series converges locally uniformly in $E$.
By Uniformly Convergent Sequence on Dense Subset, the series converges locally uniformly in $D$.


The validity of the material on this page is questionable.In particular: The above does not work. All the above link does is show that the series is uniformly convergent on $D$, and not locally uniformly convergent.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by resolving the issues.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Questionable}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Let $g$ denote its limit.
By Uniform Limit of Analytic Functions is Analytic, $g$ is analytic in $D$.
By Uniqueness of Analytic Continuation, $f' = g$.
$\blacksquare$


Also see
Logarithmic Derivative of Infinite Product of Analytic Functions




