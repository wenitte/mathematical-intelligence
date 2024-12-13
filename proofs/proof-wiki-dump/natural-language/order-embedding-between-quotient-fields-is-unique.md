# 

Source: https://proofwiki.org/wiki/Order_Embedding_between_Quotient_Fields_is_Unique

Theorem
Let $\struct {R_1, +_1, \circ_1, \le_1}$ and $\struct {S, +_2, \circ_2, \le_2}$ be totally ordered integral domains.
Let $K, L$ be totally ordered fields of quotients of $\struct {R_1, +_1, \circ_1, \le_1}$ and $\struct {S, +_2, \circ_2, \le_2}$ respectively.
Let $\phi: R \to S$ be a order embedding.

Then there exists exactly one order embedding $\psi: K \to L$ extending $\phi$.
Also:

$\forall x \in R, y \in R_{\ne 0}: \map \psi {\dfrac x y} = \dfrac {\map \phi x} {\map \phi y}$

If $\phi: R \to S$ is an order isomorphism, then so is $\psi$.


Proof
By Field of Quotients is Unique, all we need to show is:

$\forall x_1, x_2 \in R, y_1, y_2 \in R_{> 0}: \dfrac {x_1} {y_1} \le \dfrac {x_2} {y_2} \iff \dfrac {\map \phi {x_1}} {\map \phi {y_1} } \le \dfrac {\map \phi {x_2} } {\map \phi {y_2} }$

Let $x_1 / y_1 \le x_2 / y_2$, where $y_1, y_2 \in R_{> 0}$.
As $y_1, y_2 \in R_{> 0}$, it follows that $0 < y_1 \circ_1 y_2$ and $0 < 1 / \paren {y_1 \circ_1 y_2}$.
We also have:

$0 < \map \phi {y_1} \circ_2 \map \phi {y_2} = \map \phi {y_1 \circ_1 y_2}$
Therefore:

$x_1 \circ_1 y_2 = \frac {x_1} {y_1} \circ_1 \paren {y_1 \circ y_2} \le \dfrac {x_2} {y_2} \circ_1 \paren {y_1 \circ_1 y_2} = x_2 \circ_1 y_1$

Conversely, let $x_1 \circ_1 y_2 \le x_2 \circ_1 y_1$.
Then:

$\dfrac {x_1} {y_1} = x_1 \circ_1 y_2 \circ_1 \paren {\dfrac 1 {y_1 \circ_1 y_2} } \le x_2 \circ_1 y_1 \circ_1 \paren {\dfrac 1 {y_1 \circ_1 y_2} } = \dfrac {x_2} {y_2}$

That is, we have:

$\dfrac {x_1} {y_1} \le \dfrac {x_2} {y_2} \iff x_1 \circ_1 y_2 \le x_2 \circ_1 y_1$

Similarly:

$\dfrac {\map \phi {x_1} } {\map \phi {y_1} } \le \dfrac {\map \phi {x_2} } {\map \phi {y_2} } \iff \map \phi {x_1} \circ_2 \map \phi {y_2} \le \map \phi {x_2} \circ_2 \map \phi {y_1}$

Now $\phi: R \to S$ is an order embedding.
Therefore:

$x_1 \circ_1 y_2 \le x_2 \circ_1 y_1 \iff \map \phi {x_1 \circ_1 y_2} \le \map \phi {x_2 \circ_1 y_1}$
The result follows.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $23$. The Field of Rational Numbers: Theorem $23.14$




