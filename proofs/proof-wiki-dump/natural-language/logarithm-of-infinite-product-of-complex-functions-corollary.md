# 

Source: https://proofwiki.org/wiki/Logarithm_of_Infinite_Product_of_Complex_Functions/Corollary


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Corollary to Logarithm of Infinite Product of Complex Functions
Let $X$ be a locally compact and locally connected metric space.
Let $\sequence {f_n}$ be a sequence of continuous mappings $f_n: X \to \C$.
Let the product $\ds \prod_{n \mathop = 1}^\infty f_n$ converge locally uniformly to $f$.
Let $x_0 \in X$.

Then there exist $n_0 \in \N$, $k \in \Z$ and a neighborhood $U$ of $x_0$ such that:

$(1): \quad \map {f_n} x \ne 0$ for $n \ge n_0$ and $x \in U$
$(2): \quad$ The series $\ds \sum_{n \mathop = n_0}^\infty \ln f_n$ converges uniformly on $U$ to $\ln g + 2 k \pi i$, where $g = \ds \prod_{n \mathop = n_0}^\infty f_n$.


Outline of Proof
We construct a neighborhood of $x_0$ on which $\ds \sum_{n \mathop = n_0}^\infty \ln f_n$ and $\ln g$ are continuous, so that $k$ is continuous and thus constant.


Proof
Let $K$ be a compact neighborhood of $x_0$.
By Tail of Uniformly Convergent Product Converges Uniformly to One, there exists $N \in \N$ such that $\ds \prod_{n \mathop = N}^\infty \map {f_n} x \notin \R^-$ for all $x \in K$.
By Factors in Uniformly Convergent Product Converge Uniformly to One, there exists $M \in \N$ such that $\size {\map {f_n} x - 1} \le \dfrac 1 2$ for $n \ge M$ and $x \in K$.
Let $n_0 = \map \max {N, M}$.
Let $g = \ds \prod_{n \mathop = n_0}^\infty f_n$.
By Logarithm of Infinite Product of Complex Functions, there exists $k: K \to \Z$ such that $\ds \sum_{n \mathop = n_0}^\infty \ln f_n = \ln g + 2 k \pi i$ uniformly on $K$.
We show that $k$ is constant on some neighborhood $U \subset K$.
By Uniform Product of Continuous Functions is Continuous and Complex Logarithm is Continuous Outside Branch, $\ln g$ is continuous on $K$.
By the Heine-Cantor Theorem, $\ln$ is uniformly continuous on $\map {\overline B} {1, \dfrac 1 2}$.
By Uniformly Continuous Function Preserves Uniform Convergence, $\ds \sum_{n \mathop = n_0}^\infty \ln f_n$ converges uniformly on $K$.


The validity of the material on this page is questionable.In particular: we're using here that partial products belong to $\map {\overline B} {1, \dfrac 1 2}$. Need to use the Cauchy criterion for uniform products hereYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by resolving the issues.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Questionable}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
By the Uniform Limit Theorem, $\ds \sum_{n \mathop = n_0}^\infty \ln f_n$ is continuous.
Because $\ln g$ and $\ds \sum_{n \mathop = n_0}^\infty \ln f_n$ are continuous, so is $k$.
Let $U \subset K$ be a connected neighborhood of $x_0$.
By Continuous Mapping from Connected to Discrete Space is Constant $k$ is constant on $U$.
$\blacksquare$





