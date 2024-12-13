# 

Source: https://proofwiki.org/wiki/Leibniz%27s_Rule/Real_Valued_Functions



Theorem
Let $f, g : \R^n \to \R$ be real valued functions, $k$ times differentiable on some open set $U \subseteq \R^n$.
Let $\alpha = \tuple {\alpha_1, \ldots, \alpha_n}$ be a multiindex indexed by $\set {1, \ldots, n}$ with $\size \alpha \le k$.
For $i \in \set {1, \ldots, n}$, let $\partial_i$ denote the partial derivative:

$\partial_i = \dfrac {\partial} {\partial {x_i} }$
Let $\partial^\alpha$ denote the partial differential operator:

$\partial^\alpha = \partial_1^{\alpha_1} \partial_2^{\alpha_2} \cdots \partial_n^{\alpha_n}$

Then as functions on $U$, we have:

$\ds \map {\partial^\alpha} {f g} = \sum_{\beta \mathop \le \alpha} \binom \alpha \beta \paren {\partial^\beta f} \paren {\partial^{\alpha - \beta} g}$


Proof
First, inserting the definitions, the statement of the theorem reads:

$\ds \map {\partial_1^{\alpha_1} \partial_2^{\alpha_2} \cdots \partial_n^{\alpha_n} } {f g} = \sum_{\beta_1 = 0}^{\alpha_1} \cdots \sum_{\beta_n \mathop = 0}^{\alpha_n} \binom {\alpha_1} {\beta_1} \cdots \binom {\alpha_n} {\beta_n} \paren {\partial_1^{\beta_1} \cdots \partial_n^{\beta_n} f} \paren {\partial_1^{\alpha_1 - \beta_1} \cdots \partial_n^{\alpha_n - \beta_n} g}$
We prove this by induction over $n \ge 1$.


Basis for the Induction
If $n = 1$, the result is a simple restatement of Leibniz's Rule in One Variable:

$\ds \paren {\map f x \map g x}^{\paren n} = \sum_{k \mathop = 0}^n \binom n k \map {f^{\paren k} } x \map {g^{\paren {n - k} } } x$
This is the basis for the induction.


Induction Step
Suppose now that the result is true for functions of $n - 1$ variables.
In particular, we suppose that:

$\ds \map {\partial_2^{\alpha_2} \cdots \partial_n^{\alpha_n} } {f g} = \sum_{\beta_2 \mathop = 0}^{\alpha_2} \cdots \sum_{\beta_n \mathop = 0}^{\alpha_n} \binom {\alpha_2} {\beta_2} \cdots \binom {\alpha_n} {\beta_n} \paren {\partial_2^{\beta_2} \cdots \partial_n^{\beta_n} f} \paren {\partial_2^{\alpha_2 - \beta_2} \cdots \partial_n^{\alpha_n - \beta_n} g}$
Now let us apply $\partial_1^{\alpha_1}$.
Using the linearity of derivatives:

$\ds \map {\partial_1^{\alpha_1} \partial_2^{\alpha_2} \cdots \partial_n^{\alpha_n} } {f g} = \sum_{\beta_2 \mathop = 0}^{\alpha_2} \cdots \sum_{\beta_n \mathop = 0}^{\alpha_n} \binom {\alpha_2} {\beta_2} \cdots \binom {\alpha_n} {\beta_n} \partial_1^{\alpha_1} \paren {\paren {\partial_2^{\beta_2} \cdots \partial_n^{\beta_n} f} \paren {\partial_2^{\alpha_2 - \beta_2} \cdots \partial_n^{\alpha_n - \beta_n} g} }$
Applying Leibniz's Rule in One Variable we have:

$\ds \map {\partial_1^{\alpha_1} \partial_2^{\alpha_2} \cdots \partial_n^{\alpha_n} } {f g} = \sum_{\beta_2 \mathop = 0}^{\alpha_2} \cdots \sum_{\beta_n \mathop = 0}^{\alpha_n} \binom {\alpha_2} {\beta_2} \cdots \binom {\alpha_n} {\beta_n} \sum_{\beta_1 \mathop = 0}^{\alpha_1} \binom {\alpha_1} {\beta_1} \paren {\partial_1^{\beta_1} \partial_2^{\beta_2} \cdots \partial_n^{\beta_n} f} \paren {\partial_1^{\alpha_1 - \beta_1} \partial_2^{\alpha_2 - \beta_2} \cdots \partial_n^{\alpha_n - \beta_n} g}$
Now, all the sums are finite, thus trivially absolutely convergent.
By Manipulation of Absolutely Convergent Series and Summation is Linear we can move the inner sum to the far left, giving:

$\ds \map {\partial_1^{\alpha_1} \partial_2^{\alpha_2} \cdots \partial_n^{\alpha_n} } {f g} = \sum_{\beta_1 \mathop = 0}^{\alpha_1} \cdots \sum_{\beta_n \mathop = 0}^{\alpha_n} \binom {\alpha_1} {\beta_1} \cdots \binom {\alpha_n} {\beta_n} \paren {\partial_1^{\beta_1} \cdots \partial_n^{\beta_n} f} \paren {\partial_1^{\alpha_1 - \beta_1} \cdots \partial_n^{\alpha_n - \beta_n} g}$
The result now follows by the Principle of Mathematical Induction.
$\blacksquare$


Also known as
Leibniz's Rule is also known as Leibniz's Theorem or the Leibniz Theorem.


Source of Name
This entry was named for Gottfried Wilhelm von Leibniz.


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 6.4$: A glimpse of distribution theory. Multiplication by $C^\infty$ functions




