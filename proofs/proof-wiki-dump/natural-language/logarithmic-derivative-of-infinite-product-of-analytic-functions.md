# 

Source: https://proofwiki.org/wiki/Logarithmic_Derivative_of_Infinite_Product_of_Analytic_Functions


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Let $D \subseteq \C$ be open.
Let $\sequence {f_n}$ be a sequence of analytic functions $f_n: D \to \C$.
Let none of the $f_n$ be identically zero on any open subset of $D$.
Let the product $\ds \prod_{n \mathop = 1}^\infty f_n$ converge locally uniformly to $f$.

Then:

$\ds \dfrac {f'} f = \sum_{n \mathop = 1}^\infty \frac {f_n'} {f_n}$
and the series converges locally uniformly in $D \setminus \set {z \in D : \map f z = 0}$.


Outline of Proof
Using Corollary to Logarithm of Infinite Product of Complex Functions we can write $\log f$ locally as $\ds \sum_{n \mathop = 1}^\infty \log f_n$ up to a constant and some terms.
By Derivative of Uniform Limit of Analytic Functions we can differentiate term-wise.


Proof

The validity of the material on this page is questionable.In particular: this needs a stronger version of Corollary to Logarithm of Infinite Product of Complex Functions, where the logarithms are analyticYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by resolving the issues.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Questionable}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Note that by Infinite Product of Analytic Functions is Analytic, $f$ is analytic.
Let $z_0 \in D$ with $\map f {z_0} \ne 0$.
By the Corollary to Logarithm of Infinite Product of Complex Functions, there exist $n_0 \in \N$, $k \in \Z$ and a open neighborhood $U$ of $z_0$ such that:

$\map {f_n} z \ne 0$ for $n \ge n_0$ and $z \in U$
The series $\ds \sum_{n \mathop = n_0}^\infty \log f_n$ converges uniformly on $U$ to $\log g + 2 k \pi i$, where $g = \ds \prod_{n \mathop = n_0}^\infty f_n$.
We have, for $z \in U$:














\(\ds \frac {f'} f\)

\(=\)







\(\ds \frac {\paren {f_1 \cdots f_{n_0 - 1} \cdot g}'} {f_1 \cdots f_{n_0 - 1} \cdot g}\)




















\(\ds \)

\(=\)







\(\ds \frac {f_1'} {f_1} + \cdots + \frac {f_{n_0 - 1}'} {f_{n_0 - 1} } + \frac {g'} g\)





Logarithmic Derivative of Product of Analytic Functions



and














\(\ds \frac {g'} g\)

\(=\)







\(\ds \paren {\log g}'\)





Logarithmic Derivative is Derivative of Logarithm














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = n_0}^\infty \paren {\log f_n}' - \paren {2 k \pi i}'\)





Derivative of Uniform Limit of Analytic Functions














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = n_0}^\infty \frac {f_n'} {f_n}\)





Logarithmic Derivative is Derivative of Logarithm



and the series converges locally uniformly on $U$.
Thus $\dfrac {f'} f = \ds \sum_{n \mathop = 1}^\infty \frac {f_n'} {f_n}$ converges locally uniformly on $U \setminus \set {z \in U : \map f z = 0}$.
$\blacksquare$


Also see
Derivative of Infinite Product of Analytic Functions




